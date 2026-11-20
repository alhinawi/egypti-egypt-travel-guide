# Homepage regional photo discovery

## Visible change
The homepage now includes a region selector and photographic governorate rail. Its nine existing editorial regions give access to all 27 published governorate profiles, beyond the homepage's six destination hubs.

- Default selection: Nile Delta, an editorial starting point, not a location-based recommendation.
- Existing sourced profile photos, localized governorate names and computed published-entry counts. No new travel claims or media sources.
- Region buttons expose pressed state and control the results rail. A polite atomic status announces the selected region and count.
- Cards link to governorate profiles, with lazy responsive images and descriptive alternatives. Horizontally scrollable snap rail stays compact on mobile and desktop. Focused cards are brought into view immediately.
- Mobile section heading stacks without truncating the all-governorates link. Hover image movement respects reduced motion.
- Tailwind only. No purchases, new services, account actions or domains.

## Verification
- Typecheck, production build and 124 unit tests pass.
- 78 focused browser cases pass across completed suite runs: 16 new regional discovery cases, 14 gallery navigator cases, 4 governorate search cases, 22 legacy homepage layout cases and 22 legacy homepage chrome cases.
- The regional tests cover every region and all 27 profile destinations in AR/EN at 360, 390, 600, 601, 900, 901 and 1280px, plus real touch selection/navigation. Counts, labels, active state, lazy loading, keyboard activation, focused-card visibility and no page overflow checked.
- 756 additional AR/EN theme/width/region cases, 18 themes, 7 widths, Delta/Mediterranean/Upper Egypt. Selected-chip, card title/count and directory-link contrast all at least 4.6067:1. Photo heights and rail geometry checked.
- Existing snapshot fixtures unchanged. Legacy layout baseline temporarily hides the separately tested new section; legacy chrome excludes its nodes and normalizes the deliberate section-number change from 04 to 05. Remaining original layout, typography, styles and links match.
- Actual Arabic mobile and English desktop/mobile pixels inspected.
- An interrupted oversized test command left a local HTTP server whose output pipe was closed. Subsequent reads failed with empty responses. Stopped that local server and reran bounded suites successfully. No production failure.
- Production verification repeats new regional browser cases and the 756-case matrix on immutable and canonical hosts, checks clean exact-main deployment metadata and canonical mapping, and inspects canonical screenshots before closeout.
