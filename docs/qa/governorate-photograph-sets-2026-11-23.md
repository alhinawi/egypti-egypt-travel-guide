# Governorate photographic article sets, 2026-11-23

## Scope
Existing governorate atlas order is now available three articles at a time on each governorate profile. The initial three articles, photo derivative choice and all-atlas/all-entries exits are unchanged. Cairo has 35 photographed atlas entries across 12 sets, Giza 14 across five, Alexandria six across two. North Sinai has no eligible atlas entries and keeps the collection omitted. Counts describe existing atlas coverage, not every place in a governorate. No geographic, access, ranking or suitability claim is added.

Only the collection component, new bounded-set helper, new Tailwind controls, new tests and this QA record change. No catalogue, media, global CSS, API, account, storage or shared viewer change. No URL/storage/network writes from navigation. Atlas ordering and eligibility remain the source of truth. Images that fail retain their own article name and exit, with a neutral camera placeholder instead of another place's image.

## Checks
- Build and type checks pass; 294 unit tests including two new exact coverage/bounding tests.
- 60 new browser tests: all 27 governorates in AR/EN, every set exhausted, exact ordered membership/photo/alt/category/name/article pairing, honest first-last/total, no duplicates, previous/next boundaries, keyboard, touch, reload, noJS opening links, print hidden, failed photographs and no writes.
- Retained governorate collection and hero mosaic tests unchanged. Existing atlas/article exits and section jumps remain available.
- 864 layout/contrast/target/focus checks: 18 themes, eight widths 360/390/600/601/800/801/900/1280, AR/EN, first/next/last Cairo sets. Minimum contrast 5.46:1, target 44px, focus outline 3px, no page overflow.
- Actual first/next desktop EN1280 and mobile AR390 pixels inspected, including own-photo/name pairing and long-name wraps. Production is accepted only after repeating relevant checks on exact merge, canonical and immutable deployment, confirming byte parity and inspecting canonical pixels.

## Boundaries
Sets do not wrap. Terminal controls stay focusable with aria-disabled and ignore activation; disabled before hydration. Forced click is used only to prove terminal no-op, normal enabled controls use actual click/touch/keyboard. Reload and changed governorate reset transient set position. No JS preserves original three direct article links, with controls disabled. Existing shared viewer rapid synthetic swipe-then-immediate-thumbnail caveat stays documented in its earlier QA records and is not counted as passing here.
