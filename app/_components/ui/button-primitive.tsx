import * as React from "react";
import { cn } from "../lib/cn-class-merger";

/**
 * Button primitive — shadcn-style with variants tuned for Ecommua brand.
 * Variants: primary (brand fill), secondary (subtle gray), outline, ghost, link.
 * Sizes: sm | md | lg | xl.
 */

type Variant = "primary" | "secondary" | "outline" | "ghost" | "link";
type Size = "sm" | "md" | "lg" | "xl";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-soft hover:bg-brand-700 active:bg-brand-800 focus-visible:ring-brand-500/40",
  secondary:
    "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 focus-visible:ring-slate-700/40 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100",
  outline:
    "bg-white text-slate-900 ring-1 ring-inset ring-slate-200 hover:ring-slate-300 hover:bg-slate-50 focus-visible:ring-brand-500/40 dark:bg-transparent dark:text-slate-100 dark:ring-slate-700 dark:hover:bg-slate-800/40",
  ghost:
    "text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-300 dark:text-slate-300 dark:hover:bg-slate-800/60",
  link:
    "text-brand-600 underline-offset-4 hover:underline focus-visible:ring-brand-500/40 dark:text-brand-400",
};

const SIZES: Record<Size, string> = {
  sm: "h-8 px-3 text-xs rounded-md gap-1.5",
  md: "h-10 px-4 text-sm rounded-lg gap-2",
  lg: "h-12 px-6 text-[15px] rounded-xl gap-2",
  xl: "h-14 px-8 text-base rounded-2xl gap-2.5",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-semibold whitespace-nowrap",
        "transition-all duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
        "disabled:opacity-50 disabled:pointer-events-none",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = "Button";

/** Anchor styled as button (for <a> elements that look like buttons). */
export const ButtonLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; size?: Size }
>(({ className, variant = "primary", size = "md", ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center font-semibold whitespace-nowrap",
      "transition-all duration-200 ease-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
      VARIANTS[variant],
      SIZES[size],
      className,
    )}
    {...props}
  />
));
ButtonLink.displayName = "ButtonLink";
