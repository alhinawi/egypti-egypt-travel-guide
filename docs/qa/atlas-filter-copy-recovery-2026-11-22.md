# Photographic atlas filter-copy recovery

2026-11-22. Batch B243.

## Visible change

The existing photographic atlas filter-link note becomes a compact copy control with an explanatory note, live feedback and a focused, selected read-only fallback when the clipboard is unavailable or refused. This shares the current photograph filter collection, not the open image, comparison, saved items, account, display layout or expanded count. Existing natural photographs, eligibility/order, cards and all viewer interactions are unchanged.

`AtlasShareLink` receives the current `q`, governorate (`area` internally), category, region, era, plan and day state. It never reads the address bar as its copy source, so copying is independent of the existing 200ms URL debounce. The generated link is language-specific. Status and fallback disappear when the generated URL changes. A late clipboard completion for an older URL cannot reintroduce stale success or fallback. Nothing is sent automatically to another person.

## Scope and grounding

- `atlas-collection-link.ts` canonicalizes the seven existing public fields through the existing `atlasFilterQuery` / `readAtlasFilters` pair. No new filter, URL parser, ranking, membership or storage schema.
- Existing `photo-atlas.tsx` changes only by importing the share component and replacing the previous informational paragraph. That paragraph's `atlas-link-note` class is retained on the new note.
- No source/photo JSON, image asset, global CSS, catalog, saved/account state, comparison, layout selector, shared viewer or gesture code changes. The viewer's older rapid synthetic swipe-then-thumbnail caveat remains explicitly unfixed, not counted green.
- All new styling uses Tailwind. The copy button and fallback field have at least 48px height and 3px focus outlines in measured checks. The share control hides for print.
- Existing no-JavaScript behavior is unchanged: the atlas route's Suspense fallback links to the encyclopedia. It does not render the copy control or falsely promise a filtered interactive atlas without JavaScript.
- Sharing a link does not preserve layout or the expanded number of cards. Those remain local presentation choices; the note explains this. Copying itself does not change the current layout or comparison.

## Local verification before PR

- Production build, both TypeScript projects and all 251 unit tests pass. Six new cases check language/root URLs, all seven recognized fields, collection membership/order round trips, exclusion of unrelated URL/local state, invalid values/orphan plan days and bounded/encoded Arabic search.
- All 22 new browser cases pass. Coverage includes both languages and six widths, successful copy, selected/read-only touch fallback, reload/Back collection restoration, focus/target/print behavior, all-seven-field allowlist, no hash/account/saved/comparison/open-photo/layout leakage, unchanged real saved IDs and no API writes. Desktop cases also copy while preserving active comparison and contact-sheet view.
- The stale-address test deliberately holds native address-bar updates while changing the real input, then verifies the copy still uses the current state. This avoids a timing-based claim that an automation click necessarily beats the existing 200ms debounce.
- Both late-success and late-failure clipboard callbacks are resolved after choices change; neither displays stale feedback or fallback.
- 84 retained cases pass in two bounded groups: 38 atlas/catalog/router/contact-sheet and 46 swipe/zoom/thumbnail-strip cases. The first combined run hit its execution-time limit after 80 passing cases, without a reported assertion failure. Both groups were then rerun to completion; no assertion was changed to address that timeout.
- 648 combinations pass across 18 themes, two languages, six widths and ready/copied/fallback states. Minimum measured contrast 6.071833125424051:1, checked targets at least 48px and focus outlines at least 3px. No horizontal overflow or new iframe.
- Six actual local pixel views inspected: AR phone/EN desktop ready, AR phone/EN desktop selected fallback, AR phone copied state, EN phone empty-result state. Controls, text and field fit are readable; visible lazy photographs are decoded before capture.

## Test preparation details

The initial no-JavaScript probe assumed server-rendered atlas cards, but the existing route explicitly uses a Suspense encyclopedia fallback. The probe was corrected to verify that unchanged fallback and the absence of a copy control. No product behavior or required existing assertion was weakened. The screenshot helper now waits for the hydrated copy button before reading its disabled state, rather than querying a missing node during the existing loading fallback.

## Release checklist and caveats

After a normal green PR merge, repeat exact-main build/typecheck/unit/new/38-catalog/46-viewer/theme checks. Verify clean exact-main Cloudflare production and main CI, repeat browser/matrix checks on both canonical and immutable production, compare six route HTML files and observed linked assets plus the first four card photographs' derivatives, and inspect canonical pixels. This is a release checklist, not a pre-release claim of completion.

Clipboard refusal/success, delayed callbacks and held address-bar updates are controlled browser fixtures. These checks do not establish every physical device's permission behavior, current external tour playback or the separate previously documented rapid combined-input viewer sequence. The old stale governorate fixtures remain excluded and unchanged.
