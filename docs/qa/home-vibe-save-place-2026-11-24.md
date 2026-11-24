# Home vibe card saves

Each displayed place card has a separate named bookmark control opposite its existing enlarge button. Uses existing SaveButton, place IDs and saved state, including cross-view updates. Photo links and fullscreen action remain separate. Tailwind ink/paper overrides keep both states readable; 46px targets, 3px focus and focus reveal follow the card rail. No content, photo, ordering, API, saved-format, shared-viewer or global CSS change.

Build/type296unit pass. New24 cases include AR/EN8widths360/390/520/600/601/800/900/1280, all13vibes first/finalsets, independent keyboard/touch toggles, unchanged article/viewer, noJS/print, prior saved items, reload, set/vibe changes and exhibition cross-view sync. Retained68 language-selected photo/entry/sets/rail cases pass. 1152 theme/width/language/first-last/saved-state cases: contrast11.50,minheight46,focus3,nooverflow. Actual local AR390/EN1280 pixels inspected.

Initial probes found a real focus-reveal need, now handled locally on save focus. Test harness corrections: scope dialog to viewer and select gardens by key, not first chip. A combined retained run exceeded command window; full disjoint AR36/EN32 groups rerun passed without assertion relaxation. Existing stale whole-home baseline and physical rapid-input viewer caveats unchanged.

Release requires actual green CI, normal merge, exact-main build/browser/matrix, clean exact-main production, both-origin replay/parity and canonical pixels.
