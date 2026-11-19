# Shared editorial containers: Tailwind

Date: 19 November 2026

## Scope

Moved shared notices, travel-caution spacing, article copy blocks and article section notes to Tailwind through a shared editorial-styles module. Removed 9 CSS blocks and the notice branch from a shared theme selector, 10 legacy selector branches in total. Updated every existing consumer, including companion unavailable fallback, essentials, virtual tours, place pages, trip pages, governorate profiles and credits.

No warning wording, review date, source link, article content, photograph, player, guide state or backend changed. Existing November 15 travel-advice review labels are preserved, not newly validated as current.

## Verification

- 101 unit tests, typecheck and static/API build passed.
- 62 selected browser tests passed, including 16 new editorial layout cases plus article-item, governorate and credits coverage.
- Exact before/after style, text and source-link parity for 80 AR/EN screen cases at 390/600/601/1280 and 28 print comparisons.
- Coverage includes all four travel-caution areas, Khan el-Khalili buying/eating/planning notes, Cairo crafts/festivals, external-media credit blocks, essentials, virtual visits and Cairo trip notices.
- Print-only trip notice spacing and type preserved separately from screen styles. Existing trip-specific backgrounds/padding retained. Mobile caution paragraph line height remains 2; desktop retains inherited typography.
- Language hydration and font readiness awaited before capture, and again after print changes.
- Inspected mobile English North Sinai warning, Arabic article note and English trip notice. Text, source link and logical-start border remain readable and unchanged. No horizontal overflow.

Frontend API requests blocked. No live D1 reads, account QA or production data changes.
