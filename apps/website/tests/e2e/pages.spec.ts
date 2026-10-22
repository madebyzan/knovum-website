import { MODEL_OPERATION_GROUPS, modelOperations } from "@/data/model-operations";

import { expect, PAGES, test } from "./fixtures";

for (const { path, lang, title } of PAGES) {
  test.describe(`home page ${path}`, () => {
    test("describes itself to browsers and search engines", async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      await expect(page).toHaveTitle(title);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /^.{50,160}$/);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        new URL(path, page.url()).href,
      );

      const alternates = page.locator('link[rel="alternate"][hreflang]');
      await expect(alternates).toHaveCount(3);
      for (const href of await alternates.evaluateAll((links) =>
        links.map((link) => link.getAttribute("href")),
      ))
        expect(href).toMatch(/^https?:\/\//);

      const softwareDescription = await page.locator('script[type="application/ld+json"]').textContent();
      expect(JSON.parse(softwareDescription ?? "{}")).toMatchObject({
        "@type": "SoftwareApplication",
        name: "Knovum",
      });
    });

    test("has one main heading and an outline without gaps", async ({ page }) => {
      await page.goto(path);
      await expect(page.locator("h1")).toHaveCount(1);
      const levels = await page
        .locator("main :is(h1, h2, h3):visible")
        .evaluateAll((headings) => headings.map((heading) => Number(heading.tagName.slice(1))));
      levels.reduce((previous, level) => {
        expect(level - previous, `heading level jumps from h${previous} to h${level}`).toBeLessThanOrEqual(1);
        return level;
      });
    });

    test("every in-page link has a destination", async ({ page }) => {
      await page.goto(path);
      const fragments = await page.locator('a[href*="#"]').evaluateAll((links) =>
        links
          .map((link) => new URL((link as HTMLAnchorElement).href))
          .filter((url) => url.origin === location.origin && url.pathname === location.pathname)
          .map((url) => decodeURIComponent(url.hash.slice(1))),
      );
      expect(fragments.length).toBeGreaterThan(0);
      for (const id of new Set(fragments))
        await expect(page.locator(`[id="${id}"]`), `#${id}`).toHaveCount(1);
    });

    test("fits the viewport without sideways scrolling", async ({ page }) => {
      for (const width of [320, 375, 768, 1024, 1440, 1920]) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(path);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        expect(overflow, `${width}px wide`).toBeLessThanOrEqual(0);
      }
    });

    test("keeps every card's text inside the card", async ({ page }) => {
      await page.goto(path);
      const overflowing = await page.locator(".canvas-stage [class*='shadow-canvas']").evaluateAll(
        (cards) =>
          cards.filter((card) => {
            const bottom = card.getBoundingClientRect().bottom;
            return [...card.querySelectorAll("p, h3, li")].some(
              (text) => text.getBoundingClientRect().bottom > bottom,
            );
          }).length,
      );
      expect(overflowing).toBe(0);
    });
  });
}

test("switching language lands on the same page in the other language", async ({ page, isMobile }) => {
  await page.goto("/");
  if (isMobile) await page.getByRole("button", { name: "Open menu" }).click();
  await page.locator('a[hreflang="zh-CN"]:visible').first().click();
  await expect(page).toHaveURL(/\/zh\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");
});

test("the 404 page answers in every language and is kept out of search", async ({ page }) => {
  const response = await page.goto("/no-such-page/");
  expect(response?.status()).toBe(404);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex");
  await expect(page.getByRole("link", { name: "Back to the home page" })).toHaveAttribute("href", "/");
  await expect(page.getByRole("link", { name: "返回首页" })).toHaveAttribute("href", "/zh/");
});

test("robots.txt points at the sitemap", async ({ request }) => {
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Sitemap: http://localhost:4322/sitemap-index.xml");
  expect((await request.get("/sitemap-index.xml")).ok()).toBe(true);
});

test.describe("downloads", () => {
  const release = "https://github.com/madebyzan/knovum/releases";

  test("links every installer of the recorded release, each named for its machine", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#download");

    for (const [name, file] of [
      [/macOS.*Apple silicon/u, "Knovum_0.0.1_aarch64.dmg"],
      [/macOS.*Intel/u, "Knovum_0.0.1_x64.dmg"],
      [/Windows.*x64/u, "Knovum_0.0.1_x64-setup.exe"],
    ] as const)
      await expect(section.getByRole("link", { name })).toHaveAttribute(
        "href",
        `${release}/download/v0.0.1/${file}`,
      );

    await expect(section.getByRole("link", { name: /tar\.gz|latest\.json/u })).toHaveCount(0);
  });

  test("announces the release it was built from", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: /Knovum 0\.0\.1 is out/u })).toHaveAttribute(
      "href",
      `${release}/tag/v0.0.1`,
    );
  });
});

test.describe("on-device model operations", () => {
  test("switch groups by click and keyboard, and list every capability once", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#on-device-ai");
    const tabs = section.getByRole("tab");
    await expect(tabs).toHaveCount(MODEL_OPERATION_GROUPS.length);

    await tabs.nth(1).click();
    await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true");
    await expect(section.getByRole("tabpanel")).toContainText("Image upscaling");

    // Arrow keys follow the layout: down the column on wide screens, along the row on narrow ones.
    const orientation = await section.getByRole("tablist").getAttribute("aria-orientation");
    await page.keyboard.press(orientation === "vertical" ? "ArrowDown" : "ArrowRight");
    await expect(tabs.nth(2)).toBeFocused();
    await expect(section.getByRole("tabpanel")).toContainText("Semantic search embeddings");

    const listed = await section.locator("[role=tabpanel] li:has(> span + span)").allTextContents();
    expect(listed).toHaveLength(modelOperations.length);
  });

  test("let the reader move the comparison with the keyboard", async ({ page }) => {
    await page.goto("/");
    await page.locator("#on-device-ai").getByRole("tab").nth(1).click();
    const slider = page.getByRole("slider", { name: "Compare the original with the upscaled image" });
    await slider.focus();
    await page.keyboard.press("Home");
    await expect(slider).toHaveValue("0");
  });
});
