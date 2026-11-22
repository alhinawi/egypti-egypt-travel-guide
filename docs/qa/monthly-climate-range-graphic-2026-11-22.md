# Monthly climate range graphic

## Scope

Add a visible monthly average low-to-high temperature comparison beside the existing full numeric table on wide screens and above it at 1000px and below. Both use exactly the same recorded values and existing one-decimal display rounding. Numeric rainfall remains in the full table. Month names and order remain unchanged.

The graphic uses one shared Celsius scale for every row. All 109 current records fit the same 0–50°C display scale. The helper expands the endpoints outward if a future record needs it, and refuses incomplete, nonfinite or inverted pairs. It does not infer temperatures, extremes, season suitability or forecasts. The hollow and solid endpoints supplement explicit low/high text; no color-only distinction is required. SVG endpoint and range strokes retain their physical size when the graphic width changes.

## Data and authority boundaries

All 82 article and 27 governorate climate datasets are unchanged. Preserve the exact station/reference location, normal-period verification status, quality label, airport/proxy and mountain caveats, source URLs and external forecast labels/destinations. Secondary city tables retain their explicit unverified primary-source/period caveat. A chart is not an upgrade to that evidence. No external research was repeated and no new climate claim, best-month recommendation, live forecast, photograph, route, paid service or storage/network mutation was introduced.

The existing complete temperature/rainfall table remains visible, not hidden in another control. Native parent article disclosures and no-JavaScript access remain intact. Climate sources and forecast links have at least 46px target height with keyboard focus; the scrollable table also has visible keyboard focus. Explicit climate text color prevents print inheriting black text over the site's dark cards.

## Verification

- Build and both TypeScript projects.
- 215 unit tests, including six new climate geometry/validation/data-preservation tests.
- 24 new browser cases: AR/EN, 360/390/600/601/900/1000/1001/1280 widths, all 109 records in both languages, source/period/quality preservation, no writes, proxy cautions, keyboard focus, no JavaScript and print.
- 40 unchanged governorate-layout and published-visiting-hours browser cases.
- 648 combinations per checked origin: 18 themes × 2 languages × 6 widths × 3 climate contexts, including secondary/unverified-period Benha data and the South Sinai coastal proxy caveat. No page overflow, all source targets at least 46px, minimum measured normal-text contrast 5.1303:1 locally.
- Actual pixel inspection: Arabic Khan el-Khalili phone, English Khan el-Khalili desktop, Arabic South Sinai phone, English Aswan desktop, English Qalyubia phone with unverified-period caveat, keyboard source focus and print. Print was corrected and re-inspected after the initial check showed inherited black table text over a dark background.
- Repeat exact-main and both production-origin browser/theme checks after a normal green merge. Verify clean exact-main Cloudflare production and compare observed HTML/stylesheets to the exact-main build.

The separate documented rapid-input photo-viewer caveat is unchanged; this batch does not touch the shared viewer.
