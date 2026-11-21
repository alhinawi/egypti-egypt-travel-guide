# Current-reading chapter navigation

Governorate profiles now show a compact current-reading label and one accessible active chapter while the reader scrolls. The existing rail uses aria-current=location, a high-contrast selected surface and weight, not color alone. The label is single-line to keep the sticky header height stable. Before the first chapter no chapter is marked. Tracking never changes the URL, focus, document scroll, saves or horizontal rail position. No live-region announcement on every scroll. Print remains unchanged.

Sections can share a desktop grid row. Tracking picks the first published section at an equal top coordinate unless an explicit fragment selects the other one. The final places section is outside the profile article, so its active state uses the same185px reading line even when the rail starts leaving its sticky parent. Scroll updates are frame-batched; resize/font/layout changes are rechecked and listeners are cleaned up.

## Real delayed-activation focus regression
A native anchor can receive focus before scripts activate. In the previous build, a390px English viewport probe left the focused last chapter link at x1262.1875 after activation, outside the visible rail. The updated build reveals that same focused link horizontally on activation and after fonts settle, without changing focus or document scroll. The same probe ends at x253.1875 with width104.421875, within390px. Native fragment clicks before activation also recover the exact chapter with existing sticky-header clearance. Original chapter geometry thresholds are not weakened. This grounds one cause of the earlier intermittent rail-focus symptom, not every possible timing issue.

## Verification
- Build/typecheck185unit pass.
- 42 focused browser cases:20 new reading/focus/delayed-script/scroll/keyboard cases plus22 original chapter cases, both languages/six widths. New delayed-script tests hold actual script requests, focus or activate native links, release scripts and verify focus/visibility/geometry. Ordinary scroll leaves URL/focus/saves untouched; tracking never drags the rail or creates repeated live announcements. Print hidden.
- 66 additional provincial-plan/photo/comparison regressions pass.
- 216 theme/language/width checks pass, min sampled text contrast6.071833,44px rail links, no horizontal page overflow. Fixed active-link text specificity found by the matrix before shipping; no contrast threshold widened.
- Actual AR390x844 and EN1280x1000 screenshots inspected at the Photos chapter. Current label and active pill are readable and fit, source photographs remain intact, header clearance preserved.
- Existing photographs/content/source review dates unchanged. Tailwind only, SVG icons, no dependencies/domains/services/spending/account writes.

Final exact-main CI/deployment, immutable/canonical suites and canonical screenshots are in the shipment report.
