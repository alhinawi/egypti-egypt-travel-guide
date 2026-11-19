# Place/trip detail-shell Tailwind migration

November 19, 2026. Presentation only. No content, source dates, published hours, ticket information, account or API changes.

- `detail-shell-styles.ts` owns title/save alignment for place and trip pages, the visit-detail section shell and the unconfirmed-hours fallback row.
- Removes 18 legacy selector branches from global/editorial CSS. Other members of compound color/border rules are preserved.
- Keeps place heading/save alignment, mobile save margin, separate trip-hero screen alignment and gap, title min-width, section margins, heading size/margin and existing grid rules.
- Keeps the fallback caution verbatim, muted paragraph theme color, fixed old green icon, border and spacing. The fixed icon/location colors are not redesigned or claimed to improve contrast.
- Preserves Arabic print heading overrides and print-hidden save buttons. No current-opening claim or fresh hours review is added.

## Verification

- 104 unit tests, typecheck, static and API build pass.
- 28 browser tests pass, including 24 new AR/EN route/width cases plus existing save-label and published-hours/fallback tests. Published-hours tests assert the checked date, sessions, cutoff values, notes and source destinations already in data.
- Exact 432 screen plus 216 print comparisons across all 18 themes, AR/EN, 390/600/601/1280px and Qift/Giza/four-day Cairo programme. Qift exercises fallback, Giza exercises a published-hours route, programme exercises trip-hero context.
- Place/trip save toggles retain their native pressed state. No page overflow. APIs blocked or mocked, no live D1/account QA.
- Actual mobile AR/EN place/trip headings, fallback/section and desktop place pixels inspected. Existing content and photo quality retained.
