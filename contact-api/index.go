package main

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"net"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"

	"github.com/google/uuid"
	"github.com/ydb-platform/ydb-go-sdk/v3"
	"github.com/ydb-platform/ydb-go-sdk/v3/table"
	"github.com/ydb-platform/ydb-go-sdk/v3/table/types"
	yc "github.com/ydb-platform/ydb-go-yc"
)

type ContactRequest struct {
	Name        string `json:"name"`
	ContactInfo string `json:"contactInfo"`
	WebsiteType string `json:"websiteType"`
	Message     string `json:"message"`
}

type ContactResponse struct {
	OK bool   `json:"ok"`
	ID string `json:"id,omitempty"`
}

var (
	dbOnce sync.Once
	dbConn *ydb.Driver
	dbErr  error
)

func Handler(w http.ResponseWriter, r *http.Request) {
	setCORSHeaders(w, r)

	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	if r.Method != http.MethodPost {
		writeJSONError(w, http.StatusMethodNotAllowed, "method_not_allowed")
		return
	}

	var req ContactRequest
	if err := json.NewDecoder(http.MaxBytesReader(w, r.Body, 64*1024)).Decode(&req); err != nil {
		writeJSONError(w, http.StatusBadRequest, "invalid_json")
		return
	}

	req.Name = strings.TrimSpace(req.Name)
	req.ContactInfo = strings.TrimSpace(req.ContactInfo)
	req.WebsiteType = strings.TrimSpace(req.WebsiteType)
	req.Message = strings.TrimSpace(req.Message)

	if req.ContactInfo == "" {
		writeJSONError(w, http.StatusBadRequest, "contact_info_required")
		return
	}

	ctx, cancel := context.WithTimeout(r.Context(), 10*time.Second)
	defer cancel()

	db, err := getYDB(ctx)
	if err != nil {
		log.Printf("ydb connection error: %v", err)
		writeJSONError(w, http.StatusInternalServerError, "database_connection_error")
		return
	}

	id := uuid.NewString()
	createdAt := time.Now().UTC()
	userAgent := r.UserAgent()
	ip := clientIP(r)

	err = db.Table().Do(ctx, func(ctx context.Context, s table.Session) error {
		_, res, err := s.Execute(ctx, table.DefaultTxControl(), `
			DECLARE $id AS Utf8;
			DECLARE $created_at AS Timestamp;
			DECLARE $name AS Utf8;
			DECLARE $contact_info AS Utf8;
			DECLARE $website_type AS Utf8;
			DECLARE $message AS Utf8;
			DECLARE $user_agent AS Utf8;
			DECLARE $ip AS Utf8;

			UPSERT INTO contact_requests (
				id,
				created_at,
				name,
				contact_info,
				website_type,
				message,
				user_agent,
				ip
			) VALUES (
				$id,
				$created_at,
				$name,
				$contact_info,
				$website_type,
				$message,
				$user_agent,
				$ip
			);
		`, table.NewQueryParameters(
			table.ValueParam("$id", types.TextValue(id)),
			table.ValueParam("$created_at", types.TimestampValueFromTime(createdAt)),
			table.ValueParam("$name", types.TextValue(req.Name)),
			table.ValueParam("$contact_info", types.TextValue(req.ContactInfo)),
			table.ValueParam("$website_type", types.TextValue(req.WebsiteType)),
			table.ValueParam("$message", types.TextValue(req.Message)),
			table.ValueParam("$user_agent", types.TextValue(userAgent)),
			table.ValueParam("$ip", types.TextValue(ip)),
		))
		if err != nil {
			return err
		}
		return res.Close()
	})

	if err != nil {
		log.Printf("insert error: %v", err)
		writeJSONError(w, http.StatusInternalServerError, "database_insert_error")
		return
	}

	if err := sendTelegramNotification(ctx, id, req, createdAt, ip); err != nil {
		log.Printf("telegram notification error: %v", err)
	}

	writeJSON(w, http.StatusOK, ContactResponse{
		OK: true,
		ID: id,
	})
}

func getYDB(ctx context.Context) (*ydb.Driver, error) {
	dbOnce.Do(func() {
		endpoint := strings.TrimSpace(os.Getenv("YDB_ENDPOINT"))
		databasePath := strings.TrimSpace(os.Getenv("YDB_DATABASE_PATH"))

		if endpoint == "" {
			dbErr = errors.New("YDB_ENDPOINT is empty")
			return
		}

		if databasePath == "" {
			dbErr = errors.New("YDB_DATABASE_PATH is empty")
			return
		}

		dbConn, dbErr = ydb.Open(
			ctx,
			endpoint,
			ydb.WithDatabase(databasePath),
			yc.WithMetadataCredentials(),
		)
	})

	return dbConn, dbErr
}

