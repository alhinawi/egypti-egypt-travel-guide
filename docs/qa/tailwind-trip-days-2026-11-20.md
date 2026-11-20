# Trip day layout and print text contrast, November 20, 2026

## Scope
Move shared trip day-list spacing, day-section geometry, day-number badges, responsive stop grids and print layout to Tailwind. Remove 28 legacy selector branches from globals/editorial styles. Programme content, stop cards and day-part components stay unchanged.

## Print correction
Visual inspection found an existing issue: dark-theme day headings and day notes remained pale mint/blue on white print pages. Print day text now uses black. Overnight labels retain their existing green, day-number badges keep their existing print styling, and stop-card/day-part content is unchanged.

## Verification
- 120 unit tests, TypeScript checks and production build pass.
- 48 new browser matrix tests cover a two-day outline, four-day programme and ten-day Nile programme, Arabic/English, eight widths and all 18 themes.
- Two additional browser tests check every itinerary's day heading/note prints black across all 18 themes in Arabic/English.
- 1,080 computed-style cases: 864 screen cases exactly unchanged; 216 print cases preserve all captured properties except the explicit black day-text correction and inherited currentColor on zero-width borders/unused outlines. Widths 360/361/390/600/601/900/901/1280. Print checked at 390 and 1280.
- The committed fixture stores the original baseline with deduplicated element records. Tests state the print-only correction explicitly rather than replacing the baseline with post-change output.
- 35 existing browser regressions pass: trip print, programme content/day-parts/overview/sources, save labels and all-programme print stop-card contrast. One full-page screenshot hit a browser capture error in the combined run; its unchanged test passed on a single-worker rerun.
- Screen and print pixels inspected, including the corrected black headings/notes on white and unchanged screen day sections.
- All live frontend checks block /api/**. No extra D1/account checks.

## Preserved details
- Screen sections retain 32px block margins, 30px desktop padding, 20px/16px mobile padding, themed paper/line/accent colors and 14px corner radius.
- Headings retain 24px desktop/23px mobile sizes, language-specific line heights and 18px print size.
- Print retains 18px list top margin, 15px day bottom margin, 8px/0 day padding, no section border, visible stop lists and hidden stop photos.
- Day-number badges retain themed screen styling and the original green print colors, 6px print bottom margin and avoid-break behavior.
