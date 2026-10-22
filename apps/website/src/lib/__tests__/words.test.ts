import { describe, expect, it } from "vitest";

import en from "@/i18n/en";
import zh from "@/i18n/zh";
import { splitWords } from "@/lib/words";

const words = (text: string, tag: string) =>
  splitWords(text, tag)
    .filter((token) => token.word)
    .map((token) => token.text);

describe("splitWords", () => {
  it("splits English at spaces and keeps punctuation with the word before it", () => {
    expect(words("Notes, recordings — and drafts.", "en")).toEqual([
      "Notes,",
      "recordings",
      "—",
      "and",
      "drafts.",
    ]);
  });

  it("keeps the spaces between words as their own tokens", () => {
    expect(splitWords("one two", "en")).toEqual([
      { text: "one", word: true },
      { text: " ", word: false },
      { text: "two", word: true },
    ]);
  });

  it("splits Chinese into words rather than characters, with punctuation attached", () => {
    const tokens = words("知识工作很少只有一种形态。", "zh-CN");
    expect(tokens.length).toBeGreaterThan(3);
    expect(tokens.length).toBeLessThan(12);
    expect(tokens.at(-1)).toMatch(/。$/u);
  });

  it.each([
    ["en", en.statement],
    ["zh-CN", zh.statement],
  ])("gives back %s copy unchanged when joined", (tag, text) => {
    expect(
      splitWords(text, tag)
        .map((token) => token.text)
        .join(""),
    ).toBe(text);
  });
});
