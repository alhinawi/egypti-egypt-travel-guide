# Older nearby and hotel-coordinate audit, 2026-11-16

## Nearby sections

117 sections predating PR40 were reviewed. Of these, 68 were text lists with a 40 km cutoff, 48 contained structured suggestions with 192 decimal distance fields, and one (Bahariya) already said no additional local suggestions had been separately checked.

The 68 lists now present regional reading suggestions without a radius, numeric distance or nearest-place ranking. The 48 structured sections retain all suggested places, descriptions, sources and photos, but withdraw all 192 distances and their distance-type fields. Their representative coordinates are explicitly legacy references that have not been revalidated. All 116 populated sections now use the "Plan the wider trip" heading. Bahariya's existing honest no-suggestions entry remains unchanged. No claim is made that every historical or descriptive statement has been independently re-researched by this coordinate audit.

This removes unsupported proximity claims rather than laundering them through a straight-line disclaimer. It does not invent road distances or travel times. Suggestions may involve a river, water crossing, a separate road journey or separate admission. The article is a reading list, not an itinerary.

## Hotel points

56 hotel collections contain 129 references to 34 unique open-data hotels. There are 52 legacy attraction centers and four collections without an attraction center. Those 52 origins are not verified visitor entrances or a consistent comparison basis. No numeric attraction-to-hotel distance remains published: all 129 cached values are null and the display no longer renders hotel-distance labels. All 56 collections explicitly name the lodging town and make no nearest-hotel claim. Existing hotels, map links and photos are retained.

All 34 unique hotel entities were read live from Wikidata's entity API (P625, labels and descriptions). Every stored hotel coordinate matched at least one current non-deprecated P625 claim within one metre. Of the 34, 28 had a single non-deprecated coordinate and six had multiple normal-rank coordinates. Multiple points are recorded as ambiguous rather than silently choosing a preferred entrance. Matching an open-data point establishes source consistency only, not survey accuracy, a visitor entrance, commercial operation, rebranding, ownership, availability or booking suitability. No current-business claim is added. Map links remain explicitly representative points.

The adjacent hotel-coordinate JSON ledger records the actual entity URL, catalog/current label, stored point, every current coordinate claim, minimum difference and review status for each hotel. Its source URLs came from the existing source-linked records and the live entity read, not a search-engine guess. P625 was accessed in one batch for the 34 IDs. Representative examples:

- https://www.wikidata.org/wiki/Q1355271 (Mena House)
- https://www.wikidata.org/wiki/Q110487835 (Susanna Hotel, two coordinates)
- https://www.wikidata.org/wiki/Q105259668 (Pyramisa Island Aswan, two coordinates)
- https://www.wikidata.org/wiki/Q111111130 (Dahab Plaza Hotel, two coordinates)

Lodging towns are Cairo, Giza, Alexandria, Luxor, Aswan, Abu Simbel, Dahab or Hurghada as applicable to the actual hotel collection, rather than a broad governorate label. The cards still say that current operation, facilities and booking must be checked directly. This is not a fresh hotel recommendation or a claim that the original list is exhaustive.

## Preservation and QA scope

All 154 place records, all 56 lodging collections, all 129 hotel references, all photos, article sections outside nearby, source links and booking links are retained. No new hotel, business, price, rating, operational promise or route is introduced. Tests prohibit numeric nearby/hotel distances and nearest-ranking claims, preserve collection sizes, check the audit coverage and all 34 source-point comparisons, and verify bilingual article/lodging headings and no mobile overflow. Source consistency is not geospatial or operational certification.
