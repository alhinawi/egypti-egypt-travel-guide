# B254: personal checklist day focus

- Existing personal stop checklist defaults to all days, with the same per-plan storage key, validation, toggle and whole-plan reset semantics.
- New photographic day controls focus one published day without changing ticks, URL, saves or account state. All days stay mounted but unselected sections are hidden. Return to all days without losing hidden-day ticks.
- Each day choice shows its exact title, existing own-day suitable cover and personal tick count. Arrival/transfer days without named stops remain explicit, without borrowed pictures or completion claims. Failed day photographs become neutral calendar placeholders.
- Exact focused-day exits are available for every day. These are published-plan details, not a next-stop recommendation, booking or proof of a visit.
- Controls wait for checklist read readiness. Without JavaScript, all original stop/article links and new published-day links remain usable; filters are disabled.
- Tailwind only. No catalogue, media, API, account-save, global CSS, shared viewer or saved-progress implementation change.

## Verification
- Build, TypeScript and 288 unit checks pass.
- Eight new AR/EN browser cases cover every plan/day, exact cover/title/stop count/day exit, empty days, keyboard retained focus, hidden-day tick preservation and whole-plan reset, image/storage failure, no-JavaScript behavior and no API writes.
- 40 retained browser cases pass: 12 checklist responsive cases plus 28 remaining checklist/saved-progress cases. Existing storage validation, cross-language/plan isolation, touch return, signed-in save separation and blocked storage assertions unchanged.
- 864 combinations: eight widths, two languages, all/day/empty-day states, all 18 themes. Minimum contrast 4.7424, target height 44px, visible focus at least 3px, no document overflow. Horizontal day rail is intentional and keyboard focus reveals off-screen choices.
- Inspected EN1280 and AR390 day/empty-day screenshots. Photos belong only to their own days; blank arrival day never borrows a cover.
- New image-failure test initially intercepted only /photos/places, missing the real Giza cover at /photos/giza-card-420.webp. Corrected test interception to all photo assets, product image handling unchanged.

Actual green PR/main CI, normal merge, clean exact-main production, canonical/immutable replay and parity, canonical pixel inspection and credential/preview cleanup are reported separately at closeout.
