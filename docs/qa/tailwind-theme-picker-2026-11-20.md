# Theme picker Tailwind migration

2026-11-20, B155.

Theme dialog surface/backdrop, header, option grid, option buttons, swatch dots and selected check moved to Tailwind. Removed28 standalone legacy rules and2 shared-selector members. Palette tokens and swatch data are unchanged. The unrelated drawer-admin rule remains in theme-ui.css. No content, route, account, storage or modal logic changes.

Typecheck/build,124 unit and76 browser tests pass,18 new.360 exact original-baseline cases include the complete dialog subtree and backdrop: AR/EN,18 theme contexts,eight widths360/361/390/600/601/900/901/1280,screen and print390/1280. Baseline from main308027f9. Explicit important typography/borders preserve unlayered resets; screen-only heading size keeps the existing Arabic print heading override, with the original English print size retained. Geometry,font,color,grid,borders,outline,swatch gradients and backdrop match exactly.

New keyboard tests select all18 themes in both languages under reduced motion, verify saved values,reload persistence,selected focus and Escape/focus recovery. Existing theme-picker,storage-failure,editorial-theme,drawer-widget,icon-button,language and contrast tests pass. Mobile Arabic and desktop English theme dialog pixels inspected after animations settled. APIs mocked,no account actions.
