# Homepage mood-card Tailwind migration, 2026-11-20

## Scope

Shared Tailwind grid/carousel, mood-card shell/photo/copy/arrow and photo shade on the homepage. Removed 19 legacy selector branches, including this component's branches from shared image transition/hover and narrow-carousel spacing rules. No new CSS or content/media changes.

## Verification

- 110 unit tests, typecheck and static/API build pass.
- 56 distinct browser tests pass: 16 new mood-grid layout cases, four new AR/EN hover/reduced-motion cases, 32 destination-card regressions and four programme print cases.
- Exact pre/post equality for complete mood-grid subtrees in 288 screen and 72 print combinations across all 18 themes, AR/EN and 360/361/390/600/601/900/901/1280px. Text, links, typography, dimensions, spacing, layout, backgrounds and photo sizing checked.
- Committed baseline tests cover all themes, widths and both print widths. Hover tests verify 1.035 transform and 0.7s transition under normal motion; reduced motion keeps transform none and duration 0s.
- Preserved desktop/tablet grid sizes, mobile 230x245px snap cards, breakpoint spacing, 20px corners, photo gradient, logical text/arrow placement, Arabic print title size and original crops.
- Actual mobile AR/EN and desktop EN mood-card screenshots inspected with photographs loaded. Partial neighboring mobile carousel cards remain intentional and unchanged.
- Frontend checks block `/api/**`. No live D1 reads, account QA, source dates, hours, media URLs, photo captions, routes or API changed.
