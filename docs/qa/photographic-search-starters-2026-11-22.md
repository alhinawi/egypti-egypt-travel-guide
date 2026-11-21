# Photographic search starters, 2026-11-22

## Visible outcome

The whole-guide search's empty starting screen now uses four photographic query cards instead of plain word buttons. The exact existing query strings/order remain Cairo, Aswan, متحف and إسكندرية in both languages. Each card shows the first suitable photographed place article matching that literal query, its exact name/governorate and the count of all guide results for the query. Descriptive scope distinguishes one pictured article from the complete result set, which can include governorate profiles and plans. These are starting queries, not recommendations, rankings or routes.

Selecting still calls the same input/query/all-kind/reset-limits state changes. Search results, matching, URL/history/language persistence, clear/focus behavior and all shared viewers remain unchanged. No destination link is nested in the search button. Cards are disabled before activation while images remain visible without JavaScript and existing direct-browse noscript links remain. Responsive grid: four columns over1000px, two below, consistent image tops and action baselines. Tailwind/SVG only, no new section elsewhere.

## Verification

- Build/typecheck and207unit tests pass. New unit verifies the exact four queries, every count/result set, matching eligible cover identity/suitability, per-kind totals and query URL round trips.
-22new AR/EN browser cases pass at360/390/600/601/900/1000/1001/1280: all four cards' names/counts/cover labels/alts/loaded sources, grid widths, keyboard activation, exact query/results, clear/focus,44pxtargets and no document overflow. Reload/language/save preservation/no API writes, Arabic query touch and no-JS photographs/disabled controls checked.
-54existing whole-guide search and matching-photo viewer regressions pass unchanged, including result groups, expansion, URL/history/language, no matches, source retry, zoom, keyboard, real swipe and focus restoration.
-216theme/language/viewport checks pass with minimum starter text contrast5.459955953071658 and44pxtargets. Actual AR390/EN1280starter and AR390result pixels inspected. Initial desktop buttons vertically centered images with differing text height; changed the new buttons to flex columns, then re-rendered/re-inspected aligned image tops and action baselines.

No new content/geography/access claims, sources, photos, global CSS, domains/services/plans, purchases or deletions. Shared search/viewer code changed only to replace the old starting section with the new component. Prior B218rapid combined-input caveat remains unchanged and is not claimed fixed. Normal PR/CI and exact-main deployment evidence is recorded in shipment reports.
