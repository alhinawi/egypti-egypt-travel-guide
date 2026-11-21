# Find published plans by an included place

A place selector now combines exact published stop membership with the existing plan-length and starting-point filters. Its selected-place photograph links to the original article. Each matching card links directly to every original day containing that stop. Membership comes only from the existing nine plans; no proximity, route feasibility, access or booking inference is added. Detail-only/contextual imagery is not promoted to the selected-place thumbnail.

The selected catalog place roundtrips through the existing choices link as an optional place parameter. Invalid or non-itinerary place IDs are discarded; old default and comparison-only URLs remain unchanged. Reset clears place/length/start and keeps comparison. History/reload recover place alongside the existing state. No account or saved-item writes. AR/EN, Tailwind, existing print behavior retained.

## Checks

- Build/typecheck and 167 unit tests pass, including exact stop enumeration, every matching original day, valid-place URL roundtrip and invalid/non-plan place rejection.
- 100 browser cases pass:16newplacefinder plus84finder/comparison/share/day-preview/day-navigator. Another32focused repeats pass after final thumbnail layout changes, plus20card/print/save-label regressions.
- Every stop option produces the exact expected plan IDs in AR/EN. Exact day links, selected photograph decode, combined empty/reset/focus, comparison preservation, choices-copy/reload/history, unknown-ID fallback, touch navigation, print hiding, no saved writes and no overflow are checked.
- 216AR/EN18theme6widthchecks pass,44pxcontrols,mincheckedcontrast6.0718:1.
- Actual revised AR390/EN1280 pixels inspected. Thumbnail width is explicitly capped to38percent to preserve mobile text width; a browser assertion prevents inherited image rules from overriding it. Existing planner-note spacing was made explicit on the touched surface.

Exact-main CI/deployment, immutable/canonical checks and final screenshots are verified after normal green-CI PR merge and reported separately.
