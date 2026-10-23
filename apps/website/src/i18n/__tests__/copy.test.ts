import { describe, expect, it } from "vitest";

import { findRetiredTerms } from "../../../../../config/interface-vocabulary.ts";
import en from "@/i18n/en";
import zh from "@/i18n/zh";

/** Every string in a dictionary, with the path it sits at, including what its functions produce. */
function strings(value: unknown, path = ""): { path: string; text: string }[] {
  if (typeof value === "string") return [{ path, text: value }];
  if (typeof value === "function")
    return strings((value as (...args: string[]) => unknown)("1.0.0", "2026"), path);
  if (Array.isArray(value)) return value.flatMap((item, index) => strings(item, `${path}[${index}]`));
  if (value && typeof value === "object")
    return Object.entries(value).flatMap(([key, item]) => strings(item, path ? `${path}.${key}` : key));
  return [];
}

const CJK = "\\u3400-\\u9fff";

describe.each([
  ["en", en],
  ["zh", zh],
] as const)("%s dictionary", (locale, dictionary) => {
  const entries = strings(dictionary);

  it("names features the way the app's interface does", () => {
    for (const { path, text } of entries) expect(findRetiredTerms(text, locale), path).toEqual([]);
  });

  it("has no empty, padded or double-spaced strings", () => {
    for (const { path, text } of entries) {
      expect(text.trim(), path).not.toBe("");
      expect(text, path).toBe(text.trim());
      expect(text, path).not.toMatch(/ {2}/);
    }
  });
});

describe("English copy", () => {
  it("uses typographic quotes and apostrophes", () => {
    for (const { path, text } of strings(en)) expect(text, path).not.toMatch(/['"]/);
  });

  it("uses an em dash, never a double hyphen", () => {
    for (const { path, text } of strings(en)) expect(text, path).not.toMatch(/--/);
  });
});

describe("Chinese copy", () => {
  const entries = strings(zh);

  it("separates Chinese from Latin letters and digits with a space", () => {
    const touching = new RegExp(`[${CJK}][A-Za-z0-9]|[A-Za-z0-9][${CJK}]`);
    for (const { path, text } of entries) expect(text, path).not.toMatch(touching);
  });

  it("uses full-width punctuation next to Chinese", () => {
    const halfWidth = new RegExp(`[${CJK}][,.:;!?()]|[,.:;!?()][${CJK}]`);
    for (const { path, text } of entries) expect(text, path).not.toMatch(halfWidth);
  });
});

describe("search snippets", () => {
  // Beyond these lengths result pages cut the text off mid-sentence.
  it.each([
    ["en", en, { title: 60, description: 160 }],
    ["zh", zh, { title: 30, description: 80 }],
  ] as const)("%s title and description fit a result", (_, dictionary, limit) => {
    expect(dictionary.meta.title.length).toBeLessThanOrEqual(limit.title);
    expect(dictionary.meta.description.length).toBeLessThanOrEqual(limit.description);
  });
});
