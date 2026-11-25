# Full-plan day browser at enlarged text

Date: 2026-11-25. Batch B352.

## Reproduction and change

B351 sampled only the first Luxor day. Extending the check to all 36 published days in both languages at 320px exposed clipped English day/place names, including Hatshepsut on Luxor day 2. The photograph, story link and separate save/enlarge controls were present, but long words exceeded their text box at doubled text.

The full-plan day panel now uses Tailwind `overflow-wrap:anywhere` and `min-width:0`. No wording, photograph, order, photo eligibility, interaction handler, shared viewer, API or storage implementation changed. Word splitting is allowed only when necessary to avoid clipping.

## Verification before PR

- Build, both type checks, 298 unit tests passed.
- New four-case regression covers all 36 days in both languages at 320 and 601px, 144 day-panel checks. Reset-safe text sizing avoids multiplying inherited styles across day switches. Exact day title and detail anchor retained.
- Independent 72-case 320px audit: no panel overflows after the fix.
- Retained: 36 full-plan browser tests, 38 day-viewer tests, 60 day-choice/gallery-entry tests and 26 independent-save tests passed in completed separate runs.
- Two earlier oversized combined commands hit the execution limit before completion. Their partial results are not complete-suite passes; they were rerun as the completed groups above.
- Inspected actual AR/EN 320px doubled-text Hatshepsut card captures. Long title now wraps instead of clipping. Isolated card screenshots hide fixed header/bottom chrome for inspection only.

## Existing caveats

B349 intermittent live forced-failure visibility and all-plan timeout causes remain unknown. B350's local repeats passed without establishing their cause. Earlier physical rapid-input and CSS-zoom navigation caveats remain outside this fix.
