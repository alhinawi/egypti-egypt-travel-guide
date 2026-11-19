# Tour source and inline-player Tailwind migration

November 19, 2026. Presentation refactor only. No source review dates, URLs, text, loading behavior, data or API changes.

- New `tour-styles.ts` shares source-note/date/inline-player utilities. Removes six legacy selector branches from globals and typography.
- Source links keep inherited font size, 0.3rem icon gap, target/rel and source destinations. Dates keep isolated LTR display in both languages. Notes keep their inherited card paragraph line height and zero margin override.
- Inline models keep a 640px desktop frame, 70svh mobile height with a 520px minimum, mobile width expansion and negative margins, 14px corners and existing background. Lazy mount, close/unmount and focus retention unchanged.
- Retained recorded-frame variant also moves to utilities. The current video path opens its publisher and does not reach that inline branch. This is not a newly enabled inline-video feature.
- Dormant old-home promo and ready-filter CSS are left alone because they have no live route consumers.

## Checks

- 101 unit tests, typecheck, static build and API build pass.
- 29 browser tests pass, including eight new AR/EN responsive source/player tests and existing card layout, fullscreen fallback, chapter starting points and unload coverage.
- Inventory fullscreen test timeout is 60 seconds rather than 30 seconds. It walks the entire 154-visit inventory in sequence with native fullscreen transitions. It passed alone at the old limit, but two concurrent suite runs exceeded 30 seconds. No assertions removed. Complete suite passes with the bounded 60-second allowance.
- Exact computed-style/content parity in 96 screen and 48 print cases: AR/EN, 390/600/601/1280px, four themes, virtual listing plus Abu Simbel and Menna pages. Frames opened then closed. Includes all source/date/link descendants and responsive frame dimensions. API calls blocked. Provider contents stubbed to isolate UI checks.
- Actual pixels inspected on AR/EN mobile inline frames and mobile/desktop source sections. No horizontal overflow. Fixtures are visibly marked as UI fixtures, not provider playback.

This is not a fresh playback, access, admission, safety or source-rights audit. External destinations and review dates are preserved.
