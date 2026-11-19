# Standalone trip-list card Tailwind migration

November 19, 2026. Presentation refactor only. No itinerary, copy, source, URL, price, booking or API changes.

- New `trip-card-styles.ts` owns standalone list/card/photo/title/description/day-tag utilities and card-specific save-button spacing and responsive sizes.
- Removes 46 legacy selector branches across global, editorial, theme and typography CSS. Theme generator updated at its source so regeneration cannot restore the migrated selector.
- Keeps all nine itinerary cards and their original link, photo, save/remove names, day count and order. Magazine-home cards and shared SaveButton defaults remain separate.
- Keeps mobile 215px/desktop 220px photos, grid columns, logical start/end spacing, 320/360/361px save/tag breakpoints, hidden sequence numbers and mobile location eyebrow.
- Arabic headings stay 26px with 1.65 line height and 10px block margins, descriptions 14px/2. English mobile titles stay 15px/1.8, descriptions 10px/1.9. Existing save target sizes preserved, not enlarged in this refactor.
- Screen radius/shadow and different print radius preserved. Print save buttons remain hidden. Dark-theme print text keeps the old muted token, light-theme print text keeps its old fixed color. This is not a print redesign.

## Verification

- 102 unit tests, typecheck, static and API builds pass.
- 18 browser tests pass: 14 new AR/EN card cases, existing save labels through list/detail/saved, all-travel-card loaded photo audit and detailed-program route checks.
- Exact 70 screen, 20 print and 14 saved-state content/computed-style comparisons across AR/EN, 320/360/361/390/600/601/1280px, Ivory/Night/Sand/Nile/Midnight. All nine cards and every descendant included.
- API requests blocked or mocked for front-end QA. No live account/D1 work.
- Actual mobile AR/EN and desktop pixels inspected, plus smallest-width checks and saved-state behavior. Existing photographic assets and their crop/quality preserved, no new photography or rights audit.
