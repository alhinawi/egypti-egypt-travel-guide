# egypti

Live site: https://egypti.pages.dev

A mobile-first, independent Egypt guide by Mohamed Alhinawi, for domestic travellers and international visitors.

## First edition

- 6 destination hubs, 30 places and areas, and 5 flexible itinerary outlines.
- Arabic and English content, explicit locale URLs, RTL/LTR, remembered language choice.
- Source links and review dates. Unverified prices or hours are labeled, never invented.
- 24 verified Google Maps place-card links. Broad or changing locations do not get guessed pins.
- Google sign-in, guest bookmarks, D1-backed synced bookmarks and sign-out.
- Next.js static export with Hono running on same-origin Cloudflare Pages Functions.

## Local setup

Node 22 or newer is recommended.

```sh
npm ci
npm run build
npm test
npm run test:e2e
npx wrangler pages dev out
```

`npm run test:e2e` uses an installed Chrome at `/usr/bin/google-chrome-stable`. Change the executable path in `playwright.config.ts` for another environment. The browser tests exercise the static frontend; API tests use Miniflare and a disposable local D1 database. The real Google OAuth round trip must also be tested on the deployed origin.

## Deployment

Cloudflare Pages build: `npm ci && npm run build`; output: `out`; production branch: `main`.

Set the D1 binding `DB` and apply `migrations/0001_initial.sql`. Set `APP_ORIGIN` to the exact production HTTPS origin. Store `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and a random `AUTH_SECRET` as Cloudflare secrets, never in source control. Register `${APP_ORIGIN}/api/auth/google/callback` with the Google OAuth client.

The `_routes.json` file restricts Function invocation to `/api/*`. Static pages remain directly served. The Hono worker also supports an assets fallback.

## Admin dashboard and themes

`/admin/` is a read-only control dashboard (overview, places status, themes, health checks, quick links). Access is checked on the server: the Google-signed-in account email must be in `ADMIN_EMAILS` (comma-separated, set in `wrangler.jsonc` vars or as a Pages variable). Everyone else gets 401 or 403 from `/api/admin/*`. No database change is needed.

There are 18 themes in `src/lib/themes.ts`. After editing them run `node --import tsx scripts/gen-themes.mjs` to regenerate `src/app/themes.css`. `tests/themes.test.ts` checks text contrast for every theme. Theme choices are saved per device in localStorage (`egypti:theme` for the site, `egypti:admin-theme` for the dashboard).

## Deliberate limits

- No payments, internal ticket checkout, hotel bookings, user reviews or AI assistant.
- Machine translation is not enabled until a provider and any costs are approved. The interface never pretends unavailable languages are translated.
- Prices and opening hours are not live inventory. Only explicitly verified ticket data is shown; other entries link to official sources.
- First-edition metadata uses `noindex` until editorial launch review.
- Free-tier quotas are shared with other projects in the Cloudflare account. No paid plan is required by this code, but translation, domains and future usage need separate review.

## Safety and privacy

OAuth uses state, nonce, PKCE S256, Google ID-token signature/audience/issuer verification, and secure HttpOnly same-site cookies. Session tokens are hashed in D1. Mutations require a matching Origin and JSON, IDs are validated. No Gmail, Drive, contacts or advertising-tracker access is used. Full privacy information is available in both languages in the site.

## Photography and fonts

Photos are real, archival destination images. They do not guarantee present access. Cropped, resized and recompressed derivatives remain under each image's original license. Credits and license links are listed on the About page and in `ASSET_CREDITS.md`.

Noto Sans Arabic is licensed under the SIL Open Font License. A subset is bundled for fast loading; the font license is included in `public/fonts/OFL.txt`.
