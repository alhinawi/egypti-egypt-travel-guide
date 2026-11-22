# Two-place comparison, 2026-11-22

## Visible outcome

AR/EN visitors can choose two exact place articles through a photographic chooser, then compare their own photographs, guide descriptions, governorates, categories, theme/period tags, sources and existing published plan-day connections. Desktop fact rows align with a subgrid. Phone cards remain readable at full width, with named jump links between the two articles. Photographs and story links always belong to the same article.

The chooser keeps the existing catalogue order, not a recommendation, distance or best-of ranking. Search matches bilingual article names, governorates and categories. Twelve articles appear first; showing more focuses the first new article. All 152 non-reference place articles remain selectable, including articles without a suitable cover. Contextual/unsuitable photographs are not borrowed or promoted. The two reference-only North Sinai records are not ordinary comparison choices.

Each place article has a comparison entry that starts with that exact article; the article browser has a general entry. No pair is preselected on the new page. Two distinct valid IDs are the entire shared state. Invalid, repeated, third, unknown and reference-only IDs are removed. Search text, account details and saved items never enter the copied link. Nothing is sent automatically. Copy has an explicit selectable fallback. Reload/history restore the sanitized pair and recover focus when focused content is replaced.

Choosing, replacing and removing an article does not change saves or accounts. The comparison still works when account saves cannot load. Without JavaScript, initial article links remain usable and comparison controls are disabled rather than pretending to honor a query. Printing is available after choosing two articles. Printed output uses a white/light canvas, compact photographs, visible source URLs, hidden editing controls and headings kept with their plan content.

No scores, live prices, hours, travel times, distances, booking or access claims were added. Facts come from the existing guide records; source and exact article links remain available for detail checks. A missing period/theme tag or plan connection is identified as absent from this guide, not as a judgment about the place.

## Verification

- Production build/typecheck and 287 unit cases pass. Eight new unit cases cover exact eligible catalogue order, URL sanitization/order/privacy, bounded unique two-slot selection, bilingual/normalized search, exact suitable own-article photographs, immutability, exact plan-day membership and absence of account/save/data-fetch ownership.
- 28 new browser cases pass in AR/EN. They inspect all 152 chooser article links, photographs, titles and fallback states. Cases cover 360/390/600/601/900/1280 widths, exact selected descriptions/metadata/sources/plan-day links, desktop row alignment, chooser batches and focus, replacement/removal, duplicate prevention, empty search, URL/history, copy success/failure/privacy, print, no JavaScript, touch jumps and article/day exits. Guest, signed-in private-save and account-save outage cases have no writes.
- 144 retained cases pass: 21 article-browser/filter/shell cases, 40 place-to-plan/photographic-day-cover cases, 58 history/onward-navigation cases and 25 gallery/layout/navigator cases.
- 864 theme/language/width/state combinations pass across selected pair, chooser, missing-photo pair and copy fallback. Minimum measured text contrast 4.6067:1, target height 44px and focused outline 3px, with no document-level horizontal overflow.
- Six actual AR390/EN1280 selected-pair/chooser/missing-photo screenshots and the final two-page A4 English print preview were inspected. The first print orphan and a subgrid fragmentation issue were fixed. Print deliberately returns to normal block flow inside the two columns, preserving source URLs and complete plan sections. The screen comparison keeps aligned rows.

## Explicit test maintenance

The browser-header regression test previously assumed its governorate link was the only anchor. It now checks the existing governorate link by exact href and separately checks the new comparison entry. The original behavior remains asserted.

The gallery detail-only fixture used Lake Manzala, although its current recorded photograph is suitable as a cover. The expected-zero-cover failure reproduced in AR/EN on unchanged canonical B250 as well as this branch. The two assertions now use Meir's actual detail-only record instead. Assertions about no hero, the strip, opening, Escape and focus return are unchanged. All 25 gallery cases pass. No gallery implementation, source metadata or photograph changed, and no stopped external image host was retried.

## Scope

Tailwind/SVG on the new comparison surfaces and two small entry points. No shared gallery/viewer, catalogue/source/media assets, saved/account/API implementation, global CSS, new domain, paid plan, purchase or repository deletion changed. The previously documented rapid synthetic swipe-then-immediate-thumbnail-tap diagnostic remains unchanged and is not claimed fixed or passing here.
