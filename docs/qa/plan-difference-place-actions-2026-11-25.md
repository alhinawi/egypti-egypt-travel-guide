# Plan difference inspection and shortlist, 2026-11-25

Shared and unique plan-stop groups now offer exact-group photograph inspection, individual enlarge and independent existing place saves. Cards without eligible photos still have their named article/day links and save action. Group membership/order, published-day links and comparison URL/filter behavior are unchanged. No new content/photos/API/storage/shared-viewer changes; Tailwind only.

Build/typecheck/298 unit tests passed, including exhaustive ordered-plan-pair photo-scope tests.18 new browser checks cover exact viewer scope, independent saves, URL/read-only behavior, removal teardown, all36 unordered plan pairs in AR/EN,320/390/600/601/800/801/1280 widths, doubled text on new controls, action separation and print.16 retained difference checks plus36 retained comparison-viewer checks passed.360 theme/width/language/save-state cases passed, minimum contrast9.07,48px targets,3px focus. Actual AR390/EN1280 pixels and decoded mobile viewer inspected.

Harness corrections: viewer strip uses data-place, not the initially guessed data-photo-id. Print hides the enclosing comparison; an existing child can retain computed display:block while not visible. The matrix now checks the new action's explicit print hide and retained tests check actual invisibility. Screenshot prep first scrolls a lazy image into view to decode, then returns to the group heading. No product assertions were weakened.

Release gates: actual green PR CI, normal merge, exact-main replay, clean exact-main Pages production, canonical/immutable replay/parity and actual canonical pixels. Earlier intermittent navigation/control/focus and physical rapid-input shared-viewer caveats remain unknown, not fixed.
