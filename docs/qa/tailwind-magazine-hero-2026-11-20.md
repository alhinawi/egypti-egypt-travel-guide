# Homepage hero shell and positioning, November 20, 2026

## Scope
Move the homepage hero shell, picture/image, shade, content positioning and location caption to shared Tailwind utilities. Existing headline, overline and CTA styles are unchanged. No text, navigation, media-source or API changes.

## Verification
- 116 unit tests, TypeScript checks and production build pass.
- 64 distinct browser tests: 16 new hero matrix tests, 22 homepage structural-layout and 26 search regressions.
- Exact computed-style equality across the complete hero subtree: 360 cases, 288 screen and 72 print, 18 themes, Arabic/English, widths 360/361/390/600/601/900/901/1280. Print checked at 390 and 1280.
- Mobile and desktop Arabic/English pixels inspected, including loaded photography, readable hero text, CTA and location label.
- All frontend browser checks block /api/**. No live D1/account QA.

## Preserved details
- Different screen/print hero heights, minimum/maximum heights and solid background colors.
- Screen/mobile and print/mobile image object positions and transform scales.
- Picture element retains its original computed object-fit and object-position, in addition to the actual image.
- Different screen/print gradient shades, content widths, top/bottom positioning and caption positions.
