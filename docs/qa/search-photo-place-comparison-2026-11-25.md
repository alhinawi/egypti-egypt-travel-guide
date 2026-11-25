# Search photo place comparison, 2026-11-25

The matching search photo board now supports a temporary pair of places, with photographic preview, independent choose/remove controls, clear, and the existing factual two-place comparison link. It never changes catalog membership/order, saves, API data or storage. The board's query/type key resets selection with search state, while expansion and collapsing preserve it. Two chosen places disable only unchosen choices. Reuses SavedPhotoComparison with source-specific explanation and heading ID; default saved-board wording/ID remain intact.

## Checks before PR

- Build, typecheck and 298 unit tests passed.
- 16 new AR/EN browser checks: keyboard select, two-place cap, ordered exact link, replacement from expanded items, remove/clear focus, viewer focus/selection preservation, independent save toggle, collapse preservation, query/type reset, one-result incomplete state, image failures, widths 320/390/600/601/900/1280, targets and link focus, actual destination navigation.
- 30 retained search-board and saved-pair checks passed.
- 88 retained search/search-photo/save/text200 checks passed.
- 18 retained saved-photo-board and 64 retained place-comparison/photo checks passed.
- 360 theme/language/width/selection matrix cases passed, minimum contrast 11.50, 48px targets and 3px focus, no horizontal overflow, board hidden in print.
- Actual local Arabic390 and English1280 screenshots inspected: decoded pair thumbnails, readable labels and distinct controls, photographic board preserved. Capture helper waits for smooth-scroll completion; early screenshots were at wrong scroll position, not claimed as pair previews.

Existing unrelated rapid-input/intermittent faults and CSS-zoom-at-320 header overflow are not fixed or covered by this change. No new photos, global CSS or shared viewer modifications.
