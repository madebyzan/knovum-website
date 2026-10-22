import { existsSync } from "node:fs";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import { PRODUCT_NAME, PRODUCT_REPOSITORY_URL } from "@knovum/brand/identity";

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
      logo: { src: "../../packages/brand/src/app-icon.png", replacesTitle: false },
      customCss: ["./src/styles/documentation.css"],
      components: {
        Search: "./src/components/DocumentationSearch.astro",
        SocialIcons: "./src/components/WebsiteNavigation.astro",
      },
      editLink: { baseUrl: "https://github.com/madebyzan/knovum-website/edit/main/apps/documentation/" },
      social: [{ icon: "github", label: "GitHub", href: PRODUCT_REPOSITORY_URL }],
      sidebar: [
        {
          label: "Start here",
          translations: { "zh-CN": "开始使用" },
          items: ["index", "getting-started/installation", "getting-started/first-space"],
        },
        {
          label: "Work with knowledge",
          translations: { "zh-CN": "知识工作" },
          items: ["guides/capture", "guides/organization", "guides/search", "guides/ask", "guides/knowledge"],
        },
        {
          label: "Create and preserve",
          translations: { "zh-CN": "创作与保存" },
          items: [
            "guides/transcription",
            "guides/creation",
            "guides/image-editing",
            "guides/video-editing",
            "guides/speech-projects",
            "guides/dubbing",
            "guides/export",
            "guides/backup",
          ],
        },
        {
          label: "AI and execution",
          translations: { "zh-CN": "AI 与执行" },
          items: ["guides/providers", "guides/local-models", "guides/agents", "guides/mcp"],
        },
        {
          label: "Reference",
          translations: { "zh-CN": "参考与排障" },
          items: ["reference/privacy", "reference/shortcuts", "reference/troubleshooting"],
        },
      ],
    }),
  ],
});
