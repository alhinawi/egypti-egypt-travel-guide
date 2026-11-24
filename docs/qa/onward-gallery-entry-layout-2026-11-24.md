# Article recommendation gallery entry layout

One wrapping label, nonbreaking count, nonshrinking icon and mobile full width/max-width constraint for the article recommendation gallery action. Original wording and suggested-article-only scope/count preserved. No recommendation selection/order, rail, saves, viewer, photographs, story destinations, content, API, storage or global CSS changes. Tailwind utility markup only.

## Before merge

- Build, typecheck and 296 unit tests pass.
- 22 new checks: Arabic/English at 320, 360, 390, 520, 600, 601, 800, 801, 900 and 1280. Label/count/icon geometry, one-line count, mobile full width, keyboard opener/viewer/count/close/focus, rail movement with unchanged scope/count/URL/saves, six representative article counts.
- 100 retained checks: 24 independent save checks plus 76 article rail/viewer checks, including every eligible article's exact viewer scope, navigation/swipe/retry/zoom/focus/stories/noJS/print.
- 1,728 theme/geometry cases: 18 themes, eight widths including 320, Arabic/English, Giza/Cairo/Luxor rails before/after rail movement. Minimum target height48.59px, contrast11.50, focus3px, no document overflow.
- Actual local Arabic390/English1280 pixels inspected: label/count together, clear icon, photographic rail with separate save/enlarge controls. Canonical screenshots required after deploy.

## Release gate

Actual green CI, normal merge, clean exact-main build and production deployment, canonical/immutable new/retained checks and theme/geometry matrix, HTML/CSS/JS/photo byte matching, unmocked decode/close/focus and inspected canonical screenshots.

## Existing limits

Physical rapid-input shared-viewer caveat unchanged. Prior unrelated home-to-search intermittent probe remains unexplained. No guessed shared-viewer patch, purchases, domains, paid plans or deletions.
