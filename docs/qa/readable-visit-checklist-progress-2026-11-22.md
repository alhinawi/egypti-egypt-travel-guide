# Readable visit checklist progress, 22 November 2026

## Visible outcome
The existing checklist counter no longer stretches into a full-width oval. A fixed 50px rounded badge sits beside the heading. A thin, labeled accessible progress indicator shows the same zero-to-five state and fills in the reading direction. Buttons/reset have explicit keyboard focus outlines and the official-advice link is a 46px target.

All five checklist items, cautions, source URL, per-place local-only storage keys, sanitizing, loading-disabled controls, blocked-storage notice and reset behavior are unchanged. The section is labeled by its heading and marks loading as busy. No extra section, image, factual claims, network writes, services or spending. Tailwind/SVG only.

## Verification
- Build, both typechecks and 209 unit tests.
- 24 new browser cases: AR/EN at 360,390,600,601,760,761,900,1280; exact five labels, fixed badge dimensions, progress bounds/value/value text, every intermediate fill width from zero through five, reset/disabled state, 44px controls, exact source destination/rel/target, no overflow/form/iframe. Keyboard/focus/tab/Space/Enter, persisted progress, print visibility, saved-state/no API writes, corrupt/blocked storage, touch and no JavaScript.
- All nine existing checklist/gallery browser cases pass unchanged, including cross-language persistence, place isolation, malformed/duplicate/out-of-range stored values, unavailable storage, reset, image viewer, guide advice and theme colors.
- 432 theme/language/width/empty-complete combinations: no overflow, 44px visible controls, exact badge width/progress value, minimum measured text contrast 5.1303:1. Visible progress fill also meets 3:1 non-text contrast against its track.
- Initial contrast probe found the old accent-on-tint counter color fell below 4.5:1 in the sand theme. Changed only the counter text to the ink token, then reran all checks green.
- Inspected AR390, EN1280 partial and EN1280 complete screenshots. Keyboard tests wait for storage hydration before focusing intentionally disabled controls.

## Release
Normal green PR CI and merge, exact-main rebuild and browser/matrix checks on main and each live origin, clean exact-main Cloudflare production verification, canonical/immutable HTML and existing photo asset comparison, canonical pixel inspection. Shipment report records release links/runs. Shared viewers and their existing separate physical-device-unverified rapid-input caveat are unchanged.
