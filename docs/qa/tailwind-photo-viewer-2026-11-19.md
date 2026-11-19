# Photo viewer and retry state, 19 November 2026

Complete the place-photo viewer's Tailwind migration. Remove 23 legacy selector branches, including unused caption rules and duplicate reduced-motion rules. Preserve full-viewport dimensions, backdrop, controls, responsive image stage, hidden failed images and retry-button keyboard outline. Gesture translation remains the existing dynamic inline transform, not new global styling. No photograph, alt text, dialog logic, data or dependency changes.

Exact before/after computed-style, content and accessibility-label parity across 16 Arabic/English normal-photo and failed-photo cases at 390, 600, 601 and 1280 pixels. Mobile padding remains 15px through 600px, with a viewport-minus-300px stage; desktop retains 20px and viewport-minus-240px. Controls remain 44px, images use contain and the controls keep their left-to-right ordering in both languages.

Build/typecheck, 101 unit tests and 34 selected browser tests pass. Eight new cases cover responsive dimensions, hidden failed images, reduced motion, keyboard-visible retry focus, successful retry and focus return, last-photo navigation, close focus and scroll restoration. Existing swipe, deferred-load, image-retry and exact-gallery tests also pass. Arabic photo and English retry mobile pixels inspected. Live frontend checks block /api/**, with no live D1/account QA or backend effects.
