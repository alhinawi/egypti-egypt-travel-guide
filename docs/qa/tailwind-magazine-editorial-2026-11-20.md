# Homepage virtual-visit editorial promo, November 20, 2026

## Scope
Move the homepage virtual-visit editorial shell, photograph, stamp link, copy, coverage note and button presentation into shared Tailwind utilities. Remove 28 legacy selector branches from globals.css and editorial.css. Keep all content, URLs, media, data and account behavior unchanged.

## Checks
- 112 unit tests, TypeScript checks and production build pass.
- 70 distinct browser tests pass: 24 new editorial tests, 22 magazine-trip regressions and 20 mood-card regressions and 4 programme print-contrast regressions.
- Full computed-style comparison of the editorial subtree: 288 screen and 72 print cases, 18 themes, Arabic/English, widths 360/361/390/600/601/900/901/1280. Exact before/after equality across all 360 cases.
- New browser suite repeats the 360-case layout/color matrix and checks hover with and without reduced motion, keyboard focus and Enter navigation, CTA navigation and the unchanged coverage note.
- All frontend checks block /api/**. No live D1 or account QA.

## Preserved details
- Desktop two-column layout and mobile stacked layout, 490px/280px photograph sizing and mobile crop.
- Screen 14px shell corners and 12px stamp corners; print 26px/22px shell corners and circular, rotated stamp.
- Logical stamp placement in both languages, blur, border, hover paper color, 3px keyboard outline and 4px offset. Reduced-motion transition stays disabled.
- Arabic print heading stays 17pt rather than inheriting the screen heading size. Paragraph line height stays 2; note top margin stays 14px.
- Existing photo-versus-tour coverage explanation is unchanged. No new claims or visible captions added.

## Visual inspection
Inspected actual rendered Arabic and English mobile (390px) and desktop (1280px) screenshots. Temple photograph loaded, stamp and copy are readable, CTA fits, logical placement mirrors correctly and no overflow appears. Canonical screenshots are attached to the shipment report after deployment verification.
