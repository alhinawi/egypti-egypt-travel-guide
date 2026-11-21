# Atlas category photograph choices

Four compact photograph cards now sit inside the existing atlas filter panel: Culture, Sea, Nature and City & markets. They operate the existing category state and dropdown, combining with region, era, governorate and search and retaining the existing URL/reload/history contract. Selecting the active card clears only category. Counts are explicitly for suitable photographs in the full category before other filters, not live access or filtered results.

Counts and covers are derived from the current eligible atlas: 81 Culture, 11 Sea, 22 Nature, 31 City & markets. These partition its 145 suitable-photo places. No new photos, facts, storage or account writes. New styling is Tailwind. The four choices are kept in the filter panel rather than another long collection section.

## Checks

- Production build, typecheck and 163 unit tests pass. Whole-category partition/count/cover and combined URL invariants included.
- 100 browser cases pass: 14 new category-choice cases plus 86 atlas/swipe/era/region/router/filmstrip regressions. Another 28 focused repeats pass.
- AR/EN, six widths: exact labels/covers/alt/counts, keyboard/focus, card/dropdown synchronization, toggle clearing, governorate-era-search combination, empty reset, reload/history and print hiding. Real touch selection/history passes both languages.
- 216 AR/EN, 18-theme, six-width checks pass: 2/4 responsive columns, 44px controls, no horizontal overflow and minimum checked text contrast 6.0718:1.
- Arabic mobile and English desktop actual pixels inspected: compact photo choices, clear selected state, readable counts and integrated filter-panel layout.

Exact-main deployment, immutable/canonical browser checks and screenshots are verified after normal green-CI PR merge and reported separately.
