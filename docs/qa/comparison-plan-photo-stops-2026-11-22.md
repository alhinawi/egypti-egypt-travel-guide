# Trip-comparison photographed stops, 2026-11-22

## Visible outcome

Replace the selected trip comparison's unlabeled single image with up to three distinct named photographed stops from that plan, in first occurrence order. The plan title/origin now precede the mosaic. Each image links to the first published day naming that place, labelled with the exact day. Coverage counts suitable photographed distinct places against all distinct listed places. Scope distinguishes examples from the full stop list, day details from place articles, and published order from a transfer route or access promise.

Helper reuses existing per-day photo eligibility and named-stop resolution, deduplicating in first occurrence order. No invented stop/cover substitution. An empty eligible collection retains a text fallback and published day links. No new section/viewer, content/data/photo changes, selection/filter/history behavior or storage writes. All existing facts and day/detail/remove/clear links remain.

## Verification

- Build/typecheck209unit pass. Two new tests verify every plan's exact unique eligible photograph/day order, source identity, duplicate/unknown stops and empty collections.
-22new browser cases, AR/EN at360/390/600/601/700/701/900/1280: exact names/coverage/photographs/day links, image decoding, lead/small grid, keyboard day navigation/target in viewport, every plan including two-image collections, filtering/reload/language/remove/focus restoration, storage/no API writes, print and direct touch day navigation/return.
-50comparison/finder/day-preview regressions pass. Existing comparison test updated only from its old single-image locator to inspect every rendered image, preserving and expanding its loaded-image assertion. Other regression files unchanged.
-216theme/language/viewport checks, minimum preview text contrast6.071833125424051 and44pxtargets. Actual AR390/EN1280comparison and AR390linked day4 pixels inspected. Initial visual pass moved plan names before the expanded previews and fixed long Arabic name line height. Re-rendered and checked the final result. Screenshot helper waits for the actual linked day to reach the viewport rather than only its pre-existing DOM node.

No new external claims, sources, photos, domains/services/plans, global CSS, spending or deletion. Shared viewers unchanged. Prior B218rapid combined-input viewer caveat remains unrelated and unchanged. Normal PR/CI and exact-main deployment evidence is in shipment reports.
