/**
 * The page background in sRGB, for the places that cannot read CSS: the browser chrome
 * (`theme-color`) and the web app manifest. These are `--color-paper` in `src/styles/global.css`
 * converted from OKLCH; change them together.
 */
export const themeColors = {
  light: "#f9fafb",
  dark: "#0f1013",
} as const;
