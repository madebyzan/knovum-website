import { describe, expect, it } from "vitest";
import { readingMinutes } from "@/lib/reading-time";

describe("readingMinutes", () => {
  it("reads Chinese by character and English by word", () => {
    expect(readingMinutes("字".repeat(1200))).toBe(3);
    expect(readingMinutes("word ".repeat(690))).toBe(3);
  });
  it("ignores code, link targets and imports", () => {
    const markup =
      'import Index from "../Index.astro";\n```\n' +
      "code ".repeat(2000) +
      "```\n[a](../" +
      "x/".repeat(500) +
      ")";
    expect(readingMinutes(markup)).toBe(1);
  });
  it("never reports less than a minute", () => {
    expect(readingMinutes("")).toBe(1);
  });
});
