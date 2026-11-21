# Published-plan photo collections in the atlas

## Visible outcome
A collapsed, image-rich collection of the nine published plans lets readers explore eligible photographs from the exact stops in a plan, optionally a single published day. Distinct-place coverage is shown separately from total published stops. Days with no suitable photo stay selectable and empty. The chosen plan/day combine with existing area, region, era, category and text filters. Links open the published plan or its day anchor. Choices recover from the URL, reload and browser history without local/account storage writes.

Photographs keep atlas order, not visit order. This is not a map, new itinerary, booking or access confirmation. The whole-collection counts are labelled as before other filters. Existing sourced photographs and published plan/day content are reused. No new domain, paid service, external dependency or account change. New presentation uses Tailwind.

## Verification
- Build, typecheck and 174 unit tests pass. New unit checks cover exact unique membership/coverage/order, every published day, filter intersection and strict URL validation.
- 100 browser tests: 18 new collection checks plus 16 comparison, 16 core atlas and 50 region/history/contact-sheet/language regressions.
- All nine plans and every day checked in AR/EN. Includes missing-photo days, touch, keyboard focus, image loading, exact day links, reload/history recovery, invalid ids/day values, combined-filter empty states, reset, print and no storage/account writes.
- 216 cases: 18 themes, both languages and widths 360/390/600/601/900/1280. Expanded collection has no horizontal overflow, controls at least 44px high and minimum sampled text contrast 6.071833.
- Inspected AR390 and EN1280 selected-day photographs and EN1280 expanded nine-plan photo collection. Initial placement separated the selected day from its photos with the old filter panel; moved collections beside the result controls and visually checked the revision.

Exact head/main, production deployment, immutable/canonical checks and photo-byte identity are recorded in the shipment report.

## Live-navigation correction
One immutable run found a pending atlas URL timer attaching atlas query parameters to the just-opened trip URL. The follow-up binds the timer to its captured atlas pathname, refuses all non-atlas paths and rechecks the pathname before writing. Two regression cases change the URL while a filter update is pending and assert the destination stays untouched. Original plan/day navigation assertions remain strict. Final verification uses the corrected exact main.
