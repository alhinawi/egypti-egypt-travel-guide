# Homepage hero typography and CTA, November 20, 2026

## Scope
Move active homepage hero overline, headline, paragraph and CTA presentation to shared Tailwind utilities, including Arabic typography overrides. Remove 37 legacy selector branches. No text, navigation, media-source or API changes.

## Verification
- 117 unit tests, TypeScript checks and production build pass.
- 68 distinct browser tests: 20 new hero-copy matrix/keyboard tests, 22 homepage structural-layout and 26 search regressions.
- Exact computed-style equality across the complete hero subtree: 360 cases, 288 screen and 72 print, 18 themes, Arabic/English, widths 360/361/390/600/601/900/901/1280. Print checked at 390 and 1280.
- CTA keyboard focus retains the 3px outline and 4px offset; Enter opens the correct language's explore page at mobile and desktop sizes.
- Actual mobile and desktop Arabic/English pixels inspected: loaded photography, readable overline/headline/paragraph and CTA.
- All frontend browser checks block /api/**. No live D1/account QA.

## Preserved details
- Arabic Noto Naskh heading family, 700 weight, zero tracking, responsive size/line-height and 12px mobile margins.
- English Readex heading family/600 weight, different screen/print sizes, tracking, line-height and margins.
- Arabic paragraphs retain 45ch maximum width and line-height 2; English paragraphs retain their different screen/print sizes and widths.
- Overline decorative bar, responsive tracking/size and Arabic zero tracking.
- Different screen/print CTA colors, radii, padding, margins, arrow-box size and exact box shadow.
