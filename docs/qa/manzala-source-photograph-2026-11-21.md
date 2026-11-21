# Lake Manzala photographic cover, 2026-11-21

## Visible result and source

The existing Lake Manzala entry now opens with an actual waterside fishing photograph instead of a regional satellite view. This also makes it eligible in existing photo-atlas discovery and saved-photo views. Search cards reuse the same exact-place photo. The former satellite image remains second in the detail gallery, with its original metadata, source and CC BY 2.0 license intact.

Primary source: https://commons.wikimedia.org/wiki/File:Fishermen_in_Egypt.jpg . Commons identifies fishermen in Manzala Lake, own work by Eman Shokry Hesham, photographed 31 August 2007, CC BY-SA 4.0. The Wikipedia file mirror corroborates the same source metadata: https://en.wikipedia.org/wiki/File:Fishermen_in_Egypt.jpg . The 3774×1899 original was downloaded and its actual pixels inspected before selection. This is historical photography, not evidence of present access, conditions or a bookable activity. Article facts and checked dates are unchanged.

Original SHA-256: `fa6b84f8fe0cc8080c7aa1a09266df7874cd6e1a7cba23a7eded7faa09da25ee`.

420×211,780×392 and1400×704 WebP derivatives preserve proportions without upscaling. Metadata records resize/WebP/layout cropping and explicitly licenses derivatives CC BY-SA 4.0. Attribution and license/source links are available in the existing searchable credits. Both alt texts identify the 2007 date.

The satellite source remains https://www.flickr.com/photos/48722974@N07/4565554783 , credited to eutrophication&hypoxia, CC BY 2.0. Its contextual/satellite description is unchanged. Unrelated Baltim and Farafra gaps were not filled with approximate or unsuitable subjects.

## Verification

- Build/typecheck and194unit tests pass. Four new units cover source/license/date/files, preserved satellite provenance, atlas/search/saved membership and unchanged unrelated gaps.
-18new AR/EN browser cases pass: detail cover and full-screen gallery at360/390/600/601/900/1280, keyboard switch to retained satellite and close-focus return, atlas and search imagery, saved membership/no writes, both authors/licenses/change notices in credits.
-41related browser regressions pass:18atlas/credit-search cases and23gallery/saved-board/credit-license cases. The old credit-license fixture expected323rows but the pre-change data already rendered324; this source adds exactly one. Updated the explicit count to325, without changing the six public-domain-label or link/focus assertions.
- Actual AR390detail, EN1280detail, AR390full-screen viewer and atlas pixels inspected. Photo is real, framing is legible, retained satellite is selectable, no visible provenance overlay or new UI styling was added.

No new services, domain, plan, spending, purchases, deletions or factual access promises. No CSS or UI code changed. Normal PR/green-CI/main deployment checks are recorded in shipment reports.
