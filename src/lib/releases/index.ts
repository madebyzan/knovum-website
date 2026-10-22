import { readFile } from "node:fs/promises";

import { GITHUB_TOKEN, RELEASE_FILE } from "astro:env/server";

import { site } from "@/config/site";

import { fetchLatestRelease, parseRelease, type Release } from "./github";

export type { Release } from "./github";
export { PLATFORM_NAMES, PLATFORMS, type Platform } from "./installers";

let latest: Promise<Release> | undefined;

/**
 * The latest release, read once per build and shared by every page that shows it. Deploys read it
 * from GitHub. Tests and local work name a recorded GitHub response in `RELEASE_FILE`, so they build
 * from a known release; it goes through the same checks either way.
 */
export function getLatestRelease(): Promise<Release> {
  latest ??= (
    RELEASE_FILE
      ? readFile(RELEASE_FILE, "utf8").then((text): unknown => JSON.parse(text))
      : fetchLatestRelease({ repository: site.repository, token: GITHUB_TOKEN })
  ).then(parseRelease);
  return latest;
}
