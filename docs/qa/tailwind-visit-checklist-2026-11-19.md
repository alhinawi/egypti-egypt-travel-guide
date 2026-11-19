# Tailwind visit checklist,19November2026

Extracts the visit checklist into its own client component and moves its19legacyCSSrules toTailwind utilities. Navy/mint tokens, typography, content and behavior preserved. No new dependencies. Semantic selector hooks retained for tests only. Nearby guide/photo/destination blocks untouched.

## Design parity

Captured prior390/1280AR/ENscreens and computed styles before editing. Final comparisons are exactly equal for all measured properties of section, heading, counter, headingrow,list,button,tick,reset,storagenote,etiquetteblock/paragraph/bold. Measured width,height,padding,margin,gap,display,border,radius,background,textcolor,font-size,lineheight,fontfamily,textalignment,minheight,minwidth. First pass exposed cascade differences, fixed using scoped importantTailwindutilities rather than adding globalCSS. Arabic mobile21pxheading and1.95buttonlineheight preserved, Englishmobile24pxheading preserved.

Actual final Arabic390 andEnglish1280pixels inspected: readable content, correctRTL/LTR, checkedmintbuttons/counter, reset and source visible. No overflow. No data/account or current factual claims changed.

## Tests

Build/typecheck98unit26selected browser tests passed. Existing checklist cases retain refresh persistence, cross-language sharing, place isolation, reset, malformeddata filtering, corruptedJSON and blockedstorage handling. Added4AR/EN390/1280keyboard/geometry/theme regressions,50pxtouchheight,13pxbuttonfont,1pxborder,headingfont,storageleading and checked/countercolorparity. Testedmidnight/night/sand/niletokenresponses.

No live user checklists reset or read. All interactions use isolated test contexts. Storagekey remains egypti:visit-checklist:<placeId>, sameJSONindices0through4. No D1action,purchases,domains,plans or accountchanges.
