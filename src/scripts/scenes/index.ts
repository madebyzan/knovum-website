import { illuminate } from "./illuminate";
import { live } from "./live";
import { stage } from "./stage";
import { timeline } from "./timeline";

/**
 * Scenes that follow the reader, each bound to the elements that ask for it: three tied to scroll
 * position, and one that runs a scene's loops only while it is on screen. None runs for a reader who has asked
 * for less motion; the stylesheet shows their finished state then, as it does without script.
 */
const scenes: Readonly<Record<string, (element: HTMLElement) => void>> = {
  "[data-stage]": stage,
  "[data-illuminate]": illuminate,
  "[data-timeline-scene]": timeline,
  "[data-live]": live,
};

if (matchMedia("(prefers-reduced-motion: no-preference)").matches)
  for (const [selector, scene] of Object.entries(scenes))
    for (const element of document.querySelectorAll<HTMLElement>(selector)) scene(element);
