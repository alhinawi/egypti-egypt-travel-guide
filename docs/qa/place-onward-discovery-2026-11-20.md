# Place onward discovery, 2026-11-20

Place pages now end with a photographic reading rail for other places in the same governorate, plus a link to the governorate guide. Selection uses shared existing editorial tags, stable catalog order on ties, and a maximum of six cards. It excludes the current place, reference-only North Sinai entries, missing photos, contextual photos and photos marked unsuitable for a hero.

The bilingual explanation explicitly distinguishes these reading suggestions from nearest places or a day route. No proximity, transport, access, availability or itinerary claim is added. All names, categories, governorate membership and source photographs come from the existing catalog. No data or metadata is changed.

## Verification

- Build, typecheck and 126 unit tests pass.
- Unit checks cover every catalog place for exact governorate membership, deduplication, source-photo eligibility, stable shared-tag ordering and reference exclusions.
- 39 browser cases cover 16 new onward-discovery checks plus existing article navigation and gallery accessibility/navigation checks. New checks include bilingual card names, exact image paths/alt text, detail destinations, governorate links, keyboard rail visibility, touch, reduced motion, print exclusion and no document overflow.
- 648 matrix cases span AR/EN, 18 themes, six viewport widths and Giza/Luxor/Alexandria source pages. Minimum measured text contrast 5.4599:1. Last-card focus stays fully visible and browse links retain 44px targets.
- Actual Arabic mobile and English desktop pixels inspected. Fixed inherited border-width behavior before final verification.

No account effects, purchases, paid services, new domains or deletions.
