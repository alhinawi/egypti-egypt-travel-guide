# Personal trip stop checklist

Published trip pages now include a collapsed personal stop checklist, grouped by the actual published days, with source-photo thumbnails and original article links. Ticks are personal notes, not bookings, proof of a visit or changes to the editorial itinerary. Existing alternatives and warnings in the plan still apply.

Only explicit ticking or clearing writes the per-plan browser key. Viewing does not create it. The checklist is separate from account saves and works without account access. A clear button affects only this plan's ticks. Reload and language changes preserve this browser's ticks. Invalid, duplicate or unrelated stored keys are ignored. Storage read/write failures show a notice; the current page remains usable. The feature is hidden in print, preserving the original printed plan.

## Verification

- Build/typecheck169 unit tests pass. New helpers verify every published day/stop order, stable unique day/place keys and stored-key validation.
-58 browser cases:22 new checklist cases,16 day navigator,14 trip card,4 print,2 save-label regressions. AR/EN and six widths. Exact all-plan/day/place/article membership, keyboard focus/ticking, touch/article return, reload/language persistence, trip isolation/reset, corrupt state, blocked read/write and signed-in no-account-write guards.
-216 theme/language/width combinations pass,minimum sampled text contrast6.0718,controls44px+,no horizontal overflow.
-Actual AR390 andEN1280 pixels inspected for source images, labels, checked state, day headings, storage scope and reset.

No owner account/collection edited. Test ticks use isolated browser fixtures only. No new travel facts, photos, domains, dependencies or payments. New presentation is Tailwind.
