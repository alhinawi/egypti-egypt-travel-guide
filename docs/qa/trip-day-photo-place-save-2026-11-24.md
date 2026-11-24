# Save published stops from visual day previews

Independent named-place saves opposite enlarge for known stops in the trip visual-day preview. Uses existing SaveButton/place IDs, Tailwind only. No published day/stop membership/order, day choice, checklist, anchors, focused-day links, viewer, photographs, content, API/storage model or global CSS change.

## Before merge

- Build/type296unit pass.
- 26 new checks: AR/EN10widths320–1280, named save/remove labels, keyboard/touch, persistence, independent controls, selected-day/viewer coexistence, existing place/trip preservation, unchanged checklist/URL, noJS/print. Save/remove every known stop in every published day of every trip.
- 112 retained:74 visual-day browser/choices and38 day viewer checks, covering all published days' exact membership/photos, anchors, day choice, failure fallback, article links, zoom/retry/swipe/focus/noJS/print and unchanged checklist/account state.
- 1,728 theme/geometry cases:18themes8widthsAR/EN,Cairo/Luxor/Alexandriafirst/laststop,saved/unsaved. Minimum target46,focus3,contrast11.50,no overflow; controls inside photographs and separate.
- Initial combined retained/matrix command hit its time limit after both EN retained groups passed. Matrix setup had picked two trips with empty first days. Replaced these matrix fixtures with published first days containing named stops, without product or expectation changes. All matrix cases then passed.
- Actual local AR390/EN1280 pixels inspected: photographs, clear independent save/enlarge controls, day headings and story controls readable.

## Release gate

Actual green CI, normal merge, clean exact-main build/production; new/retained/matrix on main/canonical/immutable; HTML/CSS/JS/photo byte parity, unmocked decode/close/focus and inspected canonical screenshots.

Physical rapid-input viewer caveat and earlier unrelated intermittent home-to-search probe unchanged. No speculative shared-viewer patch, purchases, domains, paid plans or deletions.
