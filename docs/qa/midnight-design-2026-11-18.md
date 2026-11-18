# Midnight editorial redesign

Owner requested removal of the beige Papyrus look. Replaced that palette with Midnight as the default: deep navy surfaces, bright text, cool mint accents, photo-led trip heroes and tighter card styling. Existing browser values of Papyrus are no longer accepted and fall back to Midnight before hydration. Other chosen palettes remain available. No content or route was removed.

Home has a larger photographic composition with clear title/CTA contrast, a separate dark search panel and more defined destination/trip cards. Every trip now opens with a real photograph of its first named place. Titles, bookmarks and the existing planning caveats remain. Arabic RTL and English use the existing licensed Readex and IBM Plex fonts. Icons remain SVG. Photographs come from the existing licensed collection; no generated or invented place imagery was added. No new domain, service or cost.

The redesign is screen-scoped. The previous printable itinerary fix remains active. Print omits the new trip hero photograph and keeps the title, named stops and caveats.

Checks: typecheck, production build, unit/API/contrast suite; browser home and trip checks in Arabic/English at 390 and 1280 pixels; saved-Papyrus migration; theme picker; all nine printed itineraries in both languages; trip-save labels. Screenshots inspected in both languages on mobile and desktop, plus print output.
