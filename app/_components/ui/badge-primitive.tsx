import * as React from "react";
import { cn } from "../lib/cn-class-merger";

/** Compact tag/label primitive. Variants tuned for marketing surfaces. */
type Variant = "default" | "brand" | "outline" | "soft" | "dot";

const VARIANTS: Record<Variant, string> = {
  default: "bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200",
  brand: "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200",
  outline: "bg-transparent text-slate-600 ring-1 ring-inset ring-slate-200",
  soft: "bg-white/80 text-slate-700 ring-1 ring-inset ring-slate-200 backdrop-blur",
  dot: "bg-brand-50/50 text-brand-700 ring-1 ring-inset ring-brand-200",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        VARIANTS[variant],
        className,
      )}
      {...props}
    />
  );
}
