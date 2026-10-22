import { z } from "astro/zod";

import { ReleaseError } from "./errors";
import { selectInstallers, type Installers } from "./installers";

export interface Release {
  readonly version: string;
  /** The release's page, with its notes. */
  readonly url: string;
  readonly publishedAt: Date;
  readonly installers: Installers;
}

/** The parts of GitHub's release resource the site reads. */
const releaseSchema = z.object({
  tag_name: z.string().regex(/^v\d+\.\d+\.\d+$/u, "a tag of the form v<major>.<minor>.<patch>"),
  html_url: z.url(),
  published_at: z.iso.datetime(),
  assets: z.array(
    z.object({ name: z.string(), browser_download_url: z.url(), size: z.number().int().positive() }),
  ),
});

/** A release as GitHub describes it, checked and reduced to what the site shows. */
export function parseRelease(body: unknown): Release {
  const parsed = releaseSchema.safeParse(body);
  if (!parsed.success) throw new ReleaseError(`Unexpected release shape: ${parsed.error.message}`);

  const { tag_name, html_url, published_at, assets } = parsed.data;
  const version = tag_name.slice(1);
  return {
    version,
    url: html_url,
    publishedAt: new Date(published_at),
    installers: selectInstallers(
      version,
      assets.map((asset) => ({ name: asset.name, url: asset.browser_download_url, size: asset.size })),
    ),
  };
}

export interface FetchLatestReleaseOptions {
  /** `owner/name` on GitHub. */
  readonly repository: string;
  readonly token?: string | undefined;
  readonly fetch?: typeof globalThis.fetch;
}

/**
 * GitHub's description of the repository's latest release. Drafts and pre-releases are never
 * "latest", so they never reach the site. Anything but a release is an error.
 */
export async function fetchLatestRelease(options: FetchLatestReleaseOptions): Promise<unknown> {
  const { repository, token, fetch = globalThis.fetch } = options;
  const response = await fetch(`https://api.github.com/repos/${repository}/releases/latest`, {
    headers: {
      accept: "application/vnd.github+json",
      "x-github-api-version": "2022-11-28",
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!response.ok)
    throw new ReleaseError(
      `GitHub answered ${String(response.status)} for the latest release of ${repository}.`,
    );
  return response.json();
}
