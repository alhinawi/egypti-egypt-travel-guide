# Trip-plan comparison,20Nov2026

## Visible outcome
- The plan finder now lets readers choose up to two plans and compare existing photographs,starting destinations,day counts,distinct listed places,programme/outline depth and exact published day titles.
- Direct links open the original plan or an exact day. No inferred transport times,prices,visit feasibility or bookings.
- Comparison state is separate from finder filters;it is temporary on this page and does not alter saved items or account data.
- Arabic/English,responsive stacked mobile/two-column desktop,Tailwind-only new styling.

## Verification
- Build/typecheck129unit48browser pass,including16new comparison cases.
- All9plans' original day titles and unique place counts checked. Selection limit,remove,replace,clear,filter independence,status feedback,keyboard focus,touch and day navigation checked.
-432AR/EN18theme6width1/2selection cases,minimum measured text contrast6.0718:1. No page overflow,44pxcontrols/daylinks.
- Comparison UI,selection buttons and status excluded from print. Reduced-motion checked.
- Actual Arabic390pxandEnglish1280pxscreens inspected for photographs,readability,spacing and clipping.

## Sources
All facts and photographs come from the existing sourced catalog in src/lib/data.ts and src/lib/photos.ts. No new external factual claims or media licenses introduced.
