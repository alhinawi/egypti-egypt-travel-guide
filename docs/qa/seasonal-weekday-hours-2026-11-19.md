# Seasonal and weekday-specific museum hours, 19 November 2026

Extends the published-hours component with bilingual session labels. Luxor Museum's summer/winter cutoffs remain separate, with no automatic season choice because the source gives no changeover dates. Nubian Museum's evening period is visibly Thursday and Friday only, not every day. Existing three panels and all fallback behavior remain.

## Live primary sources read

- https://egymonuments.com/locations/details/LuxorMuseum , summer starts 09:00/17:00, last entries 12:00/19:00; winter starts 09:00/17:00, last entries 13:00/20:00. Closing times not established by readable text and not invented. Ramadan and applicable season must be confirmed before visiting. One primary source supports this panel, not an unrelated second link.
- https://egymonuments.gov.eg/en/museums/nubia-museum/ , daily 09:00-17:00, last ticket 16:00; Thursday/Friday 18:00-21:00, last ticket 20:00.
- https://egymonuments.gov.eg/ar/museums/nubia-museum/ , same regular day and evening sessions; Ramadan 09:00-15:00, last ticket 14:00.
- https://egymonuments.com/details/NubiaMuseum , matching regular starts/last entries and Thursday/Friday evening restriction. Ramadan line says 09:00 start, 16:00 last entry, conflicting with ministry. Panel flags the Ramadan disagreement and does not choose a Ramadan schedule.

No open-now status, ticket price changes, bookings, purchases, new domains or D1 actions. Date and local Egypt time remain explicit. All new styling remains Tailwind utilities in the existing navy/mint palette.

## Validation

Build, typecheck, 93 unit tests and 32 selected browser tests passed. New regression protects four distinct Luxor season/session labels and no invented closing time; Nubian Thursday/Friday restriction and Ramadan conflict. Browser tests inspect all five panels in AR/EN, exact source URLs, session labels, date, cutoff values and fallback.

390px local AR/EN checks pass for both new pages, no overflow. Actual Arabic Luxor and English Nubian pixels inspected: labels readable, time values aligned, distinct session blocks and sources visible.
