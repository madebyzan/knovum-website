/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

// Astro's Vite config, so tests resolve `@/` imports and `astro/*` modules the way the site does.
export default getViteConfig({
  test: {
    include: ["tests/unit/**/*.test.ts"],
    environment: "node",
  },
});
