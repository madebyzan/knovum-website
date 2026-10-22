/**
 * The site's origin, for building absolute URLs. `astro.config.ts` refuses to build without
 * `SITE_URL`, so a missing origin here is a bug, never a state to render around.
 */
export function siteOrigin(site: URL | undefined): URL {
  if (!site) throw new Error("Astro.site is unset, but astro.config.ts requires SITE_URL.");
  return site;
}
