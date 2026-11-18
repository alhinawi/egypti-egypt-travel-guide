# Verified museum visits: November 18, 2026

Adds five actual recorded 3D visits, raising catalog coverage from6 to11 out of154.143 places still need source research, not represented as finished.

- Coptic Museum: https://mpembed.com/show/?m=yMMHWqMJZbY&mpu=497
- Museum of Islamic Art: https://mpembed.com/show/?m=GLcinPBnEet&mpu=497
- Gayer-Anderson Museum: https://mpembed.com/show/?m=LCyv1zFUxiq&mpu=497
- Muhammad Ali Mosque: https://mpembed.com/show/?m=CqL3QB3dh7N&mpu=497
- Abu Serga Church: https://my.matterport.com/show/?m=PfNu1RDRbZf

Original Ministry/Egypt Exploration Society source URLs are stored with each record in tours.json. Every new record has a checked date, named provider and bilingual scope. Models were opened at their provider and actual room imagery inspected. Abu Serga's guided tour Play was clicked and entered the church footage. External source links are always available; existing inline players now also have a direct provider fallback. Local test network closes MPEmbed connections; provider room imagery was verified separately in the live browser, not mocked. These are recorded captures, not current access or full-site coverage claims.

## Rejected leads
The historically advertised Matterport models bN9MbB6cdzi (Barquq),9sXzU9yY1gw (Ben Ezra),Yyw1F5eGxxZ (Red Monastery),zBpDdPqxTKz (Djoser) currently return model unavailable. Do not publish from old announcements alone. The museum-linked English Bayt al-Suhaymi page is404; Turkish page exists but interactive/mobile suitability needs more investigation. These failures are rejected individual sources, not proof that a place has no other real tour.

## Tests
Typecheck/build,78 unit/API tests and18 browser tests passed: AR/EN 390px outgoing provider requests for all five new visits, exact hrefs/source/date labels, no empty placeholders, existing corner navigation and recorded-video fallback.
