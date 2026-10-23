import { existsSync } from "node:fs";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import { PRODUCT_NAME, PRODUCT_REPOSITORY_URL } from "../../config/product.ts";
import { SIDEBAR } from "./src/config/sidebar.ts";

if (existsSync(".env")) process.loadEnvFile(".env");
const site = process.env["SITE_URL"];
if (!site) throw new Error("SITE_URL must be set to the documentation origin.");

export default defineConfig({
  site,
  trailingSlash: "always",
  integrations: [
    starlight({
      title: PRODUCT_NAME,
      description: "Practical guides for the Knovum knowledge workspace.",
      locales: { root: { label: "English", lang: "en" }, zh: { label: "简体中文", lang: "zh-CN" } },
      logo: { src: "../../assets/icons/knovum.png", replacesTitle: false },
      customCss: ["./src/styles/documentation.css"],
      components: {
        PageTitle: "./src/components/ReadingHeader.astro",
        Search: "./src/components/DocumentationSearch.astro",
        SocialIcons: "./src/components/WebsiteNavigation.astro",
      },
      editLink: { baseUrl: "https://github.com/madebyzan/knovum-website/edit/main/apps/documentation/" },
      social: [{ icon: "github", label: "GitHub", href: PRODUCT_REPOSITORY_URL }],
      sidebar: SIDEBAR,
    }),
  ],
});
