# Hermopolis, Bubastis and Tanis virtual visits

112/154 places covered including one archive, 42 remaining. Real photographic material and honest scope. No styling or photo changes, no purchases, Next.js static export and free Cloudflare Pages unchanged.

## Source verification

- Hermopolis: https://www.360cities.net/image/temple-hermopolis-el-ashmunein-egypt . Stefan Geens, 1 December 2008. Actual panoramic scene inspected and rotated: low temple remains, village buildings and open ground. Narrow exterior scene only, not all Hermopolis, and not a current site/access claim. Initial scene needed the drag interaction to clear its helper overlay.
- World of Antiquity, Secrets of the Libyan Pharaohs: published 21 February 2023, 38:36 total. Description names Tell Basta/Bubastis and San al-Hagar/Tanis and exposes distinct chapter links. Actual playback and advancing times verified, with photographs of site remains and English commentary. Ads may play first. This is recorded video, not 360 or interactive coverage; no contemporary admission claims.
  - Bubastis: https://www.youtube.com/watch?v=hnoVXuvIX6o&t=305s . Chapter 5:05 to 22:23. Inspected introductory museum imagery and actual outdoor archaeological displays around 11:57.
  - Tanis: https://www.youtube.com/watch?v=hnoVXuvIX6o&t=1433s . Chapter 23:53 to 37:10. Inspected entry sequence, sculpture and carved stone on-site around 26:03.
- Held, not added: Wikalat al-Ghuri hall https://www.360cities.net/image/wekalet-el-ghouri-hall-cairo . Metadata exists but normal page and VR destination stayed black. No coverage earned from metadata alone.

## Chapter behavior fix

The enlarged-video dialog used to discard the timestamp from YouTube links. It now carries verified integer-second t/start values into the privacy-enhanced embed start parameter. Untimed links stay unchanged. Arbitrary and malformed values are ignored. This avoids opening both Delta places at the unrelated film introduction.

Build and typecheck passed. 86 unit/API tests passed, including timestamp handling and invalid-value cases. 15 Playwright tests passed, including new AR/EN mobile chapter start checks for both places. Provider requests are intercepted in UI tests; external playback is verified separately above. Mobile 390px AR/EN listings verified 112 cards, exact source links/titles/badges and Tanis detail without overflow. Arabic Hermopolis listing and English Tanis detail pixels inspected: readable text, real photographs and intact controls.
