# Photographic place-to-plan days, 22 November 2026

## Visible outcome
The place-to-plan panel replaces its repeated current-place banner with photographs inside each exact linked published day. Plan identity and programme/outline labels come first. Each day uses the existing suitable-photo rules, preserving published order and showing up to three named places from that day only. The entire day card, including its photographs, opens the original day anchor. A lone plan uses the full row. No new visible photo captions. Keyboard focus is explicit.

All 19 places' plan membership, plan/day titles, day numbers, programme/outline labels, links and planning/not-booking/access caution are unchanged. Contextual or unsuitable photographs are excluded by the existing helper. Friday Market's no-suitable-photo state remains a useful text day link, not an invented photograph or stop. No route calculations, live availability, new claim, source, photograph, network write, service or spending. Shared viewers are unchanged. Tailwind/SVG only.

## Verification
- Build, both typechecks and 209 unit tests pass.
- 24 new browser cases: AR/EN at 360,390,600,601,700,701,900,1280; identity before day photographs, exact two-column/stack breakpoint, 220px photographic composition, target geometry/no nesting/no overflow; all 19 places' exact matching plan/day/photos, suitability, order, image selection/alt, names, accessible day/plan labels, no extra captions or writes; keyboard navigation to exact anchor; no JavaScript including full-width single-plan and no-suitable-image states; touch on a photograph opens the exact day.
- Existing 16 place-to-plan regression cases pass. Only their expected removal of the old banner assertion/import changed; all link/membership/day-anchor/print/touch checks are retained. The existing gallery/guide-advice/checklist regression also passes unchanged, total 41 browser cases.
- 648 theme/language/width/state combinations: 18 themes, AR/EN, six widths including both sides of 700px and multiple-plan/single-plan/no-suitable-image states. Minimum measured text contrast 5.4599:1; all day targets at least 48px, no overflow.
- Inspected AR390 and EN1280 Karnak, EN1280 single-plan Elephantine, EN390 Friday Market without day photographs, and focused AR390 pixels. Removed a redundant visible photo note before final validation; photo groups retain accessible labels.

## Release
Normal green PR merge; exact-main build/typecheck/unit/browser/theme checks; clean exact-main Cloudflare production verification; both live origins; canonical/immutable HTML and existing photo byte comparisons; canonical screenshot inspection. Shipment report records the exact commits, CI and deployment links. Existing separate physical-device-unverified shared-viewer rapid-input caveat is unchanged.
