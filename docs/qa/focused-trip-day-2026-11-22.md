# Focused, shareable trip days

Date: 2026-11-22. Batch B249.

## Visible scope

Each of the 36 published days now has its own static AR and EN page, 72 pages total. The photographic day browser retains its original exact-day/full-plan anchor and callback, with an additional focused-page link for the selected day. A focused page keeps its exact plan/day number, title, note, published morning/afternoon/evening text, suggested overnight, named-stop order, suitable own-day cover and stop photographs, article links, unique programme/current-place sources and clearly labelled whole-plan budget/season/access context. Previous/next navigation stops at the plan endpoints. Both full-plan and exact-day context remain reachable. The page can be linked directly or printed without the rest of the plan.

Arrival/transfer days with no named stops do not borrow a plan image or invent attractions. The page explicitly distinguishes editorial suggestions from bookings, calculated routes, confirmed access or current prices/schedules. Whole-programme guidance is not described as a day price or reserved service. Photos do not imply a guessed association between a time-of-day paragraph and a visit.

Only Tailwind styling is added. The owning browser adds one helper import and one secondary Link; removing exactly those restores its baseline byte for byte. No shared viewer/gestures, existing day sections, URL-state implementation, accounts, saves, checklist, API, itinerary/place/photo/source records, media assets or global CSS change. New helpers validate strict canonical positive day strings and existing trip/day bounds. Unknown and noncanonical routes do not silently select another day.

## Local verification

- Production build, both TypeScript projects and all 273 unit cases pass.
- All 46 new browser cases pass, including every published day in AR/EN, exact content/stop/cover/source membership, valid article/context links, endpoint navigation, touch, keyboard focus, URL/history, language switching, invalid-day HTTP404s, print action/media, no JavaScript and unchanged save/checklist/account state.
- All 338 retained cases pass in serial groups: day browser36, photographic picker38, day viewer38, navigator/checklist38, stop differences18, original day layout50, hero layout48, print/save6, finder/place32, share/comparison34. Existing tests and fixtures were not edited. An initial parallel aggregate was interrupted under contention and is not counted; full serial groups were then completed. Commands grouped beyond the execution window were narrowed and their unfinished group rerun completely.
- All 648 focused-page theme cases pass: 18 themes, AR/EN, six widths, museum/arrival/Giza contexts. Minimum checked text contrast4.742371431604335:1, target height44px, keyboard outline3px, no horizontal document overflow.
- Six final screen images inspected: museum, arrival and Giza, AR phone and EN desktop. Real visible photos decoded before capture. Two-page A4 print inspected, with a separate raster inspection after final print fixes. Print fixes caught by inspection/tests: image hide priority, a fixed160px cover despite narrow-width styles, light colour scheme/white page margins and avoiding orphan section headings. Computed print body/html colour and scheme assertions remain in the browser suite. No printed unrelated plan days, duplicated stop photos or dark page margins.

## Unchanged caveats

The previous whole-detail support-height fixture mismatch remains excluded, not fixed or counted as a pass. Its independent unchanged-live comparison is documented in `trip-place-photo-choices-2026-11-22.md`. Existing synthetic rapid combined-input shared-viewer and stale governorate fixture caveats remain unchanged/excluded. Tests use controlled browser fixtures, not a physical device or real account.

Baltim source research did not change this batch: city/resort subject mismatch, prior image-host429 and a newly observed thumbnail403 stopped image work before any pixels or replacement were selected. No city record or source/media asset was replaced.

## Release requirements

One coherent PR, Mohamed author/current two coauthors, actual green PR checks and a normal merge. Rebuild exact main, repeat build/type/unit/new46/retained338/theme648 on exact main, then new/retained/theme checks on both live origins. Confirm green main CI, clean exact-main Cloudflare production, matching relevant HTML/linked stylesheet/chunk/photo bytes and inspect canonical pixels. Record actual head, CI/main/deployment IDs and source URLs in the shipment report rather than claiming deployment here.
