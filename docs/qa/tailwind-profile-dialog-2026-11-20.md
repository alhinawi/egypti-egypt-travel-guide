# Profile dialog Tailwind migration

2026-11-20,B161. Baseline main29a6ac2.

Profile dialog surface/backdrop,heading,identity/avatar,saved link and sign-out moved to Tailwind.13standalone rules+5shared selector members removed. Authentication/state/links/accessibility unchanged. Retain Arabic print heading17pt rather than forcing20px.

Typecheck/build124unit110browser pass,32new.648exact original subtree/backdrop cases cover user/avatar,AR/EN18themes7widths360/390/600/601/900/901/1280 and print390/1280.4new action cases cover accessible dialog name,drawer transfer,identity/avatar/fallback,saved link keyboard navigation,Escape,close and intercepted POST logout returning to guest.64drawer-account+14language-context/contrast/panel regressions pass. APIs mocked with synthetic account fixtures throughout,including deployment comparisons. No real account actions. Mobile AR fallback/EN avatar pixels inspected.

Existing sign-out text uses fixed brown #975945 on every theme. This refactor deliberately preserves it;dark-theme contrast needs a separate fix rather than silently mixing behavior into this migration.
