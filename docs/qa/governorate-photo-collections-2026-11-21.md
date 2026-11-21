# Governorate place-photo collections,21Nov2026

## Visible outcome
Governorate profiles with eligible atlas photos now bridge their overview to actual place stories. Three source-photo cards show published place names,categories and original article links. Exact eligible-photo counts,scoped atlas links and a focusable jump to all published place entries connect the collection to deeper browsing. This is separate from the governorate landscape/detail gallery. Profiles without eligible photographs omit the collection. Existing travel cautions remain above the collection.

Existing catalog/photos only. Reading suggestions,not nearest-place recommendations,a route,access claims or new source facts. No account/storage writes or sending. AR/EN,Tailwind,responsive cards,keyboard/touch,44pxlinks and print exclusion.

## Verification
- Build,typecheck147unit tests pass.
-16new browser cases verify all27governorates in AR/EN,exact eligible membership/counts/links/names/categories/alt,absence with no eligible photos,6widths,responsive columns,actual source-image decode,focusable jump below both headers,scoped-atlas recovery,touch and print.
- Existing governorate chapter and gallery regressions included.
-648AR/EN18theme6width3governorate checks pass,min text contrast5.4599:1,no overflow,44pxlinks.
- Actual Cairo/RedSea AR390/EN1280collection pixels inspected. Existing chapter offset lands around185px below both headers;the new test checks the existing160..210range instead of assuming a100pxsingle-header offset.

## Post-merge correction
A cold-font mobile chapter jump intermittently shifted after the original scroll,including a small sticky-nav overlap. Reproduced in focused reruns. Follow-up waits for fonts and two layout frames before focus/scroll,and recovers direct-hash/history jumps the same way. Request sequencing prevents an older pending jump from overriding a later one. Added AR/EN delayed-font regression tests;kept existing geometry assertions.

The same investigation caught vertical movement from the chapter rail's focus handler,which could move a link under the pointer during a click. The rail now recovers focus horizontally only. Added AR/EN no-vertical-movement tests.24repeat checks passed after both corrections. Settled-position assertions poll the unchanged geometry bounds rather than sampling the native pre-hydration anchor before recovery finishes. The all27page sweep has a60second test budget for its54page-language visits across the two tests;no checks removed.
