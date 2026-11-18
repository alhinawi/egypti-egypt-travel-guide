# Email and password accounts, November 18, 2026

A real AR/EN sign-in and sign-up form alongside Google. Additive D1 password_credentials table only; original Google users, bookmarks and sessions remain intact. Password accounts have separate IDs and cannot gain admin rights by claiming an admin email. Matching email addresses never auto-link Google and password identities.

Passwords are never logged or stored as plaintext. WebCrypto PBKDF2-SHA256 uses random 32-byte salts, a server-held domain-separated HMAC pepper and 100,000 iterations, plus a constant-time comparison. Version and cost are stored for future upgrades. Hosted Workers currently caps PBKDF2 at 100,000, lower than the usual 600,000 SHA-256 recommendation. The pepper protects against a database-only leak but is not a substitute for a higher-cost password KDF. Rotation of AUTH_SECRET affects password verification and needs a planned migration, not a casual secret rotation.

Runtime references checked:
- https://github.com/cloudflare/workerd/issues/1346
- https://portablejs.com/packages/password/

Requests require same-origin JSON; bounded body/password/name/email sizes; throttles by IP and normalized email. Sessions use random tokens, server-side hashed storage, Secure/HttpOnly/SameSite=Lax host-only cookies. No email is sent. Email ownership is explicitly unverified. Email verification and password recovery are deferred and stated beside the form; no fake reset link exists. Browser autocomplete, inline errors and accessible show/hide controls are included.

## Validation

82 unit/API tests passed, including real local signup, stored salted hash, wrong-password rejection without a cookie, correct sign-in, logout/revocation, saved-item persistence, duplicate signup, Google-email account-link refusal, admin spoof refusal, validation, origin blocking and throttling. Seven targeted browser tests passed, including AR/EN 390px form modes, fields, visibility toggle and inline server errors, plus tour regressions. Actual AR/EN mobile sign-in/sign-up pixels inspected. Build and typecheck passed. The interrupted full browser run was not counted as a pass; its leftover server was stopped before the targeted clean rerun.

## Rollout and rollback

Export a private D1 backup before applying 0003_password_credentials.sql. Apply the additive migration before deploying the worker. No existing table or row is removed. Rollback is the previous deployed application version; leave the added table intact to preserve new accounts. A rollback disables password entry but does not remove stored data. No destructive rollback SQL, paid plan, new service, domain or purchase.

Live account round-trip and production mobile checks follow deployment. Test identity is a clearly labeled QA-only address under the reserved .test domain, not an external recipient. No mail is sent and no production records are deleted.
