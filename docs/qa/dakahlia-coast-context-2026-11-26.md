# Dakahlia Mediterranean coast / Gamasa context - 2026-11-26

## Scope
Governorate-profile enrichment for Dakahlia's Mediterranean coast and the Gamasa
resort, following the B376 history.items pattern with a new optional
`geography.items` block. No new destination, catalog count, map point, photo,
provider, booking or outreach. 154 places unchanged.

## Sources read
- Dakahlia governorate official page (Arabic): city extent 7.3 km x 3 km on the
  Mediterranean; resort founded early 1962 with 40 chalets and a motel financed
  by a Suez Canal Authority loan; the JAIMECA naming story, presented in the
  guide as folk etymology, not verified linguistics.
  http://www.dakahliya.gov.eg/SitePages/ctzTasks_CentersandCities_HestoryDetails.aspx?ID=13
- State Information Service, Dakahlia Governorate: Gamasa Summer Resort, clear
  water, low humidity, soft sand, high iodine, 7.5 km of coast; Gamasa is part
  of the Belqas markaz.
  https://www.sis.gov.eg/Story/68563/Dakahlia-Governorate
- Al-Masry Al-Youm, 15/16 July 2024 (Arabic): the "people's resort" nickname,
  ~11 km beach claim, 17 free public beach areas plus private beaches, three
  named public gardens, amusement area, clothing market. Treated as dated press
  description, not current verification.
  https://www.almasryalyoum.com/news/details/3214543
- Ragheb & EL-Ashmawy, IIETA IJSDP 15(3) 2020 (peer-reviewed): crescent-shaped
  bays, dune-stabilised western beach, erosion protection; criticism of neglect;
  waterfront redevelopment content is academic design proposals, framed as such.
  https://iieta.org/journals/ijsdp/paper/10.18280/ijsdp.150311

## Coastline length discrepancy
Official governorate: 7.3 km (city extent). SIS: 7.5 km (resort). Press 2024:
~11 km (beach). The guide surfaces all three and states they need not agree
rather than picking one silently.

## Explicitly not verified (stated in the last block)
Current beach entry fees, beach conditions, lifeguard arrangements, public
transport schedules. The 2020 study's redevelopment schemes are framed as
proposals. The 1962 founding and naming story are attributed to the official
governorate page; the naming story is labelled folk etymology.

## Changes
- `src/components/governorate-profile.tsx`: optional `geography.items` in the
  Profile type; geography section renders item blocks and spans the full grid
  width when items exist (same pattern as history items). Existing Tailwind
  utility classes reused; no new global CSS.
- `src/lib/encyclopedia/governorate-profiles.json`: four bilingual
  geography.items for Dakahlia; Gamasa key_place summary enriched with the
  early-1960s founding and the official governorate source.
- `tests/dakahlia-coast-context.test.ts` (unit) and
  `tests/dakahlia-coast-context.spec.ts` (browser, ar/en x 390/1280, plus a
  Cairo regression check that other governorates render no geography items).

## Verification
Exact-main build, type check, unit tests and focused browser tests run against
the branch head, merged main, the immutable production deployment and the
canonical origin; unmocked Arabic/English photo-decode and page-error checks;
canonical screenshots inspected. Results are recorded in the batch report.
