# Homepage magazine trip-card Tailwind migration, 2026-11-20

## Scope

Shared Tailwind row/carousel, magazine trip-card shell, photo, day badge, copy and save-button overrides. Removed 30 legacy selector branches from globals/editorial styles, including this component's shared hover and narrow-carousel spacing branches. No new CSS or content/media changes.

## Verification

- 111 unit tests, typecheck and static/API build pass.
- 46 distinct browser tests pass: 16 new trip-row baseline cases, four hover/reduced-motion cases, two save-toggle/style cases, 20 mood-card regressions and four programme print cases.
- Exact pre/post baseline equality for all trip-row subtrees in 288 screen and 72 print combinations across all 18 themes, AR/EN and 360/361/390/600/601/900/901/1280px.
- Preserved desktop grid versus mobile snap carousel, screen/print photo heights and card widths/corners/shadows, day badge placement, logical save-button position and selected colors, photo crop, copy spacing, Arabic line height and print sizing.
- Hover tests verify normal 1.035 image scale/0.7s transition versus reduced-motion none/0s. Save tests verify pressed-state toggling, selected accent/paper colors and restored dark screen background.
- Actual mobile AR/EN and desktop EN trip-card pixels inspected with loaded photographs. Neighboring partial carousel cards are unchanged.
- Frontend checks block `/api/**`. No live D1 reads, account QA, hours/source dates, media URLs, photo captions, routes or API changed.
