import type { ExternalLinkKey } from "./site";

/** Page sections that navigation can point at, and the fragment each one answers to. */
export const SECTION_IDS = {
  useCases: "use-cases",
  features: "features",
  onDeviceAi: "on-device-ai",
  workflow: "how-it-works",
  questions: "questions",
  download: "download",
} as const;

export type SectionKey = keyof typeof SECTION_IDS;

/** Sections listed in the header and the footer's product column, in reading order. */
export const PRIMARY_SECTIONS = [
  "useCases",
  "features",
  "onDeviceAi",
  "questions",
] as const satisfies readonly SectionKey[];

/** Project resources listed in the footer, in this order. */
export const PROJECT_LINKS = [
  "github",
  "releases",
  "contributing",
  "issues",
  "security",
] as const satisfies readonly ExternalLinkKey[];

export type ProjectLinkKey = (typeof PROJECT_LINKS)[number];
