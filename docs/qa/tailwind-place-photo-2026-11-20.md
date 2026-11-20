# Shared PlacePhoto Tailwind migration

2026-11-20, batch B148.

## Scope
- PlacePhoto and GovernoratePhoto card/hero shell defaults and image sizing, crop, tint and corners now use shared Tailwind classes.
- Removed 15 legacy selector rules, preserving specialized parent overrides and unused caption rules outside this slice.
- No source URLs, images, alt text, responsive srcsets, content or state behavior changed.

## Verification
- Typecheck, production build and all 124 unit tests pass.
- 80 new browser tests cover 1,800 exact original-baseline cases: explore cards, governorate directory cards, Cairo profile hero, Cairo programme hero and saved-empty photo, AR/EN, 18 themes, eight widths and print at 390/1280.
- Original baseline captured from main f634174 before migration. Full figure/image subtree and computed geometry, typography, border, crop and background match exactly.
- 14 existing keyboard, print, governorate filter and gallery accessibility regressions pass. Total 94 browser tests.
- Actual mobile Arabic and desktop English screenshots inspected in directory/profile/programme/saved-empty contexts. APIs blocked. No live account reads or writes.
- Initial proposed homepage support section was found to be inactive legacy code before edits. It was left unchanged; this batch targets live photo contexts instead.
