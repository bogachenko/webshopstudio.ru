build-zip:
	go mod tidy
	sed -i '/^go /d' go.mod
	rm -f index contact-api.zip
	zip -r contact-api.zip index.go go.mod go.sum

clean:
	rm -f index contact-api.zip