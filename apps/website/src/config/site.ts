import { PRODUCT_NAME, PRODUCT_REPOSITORY } from "../../../../config/product.ts";

/**
 * Facts about the product and where it lives. Anything a reader sees as words belongs in
 * `src/i18n`; this module holds names, identifiers and URLs only.
 */
export const site = {
  name: PRODUCT_NAME,
  repository: PRODUCT_REPOSITORY,
} as const;

const repositoryUrl = `https://github.com/${site.repository}`;

export const externalLinks = {
  github: repositoryUrl,
  releases: `${repositoryUrl}/releases`,
  contributing: `${repositoryUrl}/blob/main/CONTRIBUTING.md`,
  issues: `${repositoryUrl}/issues`,
  security: `${repositoryUrl}/blob/main/SECURITY.md`,
  license: `${repositoryUrl}/blob/main/LICENSE`,
} as const;

export type ExternalLinkKey = keyof typeof externalLinks;
