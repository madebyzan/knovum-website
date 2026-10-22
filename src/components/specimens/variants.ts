/** Shared pieces of the feature specimens, so every specimen draws a panel, a tag and a mark alike. */
import { tv } from "@/lib/tv";

/** A piece of interface resting on the frame. */
export const panel = tv({
  base: "rounded-md bg-surface shadow-panel",
  variants: {
    selected: { true: "ring-2 ring-accent" },
    /** Somewhere the reader's data does not go unless they choose: outlined, not filled. */
    optional: { true: "border border-dashed border-line-strong bg-transparent shadow-none" },
  },
});

/** A short label in a box: an object's kind, a relation, a status. */
export const tag = tv({
  base: "inline-flex items-center gap-1.5 rounded-sm px-1.75 py-0.5 text-caption leading-snug font-medium whitespace-nowrap",
  variants: {
    tone: {
      kind: "bg-ink/6 text-ink-muted",
      relation: "border border-line-strong text-ink-subtle",
      emphasis: "border border-ink/40 text-ink",
    },
  },
  defaultVariants: { tone: "kind" },
});

/** A citation's number, as it appears in a document and in the list of its sources. */
export const citationMark = tv({
  base: "inline-grid size-4.5 place-items-center rounded-sm bg-accent/12 text-caption leading-none font-semibold text-accent-ink tabular-nums",
});
