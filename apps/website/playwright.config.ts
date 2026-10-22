import { defineConfig, devices } from "@playwright/test";

const PORT = 4322;
const BASE_URL = `http://localhost:${PORT}`;

// CI installs Playwright's own Chromium; elsewhere an existing Chromium can be pointed at.
const executablePath = process.env["PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH"];
const launchOptions = executablePath ? { executablePath } : {};

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env["CI"]),
  retries: process.env["CI"] ? 1 : 0,
  reporter: process.env["CI"] ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: BASE_URL,
    trace: "retain-on-failure",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], launchOptions } },
    { name: "mobile", use: { ...devices["Pixel 7"], launchOptions } },
  ],
  // The production build, served as it will be, with the origin set so absolute URLs are exercised.
  webServer: {
    command: `pnpm run build && pnpm exec astro preview --port ${PORT}`,
    url: BASE_URL,
    // Built from the recorded release, so every run tests the same downloads.
    env: {
      SITE_URL: BASE_URL,
      RELEASE_FILE: "tests/fixtures/release.json",
      DOCS_URL: "http://localhost:4332",
    },
    reuseExistingServer: !process.env["CI"],
    timeout: 180_000,
  },
});
