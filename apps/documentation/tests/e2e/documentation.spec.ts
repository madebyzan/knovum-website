import { readdirSync } from "node:fs";
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

for (const path of ["/", "/zh/", "/guides/export/", "/zh/guides/export/"]) {
  test(`${path} is readable, accessible, and linked correctly`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator("h1")).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    const links = await page
      .locator("main a[href]")
      .evaluateAll((anchors) => anchors.map((anchor) => (anchor as HTMLAnchorElement).href));
    for (const link of links) {
      const target = new URL(link);
      if (target.origin === "http://localhost:4332")
        expect((await page.request.get(link)).ok(), link).toBe(true);
    }
  });
}
test("search finds a published guide without external services", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /search/i }).click();
  const input = page.locator(".pagefind-ui__search-input");
  await input.fill("Whisper");
  await expect(page.locator(".pagefind-ui__result-link").first()).toBeVisible();
});

test("every published document and internal link resolves", async ({ page }) => {
  const sources = readdirSync("src/content/docs", { recursive: true, encoding: "utf8" }).filter((path) =>
    path.endsWith(".md"),
  );
  for (const source of sources) {
    const route = "/" + source.replace(/index\.md$/, "").replace(/\.md$/, "/");
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), route).toBe(true);
    const links = await page
      .locator("main a[href]")
      .evaluateAll((anchors) => anchors.map((anchor) => (anchor as HTMLAnchorElement).href));
    for (const link of links) {
      if (new URL(link).origin === "http://localhost:4332")
        expect((await page.request.get(link)).ok(), link).toBe(true);
    }
  }
});

test("search supports keyboard open, focus and dismissal", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Control+k");
  await expect(page.locator("dialog")).toBeVisible();
  await expect(page.locator(".pagefind-ui__search-input")).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.locator("dialog")).not.toBeVisible();
});

test("Chinese navigation groups are translated", async ({ page }) => {
  await page.goto("/zh/");
  await expect(page.locator("body")).toContainText("开始使用");
  await expect(page.locator("body")).not.toContainText("Create and preserve");
});
