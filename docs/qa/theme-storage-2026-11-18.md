# Theme storage failures, 2026-11-18

Reproduced a complete client-side error page in both languages when localStorage reads throw SecurityError. The initial theme effect did not catch the exception. This made the guide unusable rather than keeping the default theme.

The theme read now catches storage errors. The current page remains usable with its default theme. Theme choices still apply in memory even if persistence fails. A bilingual notice in the drawer and picker explains that storage is unavailable and a reload may reset changes. A later successful write clears the notice. Normal guidance is conditional on storage availability, not an unconditional persistence promise.

Validation: typecheck, production build, 71 unit/API tests, six browser checks across Arabic and English. Checks cover blocked reads without page errors, failed writes with in-page theme changes, warning and recovery with a real successful write, and normal persistence after reload. Before the fix, all four initial failure checks failed; blocked reads reached the global error screen. Inspected 390px Arabic and English picker screenshots, including the night theme and readable notice. No sources, content coverage, external providers, saved-place behavior or account endpoints changed.
