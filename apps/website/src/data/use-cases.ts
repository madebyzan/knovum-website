/**
 * The work the site shows Knovum doing, in reading order. Each names the documentation page that
 * walks a reader through the same work, so a use case and its tutorial cannot drift apart.
 */
export const USE_CASES = [
  { id: "interviews", guide: "/tutorials/interviews/" },
  { id: "meetings", guide: "/tutorials/meetings/" },
  { id: "research", guide: "/getting-started/first-space/" },
  { id: "video", guide: "/guides/video-editing/" },
] as const;

export type UseCaseId = (typeof USE_CASES)[number]["id"];
