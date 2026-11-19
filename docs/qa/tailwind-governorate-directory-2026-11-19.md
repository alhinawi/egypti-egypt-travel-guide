# Governorate directory cards: Tailwind

Date: 19 November 2026

## Scope

Moved the governorate directory grid, card panels, card photos, copy and directional arrows to Tailwind. Removed 17 legacy selector branches. The 27 governorate records, photos, alt text, coverage labels, published-place counts, links, search and region filters are unchanged. Shared filter styling and profile layout are outside this change.

## Verification

- 101 unit tests, typecheck and static/API builds passed.
- 64 selected browser tests passed, including 12 new directory layout tests and existing directory search/reset, governorate profile, climate and article tests.
- Exact before/after full-card computed-style, text, image/alt and link parity: 24 AR/EN full/filtered directory cases at 390/520/521/800/801/1280px, plus 4 print comparisons.
- Three desktop columns, two through800px. Photo heights190/140/120px and compact520px card copy/arrow offsets preserved.
- Diacritic/space-tolerant name search, region mismatch, result counts and clear-both/focus recovery passed.
- All 27 card photos decoded. Mobile Arabic/English and desktop English pixels inspected. No horizontal overflow or visible photo captions.
- Arabic print heading sizes retain17pt. Font readiness checked after switching print media.

All frontend verification blocks every API request. No live D1 reads, account QA, booking or production data change. Header/skip/bottom navigation hidden only during isolated screenshots; delivered navigation unchanged.
