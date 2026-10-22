/**
 * The one registry of the site's languages. Routing, `lang` attributes, hreflang alternates, the
 * sitemap and Open Graph all derive from it, so adding a language starts and ends here plus its
 * dictionary.
 */
export const LOCALES = ["en", "zh"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

interface LocaleMeta {
  /** BCP 47 tag, used for `lang` and `hreflang`. */
  readonly tag: string;
  readonly ogLocale: string;
  /** The language's name in itself, for the footer list. */
  readonly name: string;
  /** A short form of `name`, for the compact switch in the header. */
  readonly shortName: string;
  /** What runs between two sentences set together: a space in English, nothing in Chinese. */
  readonly sentenceGap: string;
}

export const localeMeta: Readonly<Record<Locale, LocaleMeta>> = {
  en: { tag: "en", ogLocale: "en_US", name: "English", shortName: "EN", sentenceGap: " " },
  zh: { tag: "zh-CN", ogLocale: "zh_CN", name: "简体中文", shortName: "中文", sentenceGap: "" },
};

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.some((locale) => locale === value);
}
