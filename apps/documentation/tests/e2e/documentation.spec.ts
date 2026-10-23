import { readdirSync } from "node:fs";
import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const ORIGIN = "http://localhost:4332";
const ROUTES = readdirSync("src/content/docs", { recursive: true, encoding: "utf8" })
  .filter((path) => /\.mdx?$/.test(path))
  .map((source) => "/" + source.replace(/index\.mdx?$/, "").replace(/\.mdx?$/, "/"));

/** Markdown syntax that survived rendering, e.g. `**需要准备：**` next to CJK text. */
const UNRENDERED_MARKUP = /\*\*|__|(?<![\w/])_[^_\s][^_]*_(?![\w/])|\]\(|^#{1,6}\s/m;

async function expectPublished(page: Page, route: string) {
  const response = await page.goto(route);
  expect(response?.ok(), route).toBe(true);
  await expect(page.locator("h1")).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), route).toBe(true);
  const prose = await page.locator("main .sl-markdown-content").evaluateAll((nodes) =>
    nodes
      .map((node) => {
        const copy = node.cloneNode(true) as HTMLElement;
        for (const code of copy.querySelectorAll("pre, code")) code.remove();
        return copy.textContent;
      })
      .join("\n"),
  );
  expect(prose, route).not.toMatch(UNRENDERED_MARKUP);
  const links = await page
    .locator("main a[href]")
    .evaluateAll((anchors) => anchors.map((anchor) => (anchor as HTMLAnchorElement).href));
  for (const link of links)
    if (new URL(link).origin === ORIGIN)
      expect((await page.request.get(link)).ok(), `${route} → ${link}`).toBe(true);
}

for (const route of ["/", "/zh/", "/tutorials/meetings/", "/zh/tutorials/meetings/"]) {
  test(`${route} is readable and accessible`, async ({ page }) => {
    await expectPublished(page, route);
    expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  });
}

for (const route of ROUTES) {
  test(`${route} renders cleanly and its links resolve`, async ({ page }) => {
    await expectPublished(page, route);
  });
}

test("search finds a published guide without external services", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /search/i }).click();
  await page.locator(".pagefind-ui__search-input").fill("Whisper");
  await expect(page.locator(".pagefind-ui__result-link").first()).toBeVisible();
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
