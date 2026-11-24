# History-group gallery entry layout

Confirmed before change: at320English the count/parentheses split from the wrapping label into separate flex text runs. Keep the exact wording and per-group count/scope, with one wrapping label, nonbreaking count, nonshrinking icon and mobile fullwidth/maxwidth. Tailwind markup only. No collection membership/order, era/history claims, story links, saves, viewer, photographs/content, API/storage or global CSS change.

## Before merge

- Build/typecheck296unit pass.
- 22 new checks: AR/EN10widths320–1280, including600/601and700/701. Label/icon/count geometry, mobile fullwidth,44target,3focus, keyboard viewer/count/close/focus, URL/saves untouched. Every eligible published article exact group count/label.
- 64 retained:26named-place saves,16history membership/links/touch and22viewer keyboard/rail/fit/retry/swipe/noJS checks.
- 1728theme/geometry cases:18themes8widthsAR/EN3articlesfirst/last group. Minimum contrast11.50,target48.59,focus3,nooverflow, intact count/icon.
- Actual local AR390/EN1280 and AR390decodedviewer pixels inspected. Before320English screenshot inspected.

## Release gate

Actual green CI, normal merge, clean exact-main production/build. Main/canonical/immutable new/retained/matrix, HTML/CSS/JS/photo byte matching, unmocked decode/close/focus and actual canonical pixels.

## Existing caveats

B329 canonical English Luxor Temple navigation returnedHTTP500 twice before page load. Immutable full22 passed, then unchanged isolated canonical case and full22 passed. Cause unknown, not a confirmed fix. Logs preserved outside repository, reported to parent. Do not turn a passing rerun into a repair claim. Physical rapid-input viewer caveat and earlier intermittent home-to-search probe unchanged. No speculative shared-viewer patch.

One combined local test command hit its120second tool limit after new22/retained42 passed and21/22viewer cases completed. Reran unchanged viewer22 alone, all passed. This was execution timeout, not an assertion change.

No purchases, new domains, paid plans or deletions.
