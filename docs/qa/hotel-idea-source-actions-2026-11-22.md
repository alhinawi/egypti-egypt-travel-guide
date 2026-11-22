# Hotel idea photographs and source actions, 22 November 2026

## Visible outcome
Existing hotel ideas now put each hotel's name above its larger archival photograph. Shortlists use one, two or three desktop columns according to actual item count, retaining the inclusive 760px single-column phone breakpoint. External map, optional website, data and optional photo-source actions have at least 46px targets, visible external-link icons, focus outlines and hotel-specific accessible names. Photo-source destinations come from the existing Commons metadata. No-photo cards keep the honest existing fallback and do not gain photo-source links.

Hotel membership, catalog order, names, source images, exact map/website/data links and all archival/proximity/availability cautions are unchanged. No prices, stars, ranking, route, booking, payment, new data sources, services or dependencies. Tailwind/SVG only, no global CSS.

## Verification
- Build, both typechecks and 209 unit tests.
- 24 new browser cases. AR/EN at 360,390,600,760,761,900,1100,1101,1280 across Giza, Abu Simbel, Blue Lagoon, Philae, Khayyamiyya and Al-Azhar Mosque cover one/two/three hotel states, with/without photos and optional websites. Verify names, order, exact action destinations, accessible names, 46px targets, external rel/target, image decode/height and title-before-photo layout, no overflow or unsupported form/iframe/distance/caption.
- Two cases within those 24 check exact metadata and action sets on all 56 published place shortlists, both languages. Keyboard/tab/focus, saved state/no API writes, print and no JavaScript are also checked.
- All nine existing hotel browser regressions pass. Expected two-item column count and intentional photograph heights updated, all other behavior assertions retained.
- 432 theme/language/width/photo-presence checks. Minimum measured text contrast 5.4599:1 including fallback text. Controls at least 44px, no document overflow.
- Inspected actual Arabic phone, English two/three-card desktop and no-photo desktop screenshots. Screenshot readiness waits for every displayed hotel image to decode, not only the first lazy image.

## Release
Normal green PR CI and merge. Rebuild exact main, rerun browser/matrix checks on main and both live origins, verify clean exact-main production deployment, canonical/immutable HTML and selected local hotel assets. Record links and run IDs in the shipment report. Shared viewers unchanged; the existing separate rapid-input mobile-emulation caveat remains physical-device-unverified.
