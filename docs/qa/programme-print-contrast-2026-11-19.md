# Programme-card print contrast, 2026-11-19

## Fix

Programme stop titles inherited the selected theme's ink on a white print sheet. Dark themes produced very pale titles. A Tailwind print-only black text utility now applies to place titles inside trip days. No new CSS. Screen appearance, other routes, typography, spacing, content, links and image behavior are unchanged.

## Verification

- 105 unit tests, typecheck and static/API build pass.
- 40 browser tests pass, including four new matrix tests checking every stop on all nine itineraries, both languages, 390/1280px and all 18 themes. Every printed stop title and description is black on white; titles retain 15px size and 4px vertical margins.
- Existing 32 place-card layout tests and four trip-print tests remain green.
- Compared 576 screen and 288 print combinations against B126, with two complete card subtrees per case, across Home/catalog/recommendations/programme. The only changes are H3 text color and its unused currentColor border in the 72 programme-print cases. All 576 screen cases are exact matches.
- Before/after Arabic mobile and English desktop print screenshots inspected. Titles are now dark and legible. Mobile screen cards inspected separately.
- Frontend checks block `/api/**`. No live D1/account QA, source changes, purchases, new domains or paid services.
