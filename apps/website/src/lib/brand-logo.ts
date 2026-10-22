import { parseSVGContent } from "@iconify/utils";

/** A brand's mark, reduced to what the site draws: its geometry, in the reader's ink. */
export interface BrandLogo {
  readonly viewBox: string;
  readonly fillRule: "nonzero" | "evenodd";
  /** The SVG's shapes, without its title: the brand's name is always set beside it as text. */
  readonly body: string;
}

const TITLE = /<title>[^<]*<\/title>/gu;

/**
 * A logo file's geometry. The source's own size, inline style and colour are dropped: every logo is
 * drawn in `currentColor` at the size its placement gives it, under the site's CSP.
 */
export function parseBrandLogo(svg: string): BrandLogo {
  const parsed = parseSVGContent(svg);
  const viewBox = parsed?.attribs["viewBox"];
  if (!parsed || !viewBox) throw new Error("A brand logo must be an SVG with a viewBox.");
  return {
    viewBox,
    fillRule: parsed.attribs["fill-rule"] === "evenodd" ? "evenodd" : "nonzero",
    body: parsed.body.replace(TITLE, ""),
  };
}
