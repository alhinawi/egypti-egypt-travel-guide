# Shared information-page typography: Tailwind

Date: 19 November 2026

## Scope

Moved the legacy prose heading, paragraph, lead and list rules into a shared information-styles module used by About, Privacy, Essentials and Credits. Removed 10 CSS blocks and three branches from shared theme selectors, 15 legacy selector branches in total.

No text, policy statements, review dates, credits, links or backend changed. Existing Arabic and English typography and all four theme choices are preserved. This is not a policy or implementation audit.

## Verification

- 101 unit tests, typecheck and static/API build passed.
- 46 browser tests passed, including 32 new information-page layout cases plus credits search, licence-link and row coverage.
- Exact before/after style and text parity for 128 screen cases and 64 print comparisons: AR/EN, four information pages, four themes and widths 390/600/601/1280.
- Preserved original mobile breakpoint, heading and list spacing, list indentation, muted paragraph colors and theme-specific lead colors.
- Arabic paragraph line height remains 2; English retains 2.15 desktop and 2.1 mobile. Arabic print headings remain 23pt/17pt rather than inheriting screen sizes.
- Inspected AR/EN mobile About and English desktop Privacy in the sand theme. Headings, paragraphs and lists are readable, with no overflow or layout changes.

Language hydration and font readiness awaited before capture and after print-media changes. Frontend API requests blocked. No live D1 reads, account QA, backend or production data changes.