func setCORSHeaders(w http.ResponseWriter, r *http.Request) {
	allowedOrigin := strings.TrimSpace(os.Getenv("ALLOWED_ORIGIN"))
	origin := r.Header.Get("Origin")

	if allowedOrigin == "" || allowedOrigin == "*" {
		if origin != "" {
			w.Header().Set("Access-Control-Allow-Origin", origin)
		} else {
			w.Header().Set("Access-Control-Allow-Origin", "*")
		}
	} else {
		w.Header().Set("Access-Control-Allow-Origin", allowedOrigin)
	}

	w.Header().Add("Vary", "Origin")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Accept, Origin")
	w.Header().Set("Access-Control-Max-Age", "600")
}

func writeJSON(w http.ResponseWriter, status int, payload any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)

	if err := json.NewEncoder(w).Encode(payload); err != nil {
		log.Printf("json encode error: %v", err)
	}
}

func writeJSONError(w http.ResponseWriter, status int, code string) {
	writeJSON(w, status, map[string]any{
		"ok":    false,
		"error": code,
	})
}

func clientIP(r *http.Request) string {
	forwardedFor := r.Header.Get("X-Forwarded-For")
	if forwardedFor != "" {
		parts := strings.Split(forwardedFor, ",")
		return strings.TrimSpace(parts[0])
	}

	realIP := r.Header.Get("X-Real-IP")
	if realIP != "" {
		return strings.TrimSpace(realIP)
	}

	host, _, err := net.SplitHostPort(r.RemoteAddr)
	if err == nil {
		return host
	}

	return r.RemoteAddr
}

type TelegramMessage struct {
	ChatID    string `json:"chat_id"`
	Text      string `json:"text"`
	ParseMode string `json:"parse_mode,omitempty"`
}

func sendTelegramNotification(ctx context.Context, requestID string, req ContactRequest, createdAt time.Time, ip string) error {
	botToken := strings.TrimSpace(os.Getenv("TELEGRAM_BOT_TOKEN"))
	chatID := strings.TrimSpace(os.Getenv("TELEGRAM_CHAT_ID"))

	if botToken == "" {
		return errors.New("TELEGRAM_BOT_TOKEN is empty")
	}

	if chatID == "" {
		return errors.New("TELEGRAM_CHAT_ID is empty")
	}

	text := fmt.Sprintf(
		"<b>Новая заявка с сайта</b>\n\n"+
			"<b>ID:</b> %s\n"+
			"<b>Время:</b> %s\n"+
			"<b>Тип сайта:</b> %s\n"+
			"<b>Имя:</b> %s\n"+
			"<b>Контакт:</b> %s\n"+
			"<b>Сообщение:</b> %s\n"+
			"<b>IP:</b> %s",
		escapeTelegramHTML(requestID),
		escapeTelegramHTML(createdAt.Format("2006-01-02 15:04:05 UTC")),
		escapeTelegramHTML(req.WebsiteType),
		escapeTelegramHTML(req.Name),
		escapeTelegramHTML(req.ContactInfo),
		escapeTelegramHTML(req.Message),
		escapeTelegramHTML(ip),
	)

	payload := TelegramMessage{
		ChatID:    chatID,
		Text:      text,
		ParseMode: "HTML",
	}

	body, err := json.Marshal(payload)
	if err != nil {
		return err
	}

	requestURL := "https://api.telegram.org/bot" + botToken + "/sendMessage"

	httpReq, err := http.NewRequestWithContext(ctx, http.MethodPost, requestURL, bytes.NewReader(body))
	if err != nil {
		return err
	}

	httpReq.Header.Set("Content-Type", "application/json")

	resp, err := http.DefaultClient.Do(httpReq)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	respBody, _ := io.ReadAll(resp.Body)

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		return fmt.Errorf("telegram sendMessage failed with status %s: %s", resp.Status, string(respBody))
	}

	return nil
}

func escapeTelegramHTML(value string) string {
	value = strings.ReplaceAll(value, "&", "&amp;")
	value = strings.ReplaceAll(value, "<", "&lt;")
	value = strings.ReplaceAll(value, ">", "&gt;")
	return value
}
