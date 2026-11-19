# Photo credits: Tailwind

Date: 19 November 2026

## Scope

Moved credits search label/input and attribution rows to Tailwind. Removed 11 legacy CSS blocks (13 selector branches). No creator names, licences, original-file links, images, search normalization or external-player disclosures changed.

## Verification

- 101 unit tests, typecheck and static/API build passed.
- 10 browser tests passed, including 8 new AR/EN layout and interaction cases at 390/600/601/1280.
- Exact before/after style, text, count and link parity across 24 all-results/filtered/no-results cases and 4 print comparisons. Font readiness awaited after print media changes.
- All 323 image credits return after empty-search recovery; clear search restores focus to the search input. The existing source-filename query still returns the matching creator's record.
- Inspected AR/EN mobile attribution rows and EN empty-search state. Photographs, underlined attribution links and clear-search focus ring remain readable and unchanged. No horizontal overflow.
- Preserved existing attribution green rather than silently changing the design during this migration.

Frontend API requests blocked. No live D1 reads, account QA, backend or production data changes.
