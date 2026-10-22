import type { APIRoute } from "astro";

import { siteOrigin } from "@/lib/origin";

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("sitemap-index.xml", siteOrigin(site));
  const body = ["User-agent: *", "Allow: /", "", `Sitemap: ${sitemap.href}`, ""].join("\n");
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
};
