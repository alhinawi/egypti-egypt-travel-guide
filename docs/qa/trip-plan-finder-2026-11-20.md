# Trip plan finder, 2026-11-20

The Trip plans page now offers duration chips and a starting-destination selector for the nine published plans. Filters combine, the result count updates live, and empty combinations offer recovery that resets both controls and focuses the destination selector. Existing plan titles, images, ordering, save buttons and detail links remain intact. Long programmes are described as potentially continuing through other destinations, not limited to the selected starting area. No bookings, availability or schedule promises are added.

Trip-card responsive image sizing now reflects its full-width layout, rather than telling the browser that a desktop photo is only 370px wide. The existing higher-resolution sourced assets make desktop photographs sharper. Other photo consumers keep their default image sizing.

## Checks

- Build, typecheck and 126 unit tests pass.
- 49 browser cases: 16 new finder checks, 14 existing trip-card layout/save checks, 18 saved-board checks and the programme integration check.
- All duration ranges, every starting destination, combined filters, counts, empty-state reset and focus, exact links, keyboard and touch covered. Filtering does not write saves. Print hides controls/status while retaining the chosen results.
- 648 matrix cases: AR/EN, 18 themes, six widths and all/long/empty states. No document overflow, at least 44px duration controls, minimum measured text contrast 5.4599:1.
- Actual Arabic mobile and English desktop screenshots inspected. Corrected responsive photo quality verified visually and by image attributes/current source.

No new routes, paid services, domains, deletions or account effects.
