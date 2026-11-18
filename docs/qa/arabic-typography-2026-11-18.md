# Arabic typography refresh

Owner said the Arabic font did not look premium. Replaced both Arabic roles: Noto Naskh Arabic for calligraphic editorial titles and Noto Sans Arabic for readable text and controls. Variable weights are real font instances, not simulated bold. Arabic letter-spacing is zero, including hero headings that previously inherited negative Latin-style tracking. Titles, cards, story headings, trip headers and guide profiles now have deliberate sizes and line heights. Body text has more comfortable leading; navigation remains compact. English typography and the Latin wordmark are preserved following the owner's clarification that Arabic was the problem.

Fonts are downloaded from the Google Fonts repository and served locally. No Google Fonts request, account, paid font or new service is involved. Both SIL Open Font License files are included alongside the fonts. Sans's width axis is fixed at the original normal width to reduce transfer size, keeping the weight axis. Old files remain to avoid deleting assets or disrupting English/fallback styles.

Sources:
- https://github.com/notofonts/arabic/ - upstream families and OFL license.
- https://raw.githubusercontent.com/google/fonts/main/ofl/notonaskharabic/METADATA.pb - Naskh family and weight range.
- https://github.com/google/fonts/blob/main/ofl/notosansarabic/OFL.txt - Sans license.

Validation: local production build, typecheck, unit/API/contrast suite; Arabic/English home and story screenshots before/after at 390px. Actual loaded font families checked, zero Arabic tracking checked, font load readiness awaited. Small/desktop routes at 320/390/1280 checked for overflow, plus guide/print/filter/theme regressions. Print keeps the new Arabic families but uses compact document sizes. No place content, routes, images, permissions or themes changed.
