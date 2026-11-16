# Article section navigation, 2026-11-16

## Reproduced problem

The article's section chips changed the URL fragment and scrolled to a collapsed accordion without revealing its content. A regression test on the previous production build failed at the first weather section open-state assertion.

## Change

- Section chips open their target before native fragment navigation.
- Direct fragment links, reload and history navigation open the relevant article section after hydration.
- Focus goes to the native summary, keeping Enter/Space controls available.
- Repeated activation of the same fragment reopens a manually closed section.
- Unknown/malformed fragments do nothing; only details inside the current article are eligible.
- Summaries gain an explicit focus indicator and a rotated expanded icon. Reduced-motion preferences disable smooth scrolling and icon transitions.
- No article content, imagery, account, storage, prices or external services changed.

## Validation

- Typecheck and production build passed.
- 65 unit/API tests passed.
- 12 focused Playwright tests passed, including every 154-place weather deep link in both languages (308 routes).
- Desktop 1280px and mobile 390px Arabic/English navigation tests cover keyboard activation, repeated fragments, reload, history and unknown fragments.
- Existing five encyclopedia-article tests passed in that same run.
- Representative desktop English and mobile Arabic screenshots inspected for header clearance, expanded content, icon state, reading order and overflow.
