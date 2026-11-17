# Language panel dismissal, 2026-11-17

The language panel previously stayed open on Escape and did not place focus in its choices. A regression test reproduced the missing focus behavior.

Opening now focuses the selected language. Escape and the close button dismiss it and return focus to the trigger; clicking outside dismisses without stealing focus from the clicked control. Opening the main menu closes the language panel so the two overlays do not compete. Existing language links and their query/fragment context are unchanged.

Typecheck, build, 70 unit/API tests and eight browser tests passed, including bilingual panel interaction, language-context and account/menu regressions. Mobile Arabic/English screenshots inspected for readable choices, header clearance and panel containment. No content, photographs or external services changed.
