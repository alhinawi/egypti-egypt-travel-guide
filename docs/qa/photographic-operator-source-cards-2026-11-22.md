# Photographic operator source cards, 22 November 2026

## Visible outcome
Existing dive-centre records now use full-width editorial cards, including the single-centre destination/place state. Each identity precedes the same area photograph. Desktop uses a photo/text split; at 850px and below it stacks. Cards no longer inherit the shared photo component's negative margins. Images have a layout-specific sizes hint. Website and CDWS actions are at least 46px, have centre-specific accessible names and explicit keyboard focus.

All three records, order, exact bilingual summaries, areas, directory numbers, URLs, review dates and place/destination mappings remain unchanged. The section still says photographs show areas rather than operator staff/equipment. All safety, availability, fictional-companion separation, no-booking/commission and no-data-sharing cautions remain. No new factual claims, photograph, service, supplier, account action or spending. Shared photo/viewer components are unchanged. Tailwind/SVG only.

## Verification
- Build, both typechecks and 209 unit tests.
- 24 new browser cases: AR/EN at 360,390,600,601,850,851,900,1280; exact names/summaries, identity-before-photo, split/stack geometry and reading direction, no negative photo margins/overflow, 46px named actions, all source metadata/photograph selection/alt/sizes/URLs/date/target/rel, no embedded booking controls or captions, no write requests, full-width single-centre state, keyboard focus/tab order, no JavaScript and print source/caution visibility.
- All three existing operator/gallery browser regressions pass unchanged, including all place/destination inclusions and exclusions and gallery/checklist/guide-advice behavior.
- 216 theme/language/width combinations covering all three cards: 18 themes, AR/EN and six widths including both sides of the 850px breakpoint. Minimum measured text contrast 4.6067:1, no overflow and six actions at least 46px.
- Initial boundary probe caught Tailwind's strict max-width breakpoint differing from the image sizes hint at exactly 850px. Made the stacking breakpoint explicitly inclusive. Initial request probe counted ordinary HEAD prefetch requests; corrected it to flag writes, not GET/HEAD/OPTIONS. Reran green without suppressing write requests.
- Inspected AR390 and EN1280 guide screenshots, plus EN1280 single-centre destination screenshot.

## Release
Normal green PR merge, exact-main rebuild/unit/browser/theme checks, clean exact-main Cloudflare production verification, both live origins, canonical/immutable HTML and existing photo byte comparison, and canonical pixel inspection. Release report records exact commits, CI/deployment links and screenshots. The separate documented physical-device-unverified shared-viewer rapid-input caveat is unchanged.
