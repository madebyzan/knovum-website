import { getRelativeLocaleUrl } from "astro:i18n";

import { DEFAULT_LOCALE, isLocale, LOCALES, localeMeta, type Locale } from "@/config/locales";
import { SECTION_IDS, type SectionKey } from "@/config/navigation";

import type { Dictionary } from "./dictionary";
import en from "./en";
import zh from "./zh";

export type { Dictionary, Passage } from "./dictionary";

const dictionaries: Readonly<Record<Locale, Dictionary>> = { en, zh };

export interface I18n {
  readonly locale: Locale;
  readonly t: Dictionary;
  /** The page language's BCP 47 tag. */
  readonly tag: string;
}

/**
 * The language of the page being rendered, read from Astro's i18n routing so that every component
 * agrees with the URL without the locale being passed down through props.
 */
export function getI18n(astro: { readonly currentLocale: string | undefined }): I18n {
  const locale = isLocale(astro.currentLocale) ? astro.currentLocale : DEFAULT_LOCALE;
  return { locale, t: dictionaries[locale], tag: localeMeta[locale].tag };
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** The home page of a language, as a root-relative URL. */
export function homePath(locale: Locale): string {
  return getRelativeLocaleUrl(locale);
}

/** A section of a language's home page. */
export function sectionPath(locale: Locale, section: SectionKey): string {
  return `${homePath(locale)}#${SECTION_IDS[section]}`;
}

/** Every language's home page, for alternates and language switches. */
export function localizedHomes(): readonly { readonly locale: Locale; readonly path: string }[] {
  return LOCALES.map((locale) => ({ locale, path: homePath(locale) }));
}
