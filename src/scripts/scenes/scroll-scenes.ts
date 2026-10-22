import { illuminateStatement } from "./illuminate";
import { observeSceneVisibility } from "./live";
import { animateCanvasPerspective } from "./stage";
import { animateWorkflowProgress } from "./timeline";

/**
 * Scenes that follow the reader, each bound to the elements that ask for it: three tied to scroll
 * position, and one that runs a scene's loops only while it is on screen. None runs for a reader who has asked
 * for less motion; the stylesheet shows their finished state then, as it does without script.
 */
const sceneBySelector: Readonly<Record<string, (element: HTMLElement) => void>> = {
  "[data-stage]": animateCanvasPerspective,
  "[data-illuminate]": illuminateStatement,
  "[data-timeline-scene]": animateWorkflowProgress,
  "[data-live]": observeSceneVisibility,
};

if (matchMedia("(prefers-reduced-motion: no-preference)").matches)
  for (const [selector, scene] of Object.entries(sceneBySelector))
    for (const element of document.querySelectorAll<HTMLElement>(selector)) scene(element);
