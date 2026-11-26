# Dakahlia food, craft and tradition depth - 2026-11-26

## Scope
Data-only governorate-profile depth batch: first festivals entry, reed-craft
framing depth, feseekh process documentation. No component changes, no new
destination, catalog count, map point, photo, provider, booking or outreach.
154 places unchanged.

## Sources read
- Al-Masry Al-Youm, 8 April 2026: Nabaroh preparing for Sham el-Nessim 2026;
  city described as one of the best-known salted-fish producers nationwide;
  peak-season buying; trader-described traditional process (fresh mullet,
  coarse salt, wooden barrels, no additives). Trader-quoted prices deliberately
  omitted from the guide.
  https://www.almasryalyoum.com/news/details/4241070
- ElWatan News, 16 April 2023: Nabaroh as the governorate's salted-fish centre;
  buyers from other governorates during the spring-festival period; inherited
  craft. Trader claims about celebrity customers deliberately not repeated.
  https://www.elwatannews.com/news/details/6526440
- Ahl Masr, 8 May 2020: sabt (reed basket) making in al-Qibab al-Sughra,
  Dekernes; handmade from gathered reed; makers warn the craft is close to
  dying out as demand shrinks.
  https://ahlmasrnews.com/1002768/...
- ElWatan News, 2025 (already cited): the same village described as kept busy
  by basket-making. https://www.elwatannews.com/news/details/8133831

## Framing decisions
- The two craft features disagree about the craft's future (busy village vs
  near-extinction warnings). Both framings are surfaced with their years
  instead of picking one.
- The festivals section carries only the documented Nabaroh salted-fish
  season; the section's standing disclaimer ("documented traditions, not a
  schedule of upcoming events or bookings") stays the guardrail.
- The feseekh entry keeps its existing not-a-safety-endorsement and
  enforcement caveats; the new sentence documents the trader-described
  traditional process only.

## Changes
- `src/lib/encyclopedia/governorate-profiles.json` only: festivals[1] added;
  crafts[0] description rewritten with the dated tension and a second source;
  food_specialties[0] description extended with the documented process and a
  third source.
- `tests/dakahlia-food-craft-context.test.ts` (unit, 3 tests) and
  `tests/dakahlia-food-craft-context.spec.ts` (browser, ar/en x 390/1280,
  Giza regression that governorates without festivals render no section).

## Verification
Exact-main build, typecheck, unit tests and focused browser tests against the
branch head, merged main, the immutable production deployment and the
canonical origin; canonical/immutable parity; unmocked checks; canonical
screenshots inspected. Results are recorded in the batch report.
