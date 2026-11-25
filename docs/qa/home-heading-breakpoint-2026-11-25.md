# Home heading intermediate-width correction

2026-11-25, B356.

B355 passed its stated320/601 doubled-text checks. Extending the same all-day audit to360/361/390/520/521 found English Mediterranean heading overflow at361 and390, two of360cases. The18px English narrow-heading rule stopped at360px before enough width existed for the24px heading to resume. Arabic passed.

Extend only that English18px rule through420px. Whole words remain intact, no anywhere/word-break utility. Header layout, Arabic typography, photos, wording and handlers unchanged. Existing English24px resumes above420.

Build/types298unit passed. Independent648case audit covers36days2languages9widths320/360/361/390/420/421/520/521/601 with zero overflow. Expanded12test regression covers432day cases at320/361/390/420/421/601. Retained20viewer20mobile-photo6selectedsave/noJS/touch tests passed. Actual AR/EN390doubled-text Mediterranean cards inspected: whole readable headings, independent save/enlarge controls and unchanged day exits. Isolated screenshots hide fixed chrome for inspection only.

B355 full gallery suite was not completed, only its selected coverage is claimed. Existing unrelated live intermittent/rapid-input/CSSzoom caveats remain unchanged. Release proofs and canonical verification reported separately.
