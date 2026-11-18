# Virtual visit dead ends: November 18, 2026

## Reproduced
At 390px on the production Khan el-Khalili page, an actual Play tap inside the embedded YouTube player left the media paused at time 0, readyState 0. The provider thumbnail could load while footage did not. No video codec, autoplay or CSP explanation is asserted from that observation.

## Fix
- Recorded video opens explicitly on YouTube, with a permanently available original Google Arts & Culture source link. No inline black box and no claim of successful playback.
- The public collection lists only six sourced visits. Places without a sourced visit retain their place pages but do not render a placeholder virtual section. More verified tours are a separate ongoing coverage task, not represented as done.
- Removed the empty-card filter and missing-tour count. Actual sourced visits and archive totals remain.

## Sources checked
- https://www.youtube.com/watch?v=xW75h9XP934 resolves to RAWI's Khan al-Khalili walkthrough.
- https://artsandculture.google.com/asset/a-walk-through-cairo-s-khan-al-khalili-bazaar/kwGMyJb-ccBRwQ?hl=en confirms RAWI, 2021, Video, Cairo bazaar.

## Validation
Typecheck/build and 78 unit/API tests pass. Eight browser regressions pass, including Arabic/English 390px touch navigation to the exact external watch destination, fallback href, no iframe, six sourced cards, no searching placeholders and corner-link regression. Screenshots inspected in both languages.

External provider playback still depends on viewer connectivity and provider policy. Direct routes and the alternate original source are deliberately explicit, not simulated playback.
