# Place cards: Tailwind migration, 2026-11-19

## Scope

Shared place-card shell, category/save row, linked title, description and explore-link spacing now use `place-card-styles.ts`. Removed 39 legacy selector branches from globals, editorial and Arabic typography. The photo component, image URLs, crops, source data, text, category labels, vibe chips, save labels and destinations are unchanged.

## Verification

- 105 unit tests, TypeScript and static/API build pass.
- 36 browser tests pass, including 32 new cases for Home, encyclopedia, Giza recommendations and the Cairo four-day programme across AR/EN and 390/600/601/1280px.
- Exact computed-style/content/image/link equality against the pre-change build: 576 screen and 288 print combinations, all 18 themes, both languages, four widths. Print checked at 390/1280px. Both first cards and every descendant compared. Full theme-color assertions also run in browser tests.
- Save/unsave updates state and accessible label. Card links retain their language and place route. No horizontal overflow.
- Mobile Home, catalog and programme cards and desktop recommendations inspected as images, with lazy photos decoded before final captures.
- Existing print behavior preserved, including trip-day compact sizing, page-break avoidance and hidden photos/save row/explore links. Arabic trip print titles remain 15px; non-trip Arabic titles remain 26px.

## Boundaries

This is a presentation-only refactor, not a photo, source, hours or print-contrast redesign. Existing colors, shadows and typography are deliberately retained. All frontend checks intercept `/api/**`; no live D1 or account QA. No new CSS, purchase, new domain or paid service.
