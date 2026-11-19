# Article photo items, 19 November 2026

Move article items, real-photo figures and two-column buy grids to Tailwind, removing 11 legacy selector branches, including unused photo-caption rules. Retain the unrelated profile-section grid rule. No article text, photo choice, crop, source URL, data or dependency changes. Photo captions remain absent.

Exact before/after computed-style, content, image URL, alt text and link parity for 16 Arabic/English buy/eat cases at 390, 600, 601 and 1280 pixels. Buy grids retain one column through 600px and two above; photo heights remain 220px/240px. First-child padding is removed only where the article really is its parent's first child. Food items following the section note keep their normal 18px top padding. Final item borders remain absent.

Build/typecheck, 101 unit tests and 43 selected browser tests pass, including 16 new layout/content-integrity cases. Existing native disclosure, craft-buy, Delta-buy and rich article tests pass. Actual Arabic photo-led buy and English eat mobile pixels inspected. Isolated captures hide sticky header, skip link and bottom navigation only while taking screenshots to avoid covering long content; delivered navigation is unchanged. Frontend live checks block /api/**; no live D1/account QA or backend changes.
