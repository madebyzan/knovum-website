import type { APIRoute } from "astro";
import { getImage } from "astro:assets";

import appIcon from "@/assets/app-icon.png";
import { DEFAULT_LOCALE } from "@/config/locales";
import { site } from "@/config/site";
import { themeColors } from "@/config/theme-colors";
import { getDictionary } from "@/i18n/page-language";

const SIZES = [192, 256] as const;

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    SIZES.map(async (size) => {
      const image = await getImage({ src: appIcon, width: size, height: size, format: "png" });
      return { src: image.src, sizes: `${size}x${size}`, type: "image/png" };
    }),
  );

  const manifest = {
    name: site.name,
    short_name: site.name,
    description: getDictionary(DEFAULT_LOCALE).meta.description,
    start_url: "/",
    display: "browser",
    background_color: themeColors.light,
    theme_color: themeColors.light,
    icons,
  };

  return new Response(JSON.stringify(manifest), {
    headers: { "content-type": "application/manifest+json" },
  });
};
