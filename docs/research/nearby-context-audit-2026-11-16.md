# Nearby-context correction, 2026-11-16

## Problem

The 37 sections added in PR40 used a mixture of Wikidata coordinates and existing hotel-search centers. Some centers were broad or approximate, not attraction locations. A bounding-box check only confirmed that a point was in Egypt. It did not justify decimal-precision attraction distances. In particular:

- Blue Lagoon used an approximate Dahab-town center rather than its Abu Galum location.
- Lighthouse had resolved to a wrong similarly named map object.
- Karnak used a combined Karnak/Luxor-Temple search center.
- Hurghada Desert and Dahab Mountains are broad landscape entries, not single attractions.
- Straight-line ranking selected Giftun and El Gouna across the sea for Ras Muhammad, and remote inland temples for Marsa Alam. A straight-line disclaimer was not enough to make those useful suggestions.

## Correction

All 37 sections are revised, with no unsupported numeric distances, claims of nearest rank, or claims that no attractions exist within an arbitrary radius. Fifteen sections provide local city/area context. Twenty-two use an explicit regional scope and the heading "Plan the wider trip". Regional lists are editorial choices, not distance rankings or promised itineraries. The original 154 place records, photos and all other article sections are preserved.

Specific local context distinguishes the Nile banks in Luxor, island access in Aswan/Giftun, the Abu Galum lagoon from Dahab town, and specific excursion sites from broad desert entries. No travel time, operator availability, price, admission rule or dive route is asserted.

## Sources read

| Source | Publisher / type | Used for |
| --- | --- | --- |
| https://www.experienceegypt.eg/en/city/33/dahab | Egyptian tourism authority / official | Friday Market crafts/food, Lighthouse area, surrounding mountains. |
| https://ecoegyptexperiences.com/protected-areas/abu-galum-protected-area/ | Eco Egypt protected-area campaign / destination source | Exact Blue Lagoon identification within Abu Galum and relationship to Dahab. Broad wildlife and dive-site claims not repeated. |
| https://www.padi.com/dive-site/egypt/lighthouse-3/ | PADI / specialist directory | Lighthouse in central Dahab, not the similarly named northern map result. No dive instructions or common-sightings guarantees repeated. |
| https://www.experienceegypt.eg/en/city/22/luxor- | Egyptian tourism authority / official | East/West Bank distinction and East Bank Luxor/Karnak temples. |
| https://www.experienceegypt.eg/en/attraction-details/357/the-luxor-museum | Egyptian tourism authority / official | Museum on the East Bank. |
| https://www.experienceegypt.eg/en/city/23/hurghada | Egyptian tourism authority / official | Markets, marina, dunes and Giftun as different experiences. Promotional submarine exclusivity claim excluded. |
| https://egymonuments.gov.eg/en/museums/hurghada-museum/ | Ministry of Tourism and Antiquities / official | Actual museum identity and Hurghada context. Prices, hours and object totals not copied. |
| https://www.experienceegypt.eg/en/city/16/charm-el-cheikh | Egyptian tourism authority / official | Sharm between Ras Muhammad/Nabq, Old Market as city option. |
| https://www.experienceegypt.eg/en/city/21/marsa-alam- | Egyptian tourism authority / official | Wadi El Gemal and Al-Qusair as excursion ideas from Marsa Alam. Implausible pool size and exclusive dugong claim excluded. |
| https://www.experienceegypt.eg/en/city/27/alexandria | Egyptian tourism authority / official | Cavafy, Antoniadis and Bibliotheca city context. |
| Wikipedia article intros and their exact URLs in the adjacent JSON ledger | Wikipedia / secondary reference | Actual city, island, river-bank and broad regional identities; not distances or access rules. Full extracts requested in batches of ten to avoid the API extract limit. |

The existing catalog's governorate groupings select regional reading options. The selection is explicitly editorial. Article URLs were obtained from the source API or already-read source pages, not guessed from display names.

## Limitations and next steps

The 117 nearby sections predating PR40 are not made accurate by this audit. Their numeric coordinates still need a separate provenance/entrance audit. This patch does not claim to repair the hotel-search dataset, route planning, historical content or the optional shopping sections. Blue Lagoon and landscape hotel recommendations should be reviewed separately before any numeric hotel-distance claim is added.

## QA

Regression tests cover every corrected section, bilingual content, absence of numeric distances, explicit regional headings, Ras Muhammad's Sinai context, Luxor river-bank distinctions, and preservation of the catalog/history count. Browser checks cover all 74 affected language routes at 390px. See the PR for actual results.
