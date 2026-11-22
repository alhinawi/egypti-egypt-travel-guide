# Atlas active-filter recovery

Date: 2026-11-22. Batch B245.

## Visible scope

Show current public photo choices as individually removable chips: search, governorate, category, region, era, plan and day. Removing a plan also removes its dependent day; removing only the day keeps the plan. Every other removal preserves independent current values. Clear-all uses the existing atlas reset. Focus goes to the next remaining chip, the previous chip at the end, or the existing search field when no chip remains.

The new Tailwind-only strip replaces the old region-active paragraph, retaining its region-active and clear hooks rather than adding a duplicate region row. It is absent without active choices and hidden in print. Labels use the existing published filter records and parser validation. This adds no travel fact or source. Long queries wrap inside the control. The day value omits a repeated field label.

No filter/parser/catalog, source/photo/asset, shared viewer/gesture, comparison, saved/account or global CSS change. Existing filter changes still close a viewer and reset expanded result count as before. A region control removal now shares the same focus recovery as the other chips.

PhotoAtlas inverse-restoration check is byte-identical to the baseline after removing the two imports, restoring its old region paragraph and its now-unused regions import. Baseline SHA256: e06180ebdcd9f24c2ec52b539142b9f81e35e45d35f64ed57d66b5c74a349b56.

## Local verification

- Production build, both TypeScript projects and all 266 unit tests pass. Eleven new cases cover exact AR/EN values from owning records, invalid/empty values, query bounds, all seven removals, dependency rules and immutable input.
- All 34 new browser cases pass: AR/EN, six widths, exact accessible labels and targets, individual keyboard removals, membership/order, valid URL serialization, dependent day removal, focus recovery, empty-result recovery, comparison/contact-sheet preservation, fresh copy links, saved identities, no API writes, reload/history, direct touch and print.
- Retained groups passed unchanged: 38 catalog/router/contact-sheet, 22 copy-link, 46 swipe/zoom/strip, 36 region/trip and 32 history/comparison cases. After pixel inspection, the day-value wording was shortened to avoid repeating its field label; build/typechecks/unit/new/history-comparison and theme checks were rerun afterward. Exact-main verification repeats all groups on the final committed tree.
- All 648 combinations of 18 themes, two languages, six widths and full/empty/recovered selection states pass. Minimum checked contrast 6.071833125424051:1, minimum target height 48.59375px, minimum focus outline 3px. No horizontal document overflow or off-screen chip target.
- Six local views inspected: full-choice AR phone/EN desktop, empty AR phone, recovered AR phone/EN desktop with decoded actual photographs, and a 120-character query on EN desktop. Both full-choice views were recaptured and rechecked after the day-value wording cleanup. No clipped controls or broken visible photo in these views.

Saved state is seeded once per browser session, not reset on every navigation. Clipboard success is a controlled browser fixture, not a physical-device permission claim. The no-JavaScript atlas still uses its existing Suspense/encyclopedia fallback; no interactive server-rendered atlas is claimed.

## Existing caveats

The pre-existing synthetic rapid combined-input shared-viewer caveat remains unchanged and is not counted green. Physical-device rapid-input behavior is unverified. Older governorate photo-geometry and article-navigation fixtures remain excluded rather than called fixed. See the existing shared-viewer and natural-cover QA notes.

## Release checklist

Normal merge only after actual green PR checks. Rebuild exact main and repeat type/unit/new and every retained group. Verify clean Cloudflare production names that exact main commit. Recheck canonical and immutable origins, theme states, actual canonical pixels and linked built bytes/photo derivatives. Isolate independent local Next build-ID differences explicitly. Actual release IDs/results belong in the shipment report; this paragraph is a checklist, not a completion claim.
