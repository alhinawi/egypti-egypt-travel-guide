# Login layout Tailwind migration

2026-11-20,B164. Baseline main02ef685.

Live login page/photo/card,heading,back link and lead moved to Tailwind.50standalone rules+4shared selector members removed. Photo crop,desktop columns,mobile150px photo/card overlap,typography and print retained. Arabic print desktop heading23pt/mobile29px and eyebrow weight500 retained. Authentication and text unchanged.

Typecheck/build124unit128browser pass,50new.1080exact original subtree cases:sign-in/sign-up/signed-in synthetic states,AR/EN18themes8widths360/361/390/600/601/900/901/1280 and print390/1280.48baseline+2back-link/photo-semantics tests.78prior form/native-validation/show-password/error/busy/focus/language/bottom-navigation regressions pass. APIs intercepted,no real account actions. Mobile signupAR/signinEN pixels inspected. CSS removals use PostCSS selectors to preserve surrounding comments and grouped rules.
