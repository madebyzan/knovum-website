import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
const directory = resolve("src/content/docs");
const pages = readdirSync(directory, { recursive: true, encoding: "utf8" }).filter((path) =>
  path.endsWith(".md"),
);
describe("documentation publication", () => {
  it("has an explicit translation for every English page", () => {
    for (const page of pages.filter((page) => !page.startsWith("zh/"))) {
      expect(pages).toContain(`zh/${page}`);
      expect(readFileSync(resolve(directory, page), "utf8")).toMatch(/^---\ntitle: .+\ndescription: .+/);
    }
  });
  it("resolves every relative document link without locale fallback", () => {
    for (const page of pages) {
      const content = readFileSync(resolve(directory, page), "utf8");
      for (const match of content.matchAll(/\]\((\.\.?\/[^)#]+)\)/g)) {
        const target = new URL(
          match[1] ?? "",
          `https://docs.example.com/${page.replace(/(?:index)?\.md$/, "")}`,
        );
        const relative = target.pathname.replace(/^\//, "").replace(/\/$/, "");
        expect(pages, `${page} → ${target.pathname}`).toContain(`${relative}.md`);
      }
    }
  });
});
