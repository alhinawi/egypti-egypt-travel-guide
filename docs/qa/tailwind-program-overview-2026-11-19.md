# Programme overview, 19 November 2026

Move programme day/night statistics, route, overnight badges and preparation disclosures to Tailwind as one component batch. Remove 43 legacy selector branches, preserving other selectors in shared rules. No dependencies, source text, day/night counts, route data or booking claims change.

Eight Arabic/English screen cases at 390, 600, 601 and 1280 pixels have exact before/after computed-style and text parity across all overview elements. Preserve inclusive 600px layout changes, screen-specific 16px statistics gap, Arabic heading typography and open/closed disclosure symbols.

Continue the previous source-panel print contrast fix across the remaining overview: white panels, black text, dark links/headings and pale overnight badges, instead of black headings on navy. Keep the original print spacing, avoid-break rules, smaller preparation text and print-event expand/restore behavior. Screens retain their existing theme colors.

Build, typecheck, 100 unit tests and 21 selected browser tests pass. Eight new overview cases check day count, unbooked overnight and budget caveats, disclosures, responsive sizes and print appearance. Existing tests cover all nine plans and print state restoration. Beforeprint screenshots verify all preparation sections expanded.

Actual Arabic mobile preparation, route and Arabic/English print pixels inspected. Live frontend checks block /api/**. No D1, account, payment, booking, domain or plan effects.
