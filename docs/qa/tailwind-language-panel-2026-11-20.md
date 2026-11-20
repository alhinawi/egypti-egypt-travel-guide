# Language panel and skip-link Tailwind migration

2026-11-20, batch B149.

## Scope
- Language popover geometry, shadow, theme surface, choices and current-language styling.
- Keyboard skip-to-content position, focus reveal and print hiding.
- Ten standalone legacy rules and one shared selector member removed. Message text, translated links, query/hash context and focus/dismissal logic unchanged.

## Verification
- Typecheck, production build and all 124 unit tests pass.
- 24 browser tests pass: 18 new (16 matrix and two skip keyboard tests), six existing language dismissal/context tests.
- 720 exact original-baseline cases: two focus states, AR/EN, 18 themes, eight widths and print at 390/1280. Full panel/skip subtree includes geometry, typography, colors, outlines and translated hrefs.
- Baseline captured from original main 94a866a before migration. Focus is restored before screen captures and deliberately blurred before print, avoiding browser-dependent hidden-element focus loss during media changes. Original and migrated captures use the same protocol.
- Actual AR mobile and EN desktop pixels inspected. APIs blocked, no live account work.

## Existing issue preserved
The selected language has a pale fixed background and inherits light text on dark themes. The focused skip link similarly has a white background and inherits theme text. Both contrast issues exist in the original baseline and are reported separately rather than concealed as new regressions or silently changed in this migration.
