# Language surface contrast fix

2026-11-20, batch B150, immediate follow-up to B149.

- Selected language now uses fixed dark text on its existing pale background. AR/EN badges inherit their link text color rather than the old fixed low-contrast green.
- Skip-to-content now uses dark text and outline on its existing white background.
- Tailwind only. No geometry, text, destinations, state or focus behavior changes.

Verification: typecheck/build, 124 unit tests and 28 browser tests pass. Four new ratio tests cover both languages, mobile/desktop and all 18 themes, requiring 4.5:1 for both language options, both badges and skip text. Expanded 720-case original matrix permits only the explicit color changes and derived border/outline colors. All other original properties remain exact. Across 2,880 screen text-pair checks, minimum contrast is 10.06:1. Mobile Arabic and desktop English actual pixels inspected; selected language and skip text are now readable. APIs blocked, no account work.
