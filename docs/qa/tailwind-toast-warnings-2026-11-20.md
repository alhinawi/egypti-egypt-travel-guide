# Shared feedback surfaces: Tailwind migration

2026-11-20, batch B147.

## Scope
- Shared toast position, layout, responsive offsets, color, shadow and dismiss control.
- Storage-failure warning and account-save read-failure warning with its reload control.
- Six legacy selector branches removed. State logic, message text, accessibility roles, timers, persistence and sync behavior unchanged.

## Verification
- Typecheck and production build pass; 124 unit tests pass.
- 59 browser tests pass: 48 new original-baseline matrix tests, two keyboard dismissal/timer tests, five storage tests and four mocked account-read safety tests.
- 1,080 exact original-baseline cases: three states, AR/EN, eight widths (360, 361, 390, 600, 601, 900, 901, 1280), 18 themes, with print at 390/1280. Baseline captured before CSS removal from main 8082d8b. Computed geometry, colors, typography, border, shadow and control semantics match exactly.
- Preserved browser default button padding and inherited line height. Font-size utilities need importance against the legacy unlayered button font reset. Direct arbitrary box-shadow preserves the original computed value without Tailwind's transparent ring layers.
- Inspected mobile Arabic and desktop English feedback screenshots. All browser APIs mocked; no live account or saved-item writes.
- Existing print behavior is preserved, including visible feedback surfaces.
