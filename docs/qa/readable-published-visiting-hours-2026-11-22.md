# Readable published visiting hours, 22 November 2026

## Visible outcome
The existing visiting-hours panel separates session start, last entry and only explicitly recorded session end into large labeled cells. Last entry is visually distinct without being presented as closing time. Seasonal and split-session labels remain visible above each row; no season is selected automatically. Three-field rows become a two-cell row plus full-width session end on phones. Source actions are at least 46px with explicit keyboard focus.

All 22 records and 36 sessions preserve exact values, labels, review dates, notes, sources and source order. No closing time is inferred when absent. Ramadan disagreements, Thursday/Friday-only evening access and every admission/access caution remain verbatim. The unverified-hours fallback is unchanged. No new source, schedule claim, open-now state, calculation, photograph, service, request or spending. Tailwind/SVG only; shared photo/viewer components unchanged.

## Verification
- Build, both typechecks and 209 unit tests pass.
- 24 new browser cases: AR/EN at 360,390,600,601,760,761,900,1280; labeled cell order, large unclipped English-digit values, three-field responsive geometry, 46px sources/no overflow, exact all-22/all-36 metadata and optional-label/end semantics, no booking/selection controls or writes, unchanged fallback, keyboard/tab focus, no JavaScript and print values/cautions/sources.
- All 27 existing visiting-hours/detail-shell/gallery cases pass unchanged, including all record notes, source routes, fallback styling, save behavior, print and gallery/advice/checklist behavior, total 51 browser cases.
- 648 theme/language/width/state combinations: 18 themes, AR/EN, six widths around the 600px breakpoint and single-period/two-period-with-ends/four-season-period states. Minimum measured text contrast 6.0718:1; source targets at least 46px and no overflow.
- Inspected AR390 Nubian Museum, EN1280 Nubian Museum and four-period Luxor Museum, EN390 Giza without a recorded end, keyboard focus, and print-media panel pixels.

## Release
Normal green PR merge; exact-main rebuild/typecheck/unit/browser/theme checks; clean exact-main Cloudflare production verification; both live origins; canonical/immutable HTML and existing asset comparison; canonical screenshot inspection. Shipment report records exact commits, CI/deployment links and inspected screenshots. Existing separate physical-device-unverified shared-viewer rapid-input caveat is unchanged.
