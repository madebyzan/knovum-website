import { existsSync } from "node:fs";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig, envField, fontProviders } from "astro/config";

import { cloudflareAnalytics } from "./src/config/analytics";
import { DEFAULT_LOCALE, LOCALES, localeMeta } from "./src/config/locales";

// Local settings live in `.env` (see `.env.example`); CI and deploys set them in the environment.
if (existsSync(".env")) process.loadEnvFile(".env");

// The origin every absolute URL is built on: canonical, hreflang, Open Graph and the sitemap.
const SITE_URL = process.env["SITE_URL"];
if (!SITE_URL) throw new Error("SITE_URL must be set to the site's origin, e.g. https://knovum.com.");
const analytics = Boolean(process.env["CLOUDFLARE_ANALYTICS_TOKEN"]);

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "always",
  build: { format: "directory" },

  i18n: {
    locales: [...LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    routing: { prefixDefaultLocale: false },
  },

  env: {
    schema: {
      GITHUB_TOKEN: envField.string({ context: "server", access: "secret", optional: true }),
      // A recorded GitHub release response to build from instead of the live one (tests, local work).
      RELEASE_FILE: envField.string({ context: "server", access: "public", optional: true }),
      CLOUDFLARE_ANALYTICS_TOKEN: envField.string({ context: "server", access: "public", optional: true }),
    },
  },

  // The English display face, from the installed (lockfile-pinned) Fontsource package. Only the Latin
  // subset ships: Chinese headings set in the system sans, so no other script ever needs this face.
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Source Serif 4",
      cssVariable: "--font-source-serif",
      fallbacks: ["Iowan Old Style", "Georgia", "serif"],
      options: {
        variants: [
          {
            src: ["@fontsource-variable/source-serif-4/files/source-serif-4-latin-opsz-normal.woff2"],
            weight: "200 900",
            style: "normal",
            display: "swap",
            unicodeRange: [
              "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
            ],
          },
        ],
      },
    },
  ],

  // Astro hashes every script and style it emits into the policy; everything else is first-party.
  // `frame-ancestors` cannot be set from a meta element, so it is sent as a header (public/_headers).
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        `connect-src 'self'${analytics ? ` ${cloudflareAnalytics.reportOrigin}` : ""}`,
        "manifest-src 'self'",
        "base-uri 'self'",
        "form-action 'none'",
        "object-src 'none'",
      ],
      scriptDirective: {
        resources: ["'self'", ...(analytics ? [cloudflareAnalytics.scriptOrigin] : [])],
      },
      styleDirective: { resources: ["'self'"] },
    },
  },

  // Code is never highlighted on this site; Shiki's inline styles would also break the CSP.
  markdown: { syntaxHighlight: false },

  integrations: [
    // Only the icons the site draws are bundled. Site-specific SVGs would live in src/icons.
    icon({
      include: {
        lucide: [
          "menu",
          "x",
          "sticky-note",
          "audio-lines",
          "globe",
          "file-text",
          "quote",
          "laptop",
          "cloud",
          "search",
          "plus",
          "list-tree",
          "download",
          "arrow-right",
          "arrow-up-right",
        ],
        "simple-icons": ["github", "apple", "windows"],
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: Object.fromEntries(LOCALES.map((locale) => [locale, localeMeta[locale].tag])),
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
