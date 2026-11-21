# Whole-guide visual search

## Outcome

A separate `/ar/search/` and `/en/search/` surface joins published place articles,27 governorate profiles and9 published plans. The existing homepage place-search form and category links stay unchanged. An explicit wider-search link follows that panel, and the menu includes guide search. Bottom navigation remains unchanged.

Search covers bilingual titles, selected published descriptions/overviews, governorate/capital/region labels and named plan days/stops. It is not full article-body search, live availability or prices, or private saves/accounts. Catalog order is not a ranking. All words must match the same entry. Arabic marks/tatweel/hamza/yaa are normalized; English is case-insensitive. Query is capped at120characters. Only supported result kinds are accepted. Empty queries invite a search rather than dumping the catalog. URL includes search terms, disclosed on page.

Photo cards reuse existing licensed source images and eligible exact-place photos. Plan cover is an eligible named stop, not a guarantee of access. Detail/source links lead to the corresponding existing article/profile/plan. Missing eligible covers use a text fallback, not a substitute photo.

## Checks

- Build and typecheck pass.190unit tests, including5new tests for catalog membership/order, every bilingual title, stop membership, normalization, paths/photos and URL round trips.
-32new browser cases across AR/EN: exact groups/counts, loaded photos, source titles/detail links, independent expansion, types, reload/language/history, no match/literal HTML-like query, clear focus, keyboard/touch, unchanged private saves/no API writes, homepage/menu entry, no-JS browse fallback and disabled submit.
- Six viewport widths360/390/600/601/900/1280 with explicit1/2/3column assertions.216language/viewport/theme matrix, min contrast5.459955953071658, no overflow and visible controls at least44px.
-70existing related cases pass:26unchanged homepage place-search layout/submit/category tests,36drawer layout/navigation/widget cases and6language-context/panel cases plus2widget-context reruns. Note: unique related cases are68, total passing executions70 because the two context cases were rerun after correcting their test input.
- Drawer baseline addition reviewed programmatically: exactly one inserted search link; only the drawer-inner and drawer-nav heights change among old properties. Every other existing property is identical. Homepage panel baseline unchanged.
- Widget context test used a discarded unknown query, then an incorrectly named parameter. Corrected to the supported `length=short`, awaiting enabled finder before reading context. No assertion weakened.
- Pixel inspection caught a two-column mobile breakpoint ordering collision. Replaced overlapping max-width rules with mobile-first min-width columns and added explicit computed grid assertions. Final AR390 and EN1280pixels inspected.

## Test infrastructure notes

The first browser run exposed shared result expansion and a strict link selector collision; both fixed. The category failure from initially inserting the wider link among existing category links was avoided by keeping a separate wider-search entry. One large combined regression call exceeded the execution window and left a stale local server with a closed output stream; removed that server and ran bounded suites. No product timeout or assertion relaxation. All affected tests rerun successfully.

No new public research, data claims, services, paid plans, domains, purchases or deletions. Existing published provenance stays at destination details/credits. GitHub CI and exact-main deployment are verified separately during shipment.

## Post-merge animation sampling correction

On the first production verification, one existing AR390drawer snapshot repeatedly found a tinted first-link background after print/theme cycles. The exact same100cases passed on the immutable origin and before merge, but canonical/main were99/100. This was investigated rather than accepted as a pass.

The drawer has an existing280ms slide-in animation that restarts when print hides it and screen media shows it again. The fixture generator waits for initial animation; the original test did not wait for restarted animation while moving its hover pointer. Disabling motion made the exact assertions pass independently; the selected correction keeps animation enabled and waits for the drawer's actual Web Animations `finished` promises before sampling each theme, then moves the pointer off links. No product CSS, baseline values, assertion expectations or timeouts change. The exact AR390case passes locally and on canonical; the full36drawer cases pass locally with this synchronization. Final source/production checks follow during shipment.
