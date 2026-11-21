# Governorate profile photographic mosaic, 2026-11-21

## Visible outcome

The 27 published governorate profiles now open with an interactive photographic composition instead of a passive hero image. Each uses only its own existing sourced hero and detail-photo IDs, in that order. One photograph stays full-width; two photographs use a main/secondary composition; three photographs use a large hero with two smaller scenes. On small screens the hero stays full-width and the secondary pair sits below it. Any visible tile opens the full profile collection at that exact photograph.

The existing PlaceGallery supplies the native full-screen dialog, fit/2x view, keyboard arrows/Home/End, thumbnail filmstrip, touch navigation, image retry and native close/focus return. The only shared gallery addition is optional image-trigger rendering, using the initial photograph instead of a text-only trigger. Existing text triggers, place covers, strips and full-screen interaction logic remain unchanged. Gallery source selection is in `governorateGallery`, with duplicate-file and missing-key guards and no unrelated place-photo fallback.

The lower sourced scene section remains intact, including its exact detail-only collection and print output. The opening keeps a static hero for print. Before JavaScript activation, photographs remain visible but their enlargement controls are disabled, rather than pretending to work. The opening text says selected scenes are not coverage of the whole governorate or confirmation of access. No caption/attribution overlay is added to the imagery; existing credits retain all provenance. No content claims, source metadata or dates changed.

## Verification

- Build/typecheck and199unit tests pass. Two new units check all27profile source sets/order/existing assets, one/two/three-image shapes, exact object provenance, unknown IDs, no borrowed covers and stable membership.
-18new AR/EN browser cases pass: six viewport widths360/390/600/601/900/1280; opening all3tiles at their exact full-size images, Home/End/AR/ENarrows, Escape/focus/scroll restoration; all27profiles in both languages; retained lower scene sets; one/two-image collections; no-JS images/disabled controls; print fallback; saved data unchanged/no API writes; touch second-photo opening, failure/retry, zoom and close.
-124related browser cases pass:50profile layout/scenes/home-text-trigger/retry;36photo collections/current-reading chapter;38all27profiles/place gallery/access/zoom/filmstrip. Old tests now scope open lower-scene dialog controls instead of matching every closed mosaic dialog, and profile-hero checks target the visible lead image with its new explicit height. No expected source or interaction assertion was removed.
-648language/viewport/theme checks pass across representative one/two/three-photo profiles, minimum label/hint contrast5.459955953071658, no page overflow and photograph triggers at least44px.
- Actual AR390andEN1280opening mosaic and full-screen scene pixels inspected. Checked photo crop, tile gaps, control placement, reading order, type and navy/mint appearance.

## Test corrections and existing caveat

The new retry test initially used the atlas retry label, but PlaceGallery uses `Retry photo` and its corresponding Arabic label. Corrected the selector to the existing label. Lower-scene touch regression initially matched hidden mosaic dialogs too; scoped it to the original lower-scene gallery. Neither required a product fix.

The pre-existing rapid synthetic swipe-then-thumbnail input caveat from B218 remains documented in `search-place-photo-viewer-2026-11-21.md`. This change does not alter gesture/zoom/dialog-event logic or claim to fix that sequence. Physical-device behavior remains unverified. No arbitrary touch delay was added.

Tailwind utilities and SVG only on the touched surface. No new CSS, sources, services, domains, paid plans, purchases or deletions. Normal PR, CI, exact-main production and canonical checks are recorded in shipment reports.
