# Keep context when changing language, 2026-11-17

The header language selector and menu language links previously removed the query string and fragment. A failing regression test reproduced the loss of a filtered Aswan results page.

Both selectors now retain the current search parameters and section fragment while changing only the language path prefix. Context is refreshed when a selector opens, including filters edited since navigation. The target language provider records the preference only after navigation, instead of setting a preference while rendering link choices. No external sharing or account change is involved.

Validation: typecheck, production build and 70 unit/API tests passed. Ten focused browser tests passed across the new context tests and existing filter/theme checks. Four language tests cover both language directions and both selectors, filtered result restoration and open/focused weather-section links. Representative 390px Arabic/English screenshots inspected after reduced-motion navigation settles. No articles, photographs, prices or services changed.
