# Profile sign-out contrast

2026-11-20,B162.

Replaces fixed brown #975945 with theme ink for the profile sign-out button and inherited icon. No text,layout,authentication or behavior changes.32profile baseline/action tests still pass with precisely the intended sign-out subtree color/border-color delta;the original fixture is preserved.2new tests cover AR/EN across all18themes,requiring4.5:1 and keyboard focus. Standalone36theme/language checks measure minimum11.51:1 after the fix. Both18theme screenshot contact sheets inspected.124unit,typecheck/build pass. APIs mocked,no real account actions.

Corrects B161's browser-count typo:106total (32profile+64account+10language),not110. Both counts referred to the same executed passing suites,not missing tests.
