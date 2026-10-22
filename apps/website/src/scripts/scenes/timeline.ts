import { scroll } from "motion";

/**
 * A row of steps whose rule fills from the first step to the last as it is read. Each step is marked
 * reached once the fill passes where it starts. Positions are read live, so the scene holds at any
 * width; where the steps stack, the rule is hidden and every step is reached as soon as it shows.
 */
export function animateWorkflowProgress(root: HTMLElement): void {
  const fill = root.querySelector<HTMLElement>("[data-timeline-fill]");
  const steps = [...root.querySelectorAll<HTMLElement>("[data-timeline] > li")];
  if (!fill) return;

  scroll(
    (progress) => {
      fill.style.scale = `${progress.toFixed(4)} 1`;
      const reach = progress * root.clientWidth;
      for (const step of steps)
        step.toggleAttribute("data-reached", progress > 0 && step.offsetLeft <= reach);
    },
    { target: root, offset: ["start 80%", "end 55%"] },
  );
}
