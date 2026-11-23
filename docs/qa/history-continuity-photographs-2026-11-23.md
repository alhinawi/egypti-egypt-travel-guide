# Article history-continuity photograph inspection

## Scope

Each existing cross-governorate era group on an article now has a whole-group photograph button and a separate enlarge button on each existing card. The existing documented-era selection, ordering, exclusion of the current article/current governorate/North Sinai, story links, full-era link and atlas exit are unchanged. The viewer includes only displayed picks in that exact group, not the whole era or current article. It is not a complete timeline or visit route. No catalogue, image assets, API, account, storage, global CSS or shared viewer changes. All styling additions use Tailwind.

Closing restores the exact opener without scrolling. Each image uses its own existing photograph, alt, place name, article URL and group index. The viewer selection does not write a URL or saved state. No-JavaScript users retain article and collection links, with viewer entry disabled.

## Checks

- Build, TypeScript and 296 unit tests pass.
- 22 new Playwright cases: exhaustive AR/EN inspection of all 26 eligible articles and all 26 existing groups, every photograph/name/alt/article/index, last-photo entry and exact opener; six widths per language (360/390/600/601/900/1280), Home/thumb/zoom/close/focus/page fit/print; image retry with saved-state preservation and no API writes; mobile touch entry, separate synthetic swipe advance and fresh-open article navigation; no-JavaScript links/disabled entry.
- 34 retained assertions: all 16 unchanged history-continuity cases plus 18 unchanged onward-viewer edge cases.
- 864 theme/language/width/state checks: 18 themes, two languages, eight widths and preview/viewer/zoom. Minimum contrast 6.07, target 44px, focus 3px, no page overflow. Expected horizontally scrollable viewer thumbnails excluded from page-bound target check.
- Four local actual screenshots inspected, AR390/EN1280 group and viewer: photo/name pairs, card layout, copy wrap and photo fit readable.

## Existing input caveat

Immediate synthetic swipe-to-article tap remains unpassed from earlier shared-viewer work. It also reproduces on baseline viewer and plain HTML without React/application JavaScript, while a one-second diagnostic pause allows the click. Physical-device impact remains unverified. No production delay or shared-viewer patch is included. The passing touch test separates swipe advancement from fresh-open article navigation; it is not evidence that the immediate chained path passes.

## Release proof

Require normal PR merge after actual CI success, exact-main build/type/unit and new/retained/matrix replay, successful clean exact-main production, canonical and immutable replay, exact-main HTML/assets/photo parity (only independent build ID may differ), and actual canonical screenshot inspection before declaring live completion. Credentials and preview server removed at closeout.
