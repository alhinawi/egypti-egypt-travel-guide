# Article-end photographic rail navigation, 2026-11-22

## Visible outcome

The existing same-governorate reading rail now has previous/next controls and a fully-visible-card range, so offscreen articles are discoverable without guessing to swipe. Each photographic card has an explicit story/source action, aligned action baseline and responsive source sizes. The exact six-or-fewer choices, ranking, same-governorate scope and direct article/profile links remain unchanged. No new section or viewer. Native horizontal scrolling and keyboard focus reveal remain.

Controls measure actual fully visible card bounds instead of assuming scrollLeft direction, supporting RTL and LTR. ResizeObserver and passive scroll updates keep range/disabled edges current. Button scrolling uses smooth motion unless reduced motion is requested. Disabled pre-activation controls and article links remain without JavaScript. Card snap alignment is now explicit. No auto-rotation, focus theft or URL/storage changes.

## Verification

- Build/typecheck and207unit tests pass; original onward selection helper/tests unchanged.
-24new browser cases pass: AR/EN at360/390/600/601/900/1000/1001/1280, repeated next/previous through every edge, exact article links/counts, loaded image sources, keyboard focus/navigation, motion, resize, touch controls, no-JS links, one-card rail and no overflow. URL/query/hash and saved storage retained, no API writes.
-32unchanged onward/history-continuity browser regressions pass, covering direct touch links, every geographic choice, reference-only exclusion and print hiding.
-216theme/language/viewport checks pass, minimum text contrast5.459955953071658 and44pxtargets. Actual local AR390initial/next and EN1280pixels inspected.
- Initial new repeated-click test read enabled state before the preceding scroll event settled and waited on the now-disabled button. The test now waits for each range update before continuing. No product change was made to mask it.

No new photos, sources, geographic/access claims, global CSS, domains/services/plans, spending or deletion. Shared viewers and all selection/data helpers unchanged. Previous B218rapid combined-input caveat is unrelated and remains unchanged. Normal PR/CI and exact-main deployment evidence is in shipment reports.
