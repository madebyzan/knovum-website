import { createTV } from "tailwind-variants";

/**
 * `tv` that knows the site's own tokens. Without them tailwind-merge cannot tell `text-body-sm` (a
 * size) from `text-ink` (a colour) and would drop one when classes are merged.
 * Keep these lists in step with `@theme` in `src/styles/global.css`.
 */
export const tv = createTV({
  twMergeConfig: {
    extend: {
      theme: {
        text: [
          "display",
          "numeral",
          "title",
          "statement",
          "heading",
          "subheading",
          "lead",
          "body",
          "body-sm",
          "label",
          "caption",
          "canvas-2xs",
          "canvas-xs",
          "canvas-sm",
          "canvas-md",
          "canvas-lg",
          "canvas-xl",
        ],
        spacing: ["gutter", "section", "hero", "header", "split", "sticky"],
        container: ["page", "title", "measure", "statement", "passage", "specimen", "downloads"],
        radius: ["canvas-xs", "canvas-sm", "canvas-md", "canvas-lg"],
        shadow: ["frame", "panel", "canvas-card", "canvas-selected"],
        font: ["sans", "heading", "mono"],
        ease: ["standard"],
        animate: ["settle", "fade", "draw", "flow"],
        tracking: ["snug", "wide"],
      },
    },
  },
});

export type { VariantProps } from "tailwind-variants";
