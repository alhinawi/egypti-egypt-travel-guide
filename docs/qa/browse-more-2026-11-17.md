# Continue keyboard browsing after loading more, 2026-11-17

Before the change, activating Show more left focus on the button after the newly appended cards. Keyboard users skipped those places when they continued tabbing. Reproduced in Arabic and English.

Move focus to the first new place link only after an explicit Show more action. Add a polite shown/total status and connect the button to the result grid. Filters still reset to 24 without moving focus away from their controls. Loading the last group removes the button while focus remains on the first new result, not the document body.

Validation: typecheck/build, 70 unit/API tests, seven browser checks including both languages, first and final append, filter reset, search focus, and existing URL/history behavior. Inspected 390px screenshots for new-result focus and card layout. No content, sources or ranking changed.
