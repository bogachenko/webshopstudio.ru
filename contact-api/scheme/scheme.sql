CREATE TABLE contact_requests (
  id Utf8 NOT NULL,
  created_at Timestamp NOT NULL,
  name Utf8,
  contact_info Utf8 NOT NULL,
  website_type Utf8,
  message Utf8,
  user_agent Utf8,
  ip Utf8,
  PRIMARY KEY (id)
);