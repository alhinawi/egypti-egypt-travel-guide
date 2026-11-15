-- Rollback for migrations/0002_site_settings.sql. The site treats a missing table as "demo content enabled".
DROP TABLE IF EXISTS site_settings;
