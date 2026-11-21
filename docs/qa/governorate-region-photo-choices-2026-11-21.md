# Governorate directory photographic region choices, 2026-11-21

## Visible outcome

The governorate directory now offers a horizontal photographic chooser for the guide's nine existing region groups. Each button names its region, shows the current name-match count over its exact governorate membership and identifies the single governorate whose existing profile hero illustrates that group. Text distinguishes editorial browsing groups from administrative divisions and the photograph from whole-region coverage or present access. No geography, membership, source or licensing data was added or changed.

Selection filters the same27governorate directory, stays synchronized with the existing region select and preserves the typed name. Selecting the active region again or All regions clears only the region. Empty-state reset still clears name and region and focuses search. The chooser supports keyboard focus reveal, active-region reveal without moving vertical scroll, touch, explicit pressed state and a View matching governorates link that jumps to and focuses the existing result count. Directory cards and comparison entry remain unchanged.

Name and validated region now stay in the URL, with query capped at120characters. Reload, browser history and language switch restore them. Unknown regions are discarded; name matching retains bilingual case/diacritic normalization. URL persistence/privacy scope is stated beside filters. Only local catalog search, no account writes or new storage. Before JavaScript activation, photo choices/search controls are disabled but images and all27direct profile links remain. Print hides the new chooser and retains the original directory.

## Verification

- Build/typecheck and202unit tests pass. Three new units cover the exact9-group partition of27governorates, profile-member source covers, intersections/normalization, literal input, validated URL round trips, query cap and empty states.
-18new AR/EN browser cases pass. All9choices tested at360/390/600/601/900/1280with exact selected memberships/counts/source alts/cover labels, keyboard focus/reveal, loaded photos, URL region and result-count jump. Other cases cover query intersections, reload/language/history, empty reset, literal HTML-like input, select/button synchronization, same-choice deselect, no save/API writes, print, touch and no-JS static directory.
-64related browser regressions pass unchanged:40directory layout/name search/governorate comparison plus24language/profile-mosaic cases. Existing directory card widths, photo crops, type and print expectations remain.
-216language/viewport/theme checks pass, minimum label contrast5.459955953071658, no document overflow and visible controls at least44px. Horizontal rail overflow is intentional and contains all9groups; keyboard-revealed choices remain in viewport.
- Actual AR390andEN1280chooser pixels and AR390filtered single-result pixels inspected. The result card and all source links remain usable; no illustration or synthetic imagery added.

Tailwind/SVG only on touched directory/chooser, no global CSS, new services/domains/plans, spending or deletions. No changes to shared photo viewers. The documented B218 rapid synthetic-input follow-up is unrelated and remains unresolved. Normal PR, CI and exact-main production checks are recorded separately in shipment reports.
