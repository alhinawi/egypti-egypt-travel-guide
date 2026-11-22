# Photographic guide advice, 22 November 2026

## Visible outcome
The existing guide-advice panel has a balanced photo/text split above 850px and a stacked photograph on narrower screens. Its same three advice items open in a full-width disclosure beneath both columns rather than stretching only the copy side. The disclosure remains connected to its button by a stable ID even when hidden, and retains keyboard focus on the toggle. Source and telephone links have at least 46px targets and focus outlines.

The panel's own responsive image hint accounts for its rendered width and desktop crop. It no longer inherits the 370px general card hint when used as a larger feature. Existing image source, alternate text and all variants are retained. Shared PlacePhoto defaults and all viewers are unchanged.

All advice, hotline, source URL, no-booking/privacy disclaimer text and surrounding operator/checklist/continuation content are preserved. No new factual claims, sources, booking, money, services or dependencies. Tailwind/SVG only.

## Checks
- Build, both typechecks and 209 unit tests.
- 24 new browser cases: AR/EN at 360,390,600,601,850,851,1024,1280; exact photo alt/srcset, decoded candidate adequacy, one/two-column geometry, full-width expanded advice, original three advice sentences, exact source/phone destinations, target/rel, 46px controls and no overflow. Keyboard/tab/focus and print visibility, touch, DPR2, no JavaScript, saved-state/no API writes and no guide panel on reference-only North Sinai entries.
- Image candidate checks use actual registry paths, including legacy names, and accept a larger cached candidate. Chrome can reuse a photograph already loaded elsewhere on the same place page; exact candidate equality would not establish image quality.
- All nine existing guide-advice/gallery browser cases retained. Intentional photo layout/height and hidden-but-attached disclosure expectations updated, behavior assertions preserved.
- 432 theme/language/width/open-closed combinations: minimum text contrast 5.1303:1, all visible controls at least 46px, no document overflow.
- Inspected actual AR390, EN1280 closed and EN1280 expanded pixels for photo quality/crop, spacing, typography and full-width advice layout.

## Release
After normal green PR CI and merge, rebuild exact main and rerun browser/matrix checks on main and both live origins. Verify clean exact-main Cloudflare production state, canonical/immutable HTML and selected photograph assets, inspect canonical screenshots. Release links and runs are in the shipment report. Existing separate rapid-input viewer caveat remains physical-device-unverified and unchanged.
