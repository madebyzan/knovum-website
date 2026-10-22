import { scroll } from "motion";

/** How far down the page, in viewport heights, the frame has finished lying flat. */
const FLAT_AFTER = 0.6;

/**
 * The product frame starts tipped back and lies flat as the reader scrolls into it. Only the tilt's
 * amount is set here, as `--stage-tilt` from 1 to 0; what a tilt looks like is the stylesheet's.
 */
export function animateCanvasPerspective(element: HTMLElement): void {
  scroll((_, { y }) => {
    const flattened = Math.min(y.current / (window.innerHeight * FLAT_AFTER), 1);
    element.style.setProperty("--stage-tilt", (1 - flattened).toFixed(4));
  });
}
