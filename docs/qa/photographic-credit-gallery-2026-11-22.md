# Photographic credit gallery, 22 November 2026

## Visible change
Photo credits now use a responsive photographic gallery rather than cramped thumbnail rows. Three desktop columns, two medium columns and one phone column provide readable subject, creator, license, original-file and adaptation details. Source/license actions have at least 46px height, visible underlines and keyboard focus. Print uses two columns and 150px image height.

All 325 deduplicated source records retain their existing order, exact metadata and destinations. Search, unlinked public-domain labels, external media and existing source datasets are unchanged. No new claims, sources, dependencies, services, viewer or spending. Styling is Tailwind utilities and SVG icons only.

## Checks
- Build, both typechecks, 209 unit tests.
- 22 new browser cases: AR/EN at 360,390,600,601,900,1000,1001,1280; all 325 exact metadata/order records compared against independent aggregation; all images decoded; keyboard/source actions; storage unchanged; print; no JavaScript.
- All 14 existing credits layout/license/search cases. Layout assertions updated for intentional card design, behavior assertions preserved.
- 216 theme/language/width combinations: no horizontal overflow, at least 44px controls, minimum measured text contrast 6.0718:1.
- Inspected AR390, EN1280 and filtered AR390 screenshots. Photographs, creator/license wrapping, actions and external-media flow are readable.

Initial probes found a pre-existing 360px search input intrinsic-width overflow and mobile screen styles leaking into print. Fixed the input width/minimum and restricted responsive image/grid rules to screen, then reran all checks green. No overflow hiding workaround.

## Scope boundary
Credits use no viewer. Shared viewers remain unchanged. The previously documented rapid-input emulation caveat in search-place-photo-viewer-2026-11-21.md remains a separate physical-device-unverified follow-up.

## Release verification
After normal PR CI and merge: rebuild exact main, rerun all checks on main, immutable deployment and canonical origins, verify Cloudflare reports clean exact-main production deployment and compare canonical/immutable HTML and photo assets. Release URLs and run IDs are recorded in the shipment report.
