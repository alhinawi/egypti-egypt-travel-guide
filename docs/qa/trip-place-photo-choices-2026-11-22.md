# Photographic places in the trip finder

Date: 2026-11-22. Batch B248.

## Visible scope

The trip finder's exact-place filter now has photographic place choices alongside its complete native list. Covers and names come only from the existing published-plan place choices and suitable, non-contextual photo records. Today 18 of the 19 listed places have suitable photographs. The unphotographed Friday Market remains available in the original list. No extra attraction, plan membership, cover, source or travel fact was added.

The compact grid has six cards. Expansion shows all suitable photo choices in their published-list order. A selected place outside the initial six replaces the sixth compact preview, keeping the selection visible without an orphan row. Clearing that temporary card restores keyboard focus to the expansion control when the card disappears. Selecting a photograph feeds the existing exact-place callback; selecting it again clears only that place filter. Native-list changes, recovered URL state and history update the pressed photo. Expansion itself does not change the URL or filters.

All new styling is Tailwind. The owning TripPlaceFilter adds one import and one component call; reversing those restores its baseline byte for byte. The existing finder still owns length/start/place/comparison/result/URL state. No changes to that state implementation, shared viewer/gestures, accounts, storage, API, itinerary data, photo/source/assets, or global CSS. Failed photographs retain a named actionable place control, including failures before hydration. Original no-JavaScript selectors stay disabled and all nine plan cards remain readable.

## Local verification

- Production build, both TypeScript projects and all 266 unit cases pass.
- All 26 new browser cases pass. They check every suitable photo's exact name, alt text, decoded path and source-order membership; every choice's exact plan result IDs; all 19 native choices; compact/expanded/selected counts; native/photo synchronization; keyboard clear and focus recovery; six widths; touch; length/start/empty results/reset/comparison preservation; URL/reload/popstate; no saved/checklist/API writes; failed images; print and no JavaScript.
- All 172 retained cases pass: 32 finder/place, 34 share/comparison, 40 comparison photographs/day preview, 18 card/print and 48 hero-layout cases.
- All 648 new-control cases pass: 18 themes, AR/EN, six widths, initial/expanded/outside-selection contexts. Minimum checked contrast 6.071833125424051:1, target height 46.59375px, keyboard outline 3px. All controls stay within document width.
- Six final local screenshots directly inspected after visible photographs decoded: initial, outside selection and expanded, AR phone and EN desktop. The selected-card replacement avoids a seventh orphan card and leaves the selected state clearly visible. No broken visible photograph or clipped control.

## Existing snapshot mismatch, independently verified

The optional `trip-support-layout.spec.ts` baseline is stale: all 48 cases compare the entire `.trip-detail` container height to a fixture from before later detail sections. The new finder does not render on detail pages. Running the identical suite against the unchanged live B247 canonical build produces exactly the same 96 expected/received mismatch lines as local B248. Every differing field is `height`; there is no other style mismatch. Logs: `/tmp/b248-support.log` and `/tmp/b248-canonical-support-baseline.log`. Neither the old test nor its fixture was changed. These 48 failed baseline cases are excluded, not counted as retained passes or described as fixed. Use a focused support-style snapshot that does not freeze the whole detail height in a future scoped follow-up, rather than refreshing that fixture blindly.

The documented older synthetic rapid combined-input shared-viewer caveat and stale governorate fixtures also remain unchanged/excluded. Tests use controlled browser fixtures, not a physical device or a real account. Baltim source research remains stopped after the earlier image-host HTTP 429, with no inspected replacement or media change in this batch.

## Release requirements

One coherent PR, Mohamed author/current two coauthors, actual green PR checks and normal merge. Rebuild exact main and repeat the 26 new, 172 retained and 648 theme cases against exact main and both live origins. Verify green main CI, clean exact-main production, matching original HTML/linked style/chunk/photo bytes, and directly inspect canonical screenshots. Record actual IDs, URLs and completion in the shipment report, not as a premature claim here.
