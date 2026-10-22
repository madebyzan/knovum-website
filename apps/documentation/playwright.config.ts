import { defineConfig, devices } from "@playwright/test";
const executablePath = process.env["PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH"];
const launchOptions = executablePath ? { executablePath } : {};
export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  use: { baseURL: "http://localhost:4332", trace: "retain-on-failure" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], launchOptions } },
    { name: "mobile", use: { ...devices["Pixel 7"], launchOptions } },
  ],
  webServer: {
    command: "pnpm build && pnpm exec astro preview --port 4332",
    url: "http://localhost:4332",
    env: { SITE_URL: "http://localhost:4332", WEBSITE_URL: "http://localhost:4322" },
    reuseExistingServer: false,
    timeout: 180000,
  },
});
