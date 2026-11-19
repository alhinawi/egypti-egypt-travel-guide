# Tailwind in-person-guide advice,19November2026

Migrates14legacyCSSrules for visit-guide feature card, photo/copy and expandable guide checks toTailwind. Shared classes appear only inVisitCompanion, confirmed before removing their legacyrules. No booking, guide/operator data, hotline, sourceURL, visitoradvice or accountchanges. Removes unused destinationByIdimport only.

## Parity

Before/after exact computedstylematch for16cases:AR/EN390/600/601/1280closed/open. Section/photo/copy/heading/paragraph/button/disclosure/list/listitem measured for width,height,padding,margin,gap,display,border,radius,background,color,font,lineheight,fontfamily,alignment,minsize. ExistingArabic2lineheight preserved withutilities. Explicit inclusive600pxmedia maintains215pxmobilephoto/22pxpaddingversus240px/25pxdesktop. Actual local Arabic390open andEnglish1280closedpixelsinspected, clearRTL/LTR, photo, numberedadvice, hotline, source and nooverflow.

## Tests

Build/typecheck98unit29selectedbrowser tests passed. Eight newAR/EN390/600/601/1280tests verify photo/copy/heading/lineheightmetrics,closed/openaria-expanded,Enter/Space/focus,threelicence/termschecks,hotline,externalnoreferrerFAQ,noforms/themecolors/overflow. Existing checklist/hotel/operator/hours regressions green. Currenttwoapprovedcoauthortrailers only, neverathird, nohistoryrewrite.

No purchases,newdomains,paidplans,D1oraccountchanges. No live user checklist data accessed.
