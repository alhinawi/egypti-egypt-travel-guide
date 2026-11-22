# Natural Sinai-coast opening photographs

Date: 2026-11-22. Batch B240.

## Visible scope

Replace the Dahab resort-pool opening with a dated town seafront photograph and the strongly colored Ras Muhammad gate opening with a dated natural bay view. Exactly two photo metadata records change. Lighthouse stays entirely unchanged. Article text, layouts, memberships, routes, controls, saved state and current-access information are unchanged. No visible photograph captions are added. All old assets are retained.

## Verified selected sources

File-page bodies and live Commons API metadata were checked on 2026-11-22. The actual official 1920px JPEG thumbnails were inspected. Full-resolution originals were not downloaded or inspected.

| Place | Photographer | Capture date | License | Source | Inspected input |
| --- | --- | --- | --- | --- | --- |
| dahab | Alexey Komarov | 2020-03-08 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Dahab_2020-03-08.jpg | 1920 × 1280 JPEG |
| ras-muhammad-national-park | patano | 2011-12-04 | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Ras_Mohammed_-_panoramio_(2).jpg | 1920 × 1079 JPEG |

License summaries read: https://creativecommons.org/licenses/by-sa/4.0 and https://creativecommons.org/licenses/by-sa/3.0. Credits identify the thumbnail input, conversion, layout crop, no added retouching and each adaptation license. This does not claim the original photographer did no processing. The park source's narrow frame and color processing are retained. No more specific beach/facility identity, current water color, access or visitor service is inferred.

Official broad context read: https://www.eeaa.gov.eg/Topics/85/36/65/Details and https://www.sis.gov.eg/Story/169628/Dahab?lang=en-us. No numerical, scientific, historical or current-access claim is imported into articles.

## Selection and rejected shared-source experiment

The first Dahab candidate was the existing Lighthouse source. A trial sharing proposal failed the retained gallery source-uniqueness test. The rule was preserved, not relaxed. Before any commit, Lighthouse was restored exactly and a different verified frame selected. The never-committed experimental derivatives were moved outside the repository. The final batch contains no shared-place source or Lighthouse asset change.

Additional photographer-series options inspected: backlit waterfront, parasol seating and Gulf of Aqaba mountain shore. The selected seafront gives clearer broad town context. Earlier candidates included a camel foreground, park beach/camp, salt lake and old mangrove/desert scans. Their weaker composition, narrower use implication or aged scan quality made them less suitable. These are visual selection judgments, not new facts about present conditions.

## Encoding and attribution

Six new real RIFF/WEBP files, resized without upscaling, filters or pre-cropping. Dahab: 420 × 280, 780 × 520, 1400 × 933. Ras Muhammad: 420 × 236, 780 × 438, 1400 × 787. The existing component supplies layout crops. The original old-pool and old-gate sources remain in the governorate photography records and retain their own credits. Source counts derive from deduplicated records rather than a frozen number.

## Local results completed before PR

- Production build, both TypeScript projects and all 233 unit tests pass. Four new metadata/propagation/asset/independent-Lighthouse tests. The original source-uniqueness check is unchanged and passes.
- 36 new browser cases pass: AR/EN, six widths, both openings, decoded 1400px viewer images, keyboard/focus return, touch, exact source/author/license credits, atlas/search propagation, saved identities/no API writes, plus four unchanged Lighthouse checks.
- 92 retained browser cases pass: 22 credit photographs, eight credit layout, four license links, two credit search, 24 credit guide-context links and 32 natural Historic Cairo cases.
- 648 combinations across 18 themes, two languages, six widths and three new-photo contexts pass. Minimum measured text contrast 4.742371431604335:1. Correct image selection/decoding, cover fitting and no horizontal overflow.
- All 315 reverse source associations audited against 378 built AR/EN article/destination/governorate targets. Every target exists and contains a matching source-photo variant.
- Seven actual local pixel views inspected: both places in Arabic phone and English desktop crops, English full viewer, Arabic Sinai search and English park credit card. Subjects stay visible, controls are readable, and no caption overlay was added.

A combined local test command reached its execution timeout only after the 36 new and 92 retained suites had fully passed. The interrupted matrix had no result and was not counted. It was rerun in a separate bounded command with the screenshot and source-link audit steps, all passing. Its server was stopped.

## Existing caveats, unchanged

The documented synthetic rapid-input shared-viewer caveat remains; physical-device behavior is unverified. No guessed viewer fix. The older governorate-detail photo-geometry fixture and governorate article-navigation fixture remain excluded rather than called green. See the earlier Historic Cairo and shared-viewer QA notes. This batch changes no shared component or styling.

## Release verification

After a normal green PR merge, repeat exact-main build/typecheck/unit/new-browser/retained-browser/theme checks. Verify clean Cloudflare production names that exact main commit. Recheck canonical and immutable origins, inspect canonical pixels, and byte-compare linked built assets and all six new derivatives. Isolate any independent Next build-ID difference explicitly. Record actual IDs/results in the shipment report; this paragraph is a checklist, not a claim of completion.
