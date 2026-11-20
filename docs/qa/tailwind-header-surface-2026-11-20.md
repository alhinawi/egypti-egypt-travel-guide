# Header surface Tailwind migration

2026-11-20,B157.

Header surface,sticky position,z-index,responsive heights,border,shadow and print hiding moved to Tailwind. Seven standalone rules and three shared-selector members removed. The final solid-paper/no-blur/z-index100 treatment is preserved rather than the superseded translucent treatment. Brand typography and drawer unchanged. No content,route or interaction changes.

Typecheck/build,124 unit and44 browser tests pass,18 new.360 exact original-baseline full-header subtree cases across AR/EN,18themes,eight widths360/361/390/600/601/900/901/1280 and screen/print390/1280. Includes background,border,shadow,backdrop filters,position and z-index. Baseline mainb8c7e041. Tests verify sticky top remains0 after500px scroll and language opening/Escape-focus recovery. Existing language context,button geometry and contrast pass. Follow-up QA correction explicitly loads the button's computed font and waits two paint frames before baseline capture. The earlier generic font-ready wait could resolve before the button font request began, causing a transient0.25px English width mismatch. Both header and language-button suites pass three repetitions,102 tests,with the deterministic readiness check. Mobile Arabic and desktop English pixels inspected. APIs mocked,no account actions.
