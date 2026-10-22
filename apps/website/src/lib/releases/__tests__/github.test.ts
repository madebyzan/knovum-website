import { readFileSync } from "node:fs";

import { describe, expect, it, vi } from "vitest";

import { ReleaseError } from "@/lib/releases/errors";
import { fetchLatestRelease, parseRelease } from "@/lib/releases/github";

/** The recorded GitHub response that tests and local builds use as the latest release. */
const RECORDED: unknown = JSON.parse(readFileSync("tests/fixtures/release.json", "utf8"));
const recorded = RECORDED as { assets: { name: string }[] } & Record<string, unknown>;

// A fresh response per call: a response body can be read only once.
function respondWith(body: unknown, init: ResponseInit = { status: 200 }) {
  return vi
    .fn<typeof fetch>()
    .mockImplementation(() => Promise.resolve(new Response(JSON.stringify(body), init)));
}

describe("parseRelease", () => {
  it("reduces a release to its version, page, date and installers", () => {
    const release = parseRelease(RECORDED);

    expect(release.version).toBe("0.0.1");
    expect(release.url).toBe("https://github.com/madebyzan/knovum/releases/tag/v0.0.1");
    expect(release.publishedAt).toEqual(new Date("2026-10-22T02:00:00Z"));
    expect(Object.keys(release.installers)).toEqual(["macos-arm64", "macos-x64", "windows-x64"]);
  });

  it("fails a release without every installer", () => {
    const incomplete = {
      ...recorded,
      assets: recorded.assets.filter((asset) => !asset.name.endsWith(".exe")),
    };

    expect(() => parseRelease(incomplete)).toThrow(ReleaseError);
  });

  it("fails a tag that is not a version", () => {
    expect(() => parseRelease({ ...recorded, tag_name: "nightly" })).toThrow(/Unexpected release shape/u);
  });

  it("fails on a response it does not understand", () => {
    expect(() => parseRelease({ ...recorded, published_at: "yesterday" })).toThrow(ReleaseError);
  });
});

describe("fetchLatestRelease", () => {
  const repository = "madebyzan/knovum";

  it("returns GitHub's description of the latest release", async () => {
    await expect(fetchLatestRelease({ repository, fetch: respondWith(RECORDED) })).resolves.toEqual(RECORDED);
  });

  it("sends the token only when one is configured", async () => {
    const fetch = respondWith(RECORDED);

    await fetchLatestRelease({ repository, fetch, token: "secret" });
    await fetchLatestRelease({ repository, fetch });

    const headers = fetch.mock.calls.map(([, init]) => new Headers(init?.headers));
    expect(headers[0]?.get("authorization")).toBe("Bearer secret");
    expect(headers[1]?.has("authorization")).toBe(false);
  });

  it.each([404, 403, 500])("fails the build when GitHub answers %i", async (status) => {
    const fetch = respondWith({ message: "no" }, { status });

    await expect(fetchLatestRelease({ repository, fetch })).rejects.toThrow(ReleaseError);
  });
});
