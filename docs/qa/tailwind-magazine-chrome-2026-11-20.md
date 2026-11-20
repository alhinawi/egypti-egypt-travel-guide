# Homepage shared text, navigation and promise strip, November 20, 2026

## Scope
Move shared homepage kickers, text links and the information-promise strip into shared Tailwind utilities. Remove 13 legacy selector branches and the Arabic kicker selector from the shared typography rule. Content, navigation destinations, photographs and API behavior are unchanged.

## Verification
- 113 unit tests, TypeScript checks and production build pass.
- 92 distinct browser tests: 22 new homepage-chrome tests, 24 editorial, 22 magazine-trip, 20 mood-card and 4 programme print-contrast regressions.
- Exact 360-case computed-style comparison across the kicker/link/promise subtrees: 288 screen and 72 print cases, 18 themes, AR/EN, widths 360/361/390/600/601/900/901/1280. Print checked at 390 and 1280.
- New browser suite repeats the matrix, verifies promise-link keyboard focus/Enter navigation and section/trip link navigation.
- Arabic and English mobile and desktop actual pixels inspected. Mobile section kicker/link and destination photograph screenshots also inspected.
- All frontend browser checks block /api/**. No live D1/account QA.

## Preserved details
- Screen/print and mobile/desktop kicker tracking, Arabic zero tracking, contextual editorial kicker color.
- Section-heading and trip-card text-link overrides remain intact.
- Promise strip has only block-axis borders, no unintended inline border. Logical auto margin, circle dimensions and icon alignment are unchanged.
- Arabic promise heading prints at 14pt, paragraph line heights retain language-specific overrides.

## Runner recovery
The first combined browser run exceeded the command timeout and left its local HTTP server with a broken output pipe. Subsequent navigation checks returned ERR_EMPTY_RESPONSE, not UI assertion failures. Stopped that local server and reran the suites separately: 22, 66 and 4 tests passed. No tests were skipped or weakened.
