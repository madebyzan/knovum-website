/** `0` → `"01"`: the position labels beside numbered items. */
export function formatOrdinal(index: number): string {
  return String(index + 1).padStart(2, "0");
}

/**
 * A calendar date in the reader's language. Dates are formatted in UTC so that every build renders
 * a release date the same way, whatever the build machine's time zone.
 */
export function formatDate(date: Date, languageTag: string): string {
  return new Intl.DateTimeFormat(languageTag, { dateStyle: "long", timeZone: "UTC" }).format(date);
}

/** A download's size in whole megabytes (10⁶ bytes, as macOS and installers count them). */
export function formatFileSize(bytes: number, languageTag: string): string {
  return new Intl.NumberFormat(languageTag, {
    style: "unit",
    unit: "megabyte",
    maximumFractionDigits: 0,
  }).format(bytes / 1_000_000);
}
