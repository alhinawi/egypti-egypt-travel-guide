# Save places while browsing the atlas

Date: 2026-11-22. Batch B246.

## Visible scope

Each photographic atlas card now has its own named save/remove control in both detailed-card and contact-sheet views. The visible text and bookmark/check icon distinguish unsaved and saved places. The control uses the exact existing `place:` identity, provider readiness, saved list and `toggleSave` callback. This saves the place, not a photo file or the current filter selection. It is not a booking or visit commitment.

The button is disabled until the existing provider is ready, including the existing failed-account-read protection. All new styles are Tailwind utilities, with a 48px minimum height, named AR/EN actions, pressed state, keyboard focus outline and print hiding.

PhotoAtlas only gains an import and a control at each card. Reversing those two insertions restores the baseline byte for byte. No shared viewer, gesture, storage/provider/account API, parser/catalog, photo/source/asset, comparison or global CSS changes. Filter URLs and copied links do not contain saved identities. Existing account persistence, limits, failure warnings and sync remain owned by GuideProvider.

## Local checks

- Production build, both TypeScript projects and all 266 unit cases pass. There is no new domain-state helper needing separate unit logic.
- All 26 new browser cases pass across AR/EN and six widths: detailed cards/contact sheet, names/pressed state, keyboard toggles/focus, guest persistence and saved-page continuity, unchanged comparison/filter state, newly expanded results, viewer/copy actions without implicit saves, exact mocked account writes, failed account read, delayed readiness, existing 100-item limit/storage-failure warnings, direct touch and print.
- All 226 retained browser cases pass unchanged: 38 catalog/router/contact-sheet, 22 copy, 46 swipe/zoom/strip, 36 region/trip, 32 history/comparison, 34 individual filter recovery and 18 saved photo-board cases.
- All 864 combinations of 18 themes, two languages, six widths, two views and saved/unsaved states pass for the new button. Minimum checked contrast 9.075106571852405:1, target height 48px and keyboard outline 3px. No horizontal document overflow or off-screen button.
- Six local screenshots directly inspected: detailed-card AR phone/EN desktop, contact-sheet AR phone/EN desktop and the resulting saved-place card on AR phone/EN desktop. Visible photographs decoded before capture. No clipped controls or broken visible photographs.

The initial saved-page integration probe matched an unrelated hidden coverage link rather than the visible place card. Scoping it to the saved-place card corrected that fixture and all 26 cases then passed. An experimental three-worker combined retained run hit the command time cap before completion; its results are not counted. The exact original groups were rerun separately with one worker and all 226 retained cases passed. The theme probe now waits for provider readiness and explicitly enters keyboard modality before checking focus-visible styling.

## Boundaries

Account, storage and clipboard behavior is tested with controlled fixtures. No real user account or saved-item mutation is used for testing, and no new account endpoint is introduced. Physical-device behavior is not claimed. The no-JavaScript atlas retains its existing encyclopedia/Suspense fallback, not a new interactive server atlas.

The documented pre-existing synthetic rapid combined-input shared-viewer caveat and older stale governorate photo/navigation fixtures remain unchanged and excluded, not called fixed. See the existing viewer and natural-cover QA notes.

## Release checklist

Open one coherent PR with Mohamed as author and the current two coauthors. Require actual green PR checks, normal merge, exact-main rebuild/type/unit/new/all-retained/theme verification, clean exact-main Cloudflare production, both-live browser/theme checks and linked-byte comparison, and direct canonical screenshot inspection. Actual release IDs and completed checks belong in the shipment report. This checklist is not a completion claim.
