# Knovum website

The public website for [Knovum](https://github.com/madebyzan/knovum), the local-first knowledge
workspace — in English at `/` and Simplified Chinese at `/zh/`, in light and dark.

## Stack

| Concern      | Choice                                                                       |
| ------------ | ---------------------------------------------------------------------------- |
| Framework    | [Astro](https://astro.build) 7, static output                                |
| Styling      | [Tailwind CSS](https://tailwindcss.com) 4, tokens in `src/styles/global.css` |
| Variants     | [tailwind-variants](https://www.tailwind-variants.org) + tailwind-merge      |
| Icons        | [astro-icon](https://www.astroicon.dev) with Lucide and Simple Icons         |
| Display type | Source Serif 4 via the Astro Fonts API (Latin subset, self-hosted)           |
| Motion       | [Motion](https://motion.dev) `inView`, CSS transitions                       |
| i18n         | Astro i18n routing; typed dictionaries                                       |
| SEO          | `@astrojs/sitemap`, hreflang, JSON-LD typed with `schema-dts`                |
| Security     | Astro's hashed Content Security Policy + `public/_headers`                   |
| Hosting      | Cloudflare Workers static assets                                             |
| Quality      | ESLint, Prettier, Vitest, Playwright + axe, html-validate, knip              |

## Develop

Node.js `22.23.4` or later (`.nvmrc`) and pnpm through Corepack.

```bash
corepack enable
pnpm install
pnpm dev            # http://localhost:4321
```

| Command              | What it does                                                          |
| -------------------- | --------------------------------------------------------------------- |
| `pnpm build`         | Static build into `dist/`                                             |
| `pnpm preview`       | Serve `dist/`                                                         |
| `pnpm check`         | Typecheck, lint, format check, unit tests, unused-code check          |
| `pnpm test:e2e`      | Builds, then end-to-end and accessibility tests in desktop and mobile |
| `pnpm validate:html` | Validates the built HTML                                              |
| `pnpm verify`        | Runs all local quality checks                                         |
| `pnpm format`        | Formats the code and sorts Tailwind classes                           |

Playwright downloads its own Chromium with `pnpm exec playwright install chromium`. To use one already
on the machine, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`.

## Architecture

```
src/
  config/         Facts: site and repository, locales, navigation, analytics, theme colours.
  data/           Language-neutral content: on-device modelOperations, AI providers.
  i18n/           Every visitor-facing string. `dictionary.ts` types them; `en.ts` and `zh.ts`
                  fill them; `index.ts` resolves the page's language from Astro's routing.
  lib/            Logic with no markup: releases (GitHub API, installer selection), formatting,
                  structured data, the token-aware style variants.
  components/
    ui/           Primitives: Section, Container, SectionHeading, ActionLink, Timeline, Brand.
    layout/       Header, mobile menu, footer, language switch, skip link.
    seo/          Head metadata, favicons, JSON-LD, analytics.
    canvas/       The product illustration, one component per card.
    sections/     The home page, one component per section.
  layouts/        SiteLayout: the document shell.
  pages/          `[...locale]/` home pages, 404, robots.txt, manifest, favicon.
  scripts/        Scroll scenes, demo playback and navigation behaviour.
  styles/         The design system.
tests/
  fixtures/       Recorded release for deterministic local builds.
  e2e/            Cross-owner browser scenarios: navigation, downloads, demos and accessibility.
```

Unit tests live in each implementation owner’s `__tests__/` directory.

### Principles

- **One source per decision.** Colours, type roles, spacing and measures exist once, as Tailwind
  theme tokens; the default palette and scales are cleared so nothing else can be reached for.
  Locales, sections and project links are declared once in `src/config` and drive routing, the
  header, the footer, hreflang and the sitemap.
- **Copy is data, typed.** Dictionaries are checked against one interface. Records keyed by the
  site's own ids (sections, model operations, installer kinds) make a missing translation a type
  error. Unit tests hold the copy to its typographic rules.
- **Components know their language.** `getI18n(Astro)` reads the locale from the URL, so no
  component takes a locale prop.
- **Tones are palette swaps.** The dark band (`tone-inverse`) and dark mode remap the same
  tokens; components never branch on tone.
- **The illustration is code.** The hero canvas is a reconstruction of a Space measured in its
  own design units (`canvas-stage`), so it follows language and colour scheme and stays sharp.
- **The site ships with a release.** Every build reads the latest release and requires all three
  installers the app's release workflow produces (Apple silicon and Intel DMGs, the Windows NSIS
  installer). A missing release, a missing installer or an unreadable answer fails the build; there
  is no "coming soon" state to fall back to.

### Copy

Edit text in `src/i18n/`, both languages in the same change. English uses typographic quotes and
apostrophes and non-breaking spaces between a product and its version. Chinese uses full-width
punctuation and a space between Chinese and Latin text or digits. `pnpm test` enforces these.

## Deploy

1. Cloudflare dashboard → **Workers & Pages** → **Create application** → **Import a repository**.
2. Build command `pnpm build`, deploy command `npx wrangler deploy`.
3. Variables:
   - `SITE_URL` (required) — the production origin, e.g. `https://www.example.com`. Every absolute
     URL is built on it: canonical, hreflang, Open Graph and the sitemap.
   - `GITHUB_TOKEN` (secret, optional) — read-only, to avoid GitHub API rate limits during builds.
   - `CLOUDFLARE_ANALYTICS_TOKEN` (optional) — enables Cloudflare Web Analytics and admits it in
     the CSP.
4. Attach the custom domain under the Worker's **Domains & Routes**.

The download section is generated at build time from the latest GitHub release, with direct links to
each installer and its size. Rebuild after publishing a release — a Cloudflare deploy hook called from
the app's release workflow does this automatically. Deploys never set `RELEASE_FILE`; it exists so
tests and local work build from the recorded release in `tests/fixtures/release.json`.

For local work, copy `.env.example` to `.env`.

`dist/` is plain static files. For mainland China, publish the same build to a mainland CDN once the
domain has an ICP filing, and route mainland visitors there with split-horizon DNS.

## License

The site's code and copy belong to the Knovum project. Source Serif 4 is licensed under the SIL Open
Font License 1.1.
