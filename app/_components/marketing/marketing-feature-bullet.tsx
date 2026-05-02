import * as React from "react";
import { cn } from "../lib/cn-class-merger";

/**
 * Feature bullet — icon + title + description, three layouts.
 * Variant card: framed, for grids. Variant inline: simple checkmark list.
 */

export function FeatureBullet({
  icon,
  title,
  description,
  className,
}: {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      {icon && (
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100/70 ring-1 ring-inset ring-brand-200/60 text-brand-700">
          {icon}
        </div>
      )}
      <h3 className="font-display text-[17px] font-semibold tracking-tight text-fg mb-1.5">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-fg-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function CheckBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[15px] text-fg-muted">
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60">
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}
