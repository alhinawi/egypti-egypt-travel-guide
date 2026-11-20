# Destination place finder,20Nov2026

## Visible outcome
All8existing destination pages now have photographic category choices with exact place-entry counts,local bilingual name/description search,live result counts and reset controls. This replaces the plain unfiltered place list,retaining every catalog entry in original order. Cairo's40entries can be narrowed without reading the full list.

Only nonempty categories appear. Covers are existing sourced photographs belonging to a place in that exact destination/category;contextual or unsuitable hero images are excluded from category covers. The explanatory text distinguishes reading choices from nearest-place rankings or one-day routes. No new factual travel claims.

Arabic/English,Tailwind,new controls44pxminimum. Category selection toggles,all-categories preserves search,reset clears both and focuses the search field. Search normalizes Arabic diacritics/letters and surrounding spaces. Filtering does not change saved items. Interactive finder excluded from print,consistent with existing non-trip place-card print exclusion.

## Verification
- Build,typecheck132unit32browser pass,including16new finder cases and existing trip-finder regressions.
- All8destinations exact category/result IDs and cover-source paths checked AR/EN. Browser image decode confirms actual source photos load.
-648AR/EN18theme6width3destination cases,min measured text contrast5.4599:1,no page overflow.
- Keyboard,touch,bilingual name search,empty state,reset focus,category toggles,44pxcontrols,print exclusion,reduced motion checked.
- Actual Arabic390pxandEnglish1280pxscreens inspected for photographic category layout,search,results,readability and clipping.
