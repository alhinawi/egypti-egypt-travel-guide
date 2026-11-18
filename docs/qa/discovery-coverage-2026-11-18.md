# Sourced discovery coverage

Audit: every one of the 27 governorates, 4 place categories, 13 vibes and 2 documented eras already has published entries. The gaps were sparse or missing discovery matches, not empty top-level collections. This batch improves those matches without creating fictional places or padding every site with every tag.

Ten existing places receive source-backed editorial tags. Food & coffee grows 1 to 5; Lively 1 to 3; Gardens 2 to 4; Arts & culture 2 to 6; Museums 7 to 10. Crafts grows 4 to 5. All 154 place entries, routes and photographs remain. New regression tests prevent any top-level category, vibe, era or governorate becoming empty.

Food now includes documented park restaurants, Hurghada Marina dining and Dahab's seafront cafes/Friday Market. Three food sections replace generic regional food suggestions with exact setting-based guidance and honest checks for ingredients, current menus and operating conditions. No prices, stall names, schedules or bookings are invented.

Gardens now includes Al-Azhar Park and the Qanater gardens. The Qanater see section describes the actual garden setting and separates it from working barrages. The irrigation ministry's 2020 account is historical evidence of the garden layout, not proof of today's opening status. The governorate also reported garden visitors in July 2025. Manial Palace is deliberately NOT tagged Gardens: the current ministry rules explicitly say the garden is not within the tour. Its article now makes that limitation clear.

Arts now includes the Coptic Museum's icons/manuscripts/woodwork, the Museum of Islamic Art's decorative collection, Manial's architecture and Gayer-Anderson's furnished historic houses. Coptic Museum, NMEC and Manial also become discoverable as museums.

The four previously sparse vibe collections receive bilingual editorial introductions in their existing headers, not an extra oversized filter or content panel. Titles reflect the chosen vibe. Existing source links remain on the place articles; no visible photo captions were added.

## Checked primary sources
- Park operator: https://azharpark.com/ - gardens, fountains and outdoor dining.
- Ministry: https://egymonuments.gov.eg/en/museums/manial-palace-museum/ - museum, decorative architecture and garden-tour exclusion.
- Ministry: https://egymonuments.gov.eg/en/museums/the-coptic-museum - icons, manuscripts, woodwork and frescos.
- Ministry: https://egymonuments.gov.eg/en/museums/museum-of-islamic-art/ - decorated ceramics, manuscripts and carved wood.
- Ministry: https://egymonuments.gov.eg/en/museums/gayer-anderson-museum/ - linked historic houses, furnishings and collections.
- Museum: https://nmec.gov.eg/main-gallery/ - museum gallery spanning Egyptian civilization and heritage.
- Tourism authority: https://www.experienceegypt.eg/en/city/33/dahab - beachfront dining, local artisan market and homemade snacks/baking.
- Marina operator: https://hurghada-marina.com/ - boulevard, outlets and restaurants.
- Irrigation ministry, May 2020: https://www.mwri.gov.eg/?p=12228 - Qanater gardens, lawns, mature trees and paths.
- Governorate, July 2025: http://www.qaliobia.gov.eg/SitePages/Events_Disp.aspx?ID=5635 - visitors to the gardens/waterfall area.

## Validation
Typecheck and production build, 76 unit/API/contrast tests; targeted Arabic/English discovery routes and unchanged filter/history/article behavior. Broad regression runs exposed two stale tests: a pre-12-profile guide expectation and the older reset-all expectation superseded by the governorate-scoped reset feature. Their assertions now reflect those shipped behaviors, without changing behavior to satisfy a test. A hardcoded coastal review-date assertion also now allows later source reviews while preserving the original minimum date.

Still honest: 39/154 entries have supported shopping content and 146/154 have histories. Natural sites do not receive invented historical dates or shops. A user's combined filters can legitimately have no matches; the existing recovery UI remains rather than fabricating results.
