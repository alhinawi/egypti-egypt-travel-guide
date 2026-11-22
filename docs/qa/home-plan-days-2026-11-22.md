# B252: homepage published-day previews

## Scope
- Replaces only the homepage's existing three-plan section, preserving the same `itineraries.slice(0,3)` order, plan titles and trip save identities.
- Every card previews a day from its own published plan. Initial selection is the first day with a suitable own-place photograph, stated in the section introduction. All days remain selectable, including days with no named stops.
- Exact published stop order, day title, note and focused-day/full-plan/article links. No new external facts, timings, travel estimates, ratings, bookings or route claims.
- Photographs use the existing suitable non-contextual cover metadata through `tripPhotoPreview`. No new media or data. An unavailable image becomes a text fallback. An empty day never borrows another day's photographs.
- Local preview state only, no URL or save writes from day selection. The existing shared SaveButton remains the only save action, with plan-specific accessible names.
- First photographed-day article/day/plan links work without JavaScript. Preview controls are disabled until handlers are ready.
- Tailwind utilities only. Hero, destination cards, moods, exhibition, shared gallery, API and global CSS unchanged.

## Checks
- Production build, both TypeScript projects and all 287 unit checks pass.
- Eight new AR/EN browser cases cover every one of the 14 published days in the three cards, exact image and text identity, exact focused-day navigation, keyboard activation/focus, image failure, no-JavaScript and delayed-handler states, URL/storage preservation and no save/API writes while previewing.
- 66 retained homepage cases pass. Combined with the eight new cases, the final `home-*.spec.ts` run is 74 passing cases.
- 576 combinations: eight widths (360,390,600,601,900,1000,1001,1280), two languages, initial/last-day states, all 18 themes. Minimum contrast 4.6067, minimum target height 44px, visible focus at least 3px, no document horizontal overflow.
- Inspected local desktop EN1280, tablet EN900 and phone AR390 screenshots. A single-stop day spans both photo columns; no unrelated image fills the space. Full-width day and plan exits stack readably on phones.

## Explicit source-test maintenance
- The shared magazine-heading audit now counts the moved heading in `home-plan-days.tsx`, preserving the original total of four headings.
- The removed static homepage trip-card source assertions are replaced with assertions on the mounted day-preview component, shared heading and Tailwind surfaces. Existing global legacy trip-selector exclusions are retained alongside new day-card exclusions.
- No retained browser assertions were removed or weakened. Early new-test failures were fixture assumptions about the first three plans and a keyboard test that tried to focus a disabled pre-hydration control; expectations now come from the actual catalogue and explicitly wait for readiness.

## Release proof
Release completion is reported separately with actual PR/main checks, clean exact-main production deployment, canonical and immutable replay, byte parity, inspected canonical pixels and credential/preview cleanup. This file does not itself assert a future deployment succeeded.
