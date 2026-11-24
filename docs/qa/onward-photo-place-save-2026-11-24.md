# Save suggested places from article photographs

Scope: each same-governorate suggested article photograph gets an independent named-place save action opposite its existing enlarge action. Uses the existing SaveButton and place IDs. No recommendation selection/order, rail navigation, story destinations, photographs, viewer, API, storage model, content, global CSS or theme change. Tailwind utilities only.

## Checks before merge

- Typecheck, build and 296 unit tests pass.
- 24 new browser checks: Arabic/English at 360, 390, 520, 600, 601, 800, 801, 900 and 1280px. Named save/remove labels, keyboard and touch activation, independent controls, no navigation, persistence after reload, save state through rail and viewer use, existing saved place/trip preservation, print and no-JavaScript behavior.
- Named saves checked on every suggestion in six representative governorates' article rails.
- 76 retained checks: article stories, scroll range/navigation, touch/swipe, resizing, reduced motion, no JavaScript, viewer entry/keyboard/focus/zoom/retry and every eligible article's exact photograph selection. The initial combined run exceeded the command time limit. All groups rerun to completion with no changed assertions or product changes.
- 1,728 visual-geometry/theme cases: Arabic/English, eight widths, Giza/Cairo/Luxor rails, first/last card, 18 themes. Saved/unsaved states, minimum 46px target, 3px keyboard focus, minimum contrast 11.50, controls within photos and separate from enlarge, visible focused target and no document overflow.
- Actual local Arabic390 and English1280 pixels inspected: photographic cards, distinct save/enlarge controls, story and rail controls readable. Canonical screenshots and exact-main checks required after deployment.

## Release gate

Normal PR merge only after actual CI success, followed by exact-main clean production deployment, canonical/immutable HTML/CSS/JS/photo byte checks, new and retained browser checks, theme/geometry checks, unmocked photograph decode/viewer/close/focus and inspected canonical screenshots.

## Existing limits

Retained rapid-input viewer physical-device caveat is unchanged. No speculative shared-viewer patch. Previous unrelated home-to-search intermittent probe remains unexplained. No purchases, hosting/domain/plan changes or deletions.
