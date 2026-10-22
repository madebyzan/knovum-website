import { inView } from "motion";

/**
 * Content settles in once as it first reaches the viewport. The hidden state is pure CSS and only
 * applies while scripting is on and the reader allows motion, so this only has to mark arrival.
 */
inView(
  "[data-reveal]",
  (element) => {
    element.setAttribute("data-revealed", "");
  },
  { margin: "0px 0px -10% 0px", amount: 0.1 },
);
