# Header language button Tailwind migration

2026-11-20,B156.

Header language button and responsive globe styling moved to Tailwind.16 standalone rules removed across global,editorial and generated theme CSS;generator template updated. No content,route or interaction changes. Header surface/brand outside this batch.

Typecheck/build,124 unit and44 browser tests pass,16 new.360 exact original-baseline button-subtree cases across AR/EN,18 themes,eight widths360/361/390/600/601/900/901/1280 and screen/print390/1280. Baseline main0cadc8c. Existing language context,Escape/focus,selected language contrast and skip-link regressions pass. Utilities preserve 42px screen minimum height,360px compact padding/globe hiding,50px print radius and dark-theme print inheritance. Important border/font and compact sizing preserve existing unlayered resets. Theme generator regeneration produces byte-identical themes.css. Mobile Arabic and desktop English pixels inspected. APIs mocked,no account actions.
