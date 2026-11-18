# Tour fullscreen action repair

Root cause: every card showed a decorative Scan icon inside a span. It looked like a fullscreen button but had no interactive element or handler.

All99 cards now have a named, keyboard/touch-accessible action.73 supported embedded players open a closeable viewport dialog and request native fullscreen where supported. A rejected or unavailable Fullscreen API leaves the full-height dialog usable. Closing or Escape restores scroll and trigger focus.26 external-only sources open their actual provider full-page in a new tab instead.

Important: Qalawun explicitly sends X-Frame-Options SAMEORIGIN. An iframe overlay cannot legally or technically make it embeddable. That exact reported card therefore opens the real tour full-page directly, rather than displaying a broken frame. The icon's accessible label makes this clear. Every modal also has an always-available provider link if the remote player challenges or blocks.

Styling is Tailwind utilities,not handwritten CSS. CSP extends frame-src only to YouTube's privacy-enhanced embed host;existing Matterport/YouTube allowlist remains. No unrestricted frame wildcard.

Validation:85unit/API tests,build,typecheck.390px AR/EN missing/rejected/native Fullscreen API paths checked;all99 actions checked;dialog height/width,close,Escape,scroll restore and focus restore checked. Local provider rendering hit a Matterport verification challenge,so UI checks are isolated from provider availability. Actual live source checks are recorded at closeout rather than treating a grey frame as a passed panorama.
