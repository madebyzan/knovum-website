import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import type { APIRoute } from "astro";
import sharp from "sharp";

/** The one source icon. Resolve the brand-owned resource through its package contract. */
const SOURCE_ICON = fileURLToPath(import.meta.resolve("@knovum/brand/app-icon.png"));

/**
 * Browsers and crawlers ask for `/favicon.ico` whatever the page declares. Every current browser
 * reads a PNG served there, so the source icon is rendered once at 48 pixels instead of shipping a
 * second, hand-made asset that could drift from it.
 */
export const GET: APIRoute = async () => {
  const icon = await sharp(await readFile(SOURCE_ICON))
    .resize(48, 48)
    .png()
    .toBuffer();
  return new Response(new Uint8Array(icon), { headers: { "content-type": "image/x-icon" } });
};
