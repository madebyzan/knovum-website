/** A run of copy: a word with any punctuation that follows it, or the space between words. */
export interface Token {
  readonly text: string;
  readonly word: boolean;
}

const WHITESPACE = /^\s+$/u;

/**
 * Splits copy into words the way its language does: at spaces in English, and between words, not
 * characters, in Chinese. Punctuation stays with the word before it, so a comma never lights up on its
 * own, and joining every token's text gives back the copy unchanged.
 */
export function splitWords(text: string, languageTag: string): Token[] {
  const tokens: Token[] = [];
  for (const { segment, isWordLike } of new Intl.Segmenter(languageTag, { granularity: "word" }).segment(
    text,
  )) {
    const previous = tokens.at(-1);
    if (WHITESPACE.test(segment)) tokens.push({ text: segment, word: false });
    else if (!isWordLike && previous?.word)
      tokens[tokens.length - 1] = { ...previous, text: previous.text + segment };
    else tokens.push({ text: segment, word: true });
  }
  return tokens;
}
