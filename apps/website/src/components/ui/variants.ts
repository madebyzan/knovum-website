import { tv, type VariantProps } from "@/lib/style-variants";

/** One definition of the call-to-action, shared by links and buttons so they always match. */
export const action = tv({
  base: [
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-md border leading-none font-medium whitespace-nowrap",
    "transition-colors duration-150 ease-standard",
  ],
  variants: {
    variant: {
      primary: "border-transparent bg-ink text-paper hover:bg-ink/85",
      secondary: "border-line-strong text-ink hover:border-ink/30 hover:bg-ink/4",
      quiet: "border-transparent text-ink-muted hover:text-ink",
    },
    size: {
      md: "h-11.5 px-5 text-body-sm",
      sm: "h-9 px-3.75 text-label",
      icon: "size-9",
    },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

export type ActionVariants = VariantProps<typeof action>;

/** Text links inside running copy and small print. */
export const inlineLink = tv({
  base: [
    "underline decoration-line-strong decoration-1 underline-offset-[0.2em]",
    "transition-colors duration-150 ease-standard hover:decoration-current",
  ],
});

/** Navigation entries in the header, menu and footer. */
export const navLink = tv({
  base: "text-ink-muted transition-colors duration-150 ease-standard hover:text-ink aria-[current=page]:text-ink",
});
