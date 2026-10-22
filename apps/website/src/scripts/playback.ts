import { inView } from "motion";

/**
 * Runs `play` while `element` is on screen and rendered, and stops it when either ends. `play`
 * starts the element's motion and returns how to stop it. Nothing runs for a reader who has asked
 * for less motion; every demo's markup is its finished state, so that reader sees it whole.
 *
 * "Rendered" comes free with on-screen: a demo in a tab that is not selected has no box, so it is
 * never in view, and selecting its tab brings it into view.
 */
export function whileShown(element: Element, play: () => () => void): void {
  if (!matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
  inView(element, () => play(), { amount: 0.3 });
}

/** A pause that ends early, with the signal's reason, when the signal aborts. */
export function sleep(milliseconds: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, milliseconds);
    signal.addEventListener(
      "abort",
      () => {
        clearTimeout(timer);
        reject(signal.reason as Error);
      },
      { once: true },
    );
  });
}

/**
 * Calls `onFrame` once a frame with how far through its run the loop is, from 0 to 1, then holds at
 * 1 for `restMs` and starts again, until the returned function stops it.
 */
export function loop(durationMs: number, onFrame: (progress: number) => void, restMs = 0): () => void {
  let start: number | undefined;
  let frame = requestAnimationFrame(function tick(now) {
    start ??= now;
    onFrame(Math.min(((now - start) % (durationMs + restMs)) / durationMs, 1));
    frame = requestAnimationFrame(tick);
  });
  return () => {
    cancelAnimationFrame(frame);
  };
}
