import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

import { providers } from "@/data/providers";
import { parseBrandLogo } from "@/lib/brand-logo";

const logo = (name: string) =>
  readFileSync(`node_modules/@lobehub/icons-static-svg/icons/${name}.svg`, "utf8");

describe("parseBrandLogo", () => {
  it("keeps the geometry and drops the source's size, style and title", () => {
    const parsed = parseBrandLogo(logo("openai"));

    expect(parsed.viewBox).toBe("0 0 24 24");
    expect(parsed.fillRule).toBe("evenodd");
    expect(parsed.body).toMatch(/^<path /u);
    expect(parsed.body).not.toMatch(/<title|style=|width=|height=/u);
  });

  it("rejects anything that is not an SVG with a viewBox", () => {
    expect(() => parseBrandLogo("<svg><path d='M0 0'/></svg>")).toThrow(/viewBox/u);
    expect(() => parseBrandLogo("not an svg")).toThrow(/viewBox/u);
  });
});

describe("providers", () => {
  it("draws every provider in the reader's ink, never in a colour of its own", () => {
    for (const { name, logo: parsed } of providers)
      expect(parsed.body, name).not.toMatch(/fill="(?!none|currentColor)[^"]+"/u);
  });

  it("names each provider once", () => {
    const names = providers.map((provider) => provider.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
