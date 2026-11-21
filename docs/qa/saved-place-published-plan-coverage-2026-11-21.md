# Saved-place coverage in published plans

A collapsed, read-only saved-collection panel connects all current saved places to exact published plans/day links. Original plan order is preserved, not a ranking. Counts deduplicate saved place ids and distinguish listed places from visits. Places absent from all plans get a separate linked list and are not silently omitted. No plan matches is explicit; no saved places produces no panel. Page filters below do not alter coverage and this scope is stated.

Photo/name/article and matching-day links use existing source content. Text-only fallback applies to places without an eligible photo. No automatic save, account write, disclosure, route, transport-time or access claim. New styling uses Tailwind.

## Verification
- Build/typecheck/178 unit tests pass. Coverage is checked for every catalog place against exact published days, duplicate/invalid saves, mixed/empty input, original order and nonmutation.
- 54 focused browser cases: 18 new coverage cases, 18 saved-board and 18 saved-progress regressions.
- 56 photo-board/area/saved-plan preview/language regressions pass.
- New tests cover AR/EN six widths, exact counts/place/day links, source-photo load, keyboard/day return, touch/article navigation, removal updates, unmatched places, plans-only and empty states, signed-in private read-only operation, page filters and print.
- 216 cases across 18 themes, two languages, six widths. No overflow, interactive links/summary at least 44px high, minimum sampled text contrast 6.071833.
- Local AR390/EN1280 panel and EN1280 unmatched-list screenshots inspected. Screenshot fixtures use real catalog ids and no live account changes.

Final head/main/deployment and immutable/canonical evidence are recorded in the shipment report.
