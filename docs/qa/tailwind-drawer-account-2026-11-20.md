# Drawer account Tailwind migration

2026-11-20,B160. Baseline main115e4b2.

Drawer account container,guest sign-in,identity/avatar,sign-out and admin-link styling moved to Tailwind.10standalone rules+4shared selector members removed. Empty theme-ui stylesheet retained rather than deleting a file. Authentication,profile actions,links,accessibility and account state logic unchanged.

Typecheck/build124unit108browser pass,64new.1296exact original subtree cases cover guest,user-with-fallback,user-with-avatar and admin states,AR/EN,18themes,seven widths360/390/600/601/900/901/1280 and screen/print390/1280.8new action cases verify guest keyboard login,profile opening/identity,avatar fallback,admin visibility/target and intercepted POST logout returning to guest. Existing drawer content/language/theme widgets,language-context and contrast regressions pass. Account APIs fully intercepted with synthetic fixtures,including on immutable/canonical comparison runs. No real account actions or admin access. Guest Arabic and synthetic-admin English mobile pixels inspected after drawer animation settles.

An initial combined browser command exceeded its execution window,leaving an unresponsive local preview process. Stopped that specific process and reran64account+44regression cases in separate bounded commands;all pass. No application workaround was needed.
