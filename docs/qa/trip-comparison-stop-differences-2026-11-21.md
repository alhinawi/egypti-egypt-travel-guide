# Exact published-stop differences in two-plan comparison

## Visible outcome
Two selected plans show their shared listed places and places listed only in each plan. Source-photo cards link to each article and to all matching published days in each relevant plan. Each place is counted once, preserving its source-list order. No shared places and no unique places each have explicit empty states. One or no selected plan never fabricates a difference view. Removing or clearing a plan removes the view and retains existing comparison focus behavior.

This compares exact published list membership, not suitability, access, visit capacity, routes, timing or distance. Absence from one published list is not a claim that a place is closed or incompatible. Existing photos and content only. No account/storage writes, new domains, purchases or dependencies. New presentation uses Tailwind and Egyptian AR/EN.

## Checks
- Build, typecheck and 176 unit tests pass. Unit properties cover all 81 ordered plan pairs, partitions, no duplicates, reversed membership and repeated source-day stops without mutations.
- 52 focused browser cases: 18 new difference cases, 16 comparison and 18 share/recovery checks. New cases cover all 36 distinct pairs in each language, exact card membership/counts/day links, touch, keyboard, article/day return, reload, filters, remove/clear, empty groups and print.
- 38 extra trip-place finder, photo preview and language checks pass.
- 216 theme/language/width cases, no horizontal overflow, links at least 44px high, minimum sampled text contrast 6.071833.
- Inspected AR390 and EN1280 shared-place photos and EN1280 unique-place groups. Sourced photos, plan titles and exact matching days are readable. Cards without eligible photos remain text-only.

Final exact-main deployment and immutable/canonical verification are recorded in the shipment report.
