# Shared save control, November 20, 2026

## Scope
Move shared SaveButton geometry, themed saved/unsaved colors, border and print hiding to Tailwind. Remove eight legacy selector branches from globals/editorial. Parent card/hero utilities retain their specialized sizing, placement and colors. Save state and persistence logic are unchanged.

## Verification
- TypeScript, production build and 124 unit tests pass.
- 64 new browser matrix tests pass, split into place and trip contexts to keep command runs bounded.
- 2,880 original-baseline computed-style cases pass exactly: four contexts (explore card, Giza place detail, trip list and Cairo programme detail), two visual states, all 18 themes, Arabic/English, eight widths and screen/print. 2,304 screen and 576 print cases. The fixture captures button/icon/pseudo styles including text-decoration properties.
- 19 existing browser regressions pass: blocked storage warnings, normal local-save persistence and labels, warning recovery, mocked account-read safety, trip save labels, hero keyboard/save-state continuity and all-plan print behavior. Account requests are intercepted; no live account saved writes or extra D1 requests.
- Updated an existing broad class regex to match the exact is-saved class token. A Tailwind state variant includes that substring even in the unsaved state; the old regex was a false match. Keyboard, labels, colors, focus and save/remove assertions remain intact.
- Screen pixels inspected in Arabic/English at mobile/desktop widths, covering saved and unsaved controls. Saved bookmark fill, mint background, border and specialized placement remain unchanged. Matrix and print regressions confirm print hiding.

## Preserved cascade
- Base control remains a 42px circle with inline-grid centering and no shrink. Parent mobile card/hero sizes still win.
- Default colors use theme tint/accent. Saved background uses accent, with paper text in print and page text on screen. The trip hero keeps its existing translucent navy/pale-mint override in both states.
- Border is transparent outside screen and uses theme line on screen. Explicit important utilities retain the old override against the shared unlayered button reset without replacing specialized hero border colors.
