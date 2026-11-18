# Middle Egypt catacombs and excavation films

117/154 places covered including one archive, 37 remain. No styling or photo changes, no purchases. Content deployment only: pending migration 0004_query_indexes.sql is not applied by this batch.

## Verified sources, 18 November 2026

- Tuna el-Gebel: https://www.youtube.com/watch?v=N_S-DCOrOGA . Il Faraone Tours, published October 2023 (player metadata and fetched page). Actual 5:58 video played and advanced; entrance sign identifying ibis/baboon galleries and real underground passage footage inspected around 3:00. The channel has retitled the film, so older search results differ. The entry describes visible footage only, not speculative claims from its title. Narrow animal-catacomb visit, not Petosiris or the full necropolis. No current access/safety claims.
- Heracleopolis Magna: https://www.youtube.com/watch?v=oggBKujE8a0 . Heracleópolis Magna project, En busca de un tiempo olvidado, published January 2019. Original project page https://heracleopolismagna.com/blog/2019/01/20/documental-en-busca-de-un-tiempo-olvidado/ embeds this exact film. Actual 42:53 player advances, excavation remains and people undertaking restoration work inspected around 21:40. Spanish-language documentary, not an interactive walk or full-site coverage. No present-admission claims.
- Held: Heryshef film https://www.youtube.com/watch?v=VDReK8aDfkY is a lecture, not passed off as a visitor walkthrough. Meir 1950 archive lead remains unverified and unadded.
- Direct navigation to YouTube embed URLs returned Error 153 without a referrer; normal watch pages played. We link normal watch pages, and player modal retains existing privacy-enhanced embed behavior.

## Source-label correction

The original-source fallback had been hardcoded to Google Arts & Culture for every separate source URL. The new project source exposed that mistake during pixel inspection. Google-hosted sources keep their existing name; other providers now say Original source page / صفحة المصدر الأصلي. Added AR/EN regression checks for the project documentary's source label and exact link. No styling changed.

## Validation

Build and typecheck passed; 86 unit/API tests and 19 Playwright layout, chapter/player, source-label and scoped-video tests passed. Third-party requests in UI tests are isolated from external availability; actual source playback was checked separately above.

390px AR/EN listings checked 117 cards, exact new titles/URLs/video badges and Heracleopolis detail without horizontal overflow. Arabic Tuna card and English Heracleopolis detail pixels inspected. Existing photographic imagery retained, including the historical 1894 Heracleopolis excavation photograph. Corrected fallback label visually rechecked before shipping.
