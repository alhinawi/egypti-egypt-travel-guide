# Place to trip-plan connections, 2026-11-20

Nineteen attraction pages now include a photo-led section linking to published plans that explicitly list the attraction. Each card shows the existing plan title, total day count, programme/outline type and exact day links. Links open the relevant day anchor introduced in B168, rather than leaving the reader to find the attraction in a long plan.

Membership comes only from the existing itinerary day place IDs. No geographic inference, new itinerary, nearest-place claim or booking promise is added. The attraction's existing sourced photograph appears once above the plan cards, with responsive image selection. Empty connections produce no section. All styling uses Tailwind.

## Checks

- Production build, typecheck and 127 unit tests pass.
- A unit test checks the exact plan and day membership of every catalog place, including zero matches.
- 34 browser cases cover 16 new connection checks plus the existing trip-day navigator and gallery access checks.
- Every connected attraction in AR/EN is checked against all exact plan/day links. Keyboard and direct touch open the correct day; heading and anchor remain visible below the header. Names, photo source paths, print exclusion, reduced motion and no document overflow are covered.
- 648 AR/EN, 18-theme, six-width and three-attraction cases cover Giza pyramids, Philae and Lighthouse. Minimum measured text contrast 5.4599:1, day links at least 44px tall.
- Actual Arabic mobile and English desktop pixels inspected for photographs, readable card hierarchy, spacing and clipping.

No factual data changes, account effects, purchases, new domains or deletions.
