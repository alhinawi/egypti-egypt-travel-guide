# Programme day parts, 19 November 2026

Move morning/afternoon/evening panels and overnight notes to Tailwind. Remove 27 legacy selector branches, retaining unrelated members of shared selectors. Text, photo selection, trip data and overnight counts are unchanged.

Exact before/after screen computed-style and content parity in eight Arabic/English cases at 390, 600, 601 and 1280 pixels, including the second day's three photographic panels. Inclusive 600px spacing, photo heights (215px mobile, 180px desktop), heading sizes and inherited Arabic typography remain unchanged.

Print keeps photographs hidden, compact day-part text, individual block break avoidance and normal flow between blocks. Dark-green sequence numbers and overnight notes replace light mint on white paper for contrast; body text and headings are black. This deliberately improves print contrast without changing screen colors. Source/overview print behavior from earlier batches remains covered.

Build, typecheck, 100 unit tests and 29 selected browser tests pass, including eight new day-part cases and existing all-plan print expansion/restoration tests. Actual Arabic/English mobile and print pixels inspected. Isolated panel captures hide the fixed bottom navigation only while taking screenshots so it does not cover the long panel; delivered navigation is unchanged.

Live frontend checks block /api/**. No D1/account QA, payments, bookings, domains, plans or dependencies.
