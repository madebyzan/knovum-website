import { inView } from "motion";

/** Marks a scene as on screen while any of it is, so its loops run then and rest otherwise. */
export function live(element: HTMLElement): void {
  inView(element, () => {
    element.toggleAttribute("data-in-view", true);
    return () => {
      element.toggleAttribute("data-in-view", false);
    };
  });
}
