# Page-heading Tailwind migration, 2026-11-19

## Scope

All four page-heading consumer modules now use shared Tailwind heading presentation. Removed 16 legacy selector branches from globals, editorial and Arabic typography. No new CSS. Text, data, links, buttons and specialized catalogue/companion/trip-hero layouts are unchanged.

## Verification

- 107 unit tests, typecheck and static/API build pass.
- 76 browser tests pass, including 72 new heading cases and four existing trip-print tests.
- Exact baseline equality in 1,296 screen and 648 print combinations across 18 themes, AR/EN, 390/600/601/1280px and nine routes: destinations, Giza place, trip list, Cairo programme, saved, virtual visits, catalogue, governorates and guides.
- The entire heading subtree is compared for text, links, labels, typography, dimensions, margins, color and layout. A focused fixture captured from the unchanged pre-migration build also guards heading/paragraph metrics in committed tests across all themes.
- Preserved Arabic Naskh title sizes and line heights, place lead width/18px size, companion fiction-note line height, catalogue overrides, mobile 38px Arabic programme title and desktop programme clamp, print-specific title margins and typography.
- Actual mobile programme/virtual/catalogue and desktop place screenshots inspected. Arabic and English programme print-heading crops inspected. No overflow or layout change.
- Frontend checks block `/api/**`. The guide heading is tested without enabling the companion API. No live D1/account QA, source/date/content changes, purchases, new domains or paid services.
