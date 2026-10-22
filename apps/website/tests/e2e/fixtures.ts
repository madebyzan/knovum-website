import { expect, test as base, type Page } from "@playwright/test";

/** The pages every check runs against, with what each must say about itself. */
export const PAGES = [
  { path: "/", lang: "en", title: /local-first knowledge workspace/ },
  { path: "/zh/", lang: "zh-CN", title: /本地优先的知识工作台/ },
] as const;

/**
 * A page that fails its test on any console error or uncaught exception — which is also how a
 * Content Security Policy violation or a missing asset shows up. The one error a browser always
 * logs on purpose, the status of a page that is itself a 404, is not a defect.
 */
export const test = base.extend<{ page: Page }>({
  page: async ({ page }, use) => {
    const problems: string[] = [];
    const documents = new Set<string>();
    page.on("response", (response) => {
      if (response.request().isNavigationRequest()) documents.add(response.url());
    });
    page.on("console", (message) => {
      if (message.type() !== "error") return;
      if (documents.has(message.location().url) && message.text().startsWith("Failed to load resource"))
        return;
      problems.push(`${message.text()} (${message.location().url})`);
    });
    page.on("pageerror", (error) => problems.push(error.message));
    await use(page);
    expect(problems, "console errors and uncaught exceptions").toEqual([]);
  },
});

export { expect };
