-- Additive only. Existing Google users, sessions and bookmarks remain untouched.
CREATE TABLE IF NOT EXISTS password_credentials (
 user_id TEXT PRIMARY KEY REFERENCES users(id),
 email TEXT NOT NULL COLLATE NOCASE UNIQUE,
 salt TEXT NOT NULL,
 password_hash TEXT NOT NULL,
 scheme TEXT NOT NULL DEFAULT 'pbkdf2-sha256-hmac-v1',
 iterations INTEGER NOT NULL DEFAULT 100000,
 email_verified INTEGER NOT NULL DEFAULT 0,
 created_at INTEGER NOT NULL
);
