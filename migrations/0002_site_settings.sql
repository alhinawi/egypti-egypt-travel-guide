-- Additive only: one new table, no changes to users, sessions, saved_items or rate_limits.
CREATE TABLE IF NOT EXISTS site_settings (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at INTEGER NOT NULL, updated_by TEXT);
