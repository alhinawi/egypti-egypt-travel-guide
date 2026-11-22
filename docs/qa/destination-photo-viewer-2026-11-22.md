# Destination full-screen photo browsing, 2026-11-22

## Visible outcome

Every destination's existing photo sheet now has a full-screen browsing entry and a separate 46px enlargement button for each suitable place photograph. Tile images, titles and article links remain article links. The viewer is the unchanged shared photographic viewer, with AR/EN keyboard direction, Home/End, zoom, touch swipe, a windowed thumbnail strip, image retry and the exact place-story exit.

The collection is only the suitable photographs in the current destination/search/category results, in their existing order. It adds no places, route suggestions or nearest-place ranking. Coverage includes unphotographed articles in its denominator. Dahab's Friday Market therefore remains readable with 0 / 1 coverage when it is the only match, without an enlargement or browse action. The eight destination memberships have 40/40, 6/6, 6/6, 6/6, 4/5, 5/5, 4/4 and 4/4 suitable photographs respectively for Cairo, Alexandria, Luxor, Aswan, Dahab, Hurghada, South Sinai and Red Sea.

Closing restores the exact opening button. A changed result collection closes the old viewer and recovers a connected opener or the photo-sheet group. History switching to cards restores the still-mounted destination search field. Controls remain disabled until hydration. Opening photos changes neither the URL nor saves/account state. Without JavaScript, existing cards and article links remain readable. Photo browsing is hidden for print.

The destination-index introduction now uses the actual destination collection length instead of stale hardcoded six-destination copy. The catalogue contains eight destinations; no catalogue membership changed.

## Verification

- Production build/typecheck and 279 unit cases pass. Six new unit cases cover exact supplied order, every destination/category/query, unsuitable/contextual/missing/reference photos, one/empty collections, input immutability and state ownership.
- 40 new browser cases cover AR/EN, all eight memberships and every suitable photo's exact title/source/alt/count/article link, 360/390/600/601/900/1280 widths, keyboard/zoom/focus, single/no-photo matches, history cleanup, image retry, article/back, read-only saves and URL, real touch swipe, dynamic introduction counts, print and no JavaScript.
- 170 retained cases pass: 82 destination photo sheet/finder/share/card layout cases, 72 shared viewer layout/strip/saved/swipe/zoom cases and 16 Cairo destination-hero width/language cases. The other destination-hero combinations are not counted. An interrupted larger aggregate was discarded, not counted as complete.
- 648 state/language/width/theme combinations pass across Cairo photo sheet, Cairo viewer and Dahab partial-photo sheet. Minimum measured text contrast 4.742:1, target height 46px and focused outline 3px. No document-level horizontal overflow. The intentionally scrolling thumbnail rail remains bounded.
- Actual AR390 and EN1280 photo-sheet/viewer/Friday-Market-only pixels inspected for photo framing, text, controls, missing-photo honesty and typography.

Initial local probes incorrectly assumed a thumbnail's position was a global catalogue index even when the existing rail had moved to its ending window. Resetting via Home and selecting by actual place ID corrected the probe. A second fixture queried Blue Hole inside Dahab, where the catalogue instead contains Blue Lagoon. Corrected the fixture against the actual catalogue, without changing product data or the shared viewer.

## Preserved scope and caveat

No shared viewer, save/account/API implementation, data/source/media assets, global CSS, domain, paid plan, purchase or deletion changed. New styling is Tailwind on the touched destination photo sheet, with SVG controls.

The documented rapid synthetic swipe-then-immediate-thumbnail-tap caveat remains unchanged. See `search-place-photo-viewer-2026-11-21.md` for the isolated diagnostic, evidence limits and required follow-up. It is neither fixed nor counted as a passing case here. No speculative shared-viewer delay or event change was introduced.
