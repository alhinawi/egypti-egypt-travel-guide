# History collections in the photo atlas, 21 November 2026

Two image-led collections connect the atlas to existing documented era tags: Ancient Egypt and Islamic periods. Each card shows its exact suitable-photo total and toggles an era filter. Era combines with the other filters, stays in the URL and recovers through reload/history. The active collection has a clear control and a link to the full era reading page. Reset clears every filter. Empty intersections retain the existing recovery path. No new historical claims, invented dates, sources, photos, account writes or storage. Counts are photograph coverage, not complete era coverage. Existing documented article tags are the source of membership. All new styling uses Tailwind.

## Verification
Build, typecheck and 155 unit tests pass. New unit coverage compares exact era/area/category intersections against existing tags and tests combined URL recovery and invalid-era rejection. 70 browser cases pass, including 16 new era cases: six widths, AR/EN, exact membership/counts/links, keyboard/focus/touch, combined filters, reload/history/reset, empty intersections and print. Existing region, atlas, router and viewer-strip regressions included.

216 AR/EN, 18-theme and six-width checks pass: no overflow, responsive one/two-column layout, 44px controls, minimum measured text contrast 5.4599:1. Local AR390 and EN1280 selected collection pixels inspected. Clearing an era returns keyboard focus to its collection card. Final production checks pending.
