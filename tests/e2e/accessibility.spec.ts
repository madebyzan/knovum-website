import AxeBuilder from "@axe-core/playwright";
import type { Page } from "@playwright/test";

import { expect, PAGES, test } from "./fixtures";

const SCHEMES = ["light", "dark"] as const;

// WCAG 2.2 AA, plus best practices, in both colour schemes: contrast is checked against each palette.
async function audit(page: Page) {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"])
    .analyze();
  return results.violations.map(({ id, help, nodes }) => ({
    id,
    help,
    targets: nodes.map((node) => node.target),
  }));
}

for (const { path } of PAGES) {
  for (const colorScheme of SCHEMES) {
    test(`${path} is accessible in the ${colorScheme} scheme`, async ({ page }) => {
      await page.emulateMedia({ colorScheme, reducedMotion: "reduce" });
      await page.goto(path);
      expect(await audit(page)).toEqual([]);
    });
  }
}

test("the open menu is accessible", async ({ page, isMobile }) => {
  test.skip(!isMobile, "The menu exists on compact screens only.");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.locator("[data-site-menu]")).toBeVisible();
  expect(await audit(page)).toEqual([]);
});

test("the menu closes after following a link", async ({ page, isMobile }) => {
  test.skip(!isMobile, "The menu exists on compact screens only.");
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("navigation", { name: "Menu" }).getByRole("link", { name: "Features" }).click();
  await expect(page.locator("[data-site-menu]")).toBeHidden();
  await expect(page).toHaveURL(/#features$/);
});

test("the skip link moves focus to the content", async ({ page, isMobile }) => {
  test.skip(isMobile, "Keyboard navigation is checked on desktop.");
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await expect(skip).toBeInViewport();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
});
