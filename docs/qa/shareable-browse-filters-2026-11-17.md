# Shareable browse filters, 2026-11-17

## Reproduced problem

Changing search text and filters did not update the URL. Reloading or copying the page lost those choices. The regression test failed against the previous production build because a search never appeared in the URL.

## Change

Search text, governorate, vibe, category, era and region now update the current URL after a short debounce. No history entry is added per keystroke. The page reads filters on entry and browser history navigation. Reset removes ordinary filters; on pages with an initial governorate/vibe/category/era it writes an explicit empty override so reload does not silently restore the default. Legacy destination parameters are converted to the equivalent governorate/region where possible. Unrelated parameters and fragments remain intact.

A bilingual note explains that search text and filter choices stay in the link, so visitors know what copying it shares. Controls wait for initial URL restoration before accepting input, preventing hydration from overwriting early edits. This does not create an external sharing action or store data in an account.

## Validation

- Typecheck, production build and 68 unit/API tests passed.
- Seven browser tests passed, including existing encyclopedia and atlas regressions.
- Five filter tests then passed three consecutive repetitions (15 runs).
- Tests cover Arabic/English, reload, copied URLs, reset, defaults, legacy links, unknown URL parameters, hash preservation, back navigation and no typing-history spam.
- Mobile Arabic and English screenshots inspected for readable controls and helper copy, no horizontal overflow.
- No article facts, photographs, payments, accounts or permissions changed.
