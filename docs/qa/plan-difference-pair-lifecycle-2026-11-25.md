# Plan difference viewer pair lifecycle, 2026-11-25

History-driven replacement of the first compared plan could leave the retained second plan's unique-group viewer open against changed membership. Group identity now includes the complete ordered plan pair and the group kind. A changed pair tears down each group's temporary viewer; changing only search filters preserves it. No shared viewer, group membership/order, photos/content/API/storage/URL semantics or styling change.

24 new AR/EN browser tests cover shared/first-only/second-only groups, replacement of either plan, removal, filter-only preservation, history return, scroll unlock and close-focus. Build/typecheck/298 unit tests passed.18 retained action/all-pair cases,16 retained differences and36 retained comparison-viewer checks passed.360 theme/width/state/language cases passed. Actual normal AR390/EN1280 and viewer pixels inspected; no visual layout change expected.

The first follow-up key attempt reused the pair key for two sibling groups, causing React to retain the wrong child; kind-specific unique keys fixed that before commit. A test initially referenced the wrong filter selector and was corrected to the real trip-start-filter and its actual value. An overlong test command left a local server after timeout; it was stopped before complete bounded replays. These harness/implementation failures were not shipped.

Release gates remain actual green PR CI, normal merge, clean exact-main tests/production, canonical/immutable replay/parity and actual canonical pixels. Earlier unrelated intermittent control/focus/HTTP500/navigation and physical rapid-input viewer caveats remain unknown, not fixed.
