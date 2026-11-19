# Tailwind hotel ideas,19November2026

Moves18legacyhotel-sectionCSSrules toTailwind utilities, including photo/fallback cards, links, grid and responsive spacing. Removes unused distance/figcaption styles; neither element rendered. No hoteldata, externalURLs, claims, content or behavior changed. Uses existing theme tokens and fonts. No dependency changes.

## Parity

Before/after computed styles match exactly for16AR/ENphoto/fallback cases at390,760,761,1280widths. Compared section,eyebrow,grid,card,figure,image,copy,heading,links,firstlink,fallback,disclaimer width/height,padding,margin,gap,display,gridcolumns,border,radius,background,textcolor,font,lineheight,fontfamily,alignment,minsize. Fixed initial Arabic disclaimer leading and exact inclusive760pxbreakpoint before readiness. Uses explicit max-width760media variant, not exclusive Tailwind max breakpoint.

Actual local ArabicGiza390 and EnglishAbuSimbel390pixels inspected: archival photos remain photographic, no visible captions, fallback remains honest, links and caveats readable. Source of hotel facts unchanged, no currentavailability claim.

## Tests

Build/typecheck98unit21selectedbrowser tests passed. Eight newAR/EN390/760/761/1280tests check1or3columns,48or64pxsectionmargin,220or190pxphotos,160pxfallback,cardborders,externalnoreferrerlinks,absenceofcaption/distance/forms,theme colors,nooverflow. Existing hoteltests cover fourplacephoto/fallbackroutes andunsupportedproximityclaims; checklist/operator/hours regressions green.

No purchases,newdomains,paidplans,accountdata,D1actionorbookings. No user data read/reset. Bothcoauthorsretained.
