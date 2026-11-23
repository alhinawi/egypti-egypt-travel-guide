# Plan comparison photograph sets, 2026-11-23

## Scope
Each comparison card independently browses all its distinct eligible photographs in existing first-listed order. Three per bounded set, original opening examples unchanged. Every photo keeps its own place name and exact first-mentioned day link, not the article link. Nile ten-day plan has nine eligible places in three sets, Cairo/Alexandria seven-day plan six in two. Controls state is temporary; no comparison selections, filter/share URLs, saves or account state change. Reload and removed/re-added cards start from the opening set.

Tailwind AR/EN controls, honest range/total separate from full listed-place coverage. Failed images show a neutral camera placeholder with own name/day link intact. No catalogue/media/global CSS/API/account/storage/shared viewer change.

## Checks
Build/type296unit pass, including two new exhaustive ordered coverage/bounding/empty-plan tests. 24 new browser cases exhaust all nine plans in AR/EN, exact own photo/alt/name/day/link identity, uniqueness, first/last/previous/next, no URL/save/API writes, independent cards, filters retain position, reload resets, failed-image exit, keyboard/touch, clear and print. NoJS has no selected comparison card because comparison selection is client state, unchanged.

38 retained plan comparison/photo tests unchanged/pass. 864 checks cover 18 themes, eight widths360/390/600/601/800/801/900/1280, AR/EN, first/next/last. Min contrast4.74:1, targets44px, focus3px, no overflow. Four actual first/next EN1280/AR390 pixel views inspected, own-photo/name/day pairs and long names fit.

New-test harness fixes: wait for hydrated comparison card before immediate membership read; distinguish native disabled from aria-disabled when a valid single set has no next page. Production assertions were not changed for these test-only issues. Forced click only proves terminal no-op; enabled actions use normal click/touch/keyboard. Existing rapid synthetic shared-viewer caveat is unchanged, no viewer change or pass claim here.

Release requires clean exact merge build/type/unit/browser/matrix, actual green CI and exactmain successful production, canonical/immutable browser/matrix, linked byte parity and canonical pixel inspection.
