# Atlas photographic contact sheet

An optional compact contact-sheet view lets visitors scan the same filtered atlas photographs in two mobile, three tablet or four desktop columns. Detailed cards remain the default and reload default. The compact view retains governorate labels, named article links, photograph enlargement, comparison and show-more pagination. Only the long article action is omitted, because the name is still the article link. Changing views does not reset selection, filters, expanded result count or comparison, and does not write URL, storage or account data. Resetting filters retains the chosen view for this page. The view selector is hidden for print.

No new images, claims, itinerary or inventory data. New and touched compact styling uses Tailwind. AR/EN share the same interaction model with responsive image sizes.

## Checks

- Build/typecheck and 165 unit tests pass.
- 114 browser cases pass:14newcontact-sheet plus100atlas/category/swipe/history/region/router/filmstrip cases. Another28focused repeats pass.
- New tests cover exact filtered IDs, responsive columns and compact typography, keyboard/direct touch, article links and unchanged URL, viewer navigation/escape/focus return, pagination focus, comparison preservation, card-view return, filter/empty/reset/reload/no-saved-writes and print hiding.
- 216 AR/EN18-theme6-width checks pass: 44pxcontrols, no overflow and min checked text contrast6.0718:1.
- Actual AR390/EN1280 pixels inspected. Inherited heading styles initially overrode the compact desktop text size; explicit Tailwind priority fixed it, size assertions were added and revised screenshots inspected.
- An initial test-only selector referred to comparison cards instead of the existing selected-pick list. Corrected to the actual UI selector before all green runs. A combined screenshots/matrix/browser call timed out at case113; the complete114suite was rerun separately and passes.

Exact-main live deployment, immutable/canonical browser checks and screenshots follow a normal green-CI PR merge and are reported separately.
