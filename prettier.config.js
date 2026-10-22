export default {
  printWidth: 110,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    { files: "*.astro", options: { parser: "astro" } },
    {
      files: "apps/website/**/*.{astro,ts,css}",
      options: { tailwindStylesheet: "./apps/website/src/styles/global.css", tailwindFunctions: ["tv"] },
    },
  ],
};
