# Two governorates, side by side

A dedicated AR/EN comparison page, linked from the governorates directory, presents two existing profile photographs, region, capital and overview; source links lead back to each complete profile. It uses the existing sourced profile/catalog data without changing review dates. Each side shows exact published article and eligible atlas-place counts, category totals and up to three real place-photo/article links in catalog order. Coverage is explicitly not a destination ranking, complete inventory, price, route, distance, access or travel recommendation. Empty coverage does not imply an empty destination. Existing regional travel cautions remain visible.

Selectors include all 27 governorates, disallow the other side's selection and support swapping. Validated URL parameters restore both selections; invalid and duplicate inputs resolve deterministically. Back/forward and language switching preserve the pair. URL updates are synchronous and pathname-guarded so article navigation cannot inherit comparison parameters. Mobile jumps reach either stacked profile directly. No account/save writes, private saved IDs or new services, domains, dependencies or purchases. New and touched presentation uses Tailwind.

## Verification
- Build, typecheck and 182 unit tests passed.
- All 729 ordered pair inputs checked, including duplicate repair; distinct pairs round-trip.
- All 27 exact article memberships, eligible atlas memberships and category sums checked in unit tests.
- 44 focused browser cases passed, including 24 new comparison cases. AR/EN each traverse all 27 profiles, verify hero images loaded, exact counts and photo/article links. Query repair, swap, refresh, back, language switch, direct navigation, mobile jumps, signed-in read-only behavior and saved-storage preservation covered.
- 71 directory/search/profile-section/profile-scene/encyclopedia/region regression cases passed.
- 216 theme/language/width cases passed, no horizontal overflow, all comparison links/buttons/selects at least 44px, minimum sampled text contrast 4.742371.
- Inspected actual AR390x844 and EN1280x1000 pixels at the selection area and profile/coverage area. Real photographs, typography, controls, counts and links fit without clipping. Single-column mobile has direct jumps to both profiles.
- Initial language-switch fixture used a nonexistent class and was corrected to the existing language button. A combined test call exceeded its execution window and left a local server without usable output; restarted the local test server and reran the focused suite green. No product behavior weakened for either harness issue.

Exact main, CI, deployment, immutable/canonical results and canonical screenshots are recorded in the shipment report.
