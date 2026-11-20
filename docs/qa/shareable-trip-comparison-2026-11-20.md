# Shareable trip comparisons,20Nov2026

## Visible outcome
The photographic trip comparison now has a bilingual copy-link panel. Its link restores the selected duration,starting destination and up to2catalog plans. A readonly,focused,selected field handles blocked clipboard access. Nothing is sent automatically. No account state,saved items or unrelated query parameters are included.

Initial page load and back/forward read the URL. Invalid values and unknown plans are dropped,duplicate plans removed and choices capped at2. Filter resets preserve comparison;clear comparison updates the link. All styling on the touched panel is Tailwind. Direct comparison links clear the sticky header. The copy panel is hidden in print.

## Verification
- Build,typecheck and135unit tests pass. Parser/link roundtrips cover every catalog plan,both languages,invalid parameters,duplicates,limits and unrelated-data exclusion.
-50browser tests pass,including18new recovery/copy/fallback/touch/history/invalid-link/direct-anchor/print cases,plus existing finder/comparison regressions.
-648AR/EN18theme6width3comparison-state checks pass,including fallback field readability,44pxbuttons,no page overflow,min measured text contrast4.742:1.
- Actual Arabic390pxandEnglish1280pxpixels inspected for photo layout,readability and clipping.
- No factual catalog changes,new images,external messages,purchases or new services.
