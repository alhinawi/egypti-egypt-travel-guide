# Natural Historic Cairo opening photographs

Date: 2026-11-22. Batch B238.

## Visible change and limits

Replace only the Al-Muizz Street and Qalawun opening photographs. The former covers looked heavily processed in the search cards. The new pictures are photographic street and mausoleum views, with dated AR/EN alternative text and exact photographer/license/source records. Existing gallery views, cards, atlas and search consume those same records. No article text, layout, memberships, route, control, saved state or current-access claim changes. No captions are added to the article or viewer. All previous assets are retained, including the old Muizz file with JPEG bytes under a WebP filename. New assets use distinct names and actual RIFF/WEBP encoding.

## Source ledger and selection

Selected file pages and their live Commons API metadata were checked on 2026-11-22. The official 1920px JPEG thumbnails, not the full-resolution originals, were downloaded and visually inspected.

| Place | Photographer | Capture date | License | Source | Inspected input |
| --- | --- | --- | --- | --- | --- |
| Al-Muizz Street | Mohammed Moussa | 2016-09-24 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Muizz_Street_-_Egypt.jpg | 1920 × 1352 JPEG |
| Qalawun mausoleum | Sailko | 2015-11-21 | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:Cairo,_madrasa_del_sultano_qalaun,_mausoleo,_interno_02.JPG | 1920 × 1280 JPEG |

License terms: https://creativecommons.org/licenses/by-sa/4.0 and https://creativecommons.org/licenses/by/3.0. The credits explicitly identify the 1920px thumbnail input, conversion, layout crop, no added retouching and the respective adaptation license. This does not claim the source photographer performed no processing. The warm Muizz night exposure is a historical photograph, not a promise of present lighting, access or conditions.

Reviewed alternatives:
- https://commons.wikimedia.org/wiki/File:Muizz_Street_between_Al_Mousky_Street_and_Qalawun_complex_03.jpg, accurate street context but less useful cover composition with closed shop fronts.
- https://commons.wikimedia.org/wiki/File:Sultan_Qalawoon_Tomb.jpg, more processed appearance than the selected interior.
- https://commons.wikimedia.org/wiki/File:Qalawun_complex_29.jpg, processed appearance and less certain sub-building framing.
- https://commons.wikimedia.org/wiki/File:The_Qalawun_complex_(14608534510).jpg and https://commons.wikimedia.org/wiki/File:Qalawun_complex_0057.jpg, neighboring-building categories made these poor choices for an exact Qalawun cover.
- Official street context: https://egymonuments.gov.eg/en/archaeological-sites/al-muizz-street/. No new history claim is introduced.

Original-upload and legacy-thumbnail endpoints returned HTTP 429, so those requests stopped. The Commons API supplied official thumbnail URLs that downloaded successfully. Full originals were not inspected or represented as downloaded.

## Assets and credit count

Six new WebP files are resized without upscaling, filters or pre-cropping; the existing component supplies the layout crop. Muizz variants are 420 × 296, 780 × 549 and 1400 × 986. Qalawun variants are 420 × 280, 780 × 520 and 1400 × 933.

Credits now contain 326 unique sources, rather than 325: the previous Muizz source is still legitimately used by another gallery photograph. Two frozen test counts now derive the expected size from the existing deduplicated source records. The independent full metadata/order comparison remains unchanged.

## Local checks completed before PR

- Build, both TypeScript projects and 225 unit tests, including three new source/propagation/asset tests.
- 32 new browser cases: two places, AR/EN, six widths, image decode, full gallery and keyboard focus return, touch, exact credits, atlas/search propagation, preserved saved identities and no API writes.
- 88 retained browser cases: 22 credit cases, two broad card/photo cases and 64 exact layout cases across the unaffected explore, governorate index, trip and saved contexts.
- 648 theme/language/width/context combinations: 18 themes, two languages, six widths and three contexts. Correct new files, decoded images, cover fitting, no horizontal overflow; minimum checked text contrast 4.7423:1.
- Seven actual pixel views inspected: both places in Arabic phone and English desktop crops, English full photograph viewer, Arabic search cards and English credit cards. Full photograph and control spacing are readable; no captions were introduced.

## Test infrastructure and existing caveats

An interrupted broad run left an orphan local HTTP server returning empty responses. A fresh server with persistent logs and bounded serial suites produced the results above. A subsequent four-worker broad attempt also timed out; its failures are not counted as passes or diagnosed as product bugs. Assertions were not relaxed for either infrastructure failure.

The governorate-detail branch of the older `place-photo-layout` fixture selects the first photograph in the page. The earlier provincial plan mosaics changed which photograph that is, so its frozen figure geometry is stale. A representative Arabic 360px case was reproduced on unchanged pre-B238 canonical production. Its 16 AR/EN/width cases are excluded from the 88 passing cases, not reported green, and its fixture/assertions are untouched here. Log: `/tmp/b238-baseline-gov.log`.

The older governorate `article-layout` navigation assertion and the synthetic rapid-input shared-viewer caveat also remain unchanged. See earlier QA notes. Physical-device rapid-input behavior remains unverified; no shared-viewer change is guessed here.

## Release checks

After a normal green PR merge, repeat exact-main build/typecheck/unit/new-browser/88 retained browser/theme checks. Verify clean Cloudflare production names exactly that commit. Repeat browser and matrix checks on canonical and immutable origins, inspect canonical pixels, and compare observed HTML/styles/chunks/photo assets with locally built main. Record actual results in the shipment report. A different independent Next build ID may be accepted only when explicitly isolated.
