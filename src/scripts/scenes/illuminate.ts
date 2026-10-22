import { scroll } from "motion";

/**
 * Words light up in reading order as the passage moves up the screen: the first as it enters the
 * lower part of the viewport, the last by the time the passage's end reaches the middle.
 */
export function illuminate(element: HTMLElement): void {
  const words = [...element.querySelectorAll<HTMLElement>("[data-word]")];
  let lit = 0;

  scroll(
    (progress) => {
      const reached = Math.round(progress * words.length);
      if (reached === lit) return;
      const [from, to] = reached > lit ? [lit, reached] : [reached, lit];
      for (const word of words.slice(from, to)) word.toggleAttribute("data-lit", reached > lit);
      lit = reached;
    },
    { target: element, offset: ["start 85%", "end 50%"] },
  );
}
