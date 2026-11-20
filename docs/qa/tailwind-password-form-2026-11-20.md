# Password login form Tailwind migration

2026-11-20,B163. Baseline main68a1a4c.

Live password login form tabs,fields/show-password control,hints/error,submit,divider and recovery note moved to Tailwind.22standalone rules removed. Authentication logic,requests,text,native validation,labels and autocomplete remain unchanged. Screen submit radius8px and print12px retained. Font inheritance,unfocused/focused input borders and Arabic paragraph line-height preserved.

Typecheck/build124unit78browser pass,50new.1080exact original subtree/divider-pseudo cases cover sign-in,sign-up and mocked credential error,AR/EN18themes8widths360/361/390/600/601/900/901/1280 and print390/1280.48baseline tests plus2action tests;28existing language/bottom-navigation regressions. Actions verify native required validation blocks requests,mode switching/name field/autocomplete,show/hide password,focus border and shadow across18themes,disabled busy styling,duplicate-submit prevention,intercepted error and error reset on mode switch. All API calls intercepted with synthetic test data,no real sign-in/signup/account action. Mobile signup Arabic/error English pixels inspected.

Initial exploration targeted support blocks in a legacy Home component. Route inspection showed they are not used by the live MagazineHome. All exploratory edits were reverted before commit;no legacy changes included.
