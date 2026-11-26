# Dakahlia modern identity layers - 2026-11-26

## Scope
Two modern-era blocks appended to the Dakahlia governorate history layers
(university founding, 14 October 1973 air battle), inserted before the
existing reading-context block. Pure JSON content; no component, destination,
catalog, map, photo, provider, booking or outreach change. 154 places
unchanged.

## Sources read
- Mansoura University official history: medicine faculty 1962 as a Cairo
  University branch; 1972 presidential decree founding East Delta University;
  renamed Mansoura University 1973; sixth university in Egypt; ~300-acre
  campus southwest of the city.
  http://www.mans.edu.eg/index.php/en/about/history-and-facts/history
- University golden-jubilee news (2022), corroborating the 1972 founding.
  https://esa.mans.edu.eg/en/news/2981-2022-03-23-11-52-8
- Cairo governorate official portal (Arabic): the Egyptian official account of
  the 14 October 1973 battle - about 62 Egyptian fighters vs about 120 Israeli
  aircraft, 53 minutes, 17 Israeli losses claimed against 5 Egyptian.
  https://cairo.gov.eg/ar/more/events/october/mansoura-air-battle-between-egyptian-and-israeli-forces/
- Wikipedia, Air battle of Mansoura: collects the conflicting claims;
  historian Lon Nordeen estimates only two Israeli losses on 14 October.
  https://en.wikipedia.org/wiki/Air_battle_of_Mansoura
- SIS October 1973 file (Arabic): lists the Mansoura battle among the war's
  major air battles.
  https://sis.gov.eg/ar/.../أكتوبر-1973-معجزة-التخطيط-وروعة-التنفيذ/

## Framing decisions
- The air-battle loss figures are contested between Egyptian and Israeli
  accounts. The block presents the official Egyptian figures attributed to
  their source, then the disagreement with the Wikipedia-cited historical
  estimate, and states the guide does not endorse any figure.
- University figures are attributed to the university's own published history
  and explicitly not a current count of students or faculties.
- The 1962/1972/1973 dates extend the existing layers chronologically:
  ancient sites, modern institutions, 1973, then the reading-context block.

## Changes
- `src/lib/encyclopedia/governorate-profiles.json` only: two history.items
  added (positions 4 and 5 of 6).
- B376 archaeology unit/browser tests updated for the 6-item count; item
  assertions unchanged by index where unaffected.
- `tests/dakahlia-modern-identity.test.ts` (unit, 2 tests) and
  `tests/dakahlia-modern-identity.spec.ts` (browser, ar/en x 390/1280, Cairo
  regression).

## Verification
Exact-main build, typecheck, unit tests and focused browser tests against the
branch head, merged main, the immutable production deployment and the
canonical origin; canonical/immutable parity; unmocked checks; canonical
screenshots inspected. Results are recorded in the batch report.
