# Place gallery cover and strip, 19 November 2026

Move the photographic cover, open-gallery badge, hint and swipe-strip layout to Tailwind. Remove 15 legacy selector branches; retain unrelated credits, dialog, retry and reduced-motion lightbox rules. No photographs, alt text, dialog logic, route data or dependencies changed.

Exact before/after computed-style, text, image URL and accessibility-label parity for eight Arabic/English cases at 390, 600, 601 and 1280 pixels. The inclusive 600px breakpoint retains the 300px cover, 72% thumbnail cards and 175px strip images, with 440px/210px/145px desktop values. Logical badge placement, English-digit numbering, scroll snap, touch/pinch behavior and overscroll containment remain unchanged.

Build/typecheck, 101 unit tests and 21 selected browser tests pass. Ten new cases cover responsive layout, opening the final thumbnail, focus restoration and detail-only photographs without a misleading cover. Existing tests cover keyboard endpoints, reduced motion, page-scroll locking/restoration, touch swipes, image failure/retry and deferred dialog loading. Correct the older combined smoke test's fixture isolation: clear only this place's checklist before each new page load so its second viewport does not toggle the persisted choice off.

Arabic and English mobile gallery pixels inspected. The fixed bottom navigation is hidden only during isolated screenshots to avoid covering the gallery; delivered navigation is unchanged. Frontend live checks block /api/**, with no live D1/account QA or backend effects.
