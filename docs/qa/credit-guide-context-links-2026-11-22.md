# Credit photographs back into the guide

Date: 2026-11-22. Batch B239.

## Visible change

Source-credit cards now offer a compact "Continue the story in the guide" section after the existing attribution and adaptation details. Each link identifies its route as a place, destination or governorate and uses that published page's own AR/EN title. The tinted, underlined links have at least 46px height, visible keyboard focus, same-language routes and no automatic prefetching.

The reverse index uses exact decoded source equality against published place opening/gallery records, destination covers and governorate profile hero/detail galleries. It deduplicates routes within each source, not source records or titles. Current coverage is 315 associations for 285 of the existing 326 deduplicated credit sources, including 30 shared sources with two contexts. These are catalog links, not an exhaustive list of every use of a photograph across the website. No association is inferred from an image's title, nearby geography, hotel location or similar filename. Unmapped sources retain their existing credit card and source actions without an invented guide link.

No source photograph, alt text, photographer, license, adaptation note, credit order, search string, source destination, external media, saved state or viewer behavior changes. The photo, gallery and geographic datasets are unchanged. No new data claim, remote service, dependency, purchase or persistence is added. Styling is Tailwind utilities and SVG icons only.

## Local validation before PR

- Build, both TypeScript projects and all 229 unit tests, including four new reverse-index tests. Every association must prove exact source membership in its published target; cover, gallery, destination, governorate, encoded source, deduplication and unmapped-source cases are covered.
- All 24 new browser cases: both languages, six widths, all rendered source associations and exact names/routes, same-tab place/destination navigation, encoded-source touch navigation to a governorate, keyboard order/focus, no-JavaScript navigation, print, preserved saved state and no API writes. Hotel-only sources without an indexed cover/gallery association get no invented link.
- All 68 retained browser cases: 22 photographic credit cards, eight credit layout, four missing-license-link, two credit search and 32 natural Historic Cairo source/gallery cases. Full exact credit metadata/order and all credit-image decode checks remain.
- A built-output audit checks all 315 associations across 378 language-specific target documents: every target exists and contains a matching source photograph variant.
- All 648 combinations of 18 themes, two languages, six widths and three source/creator queries. No page/link overflow, all new links at least 46px, visible focus outline at least 3px and minimum checked text contrast 4.7423:1.
- Four actual pixel views inspected: Arabic phone shared-source links; English desktop photographic credit gallery; Arabic phone single source; English desktop keyboard focus. The inherited information-page list padding/margins initially made the links overly indented and spaced. Scoped Tailwind list resets corrected this, and the updated pixels and matrix were checked again.

## Test maintenance

External-link assertions now explicitly inspect the original license/file action group, rather than incorrectly treating new internal catalog links as external links. The new browser suite independently verifies every internal route and title. Source/license destinations, target and rel checks are retained. The old missing-license suite still froze the pre-B238 count at 325; it now derives the 326-source count from the same source datasets, independently of the page component. All six unlinked public-domain labels remain non-interactive text, with the original-file link first in keyboard order. No assertion is relaxed to hide a product defect.

## Release checks

After a normal green PR merge, repeat build/typecheck/unit/new/retained/matrix checks on exact merged main. Verify Cloudflare's successful clean production commit. Repeat all 24 new and 68 retained browser cases and the 648-case matrix on canonical and immutable origins. Compare both credits HTML documents and their observed linked styles/chunks/photo bytes on both origins, allowing only an explicitly isolated independent Next build ID. Audit every linked target's locally built HTML for existence and a matching source photograph variant. Inspect canonical pixel views and report actual release identifiers and results.

## Existing unrelated caveats

The older governorate detail photo fixture selects a prior plan mosaic as its first image and has stale geometry; a representative case was reproduced on pre-B238 canonical production. Its 16 cases are not included or counted green here. The older governorate navigation assertion and synthetic shared-viewer rapid-input caveat are unchanged. Physical-device rapid-input behavior remains unverified. This batch does not modify those areas or guess at a viewer fix.
