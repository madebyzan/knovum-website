import { DOCS_URL } from "astro:env/server";

import type { Locale } from "@/config/locales";

/** The documentation page at `path`, in the reader's language. */
export function documentationUrl(locale: Locale, path = "/"): URL {
  return new URL(locale === "zh" ? `/zh${path}` : path, DOCS_URL);
}
