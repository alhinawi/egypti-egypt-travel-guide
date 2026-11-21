# Saved-place photo board

Visitors can switch their matched saved places from the existing cards to a photo board. It retains the current saved-place ordering, search and governorate filters. Saved trip cards stay unchanged. Coverage is shown as suitable photographs / matched places, so saved places without a suitable photo are not silently counted as photographed. A no-photo explanation and return-to-cards action preserve access to all items. Switching views does not edit saves or write account data. Reload restores the cards default, and print retains complete place cards.

No new photographs or place claims. Suitability excludes missing, contextual and unsuitable opening photos and North Sinai, consistently with the atlas. No persistent view preference, new storage or API mutation. New/touched presentation uses Tailwind.

## Local verification

- Production build, typecheck and 157 unit tests pass.
- 52 browser cases pass, including 18 new cases and existing saved board / governorate navigation regressions.
- 36 focused repeated new cases pass.
- AR/EN, widths 360, 390, 600, 601, 900 and 1280: exact photo membership, bilingual alt text, correct article links and coverage, governorate and search combination, keyboard toggle/focus, return-to-cards focus, empty reset, unchanged saved data and print fallback.
- Guest and signed-in fixtures prove view/filter operations issue no writes. Physical touch toggles and return focus pass in both languages. A saved place without a suitable photo stays available in cards. Reload is non-persistent.
- 216 AR/EN, 18-theme, six-width checks pass: 2/3 responsive columns, no horizontal overflow, 44px actions, checked text contrast at least 5.4599:1.
- Actual Arabic mobile and English desktop pixels inspected: image-first grid, clear active view, bilingual metadata, aligned layout and readable text. Screenshots use isolated QA saved lists, not the owner's account.

Production metadata, immutable and canonical tests and screenshots are verified after normal PR merge and reported separately.
