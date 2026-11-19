# Credits without a licence destination

Date: 19 November 2026

## Change

A licence label with an empty supplied URL now renders as text instead of an empty anchor. The six affected Public domain labels no longer offer a misleading click or keyboard stop that reloads the credits page. Existing licence text, creator names, original-file links and all 323 image credits are unchanged. No licence destination was invented, and no rights claim was added or revalidated.

## Verification

- 101 unit tests, typecheck and static/API build passed.
- 14 browser tests passed, including 4 new AR/EN mobile/desktop cases covering every affected source, nonempty link inventory, keyboard order, retained linked licences and clear-search recovery.
- Additional direct checks: 24 filtered cases across all six sources, 4 complete credit inventories and 12 mobile print cases.
- All six unlinked labels remain visible and have no link underline. Keyboard Tab moves directly from the search input to the matching original-file link. Linked licences retain their destination and underline.
- Inspected actual AR/EN mobile and EN desktop results with decoded photographs and focused original-file links. No horizontal overflow.

Affected source records: Tanis, Port Fuad, Great Bitter Lake, Lake Bardawil, Beni Hasan and Dendera. Their original-file destinations are preserved verbatim. This is a semantic UI repair, not a source or licence audit. No external source-site requests were needed.

Frontend API requests blocked. No live D1 reads, account QA, backend or production data changes.
