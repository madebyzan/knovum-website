/**
 * Estimated reading time for a page's Markdown source. Chinese is counted in characters and other
 * languages in words, because the two are read at different units. Code, link targets, MDX imports
 * and markup are not prose and are left out.
 */
const CHARACTERS_PER_MINUTE = 400;
const WORDS_PER_MINUTE = 230;
const MINIMUM_MINUTES = 1;

const HAN = /\p{Script=Han}/gu;
const WORD = /[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu;

function prose(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^(?:import|export)\s.*$/gm, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\]\([^)]*\)/g, "]")
    .replace(/`[^`]*`/g, " ");
}

export function readingMinutes(markdown: string): number {
  const text = prose(markdown);
  const characters = text.match(HAN)?.length ?? 0;
  const words = text.replace(HAN, " ").match(WORD)?.length ?? 0;
  const minutes = characters / CHARACTERS_PER_MINUTE + words / WORDS_PER_MINUTE;
  return Math.max(MINIMUM_MINUTES, Math.round(minutes));
}
