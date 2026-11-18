# Named trip save actions, 2026-11-18

Trip bookmark buttons used generic Save/Remove from saved labels, unlike place bookmarks. In a list of plans those controls could not be distinguished without reading surrounding content. Add the bilingual plan title to save/remove names on TripCard and the trip detail header. Keep pressed state, readiness and persistence behavior unchanged.

Checked typecheck/build, 71 unit/API tests and seven browser checks: two new end-to-end label/persistence checks plus five existing storage regression checks. Both languages verify list save label, selected remove label, detail state, saved-page plan name and removal. Inspected mobile saved-plan screenshots. Guest account API responses intentionally mocked; no account writes or source/content changes.
