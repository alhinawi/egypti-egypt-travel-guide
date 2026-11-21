# Saved-plan personal progress

## Visible result
Each saved trip has a read-only browser-personal checklist count, a source photograph of its first unticked published stop when eligible, and an explicit link to open/focus its checklist. The first unticked stop follows published order only, not a next-visit recommendation, route or proof of a visit. All-ticked plans have a complete state. Storage read failure is stated without inventing a count. No saved plans means no progress cards.

Viewing never ticks, resets, writes checklist data or changes account saves. Counts filter duplicates/invalid keys using the existing checklist reader. Browser storage, focus and pageshow refresh the preview. The direct fragment opens/focuses the checklist on touch, keyboard, reload and navigation. Personal ticks remain separate from account saves. No new facts, photographs, domains, purchases or external dependencies. New presentation uses Tailwind.

## Checks
- Build, typecheck and 171 unit tests pass.
- 58 focused browser cases pass: 18 new progress/resume cases, 22 existing checklist cases, 18 saved-plan preview cases.
- 72 separate saved-board/photo-board/area, trip-day and language regressions pass. Saved-board status locators now explicitly target its collection count, rather than all status announcements including personal progress.
- 216 cases across 18 themes, AR/EN and widths 360/390/600/601/900/1280: no horizontal overflow, resume links at least 44px high, minimum sampled text contrast 6.071833.
- Local AR390 and EN1280 pixels inspected. Source-photo loading, browser persistence, trip isolation, signed-in no-write behavior, complete/corrupt/blocked/empty states, touch, keyboard focus, deep fragment, reload, article return and print covered.
- An initial local test run reused an old server on port 8787, which returned empty responses. Fresh isolated port 8827 passed the complete focused suite. No product-code change was needed for that environment failure.

Head and merged-main builds, deployment identity, immutable/canonical browser checks and HTML/photo byte matching are verified separately in the shipment report.
