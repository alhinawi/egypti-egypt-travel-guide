# Per-place visit checklists

Checklists previously reset whenever the visitor left a place page. They now persist separately for each place in this browser, shared between Arabic and English routes. No account or server sync is added. The UI explains this scope and asks visitors to review checks before each visit, rather than treating old checks as current venue verification.

A reset clears only the current place checklist. Inputs stay disabled until that place's stored list is read. Stored data is filtered to unique integer indices 0 through 4. Malformed or unavailable storage does not crash the page; a notice explains that changes may not survive leaving the page. A successful write clears that notice. Privacy text now names local checklists.

Validation: typecheck, production build, 71 unit/API tests, four new browser cases covering both languages, reload, cross-language persistence, independent place lists, scoped reset, malformed values and blocked writes. Four existing account-read regression cases also passed. Browser scenarios use local/test data only.
