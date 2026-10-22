/**
 * The sample Space every illustration on the site is drawn from, as facts. Its words are copy and
 * live in each dictionary under `canvas`; this file holds what is the same in every language, so the
 * hero canvas and the feature specimens always tell the same story.
 */

/** The sources the sample document was created from, in citation order, with the revision each used. */
export const documentSources = [
  { source: "recording", revision: "v2" },
  { source: "capture", revision: "v1" },
  { source: "note", revision: "v4" },
] as const;

/** When the sample document was created. */
export const documentCreatedAt = new Date("2026-10-22T06:02:00Z");

/** The moment in the sample recording that the claim and the answer cite. */
export const citedMoment = { at: "18:42", waveform: [13, 21] } as const;

/** Contradictions in the sample Space that Knowledge Health reports as open. */
export const openContradictions = 1;

/**
 * The stretch of the sample recording the Listen demo plays: who speaks each line, the moment it
 * starts, and where it falls in the stretch (0 to 1). The words are copy, under `onDevice.listen`.
 */
export const transcriptTiming = [
  { speaker: 1, at: "18:31", from: 0.02, to: 0.27 },
  { speaker: 2, at: "18:36", from: 0.33, to: 0.76 },
  { speaker: 1, at: "18:44", from: 0.83, to: 0.97 },
] as const;

/** How closely each result of the Find demo matches its query, in result order. */
export const searchScores = [0.91, 0.84, 0.72] as const;

/** The See demo's image: its file name, the factor it is upscaled by, and the original's width. */
export const upscale = { file: "still-life.jpg", factor: 4, originalWidth: 160 } as const;
