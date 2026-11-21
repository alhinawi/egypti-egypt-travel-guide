# Trip finder day-by-day photograph preview

Each of the nine published plan cards has a collapsed photograph preview. Its day buttons show that day's exact listed stops, existing suitable place photographs, existing names and planning note. Place links open the original article, and the day link opens the exact original trip-day anchor. The preview neither builds a new itinerary nor implies access, booking or travel-time confirmation. Detail-only or contextual photographs are not promoted to place covers. Stops without a suitable image retain a reading link.

The native details summary and first-day links work before scripts and with JavaScript disabled. Day controls wait for URL readiness. Day choice stays on closing/reopening that preview, but is not written to the URL or storage. Finder filtering, comparison and sharing keep their existing contract. Previews are hidden for print. New surfaces use Tailwind and support AR/EN.

## Validation

- Build/typecheck and 165 unit tests pass, including every original day, stop/order, repeated stop, note and photograph eligibility.
- 84 browser cases pass: 18 new preview cases plus finder, comparison, share-link and day-navigator regressions.
- 68 focused preview/comparison repeats pass. Coverage includes all nine plans and all day/stop links and notes, actual image decoding, keyboard and direct touch, collapsed/reopen state, filter/comparison coexistence, exact day-anchor navigation, print, no saved writes and first-day no-script use.
- Initial comparison regressions exposed a test readiness race: a keyboard focus attempt targeted a still-disabled comparison button before hydration. The test now waits for that button to be enabled before focusing, rather than silently losing the keypress. No application comparison semantics changed. All regression/repeat checks pass after correcting this test precondition.
- 216 AR/EN, 18-theme, six-width checks pass: one/two-column stop cards, minimum checked text contrast 6.0718:1, 44px controls, no horizontal overflow.
- Actual Arabic 390px and English 1280px pixels inspected. Initial note spacing was tightened by inherited styling, corrected with explicit Tailwind margin priority, and revised two-stop day screenshots inspected again.

Exact-main CI/deployment and immutable/canonical verification are performed after a normal green-CI PR merge, with final screenshots reported separately.
