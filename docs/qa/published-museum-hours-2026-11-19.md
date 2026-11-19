# Published museum hours, 19 November 2026

A reusable source-dated hours panel replaces generic unverified-hours copy for Tahrir, Coptic and Hurghada museums. Other places keep their existing fallback. New styling uses Tailwind utilities with existing navy/mint tokens and SVG icons, no global CSS changes.

## Primary sources inspected

- https://egymonuments.com/details/EgyptianMuseum , summer/winter start 09:00, last entry 16:00. Ramadan last entry 15:00.
- https://egymonuments.gov.eg/museums/egyptian-museum , regular schedule has an incomplete, orphan 17:00 value. No regular closing time adopted.
- https://egymonuments.com/locations/details/CopticMuseum , summer/winter start 09:00, last entry 16:00. Ramadan last entry 14:00.
- https://egymonuments.gov.eg/en/museums/the-coptic-museum , regular schedule is incomplete, no closing time inferred. Existing gallery rules preserved; the old unreadable-hours claim now points to the panel.
- https://egymonuments.gov.eg/museums/hurghada-museum/ , daily 10:00-13:00 and 17:00-23:00, ticket windows close at 12:00 and 22:00.
- https://egymonuments.com/locations/details/HurghadaMuseum , matching regular starts and last entry. Ramadan morning last entry 13:00 conflicts with ministry 11:00. The panel calls out the conflict and asks visitors to check with the museum, without choosing a Ramadan schedule.

Last entry is not closing time. Cairo closing times remain unset. No open-now, best-time or guaranteed-entry status. Source date 2026-11-19 and local Egypt timezone are explicit. Portal phone-support hours 09:00-18:00 were not mistaken for museum hours. No prices changed, no booking, purchase, new domain or production D1 work.

## Validation

Build, typecheck, 91 unit tests and 32 selected browser tests passed. Coverage includes session ordering, no invented Cairo closing times, Hurghada split sessions and source conflict, English digits, exact source links, two AR/EN browser cases and fallback for Qift.

390px local AR/EN panels were checked for dates, sessions, sources and no overflow. Actual Arabic Hurghada and English Coptic pixels inspected. Arabic date isolated LTR and borders added to session blocks after the first visual pass. Updated pixels rechecked: readable labels, distinct sessions, correct date order and visible sources.
