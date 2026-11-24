# Save places from era-guide photographs

Independent named-place SaveButton controls opposite enlarge on each displayed era-guide photograph, including later sets. Existing place IDs/store and labels. Tailwind only. No eligibility/membership/order, era/history claims, story/collection/filter controls, viewer, photographs/content, API/storage or global CSS changes.

## Before merge

- Build/typecheck296unit pass.
- 26 new browser checks: AR/EN10widths320–1280 including900/901, named labels, keyboard/focus, independent46px controls, persistence through next/previous/reload, existing place/trip saves retained, all eras/all sets named save/remove, touch/noJS/print.
- 44 retained:22story/set checks and22complete-era viewer keyboard/rail/zoom/fit/retry/swipe/noJS/filter/state checks. Every suitable tagged photograph retains its original story exit and viewer position across both eras.
- 1152theme/geometry cases:18themes8widthsAR/ENboth published eras,first/lastset saved control. Contrast11.50,target46,focus3,nooverflow,separate icon targets inside images.
- Matrix fixture initially used nonexistent era slugs and timed out waiting for a save. Corrected to the actual two era keys from eraNames, not a product/expectation change.
- Actual local AR390/EN1280 and AR390decodedviewer pixels inspected: distinct save/enlarge on large and two-column images, original story controls and1/14viewer intact.

## Release gate

Actual green CI, normal merge, exact-main production/build. Main/canonical/immutable new/retained/matrix checks, HTML/CSS/JS/photo parity, unmocked decode/close/focus and actual canonical pixels.

Prior B329 twice-returned canonical English Luxor Temple500 recovered without a source/assertion change; cause unknown, not fixed. Earlier home-to-search probe and physical rapid-input viewer caveats unchanged. No speculative shared-viewer patch. No purchases, new domains, paid plans or deletions.
