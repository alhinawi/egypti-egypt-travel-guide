# Visual trip-day browser

Trip-detail pages now have a large day preview between the existing direct day-jump rail and personal checklist. Readers can switch days without losing their place in a long plan. The panel shows the exact published day title/note, all named stops in original order, eligible source photographs, province labels and direct place-article links. A separate action opens the selected day's actual details and moves focus there. Existing direct jumps, checklist, day cards and print behavior remain.

The first day is always the initial preview. Arrival/transfer/free days without named stops retain the real day note and an honest no-named-places state, never invented attractions or unrelated photos. Missing eligible photographs remain text-only with a clear coverage count. Uses existing tripPhotoPreview eligibility, which excludes contextual/detail-only photos. No new facts, photographs, source review dates, dependencies, services, domains or purchases. All presentation Tailwind, all icons SVG. Switching days makes no account/save/checklist writes and does not add query parameters. Native first-day markup remains available before activation; day selectors enable after activation. Excluded from print.

## Verification
- Build/typecheck185unit pass. Existing unit tests cover exact day/stop/note order and ineligible cover exclusion.
- 36 new browser cases cover all9 plans/every day in AR/EN, exact titles/notes/stop order and article URLs, suitable loaded images, no-stop days, keyboard, exact detail focus/jump/return, unchanged URL on previews, saved/checklist preservation, touch, print and six widths.
- 110 related browser regressions:38 existing photo-preview/day-navigation/print cases and72 checklist/day-layout cases. Large combined regression call exceeded the command window, split into independent suites and rerun. No assertion or timeout weakened.
- 216 theme/language/width cases pass, no page overflow,44px controls/links, minimum sampled text contrast6.071833.
- Actual AR390x844 and EN1280x1000 screenshots inspected. Photographs, day heading/note, place names/province labels, selected-day buttons, separate article/detail actions fit and are readable. Local heading specificity adjusted in Tailwind to avoid inherited day styles shrinking the day heading or adding excess title spacing.

Exact-main CI/deployment, both live origins and canonical screenshot evidence are in the shipment report.
