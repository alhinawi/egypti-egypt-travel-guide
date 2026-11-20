# Trip day photo navigator, 2026-11-20

Every published itinerary now has a bilingual horizontal day overview before its programme summary. Cards reuse the existing day title and the first listed place with an existing sourced photograph. Days without a listed photograph use a calendar surface. No unrelated image or itinerary fact was added.

Day links keep normal anchor destinations and modifier behavior. Ordinary activation updates the hash, focuses the day, and scrolls it below the fixed header. Each day offers a return link. Keyboard focus brings offscreen rail cards into view. All new styles use Tailwind. Navigator and return links are hidden in print.

## Checks

- Typecheck, production build and 124 unit tests pass.
- 39 core browser cases cover the new navigator, all published plans in AR/EN, keyboard, direct touch, hash reload, reduced motion, print, save labels and existing programme interactions.
- 50 existing day layout/print browser cases pass against unchanged fixtures. New return links are explicitly hidden only during legacy subtree geometry comparisons.
- 648 matrix cases: AR/EN, 18 themes, six viewport widths, and first/middle/final day jump-and-return states. No document overflow. Minimum measured text contrast 4.7423:1.
- Exact source image and alt text checked for every day card in every published plan; absence of photos verified on calendar cards.
- Actual Arabic mobile and English desktop screenshots inspected, including the focused day destination. Header offset corrected for the existing 85px root scroll padding.

No paid services, domain changes, bookings or account actions.
