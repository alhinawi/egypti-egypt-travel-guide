# Encyclopedia browsing shell: Tailwind

Date:19 November2026

## Scope

Moved encyclopedia heading/navigation, show-more wrapper and governorate-directory source links to Tailwind. Removed8legacy selector branches. No text, source URLs, counts, place records, card styles, filtering or pagination behavior changed.

## Verification

-101unit tests,typecheck and static/API builds passed.
-41selected browser tests passed,including8new shell tests and existing filter URL/history/reset,directory layout and search checks.
-Exact before/after full-shell style,text and link parity:16AR/EN encyclopedia/directory cases at390/520/521/1280,plus8print comparisons.
-Show-more keyboard activation expands24to48cards and focuses the first newly added place link. Progress count and button association remain unchanged.
-Original Arabic38px mobile/60px desktop print headings retained,alongside original English32px/56px values.
-Mobile AR/EN headings and show-more control plus desktop EN heading inspected. No horizontal overflow. Directory source links stay underlined with unchanged destinations.

Every frontend API request blocked. No live D1 reads,account QA or production data changes. Sticky navigation hidden only during isolated screenshots;delivered navigation unchanged.
