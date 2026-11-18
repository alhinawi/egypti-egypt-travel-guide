# Keep itinerary stops in printed plans

The global print rule hid all place grids. Named stops and their descriptions disappeared from short trip outlines, which also lacked a print action. Detailed programmes had the same missing-card problem.

All nine plans now have a print button. Itinerary stop cards remain as compact text in print, without save controls, photos or browsing tags. Detailed day parts use a compact text layout rather than repeating large photographs. A print page margin protects text at paper edges. Existing notes, no-booking caveats and programme source links remain. No travel facts changed.

The shared print handler opens collapsed notes and source lists, then restores only the sections that it opened. Repeated beforeprint events do not discard that restoration record. Existing open sections stay open after printing or cancelling.

Validation: typecheck, build, 71 unit/API tests and four browser tests. Both languages check named-stop visibility across all nine plans (18 routes), print button availability, hidden controls, repeated beforeprint and afterprint restoration. A4 PDFs generated for Arabic/English outline and detailed plans, extracted for text checks, then rendered for pixel inspection. Browser-generated PDFs are QA evidence, not new itinerary content.
