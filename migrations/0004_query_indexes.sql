-- Additive query indexes only. Existing primary/unique indexes and session expiry are retained.
-- Password signup checks users by lower(email), rather than the stored case-sensitive value.
CREATE INDEX IF NOT EXISTS idx_users_email_lower ON users(lower(email));
-- Admin overview: new-user range count and latest-user ordering.
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);
-- Saved-items listing: filter one user and return newest saves without a temporary sort.
CREATE INDEX IF NOT EXISTS idx_saved_items_user_created_at ON saved_items(user_id, created_at DESC);
-- Admin top-saved aggregation: group by item_id using an ordered covering index.
CREATE INDEX IF NOT EXISTS idx_saved_items_item_id ON saved_items(item_id);
-- Auth cleanup: locate expired rate-limit buckets without scanning every active bucket.
CREATE INDEX IF NOT EXISTS idx_rate_limits_expiry ON rate_limits(expires_at);
