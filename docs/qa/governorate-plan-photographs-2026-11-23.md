# Governorate plan photograph inspection

## Scope

Governorate-to-plan connections retain existing membership, counts, day details, story links, mosaic choices/order and whole-plan exits. Optional inspection includes all distinct suitable, non-contextual photographs of matching places in this governorate within that plan, in published first-mentioned order. It does not include other governorates in the same plan. No route or access promise. The unchanged three-photo preview can rotate its opening image to avoid repeated covers across cards; each numbered enlarge button opens that exact preview photograph at its true full-collection index. Buttons are spatially placed over their own image, including three-image mosaics.

The whole-group button includes photographs beyond the preview, such as five in Luxor's three-day plan. Closing restores the exact opener; existing day details retain their state. No viewing URL/save writes, catalogue/media/API/account/storage/global CSS/shared-viewer changes. Tailwind additions only. No-JavaScript users retain plan links with inspection disabled.

## Proof

- Build, TypeScript, 296 unit tests pass.
- 20 new browser cases: exhaustive AR/EN all 27 governorates/every matching plan, complete exact photo/name/alt/article/count/order, every preview photo's true full index and own-image button bounds/opener, empty coverage; six widths per language with keyboard/Home/thumb/zoom/focus/details-state/print/page fit; image failure/retry/no writes/saved-state; separate mobile swipe and fresh-open article exit; no-JavaScript links.
- 48 unchanged retained cases: 26 original governorate-plan connections and 22 history-continuity photograph checks.
- 864 Luxor matrix checks: eight widths, two languages, 18 themes, preview/viewer/zoom. Contrast at least 6.07, targets 46px, focus 3px, no page overflow. Scrollable viewer thumbnails excluded only from page-bound target check.
- Initial test-harness errors corrected against the catalogue: Giza has two matching photographs, not four; its original photograph URL has no derivative suffix, so retry interception uses photoPath rather than an assumed filename.
- Initial visual inspection found clustered numbered controls could be mistaken for one photograph; changed to grid-aligned controls over their exact own photograph, then reran exhaustive/spatial, matrix, retained and visual checks.

## Existing input caveat

Immediate synthetic swipe-to-article tap remains unpassed, reproducing on baseline and plain HTML without application JavaScript. Physical-device impact is unverified. A one-second diagnostic pause is evidence only, not a production change. Passing touch assertions separate swipe advancement from fresh-open article navigation, not the immediate chained path.

## Release gate

Normal merge after actual green PR checks, exact-main build/type/unit/new/retained/matrix, successful clean exact-main production, both-origin replay and asset/HTML/photo parity, actual canonical pixels, credential/server cleanup before completion.
