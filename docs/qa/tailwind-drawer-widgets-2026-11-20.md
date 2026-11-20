# Drawer language and theme widgets Tailwind migration

2026-11-20, B154.

Drawer language-choice flex row, links, badge opacity and selected treatment moved to Tailwind together with the theme-picker trigger and its label/subtitle. Removed eight standalone legacy rules and one shared-selector member. Theme dialog and swatches unchanged. Routing, query/hash preservation, theme storage and keyboard behavior unchanged.

Typecheck/build,124 unit and64 browser tests pass,18 new.360 exact original-baseline cases: AR/EN,18 themes,eight widths360/361/390/600/601/900/901/1280,screen and print390/1280. Baseline from main73b2f633. Explicit important color/border utilities preserve precedence against unlayered link and button resets. Keyboard tests cover theme opening,Escape/focus recovery and language query/hash preservation. Prior drawer navigation,icon-button,language and contrast regressions pass. Mobile Arabic and desktop English drawer-bottom pixels inspected after animation settled. APIs mocked unavailable,no account actions.
