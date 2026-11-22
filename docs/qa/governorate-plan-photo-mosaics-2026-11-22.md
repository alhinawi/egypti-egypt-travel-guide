# Governorate plan photo mosaics

## Scope and content boundaries

Published plan cards in governorate profiles now put the plan identity and whole-plan duration before a mosaic of up to three suitable photographs of matching places in that governorate. Preserve each card's existing lead cover and supplement it in matched-place order, with no duplicate place IDs. The 15 cards across six covered governorates retain the exact plan/day/place memberships, titles, day anchors, distinct-place and matched-day counts, full-plan links and cross-governorate/access cautions.

Only existing noncontextual, hero-suitable place photographs are eligible. A stop in another governorate does not become a local image merely because it appears elsewhere in the same full plan. Photographs are examples, not all stops: South Sinai's three matched stops still have only two suitable images because Friday Market has no suitable photo. No substitute or placeholder photo is invented. Existing empty states in the other 21 governorates remain unchanged. A sole matched plan uses the full row instead of half a desktop row.

The native day/place disclosure, named place links, actual day anchors, source content, saved items and print exclusion are unchanged. All new/touched styling uses Tailwind. No visible image captions, new photograph, geographic claim, transport promise, booking, external research, service or storage/network write is added.

## Verification

- Production build, both TypeScript projects and 216 unit tests.
- Existing exact-membership/cover tests retained; a new unit test checks all 15 card mosaics, lead preservation, stable order, distinctness, suitability and provincial scope.
- 24 new browser cases cover AR/EN, eight responsive widths, all 27 profiles and every rendered photograph, identity-before-media geometry, 2/3-image layouts, full-row single plan, photographic link keyboard focus/activation, no JavaScript, no writes/saved-item changes and print exclusion.
- 42 connection/governorate-layout browser cases retained. The old connection photo assertion now explicitly checks the preserved first cover, while the new test checks every mosaic photo and its exact source/alt.
- 864 theme/language/width/context combinations per checked origin: 18 themes × 2 languages × 6 widths × 4 states (Giza, Luxor, South Sinai, empty Dakahlia). Minimum local text contrast 4.7423:1; visible actions at least 46px, no page overflow.
- Actual pixels inspected: Arabic Giza phone with two-photo cards, English Luxor desktop with three-photo mosaics, Arabic South Sinai phone with matching days expanded, English Dakahlia honest empty state and Arabic photographic-link keyboard focus. Principal views are photographed without forcing a keyboard outline on the full section; the separate focus screenshot tests the real link outline.
- Exact merged-main and both production-origin browser/theme checks, clean exact-main production metadata and observed HTML/stylesheets/photo-asset comparisons are required before completion.

## Existing unrelated caveats

The older article-layout governorate navigation assertion still expects the removed `.article-jump-links` element. Its failure was reproduced on unchanged pre-B235 production and reported separately. This batch does not change governorate navigation or claim that assertion passes. The separately documented physical-device-unverified rapid-input shared-photo-viewer caveat is unchanged.
