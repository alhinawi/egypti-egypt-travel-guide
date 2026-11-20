# Homepage search form and filters, November 20, 2026

## Scope
Move the homepage search wrapper, form, icon, label/input/button and quick-filter tags to shared Tailwind utilities. Remove 30 legacy selector branches plus the search-label selector from the Arabic typography rule. No content, navigation target, data or API changes.

## Verification
- 114 unit tests, TypeScript checks and production build pass.
- 114 distinct browser tests: 26 new search tests, 22 shared-homepage-chrome, 24 editorial, 22 magazine-trip and 20 mood-card regressions.
- Exact computed-style equality across the complete search subtree: 360 cases, 288 screen and 72 print, 18 themes, Arabic/English, widths 360/361/390/600/601/900/901/1280. Print checked at 390 and 1280.
- New browser suite repeats the matrix and tests keyboard/button GET submissions in Arabic and English plus all six language/category link combinations. Query values retain their original text.
- Actual mobile and desktop Arabic/English pixels inspected: search label/input, submit arrow, wrapping tags and neighboring photographic destination cards.
- All frontend browser checks block /api/**. No live D1/account QA.

## Preserved details
- Screen/print wrapper dimensions, different screen/print mobile margins and radii, shadow and responsive icon visibility.
- Arabic zero label tracking, inherited input font family and line height, screen 16px/12px input sizes and original print inheritance.
- Input border reset and outline behavior, 52px/44px submit target and screen/print button colors.
- Quick filters retain underline, minimum target height, responsive font sizes, padding and wrapping.
