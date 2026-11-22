# Photographic trip-day choices

Date: 2026-11-22. Batch B247.

## Visible scope

Trip detail day previews now have photographic day-choice cards instead of a row of plain day-number pills. Each card uses the first suitable photographed place from that exact published day, its exact day title, day number and deduplicated photographed-place count. A day without a suitable image uses a calendar treatment and an explicit no-photo label, never a plan cover or another day's photograph. The current panel, notes, stops, article links, exact-day anchor and existing viewer remain the owning implementations.

The new horizontal rail supports touch scrolling, natural tab focus, RTL-aware arrow selection, Home/End, selected-state labels/checkmark and horizontal reveal. Selection is local, not a URL, saved-item, checklist, API or booking change. ResizeObserver keeps the selected card visible when the rail width changes. Focus does not re-centre the target during pointer/touch activation. A failed thumbnail becomes a non-photo calendar treatment, including failures that happened before hydration.

All new styling is Tailwind. TripDayPhotoBrowser only adds an import and replaces its old choice block with the new component; reversing those two edits restores the baseline byte for byte. No shared viewer/gesture, itinerary, stop/checklist/saved/provider/account logic, photo/source/asset or global CSS changes. The new component reads the existing `tripPhotoPreview` and `tripDayPhotographs` records, adding no external travel fact.

## Local checks

- Production build, both TypeScript projects and all 266 unit cases pass. No new domain-state helper was needed.
- All 38 new browser cases pass: all nine plans in AR/EN, exact per-day names/cover identities/paths/alt text/counts, missing photos, selected panels, six widths, intermediate and endpoint keyboard reveal, RTL arrows, Home/End, resize, no document overflow, focus outline, thumbnail failure, touch/viewer return, unchanged URL/saved/checklist state/no API writes, print and no-JavaScript selectors.
- All 234 retained cases pass: 36 day-browser, 38 day-viewer, 56 day navigator/checklist/stop differences, 48 hero-layout, 6 print/save-label and 50 day-layout cases. The day-browser's old zero-image assertion is intentionally scoped to its selected panel, because the new picker now displays photographs belonging to other days even when the selected panel has no named stops. It does not permit an unrelated photograph in that panel.
- All 648 new-rail theme cases pass: 18 themes, two languages, six widths, and arrival/no-photo, museum and final-day selections. Minimum checked text contrast 6.071833125424051:1, selected control height 206.484375px and keyboard outline 3px. The selected card stays inside the rail and the document does not overflow horizontally.
- Eight local screenshots directly inspected after visible images decoded: AR phone/EN desktop plateau day, museum day, arrival/no-photo day and final day of the ten-day plan. Partial adjacent cards are intentional horizontal-rail affordances; selected cards are fully visible. No clipped selected control or broken visible photograph.

## Corrections during validation

The first new touch probe found focus-driven scrolling could move a target during activation. Reveal on focus is now keyboard-only; active selection and resize perform their own post-selection reveal. An aborted-thumbnail probe also caught a pre-hydration error event, so the thumbnail checks its completed/natural-width state on mount. A theme probe found centre-based reveal could snap an intermediate selected card partly out of view. Reveal now aligns the selected card's logical start with 5px scroll padding. The new tests cover intermediate cards and resizing as well as endpoints. These fixes are confined to the new day-choice component, not the shared viewer.

One combined build/new/layout command reached its time cap partway through hero-layout checks without an assertion failure. The complete hero group and all other final groups were rerun separately and passed. Partial interrupted results are not counted.

## Boundaries

The original no-JavaScript day panel and article links remain, and the new selectors stay disabled. Keyboard/touch/account/network checks use controlled browser fixtures, not a real account or physical device. The documented pre-existing synthetic rapid combined-input shared-viewer caveat and older stale governorate fixtures are unchanged/excluded, not called fixed.

An earlier Baltim photo lead was not used: its original-image host returned HTTP 429 before pixel inspection. No replacement photo, source or asset was added from that research.

## Release checklist

One coherent PR, Mohamed author/current two coauthors, actual green PR checks and normal merge. Rebuild exact main, repeat new/all retained/theme checks, verify green main CI and clean exact-main Cloudflare production, test canonical and immutable origins, compare linked build/photo bytes and directly inspect canonical screenshots. Release IDs and completed results belong in the shipment report; this checklist is not a completion claim.
