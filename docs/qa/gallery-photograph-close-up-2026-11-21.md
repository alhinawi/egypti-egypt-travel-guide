# Gallery photograph close-up

Place galleries and the home exhibition fullscreen viewer now offer fit and 2x viewing. Zoom centers a scrollable surface around the existing source photograph. It does not generate or enhance detail. Keyboard +/= zooms; -/0 fits. While the enlarged stage is focused, arrows, Home/End and page keys pan rather than switch photographs. Elsewhere the existing photo navigation works. Changing photo or closing returns to fit. Image errors return to fit and disable zoom until retry or another photograph.

The thumbnail navigator, fit-mode swipes, modal focus return and page scroll lock remain. The new control/status use Tailwind and bilingual labels. No account writes or new dependencies/assets/facts/domains.

## Checks

- Build, typecheck and 167 unit tests pass.
- 86 browser cases, including 20 new zoom cases plus the gallery and home-exhibition regressions. AR/EN, six widths from 360 to 1280px. Zoom doubles the image surface, centers scroll, allows focused pan without photo navigation and resets after buttons/thumbnails/close. Single photo galleries, touch, retry/error and home selected-photo preservation are covered.
- 216 theme/language/width checks: new text minimum contrast 12.6254; viewer buttons at least 44px; no horizontal overflow. Viewer has fixed dark colors across themes.
- Inspected actual AR390 fit, AR390 zoom and EN1280 zoom pixels. Source-resolution limits remain visible rather than synthesized.
- Existing broad status assertions now target the original photo-count status specifically, because zoom adds a separate live status.
