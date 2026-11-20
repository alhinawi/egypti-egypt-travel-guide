# Destination-detail photographic hero, November 20, 2026

## Scope
Move the shared destination-detail hero, image sizing, copy positioning and kicker/title sizing to Tailwind. Remove 13 legacy selector branches. No text, navigation, media-source or API changes.

## Verification
- 118 unit tests, TypeScript checks and production build pass.
- 48 new browser matrix tests cover Cairo, Alexandria and Aswan, Arabic/English, eight widths and all 18 themes.
- Exact computed-style equality across the complete hero subtree: 1,080 cases, 864 screen and 216 print. Widths 360/361/390/600/601/900/901/1280. Print checked at 390 and 1280.
- Mobile and desktop Arabic/English pixels inspected: loaded photography, readable kicker/title and positioning above breadcrumbs and place lists.
- All frontend browser checks block /api/**. No extra D1/account checks in this refactor.

## Preserved details
- 560px desktop and 420px mobile hero heights with full-size cover photography.
- Desktop start inset based on the content width; mobile 23px inline insets and 29px bottom offset.
- Responsive kicker sizes, color, heading 7px top margin and 74px/48px screen sizes.
- Arabic print heading retains the existing 23pt typography override instead of inheriting the screen size.
