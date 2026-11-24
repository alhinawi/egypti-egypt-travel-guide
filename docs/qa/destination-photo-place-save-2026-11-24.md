# Save destination results from photo view

Independent named-place save buttons on every destination photo-result card, opposite the existing enlarge action. No-photo fallback entries also retain a save action. Existing SaveButton/place IDs, Tailwind utility controls only. No destination/category/query membership, comparison selection, viewer, story, content, photos, API/storage model or global CSS change.

## Before merge

- Build/typecheck and 296 unit tests pass.
- 26 new checks: Arabic/English at 320,360,390,520,600,601,800,801,900,1280; save/remove labels, keyboard focus/activation, independent placement, no navigation, persistence, existing place/trip preservation, filter and comparison/viewer coexistence, no-photo saving, touch, print and noJS cards.
- Named save/remove behavior checked for every result in every destination.
- 70 retained checks: photo grid membership/fallback/story links/cards, comparison eligibility/exits/reset/account state, every destination's exact viewer membership, focus/keyboard/zoom/retry/touch/noJS/print.
- 1,728 theme/geometry cases: 18 themes, eight widths including320, AR/EN, Cairo/Alexandria/Dahab first/last photographed card, saved/unsaved states. Minimum target46px, focus3px, contrast11.50. Buttons inside photograph and separate from enlarge, no document overflow.
- Actual local AR390/EN1280 pixels inspected: sourced photos, separated save/enlarge actions, readable story and comparison controls.

## Release gate

Actual green CI, normal merge and clean exact-main build/production. New and retained tests and matrix on main/canonical/immutable; HTML/CSS/JS/photo byte comparison; unmocked canonical photograph decode/close/focus; inspect actual canonical screenshots.

Existing rapid-input physical viewer caveat unchanged. Earlier unrelated home-to-search intermittent probe remains unexplained. No speculative shared-viewer patch, purchases, new domains, paid plans or deletions.
