# Matching search photo board, 2026-11-25

Whole-guide search now offers a collapsible visual board over the existing exact matching place-photo collection. Six cards initially, six more per explicit expansion. Named stories, governorate labels, enlarge and independent existing save actions. Query/type changes reset the board and expansion. No search count/order/URL/storage/API/shared-viewer/source changes; no new photographs or global CSS. Tailwind only.

Fresh build/typecheck/296 unit tests passed. 20 new AR/EN checks: exact membership/order, progressive expansion, URL preservation, keyboard viewer close/focus, independent save/remove, query/type/clear reset, failure fallback, 320/360/390/600/601/900/901/1280 widths, target size and no overlapping actions. 100 retained search/query/photo/save/gallery checks passed. 360 theme/language/width/save-state cases: minimum contrast 9.07, targets48px and focused outline3px. Print hides the board. Actual AR390/EN1280 pixels inspected with decoded original sourced photographs.

First layout run exposed conflicting responsive utility order at <=600px, fixed with an explicit narrow one-column override, not an assertion relaxation. One long combined test run hit the execution time limit and left a stale local HTTP server; subsequent connection-empty failures were local server failures. The stale server was stopped; complete bounded suites passed unchanged afterwards.

Release requires green PR CI, normal merge, exact-main replay and clean exact-main Pages production, then canonical/immutable replay, source parity and canonical pixels. Prior intermittent navigation/control/focus and physical rapid-input shared-viewer caveats remain unknown, not fixed.
