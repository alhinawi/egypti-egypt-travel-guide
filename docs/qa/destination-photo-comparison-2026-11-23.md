# Destination photographic pair, 2026-11-23

## Scope
Destination photo sheets now let visitors explicitly choose up to two eligible matching photographed articles and open their existing place comparison. Each selection has its own photo/name, removal and clear control. No link appears before two choices. Other choices disable at two; selected choices remain removable. The pair is temporary and clears when displayed article membership changes, including filter-out-and-back, or the photo sheet unmounts on return to cards. No save changes, no comparison state in the filter URL, no implicit visit route.

Cards remain default. Existing view/filter share URLs, atlas viewer, article exits, eligibility, catalogue and media are unchanged. No API/account/storage/global CSS/shared-viewer change. New styling is Tailwind only. Failed pair preview uses a neutral camera placeholder and preserves the selected article name and exact comparison exit.

## Checks
- Build/type and 294 existing unit tests pass.
- 12 new AR/EN browser tests: exact pair/name/photo/alt/link, max two, remove/replace/clear and focus, keyboard/touch, no save/API writes, signed-out and mocked signed-in paths, filters and back-to-cards reset, reload, print, failed preview, all destination eligibility and filter-out/back clearing, explicit no-photo result omitted.
- 58 retained tests unchanged: 18 destination photo sheet and 40 destination full-screen viewer tests, including every destination image identity, filter membership, focus restoration, URL and save preservation, noJS and print.
- 864 theme-width-state checks: 18 themes, eight widths 360/390/600/601/800/801/900/1280, AR/EN, empty/one/pair. Minimum contrast 5.46:1, enabled target 46px, focus 3px, no overflow.
- Four actual empty/pair desktop EN1280/mobile AR390 pixel views inspected for own-photo/name pairing, long-name wraps and control hierarchy.
- Production acceptance repeats exactmain build/type/unit/new/retained/matrix, canonical and immutable new/retained/matrix, linked byte parity and actual canonical pixel inspection.

## Limits
Choices are scoped to current destination results, not across filters or destinations. No missing-photo article receives a comparison choice in the photo sheet; its direct article link and cards remain available. Existing full-screen viewer rapid synthetic swipe-then-immediate-thumbnail caveat is unchanged and is not claimed passing here. Signed-in tests use isolated QA responses, not a private user's saves.
