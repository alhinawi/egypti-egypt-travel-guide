# Shared shell icon buttons Tailwind migration

2026-11-20, batch B152.

- Shared icon-button dimensions, flex alignment, corners, transparent surface and screen/print text inheritance moved to Tailwind.
- Header menu trigger keeps its desktop border/circle and mobile 36px borderless treatment.
- Nine legacy selector rules removed. Language, drawer, theme and profile close controls use the shared class. No focus, modal or route logic changed.

Verification: typecheck/build, 124 unit tests and 46 browser tests pass. Eighteen new tests include 16 matrix tests and two keyboard modal-recovery tests. 1,080 exact original-baseline cases cover language/header, drawer and theme controls, AR/EN, 18 themes, eight widths and print at 390/1280. Original baseline from main 13f46e9. Existing language focus/escape/context and contrast tests remain green. Mobile Arabic drawer and desktop English theme pixels inspected after animation settled. APIs blocked, no account work. Closed profile controls share the same class, but authenticated profile opening was not part of this mocked visual matrix.
