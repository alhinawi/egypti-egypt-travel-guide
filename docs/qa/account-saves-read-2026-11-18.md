# Protect account saves after failed initial read, 2026-11-18

A failed GET /api/saved left the account active with only a local/guest list. A bookmark click or online event could then PUT that incomplete list, replacing remote items that had never loaded. Pause bookmark readiness and guard both write paths until the account list is successfully read and shape-checked. Keep a persistent bilingual explanation and reload action. A successful reload reads and merges remote items before enabling changes. Sign-out clears the lock.

Checked typecheck/build, 71 unit/API tests, four account-read browser cases plus seven existing storage/trip checks. Mocked 503, network failure and malformed list. No PUT on online while blocked; recovery reload preserves the remote Karnak item when Menna is added. Both languages inspected at 390px, including readable reload button. All API responses for these browser scenarios are test mocks; no real account data was read or written.
