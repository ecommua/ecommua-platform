import * as React from "react";
import { cn } from "../lib/cn-class-merger";
import { CheckBullet } from "./marketing-feature-bullet";

/**
 * Pricing tier card — three-tier comparison with highlighted recommended plan.
 * Premium: gradient ring on featured tier, mono price, large CTA.
 */

export interface PricingTierProps {
  name: string;
  price: string;
  priceSuffix?: string;
  tagline: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
}

export function PricingTier({
  name,
  price,
  priceSuffix,
  tagline,
  features,
  ctaLabel,
  ctaHref,
  featured = false,
  badge,
}: PricingTierProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl p-8 transition-transform",
        featured
          ? "bg-fg text-white shadow-lift ring-1 ring-bg-elevated lg:scale-[1.03]"
          : "bg-white ring-1 ring-border shadow-card hover:shadow-lift",
      )}
    >
      {featured && (
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-brand-400/30 via-brand-500/10 to-transparent pointer-events-none" />
      )}
      <div className="relative">
        {badge && (
          <span
            className={cn(
              "absolute -top-3 right-2 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
              featured
                ? "bg-gradient-to-r from-brand-500 to-brand-400 text-white shadow-glow"
                : "bg-brand-50 text-brand-700 ring-1 ring-brand-200",
            )}
          >
            {badge}
          </span>
        )}
        <h3
          className={cn(
            "font-display text-xl font-semibold tracking-tight",
            featured ? "text-white" : "text-fg",
          )}
        >
          {name}
        </h3>
        <p className={cn("mt-1.5 text-sm leading-relaxed", featured ? "text-fg-muted" : "text-fg-muted")}>
          {tagline}
        </p>

        {/* Price */}
        <div className="mt-7 flex items-baseline gap-1.5">
          <span
            className={cn(
              "font-display text-5xl font-bold tracking-[-0.04em]",
              featured ? "text-white" : "text-fg",
            )}
          >
            {price}
          </span>
          {priceSuffix && (
            <span className={cn("text-sm font-medium", featured ? "text-fg-muted" : "text-fg-muted")}>
              {priceSuffix}
            </span>
          )}
        </div>

        {/* CTA */}
        <a
          href={ctaHref}
          className={cn(
            "mt-7 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl font-semibold transition-all",
            featured
              ? "bg-white text-fg hover:bg-bg-muted shadow-lift"
              : "bg-fg text-white hover:bg-bg-elevated",
          )}
        >
          {ctaLabel}
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>

        {/* Feature list */}
        <ul className="mt-8 space-y-3.5">
          {features.map((f) => (
            <li
              key={f}
              className={cn(
                "flex items-start gap-3 text-sm",
                featured ? "text-fg-muted" : "text-fg-muted",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  featured
                    ? "bg-brand-500/20 text-brand-300 ring-1 ring-inset ring-brand-400/30"
                    : "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200/60",
                )}
              >
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Re-export CheckBullet for convenience
export { CheckBullet };
