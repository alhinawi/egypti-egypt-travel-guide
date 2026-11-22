# Saved photographic two-place comparison

Visitors can choose at most two exact places from the current matching saved photo board. Each chosen place appears with its own photograph and name in a temporary pair above the board. Remove, deselect or clear without changing saves. After two choices, an explicit link opens the existing place comparison with just those two exact IDs. No automatic navigation, sending, persistence, best-of ranking or visit route.

Cards remain the default. Returning to cards, reloading or changing matching-place membership resets the temporary pair. Filtering away and back must not resurrect old choices. Query edits that leave membership unchanged do not remove the pair. Reference-only/unsuitable/contextual/unphotographed articles do not gain photo-board buttons. Existing all-card view and save management stay available.

Existing article and enlarge controls, viewer and its keyboard/touch/focus semantics are preserved. No shared viewer change. New selected-photo preview failures show a neutral camera placeholder, retaining exact selected name and exit. Remove/clear in the tray return focus to its stable heading panel. Third choices are disabled at capacity, while selected choices remain removable. No incomplete comparison link is shown. Printing continues to use existing cards, not the photo board.

No catalogue, media, external facts, API, account-save, storage implementation or global CSS changes. Tailwind and SVG only on new/touched surfaces.

## Verification

- Build/type and 288 unit checks pass.
- 10 new AR/EN browser cases: exact pair IDs/own photos/names/exit, zero/one/two choices, third disabled, remove/clear/replace, keyboard/focus, query and area membership reset including filter-out/back, cards/reload reset, signed-in and unavailable API no writes, viewer Escape preserving pair, photo failures, print exclusion and direct touch exit.
- 64 retained browser cases: 12 saved-board responsive cases and 52 remaining saved-board/shared-viewer/comparison cases, unchanged assertions.
- 864 theme/language/width/state combinations: eight widths, two languages, zero/one/two choices and all 18 themes. Minimum contrast 5.4600, target height 46px, focus outline 3px, no document overflow.
- Actual EN1280/AR390 empty/pair pixels inspected. Selected pair photos/names and distinct article/enlarge/select actions readable.
- Review found that render-only membership invalidation could resurrect a pair after filter-out/back. Membership changes now also clear stored component state. New test covers return to full matching set. This is temporary UI state only, not saved data.

Green PR/main CI, normal merge, exact-main production, live replay/parity, canonical pixels and cleanup are verified separately before closeout. Existing rapid synthetic swipe/immediate-thumbnail diagnostic is unchanged and not claimed fixed.
