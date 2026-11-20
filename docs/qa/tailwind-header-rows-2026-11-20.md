# Header rows and desktop navigation Tailwind migration

2026-11-20, batch B151.

- Header inner-row geometry and action-row spacing moved to shared Tailwind utilities.
- Desktop navigation responsive display, type, gap and active/dark-theme colors moved to Tailwind.
- Removed 19 standalone legacy rules and 14 shared selector members, preserving other selectors. Theme generator updated so regeneration keeps the migration.
- Brand, language/menu buttons, header surface and drawer remain outside this slice.

Verification: typecheck/build, 124 unit and 60 browser tests pass. The 32 new tests cover 720 exact original-baseline cases across home/trips active states, AR/EN, 18 themes, eight widths, screen and print. Full header subtree includes controls, SVGs and links. All original values match. Kept margin:auto rather than vertical zero because the computed print value differs for hidden rows. Active link color utilities use importance against the existing unlayered global link reset. Existing language/context/keyboard and all-theme contrast regressions pass. Actual AR mobile and EN desktop screenshots inspected. APIs blocked, no live account work.
