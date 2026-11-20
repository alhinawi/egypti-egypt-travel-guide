# Trip photographic hero layout, November 20, 2026

## Scope
Move trip-detail photographic hero shell, photo sizing, gradient shade and copy positioning to Tailwind. Remove 10 legacy selector branches. Existing typography, text, save action, image sources, theme colors and print content remain unchanged.

## Verification
- TypeScript check, production build and 121 unit tests pass.
- 48 new browser tests cover three trip routes, Arabic/English, eight widths and all 18 themes.
- 1,080 full hero-subtree computed-style cases match the original baseline exactly, including the gradient pseudo-element: 864 screen and 216 print cases. Widths 360/361/390/600/601/900/901/1280; print at 390 and 1280.
- The committed original-baseline fixture deduplicates element records without altering expected styles.
- 152 existing browser regressions pass: trip-day layout, detail shells, page headings, trip print and save labels.
- Mobile and desktop screen pixels inspected in Arabic/English: loaded photography, readable white title and save control, unchanged gradient and placement.
- Print pixels inspected separately in Arabic/English. The hero photo and shade stay hidden, with black text on white and unchanged heading/summary layout.
- Frontend checks block /api/**. No extra D1/account requests.

## Preserved details
- Desktop hero minimum height 540px, mobile 510px; desktop padding 46px and mobile 25px/20px.
- Original corner radii, isolation, photo cover sizing and shade stacking stay unchanged.
- Screen copy keeps its 850px maximum width; print does not inherit that screen-only limit.
