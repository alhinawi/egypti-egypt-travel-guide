# Searchable saved photo board

## Visible change
Saved collections now have search, type selectors and a recovery state when no items match.

- Search both languages at once across saved place/plan names and their governorate/destination names. Ignore case, surrounding whitespace, Arabic diacritics and common alef variants.
- All / Places / Plans buttons show collection counts and expose pressed state. A polite atomic result count reports matched items against the complete collection.
- No-match recovery restores all filters and returns focus to search. Original first-save guidance and loading/account-sync safeguards remain unchanged.
- Existing sourced place/plan photo cards and save controls reused. Plan numbers stay stable when filtering.
- Search and filter state is local view state only. It does not delete, sync or change saved data.
- Tailwind-only new controls, 44px targets, focus ring, responsive wrapping and theme-token colors.

## Verification
- Typecheck, production build and 124 unit tests pass.
- 58 browser cases pass across completed bounded suite runs: 18 new saved-board cases, 16 regional discovery and 24 original empty-state cases.
- AR/EN at 360, 390, 600, 601, 900 and 1280px: mixed collection, plan-only, Arabic diacritics/whitespace, area search, English case-insensitivity, no-match recovery, keyboard focus/activation and no page overflow.
- Guest and signed-in mocked collections: filtering makes no save writes and leaves stored data unchanged. Removal updates counts and returns to original first-save guidance when collection becomes empty. Real touch filter/recovery tested.
- 648 theme/width/state cases: AR/EN, 18 themes, 6 widths, all/plans/no-match states. Selected controls, input, placeholder, helper, status and recovery-button contrast at least 5.4599:1; correct counts, no overflow and 44px button height.
- Actual Arabic mobile, English desktop and mobile no-match pixels inspected.
- All account requests mocked, no real account or saved-data changes.
- Production closeout repeats new board tests and the 648-case matrix on immutable and canonical hosts, validates clean exact-main metadata/canonical mapping and inspects canonical screenshots.
