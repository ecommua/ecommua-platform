import * as React from "react";
import { cn } from "../lib/cn-class-merger";

/** Centered max-width content wrapper — consistent gutters across pages. */
export function Container({
  className,
  size = "lg",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { size?: "sm" | "md" | "lg" | "xl" | "full" }) {
  const widths = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-none",
  };
  return (
    <div className={cn("mx-auto w-full px-6 lg:px-8", widths[size], className)} {...props} />
  );
}
