# Footer and reference links: Tailwind

Date: 19 November 2026

## Scope

Moved the shared site footer and About reference-link layout to a footer-styles module. Removed 22 CSS blocks plus five branches from shared selectors, 28 legacy selector branches in total. All text, link destinations, hover behavior, existing colors, responsive spacing and print hiding are preserved.

## Verification

- 101 unit tests, typecheck and static/API build passed.
- 44 browser tests passed, including 12 new footer/reference cases plus 32 information-page tests.
- Exact before/after style, text and destination parity across 48 AR/EN screen cases and 16 print comparisons: widths 390/600/601/900/901/1280 and four themes.
- Footer information links keep their four language-specific destinations; all ten About source links retain their destinations, new-tab and noreferrer attributes.
- Hover still underlines links; wrapping, mobile margins, 1240px maximum width and print hiding are unchanged. About references remain visible in print.
- Inspected mobile AR/EN footer and desktop EN footer. RTL element screenshots can crop incorrectly; full-viewport evidence is checked before closeout.

Existing low-contrast footer paragraph/byline colors are preserved rather than mixing a design change into this migration. No content, policy or backend changes. Frontend API requests blocked; no live D1 reads or account QA.
