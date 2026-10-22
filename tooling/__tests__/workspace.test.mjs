import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");
for (const application of ["website", "documentation"]) {
  test(`${application} has no dependency on the other application`, () => {
    const directory = resolve(root, "apps", application);
    const manifest = JSON.parse(readFileSync(resolve(directory, "package.json"), "utf8"));
    const sibling = application === "website" ? "documentation" : "website";
    assert.equal(manifest.dependencies?.[`@knovum/${sibling}`], undefined);
    for (const path of readdirSync(resolve(directory, "src"), { recursive: true })) {
      if (!/\.(?:ts|astro|css)$/.test(path)) continue;
      const content = readFileSync(resolve(directory, "src", path), "utf8");
      assert.doesNotMatch(
        content,
        new RegExp(`(?:from\\s+["']|@import\\s+["'])[^"']*(?:apps/${sibling}|@knovum/${sibling})`),
        path,
      );
    }
  });
}
test("shared facts and visual tokens own no application dependency or reset", () => {
  const configuration = readFileSync(resolve(root, "config/product.ts"), "utf8");
  assert.doesNotMatch(configuration, /from |import |apps\//);
  const stylesheet = readFileSync(resolve(root, "styles/visual-tokens.css"), "utf8");
  assert.doesNotMatch(stylesheet, /tailwind|starlight|\*\s*\{/);
});
test("documentation build does not depend on a product release", () => {
  const config = readFileSync(resolve(root, "apps/documentation/astro.config.ts"), "utf8");
  assert.doesNotMatch(config, /RELEASE_FILE|getLatestRelease|GITHUB_TOKEN/);
});
