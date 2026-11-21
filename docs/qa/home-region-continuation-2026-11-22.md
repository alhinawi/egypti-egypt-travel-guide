# Home region continuation, 2026-11-22

## Visible outcome

The home page's existing regional discovery now offers a compact selected-region continuation: three named place photographs from that region's existing eligible atlas collection, separate counts for governorate profiles and photographed place articles, and direct links to the governorate directory and photo atlas with only the selected region retained. Example tiles open their own place articles. Existing governorate cards/photographs and taxonomy remain unchanged.

The examples follow existing atlas order, not a ranking or a distance order. The scope text distinguishes browsing groups from administrative divisions and notes that examples are not full coverage, routes or confirmation of access. No profile image substitutes for a place image. Existing atlas eligibility excludes unsuitable/contextual images and North Sinai place photographs. A Sinai group can therefore have two governorate profiles while all currently eligible example photographs are in South Sinai; each tile names its own governorate.

Regional chips are disabled until activation and keyboard-focused chips reveal within their horizontal rail without changing vertical scroll. Before JavaScript, the default Delta profile/article links and photographic continuation remain usable. The directory then retains its existing no-JS all-profile fallback rather than claiming a client filter has run. The new panel is hidden in print. No persistent home state, saves, checklist/account changes or writes added.

## Verification

- Build/typecheck and206unit tests pass. Two new units verify all9groups' exact governorate/eligible atlas membership, first3example identity/order, image suitability, URL filter round trips and invalid group rejection.
-24new AR/EN browser cases pass. All9groups at390/1280and Delta/Sinai at360/600/601/800/801/900: exact examples/names/alts/loaded images/counts/article links, both region links, minimum44pxtargets and no document overflow. Delta/Sinai/Western Desert handoffs navigate and resolve the actual directory and atlas filters/counts. Touch article entry, keyboard reveal/no vertical jump, print and usable default no-JS links tested.
-82related cases pass:48existing home regional/vibe/exhibition cases plus34directory/atlas regional cases. The old exhibition keyboard test focused a disabled pre-hydration button before Enter; it now explicitly waits for that button to be enabled. All48cases pass, no exhibition product changes. An earlier long new-suite run exceeded the shell timeout; the server was cleaned up, then the complete bounded suite reran green.
-216theme/language/viewport checks pass with minimum panel text contrast6.071833125424051,44pxtargets and no overflow. Actual DeltaAR390/EN1280andSinaiAR390panel pixels inspected. Heading size corrected with a local Tailwind priority override, final screenshots re-inspected.

Tailwind/SVG on touched home region surfaces only. No global CSS, new data/source claims, services/domains/plans, purchases or deletions. Shared viewers unchanged; the separately documented B218rapid combined-input follow-up remains unrelated. Normal PR/CI and exact-main deployment results are recorded in shipment reports.
