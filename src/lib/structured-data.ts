import type { SoftwareApplication, WithContext } from "schema-dts";

import { externalLinks, site } from "@/config/site";
import type { Release } from "@/lib/releases";

interface SoftwareApplicationInput {
  readonly description: string;
  readonly languageTag: string;
  readonly url: URL;
  readonly release: Release;
}

/** Schema.org description of the app, so search results can present it as software. */
export function softwareApplication(input: SoftwareApplicationInput): WithContext<SoftwareApplication> {
  const { description, languageTag, url, release } = input;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    description,
    inLanguage: languageTag,
    url: url.href,
    applicationCategory: "ProductivityApplication",
    operatingSystem: ["macOS 14 or later", "Windows 10 version 2004 or later"],
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
    sameAs: externalLinks.github,
    softwareVersion: release.version,
    datePublished: release.publishedAt.toISOString(),
    downloadUrl: release.url,
  };
}
