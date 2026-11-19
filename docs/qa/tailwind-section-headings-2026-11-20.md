# Section-heading Tailwind migration, 2026-11-20

## Scope

Shared Tailwind presentation for the four magazine homepage section headings and the reusable section heading in destination detail pages and the retained classic Home component. Removed 18 legacy selector branches from globals/editorial styles. No new CSS, content, routes or media.

## Verification

- 108 unit tests, typecheck and static/API build pass.
- 100 browser tests pass, including 24 new section-heading cases, 72 page-heading regressions and four programme print cases.
- Exact baseline equality in 432 screen and 144 print combinations across all 18 themes, AR/EN, 360/361/390/600/601/1280px, homepage and Cairo destination detail.
- Full heading subtrees checked for typography, layout, dimensions, spacing, colors, text, links and labels. Committed focused baseline test also covers every theme and both print widths.
- Preserved narrow English destination titles versus Arabic 21px titles, screen versus print magazine title sizing, Arabic heading line height/zero letter spacing, mobile link width/wrapping and SVG width, and night-theme section-link color.
- Actual AR/EN homepage heading crops inspected at 390px and 1280px. Existing English mobile wrapping is unchanged, not redesigned.
- All frontend tests block `/api/**`. No live D1 reads or account QA. No source dates, hours, photo captions, source content or API changed.
