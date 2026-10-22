import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import type { APIRoute } from "astro";
import sharp from "sharp";

/** The one source icon. Builds run from the project root; bundling moves this module, not the asset. */
const SOURCE_ICON = resolve(process.cwd(), "src/assets/app-icon.png");

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
