# Selected-day gallery entry layout

One wrapping label, nonbreaking photo count, nonshrinking camera and mobile fullwidth/maxwidth constraint. Original wording and selected-day-only suitable photograph scope/count preserved. Tailwind markup only; no day/stop membership/order, choice, saves, checklist, anchors, viewer, story, content, photographs, API/storage model or global CSS change.

## Before merge

- Build/typecheck296unit pass.
- 22 new browser checks: AR/EN10widths320–1280, both Cairo days' actual label/count/icon geometry, mobile fullwidth, keyboard viewer/count/close/focus and unchanged selected day/checklist/URL/saves. Every published day/trip exact count and empty entry omission.
- 138 retained:26 save checks for every known published stop plus112 day/choice/viewer checks with published membership/photos/anchors/fallback/swipe/retry/focus/noJS/print.
- 1,728 theme/geometry cases:18themes8widthsincluding320,AR/EN,three trips before/after day choice. Minimum height48.59,contrast11.50,focus3,nooverflow.
- Actual local AR390/EN1280 pixels inspected: label/count/icon together, fullwidth mobile, photograph/save/enlarge and day choices readable.

## Release gate

Actual green CI, normal merge, clean exact-main build/production; new/retained/matrix checks on main/canonical/immutable, HTML/CSS/JS/photo byte matching, unmocked decode/close/focus and inspected canonical screenshots.

Physical rapid-input viewer caveat and earlier unrelated intermittent home-to-search probe unchanged. No speculative shared-viewer patch, purchases, new domains, paid plans or deletions.
