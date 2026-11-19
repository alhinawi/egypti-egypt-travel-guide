# Programme sources, 19 November 2026

Move the trip programme source panel to Tailwind and remove 10 legacy selector branches. Source URLs, deduplication, attribution caveat, disclosure interaction and print state-restoration code are unchanged. No dependencies or factual refresh.

Exact before/after screen computed-style parity across Arabic/English at 390, 600, 601 and 1280 pixels, including all source elements and URLs. Preserve the inclusive 600px padding change and Arabic 17pt print heading.

Visual print verification found an existing black heading on a navy panel. This batch deliberately fixes that contrast issue: the source panel prints on white with black heading, dark source text and dark-green disclosure. The change is scoped to the source panel in print, leaving screen themes unchanged. Print page break remains before the source panel.

Build, typecheck and 100 unit tests pass. 13 selected browser tests pass, including eight new source-panel breakpoint/language cases plus existing programme and all-plan printing tests. Disclosure opens and closes; external links remain HTTPS, noreferrer, LTR and wrapping. Print events still expand all notes and restore the previous state afterward.

Inspected actual Arabic mobile and Arabic/English print pixels. Live verification blocks all API requests. No D1, account, payment, booking, domain or plan effects.
