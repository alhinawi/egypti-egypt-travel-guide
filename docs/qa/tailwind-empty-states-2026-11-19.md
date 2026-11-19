# Shared empty-state Tailwind migration

November 19, 2026. Presentation only, no content, filter logic, account or API change.

- `empty-state-styles.ts` owns the shared panel, heading, paragraph, SVG and photo styles used by all three live empty-state consumers: saved items, encyclopedia no matches and governorate no matches.
- Removes eight legacy selector branches without changing other members of the shared tint/color rule.
- Keeps the original 570px maximum width, 65px/20px padding, margins, tint/accent colors, 14px corners and clipping. Saved photo remains 210px tall with the same negative margins and crop.
- Keeps 23px headings, original paragraph margins, and the separate 17pt Arabic print heading override. Existing SVG margins apply to the saved-link arrow too, matching the previous rule.
- No wording, destination, count, reset, focus, loading or save behavior changes. No new photography, source review or rights audit.

## Verification

- 103 unit tests, typecheck, static and API build pass.
- 34 browser tests, including 24 new AR/EN consumer/width cases, plus existing filter reset, governorate search and trip save behavior, pass.
- Exact computed-style/content parity across 432 screen and 216 print cases: every live consumer, AR/EN, 390/600/601/1280px, all 18 supported themes. Includes all panel descendants and saved photo dimensions.
- Saved destination checked; both no-match reset actions restore results and focus the search field. No horizontal page overflow.
- Actual mobile AR/EN and desktop pixels inspected. Native actions remain visible and usable when scrolled into view; long mobile panels keep their original document flow.
- APIs blocked or mocked for front-end checks. No live D1 or account QA.
