# Knovum website

One repository, two independently built static applications. The product itself lives in
[madebyzan/knovum](https://github.com/madebyzan/knovum).

## Ownership

| Owner                | Responsibility                                                | Deployment                      |
| -------------------- | ------------------------------------------------------------- | ------------------------------- |
| `apps/website`       | Product story, interactive demos, releases and downloads      | Main website domain             |
| `apps/documentation` | User guides, reference, multilingual reading and local search | `docs.<website-domain>`         |
| `packages/brand`     | Product identity, app icon and shared design decisions only   | Bundled into either application |
| `tooling`            | Cross-application architecture checks                         | Development only                |

The applications never import one another. Brand never depends on an application. Do not introduce a
shared UI warehouse: website navigation, documentation navigation and content layouts are different
responsibilities. Tailwind resets stay in website; Starlight owns documentation structure and styles.
Focused unit tests live in their implementation owner's `__tests__/`; cross-owner browser scenarios
live in each application's `tests/e2e/`.

## Develop

Use Node.js from `.nvmrc` and pnpm from `packageManager`.

```sh
corepack enable
pnpm install --frozen-lockfile
cp apps/website/.env.example apps/website/.env
cp apps/documentation/.env.example apps/documentation/.env
pnpm dev:website
pnpm dev:docs
```

Set local origins explicitly. Website needs `SITE_URL` and `DOCS_URL`; documentation needs its own
`SITE_URL` and `WEBSITE_URL`. Documentation builds do not fetch a product release. Website requires
all published installers; `RELEASE_FILE=tests/fixtures/release.json` is for deterministic local work
only. Environment paths resolve relative to the owning application, not the repository root.

| Command              | Purpose                                               |
| -------------------- | ----------------------------------------------------- |
| `pnpm build:website` | Build only the website                                |
| `pnpm build:docs`    | Build only documentation, including Pagefind          |
| `pnpm build`         | Build both independent publications                   |
| `pnpm check`         | Formatting, architecture, types, lint and unit tests  |
| `pnpm verify`        | Checks plus both applications' browser and HTML tests |
| `pnpm format`        | Format owned source and content                       |

Install a browser with `pnpm --filter @knovum/website exec playwright install chromium`, or set
`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to an existing executable. On memory-constrained environments,
`KNIP_DISABLE_RAW_TRANSFER=1` selects Knip's supported non-raw parser transfer rather than reserving a
multi-gigabyte array buffer. No production behavior changes.

## Documentation authoring

English pages live under `apps/documentation/src/content/docs/`; Chinese counterparts under `zh/`.
Every published page must exist in both languages. Starlight validates frontmatter; tests check
translation coverage and relative links. Use Markdown normally and MDX only when a concrete
interactive explanation needs a component. Never translate UI labels by guessing.

Write user tasks, prerequisites, steps, expected outcomes and limits. Do not publish internal IPC,
private file paths or unfinished capabilities as user promises. Product code is authoritative when
older product notes disagree. Record verification sources in
[the editorial source ledger](apps/documentation/EDITORIAL.md).

Pagefind is built from documentation HTML and runs from the same origin. No hosted search account,
cloud inference or external font service is required. Search opens on click or Cmd/Ctrl+K. There is no
speculative AI answer feature.

## Cloudflare deployment

Create two independent Cloudflare static Workers from this repository. Configure the repository root
as the build context so workspace dependencies resolve.

| Publication   | Build command        | Deploy command                                             | Variables                                                          |
| ------------- | -------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------ |
| Website       | `pnpm build:website` | `pnpm --filter @knovum/website exec wrangler deploy`       | `SITE_URL`, `DOCS_URL`; optional release API/analytics credentials |
| Documentation | `pnpm build:docs`    | `pnpm --filter @knovum/documentation exec wrangler deploy` | `SITE_URL`, `WEBSITE_URL`                                          |

Bind the chosen main domain and its `docs` subdomain separately. Each output owns its assets, headers,
404 and sitemap. Do not set the release fixture in a production website deployment. Preview
publications should be noindex. This repository intentionally contains no GitHub Actions workflows.

Cloudflare hosting alone is not a guarantee of mainland-China performance. Mainland distribution
needs a separately reviewed domain/ICP/CDN plan. No DNS or cloud resources have been modified here.
