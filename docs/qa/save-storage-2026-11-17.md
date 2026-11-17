# Saved-item storage failures, 2026-11-17

Reproduced guest saving with browser storage writes denied: the bookmark changed, but reload lost the item without any warning. Add a persistent alert when a saved-item write fails, explaining that unsynced changes may be lost on navigation or reload. Keep the in-memory choice so a later successful write can store it. Clear the alert only after a successful saved-item write. Do not silently change account sync behavior or perform live account writes in testing.

Remove device-storage promises from two sync-failure messages. Place-card bookmark names now describe removing the selected place instead of always announcing Save.

Validation: typecheck/build, 70 unit/API tests; five mocked browser checks cover blocked storage in both languages, normal persistence/removal and action names, reload loss after denial, and recovery after a successful write. Inspected mobile alert screenshots for both languages. No new server API or third-party transmission added.
