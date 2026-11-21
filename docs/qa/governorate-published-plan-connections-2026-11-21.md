# Governorate places in published plans

Every governorate profile now has a trip-plan chapter. Matching is exact: a published day's explicit place IDs must belong to that governorate in the existing catalog. Cards keep original plan/day/stop order, count unique provincial places and matched days separately from full-plan duration, and expose direct links to the matching published day and each provincial place article. Covers come only from eligible matching provincial place photographs, preferring an unused image before repeating. No external facts, photographs, review-date changes, new services, dependencies, domains or spending.

The scope note says plans can span other governorates and matched days can contain other places. This is not a whole-province itinerary, route calculation, travel-time promise, booking or access confirmation. Existing regional travel cautions stay in place. Six governorates currently have matches. All other profiles receive a clear no-published-plan state, not unrelated fallback trips or a claim there is nothing to visit. Profile articles remain independent from plan coverage.

The chapter participates in the existing keyboard/touch/direct-hash navigator, with correct focus and clearance below both sticky headers. Day lists use native details. All new presentation is Tailwind; icons are SVG. No account/save writes, private IDs or query changes. Connection panels are excluded from print alongside other interactive discovery features.

## Verification
- Build/typecheck and 185 unit tests pass.
- All27 governorate plan/day/stop memberships compared against raw published data in original order. Unique counts and eligible cover membership checked, plus multi-governorate plans and honest unknown/empty inputs.
- 46 focused browser cases pass: 24 new connection cases and 22 profile-chapter regressions. Both languages traverse all27 profiles, verify every plan count, matching day/place URL and loaded provincial cover. Chapter keyboard focus, exact-day navigation/return, article navigation, empty-state all-plans link, signed-in no-write/storage preservation, touch, print and six widths covered.
- 72 additional place-to-plan, governorate-photo, governorate-comparison and trip-day-navigation regressions pass.
- 216 theme/language/width checks pass: no horizontal overflow, at least44px visible links/summaries, minimum sampled text contrast4.742371.
- Actual AR390x844 and EN1280x1000 pixels inspected at the section and expanded-card areas. Source photographs, headings, counts, summaries and separate day/article/full-plan links fit and remain readable. Mobile uses one column; desktop two.

Exact-main CI/deployment, immutable/canonical tests and canonical screenshots are recorded in the shipment report.
