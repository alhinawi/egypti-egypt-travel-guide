# Trip hero typography and save control, November 20, 2026

## Scope
Move trip hero eyebrow, title, paragraph and save-control overrides to Tailwind, including Arabic typography and print. Remove 14 legacy selector branches from editorial and typography styles. Reuse the existing original hero-subtree fixture rather than duplicate it.

## Verification
- TypeScript check, production build and 122 unit tests pass.
- 130 distinct browser tests pass: 48 full hero-subtree matrix tests, four new save-control keyboard/state tests, 72 shared page-heading regressions, four trip-print tests and two save-label regressions.
- 1,080 computed-style cases match before and after exactly, including the gradient pseudo-element, across three trips, all 18 themes, Arabic/English, eight widths and screen/print. The unchanged committed original-baseline fixture passes too.
- Keyboard Tab reaches the save action with visible focus; Enter saves and removes, with correct state-specific labels, preserved colors/sizing and print hiding. Arabic/English at 390px and 1280px.
- Actual mobile/desktop and print pixels inspected in Arabic/English. Loaded photography, title wrapping, gradient, save control and print layout stay unchanged.
- Frontend checks block /api/**. No extra D1/account requests.

## Cascade details preserved
- Arabic mobile title resolves to 38px through the existing shared page-heading utility, not the dead 34px legacy declaration. Desktop uses the existing shared clamp(36px,4.5vw,58px). Arabic title line heights remain 1.55 desktop and 1.65 mobile, including print.
- English screen title keeps clamp(32px,4.5vw,52px) desktop and 30px mobile, with line heights 1.45/1.6. Existing shared English print metrics stay unchanged.
- Arabic paragraph line height remains 2, English 1.85 on screen and 1.65 in print. Print paragraph stays 11px; photo/shade and save action remain hidden.
- Save control retains its translucent navy background and pale mint color in both saved and unsaved screen states, plus 38px mobile size and 42px desktop size.
