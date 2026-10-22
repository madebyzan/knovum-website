/** @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions} */
export default {
  printWidth: 110,
  // Class sorting must run last, after Astro has parsed the template.
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
  tailwindStylesheet: "./src/styles/global.css",
  tailwindFunctions: ["tv"],
};
