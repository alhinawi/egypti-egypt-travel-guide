# Homepage structural layout and card grids, November 20, 2026

## Scope
Move homepage content/section spacing, destination grid and mobile carousel, image hover, and place-grid sizing to shared Tailwind utilities. Remove 21 legacy selector branches and the redundant place-grid selector from a shared photo rule. No content, navigation target, data or API changes.

## Verification
- 115 unit tests, TypeScript checks and production build pass.
- 114 distinct browser tests: 22 new structural-layout tests, 26 search, 24 editorial, 22 magazine-trip and 20 mood-card regressions.
- Exact computed-style equality across the complete homepage content subtree: 360 cases, 288 screen and 72 print, 18 themes, Arabic/English, widths 360/361/390/600/601/900/901/1280. Print checked at 390 and 1280.
- New suite repeats the structural matrix, verifies normal/reduced-motion image hover, and scrolls/navigates the mobile destination carousel in both languages.
- Actual mobile and desktop Arabic/English pixels inspected: destination carousel/grid and photographic place cards.
- All frontend browser checks block /api/**. No live D1/account QA.

## Preserved details
- Different screen/print content widths, breakpoint padding and section margins.
- Three/two-column destination grids, mobile flex carousel, scroll snap, hidden scrollbar and negative inline margins.
- The mobile flex row retains its computed two-column grid-template value.
- Hover-capable, non-reduced-motion images retain the 0.7-second transform transition and 1.035 scale.
- Place-photo heights retain 250px desktop, 270px screen mobile and 240px print mobile. Existing print visibility is unchanged.
