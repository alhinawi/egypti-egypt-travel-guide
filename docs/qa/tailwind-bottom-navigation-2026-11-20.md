# Bottom navigation Tailwind migration

2026-11-20,B159. Baseline main3900bb8.

Mobile bottom navigation surface,links,icons,selected state,Arabic typography,print suppression and password-login exclusion moved to Tailwind.30standalone rules+3shared selector members removed across four stylesheets,including12generated dark-theme rules. Theme generator updated;regeneration identical. Solid screen background and existing no-blur computed output preserved,including hidden desktop/print values. Safe-area screen padding and mobile print fallback retained. No route,content,account or semantic changes.

Typecheck/build124unit80browser pass,18new.376exact original cases:360subtree style comparisons across AR/EN18themes8widths360/361/390/600/601/900/901/1280 and screen/print390/1280,plus16password-login hiding checks. New keyboard tests follow Discover to the existing language home,verify current-page semantics,four links,accessible navigation name,desktop/print/login hiding. Prior full-header,wordmark,language-context/panel/button/contrast tests pass. APIs mocked. Mobile Arabic/English midnight screenshots inspected.
