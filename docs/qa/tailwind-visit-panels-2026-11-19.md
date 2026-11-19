# Location and ticket panels, 19 November 2026

## Change

Move the place-page location and ticket panels to Tailwind. Remove 20 legacy selector branches, including shared theme selectors, without changing other members of those shared rules. No dependencies, prices, eligibility copy, maps, source URLs or operational claims changed.

The ticket panel still starts with no selected category. Four explicit eligibility choices show the existing source-reviewed amount, and resetting hides it. Unknown prices remain unknown, not free. Location links still identify a place, not an entrance or meeting point.

## Checks

- Build, typecheck and 100 unit tests pass.
- 18 selected browser tests pass, including eight new Arabic/English cases at 390, 600, 601 and 1280 pixels.
- Exact before/after computed-style parity for 32 panels: two routes, two languages and four widths, covering priced Qaitbay and unpriced Hurghada Marina.
- Preserve the inclusive 600-pixel breakpoint and all typography, spacing, wrapping and borders. Location top and side borders stay zero; only the bottom border is drawn.
- Preserve midnight's muted selected-price color and the accent selected-price color in other themes.
- Actual Arabic ticket and English location mobile screenshots inspected. Source button, category, amount and caveats remain readable with no overflow.

No D1, account, booking, payment, domain or plan changes. Live frontend checks block all API requests, so they do not query D1 or exercise accounts.
