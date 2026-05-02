"use client";

/**
 * Pricing hero + 3 tier cards.
 * Layout-matched to ref/pricing/full.png (sections 01 + 02).
 *
 * Hero:
 *   - Eyebrow not present in ref — skipped to match.
 *   - 2-line display headline (display-bold, tight tracking).
 *   - Lorem subhead (~2 lines) in fg-muted.
 *   - Pill toggle: Billing Monthly / Billing Yearly. Active = accent.
 *
 * Tier cards (3-up grid, equal columns, 24px gutter):
 *   - Card: rounded-2xl, bg-bg-elevated, ring border.
 *   - Tier name (sm), price (display 5xl), per-period caption.
 *   - Pill CTA (full-width) with accent gradient + chevron disc.
 *   - "Main features" eyebrow → 5–6 feature rows w/ accent dot icon.
 *
 * Yearly toggle: applies a 20% discount to "Standard" + "Premium" prices.
 * Free stays $0. Period caption swaps "Per Month" ↔ "Per Year".
 */

import * as React from "react";
import { Container } from "../../ui/container-wrapper";

type Period = "monthly" | "yearly";

interface Tier {
  name: string;
  monthly: number; // 0 = Free
  features: string[];
}

const TIERS: Tier[] = [
  {
    name: "Free",
    monthly: 0,
    features: [
      "Intelligent Code Suggestions",
      "Basic Language Support",
      "Code Snippet Generation",
      "Limited Collaboration Features",
      "Basic Support",
    ],
  },
  {
    name: "Standard",
    monthly: 25,
    features: [
      "All the basic features",
      "Advanced Code Suggestions",
      "24/7 Support Team",
      "Customize Dashboard",
      "Priority Support",
    ],
  },
  {
    name: "Premium",
    monthly: 32,
    features: [
      "All the basic features",
      "Advanced Code Suggestions",
      "24/7 Support Team",
      "Customize Dashboard",
      "Priority Support",
    ],
  },
];

function formatPrice(monthly: number, period: Period): string {
  if (monthly === 0) return "$0.00";
  const value = period === "yearly" ? monthly * 10 : monthly;
  return `$${value}`;
}

export function PricingHeroAndTiers() {
  const [period, setPeriod] = React.useState<Period>("yearly");

  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      {/* radial glow blobs (warm accent — princeton-orange/amber) */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 h-[640px] w-[1100px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-princeton-orange), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_70%)]"
      />

      <Container size="xl" className="pt-24 pb-20">
        {/* ── Headline ────────────────────────────────────────── */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-[-0.035em] leading-[1.05] text-fg">
            A Universal Tool For Your Projects
            <br className="hidden sm:block" /> Needs At Your Price Point
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] text-fg-muted leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra.
          </p>

          {/* ── Billing toggle ────────────────────────────────── */}
          <div className="mt-10 inline-flex items-center rounded-full bg-bg-elevated ring-1 ring-border p-1 shadow-soft">
            <button
              type="button"
              onClick={() => setPeriod("monthly")}
              className={[
                "h-10 px-6 rounded-full text-sm font-semibold transition-colors",
                period === "monthly"
                  ? "bg-accent text-accent-fg shadow-soft"
                  : "text-fg-muted hover:text-fg",
              ].join(" ")}
              aria-pressed={period === "monthly"}
            >
              Billing Monthly
            </button>
            <button
              type="button"
              onClick={() => setPeriod("yearly")}
              className={[
                "h-10 px-6 rounded-full text-sm font-semibold transition-colors",
                period === "yearly"
                  ? "bg-accent text-accent-fg shadow-soft"
                  : "text-fg-muted hover:text-fg",
              ].join(" ")}
              aria-pressed={period === "yearly"}
            >
              Billing Yearly
            </button>
          </div>
        </div>

        {/* ── 3-tier cards ───────────────────────────────────── */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TIERS.map((tier) => (
            <TierCard key={tier.name} tier={tier} period={period} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TierCard({ tier, period }: { tier: Tier; period: Period }) {
  const periodLabel = period === "yearly" ? "Per Year" : "Per Month";
  return (
    <div className="rounded-2xl bg-bg-elevated ring-1 ring-border p-7 shadow-card flex flex-col">
      <div className="text-[15px] font-semibold text-fg">{tier.name}</div>

      <div className="mt-6 font-display text-5xl font-bold tracking-[-0.035em] text-fg leading-none">
        {formatPrice(tier.monthly, period)}
      </div>
      <div className="mt-2 text-xs font-medium text-fg-muted">{periodLabel}</div>

      {/* CTA: gradient pill */}
      <a
        href="#"
        className="group relative mt-7 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold text-accent-fg overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, var(--color-accent-400) 0%, var(--color-princeton-orange) 100%)",
        }}
      >
        <span>Get Started</span>
        <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/25 text-accent-fg">
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
            <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </a>

      <div className="mt-7 text-xs font-semibold text-fg">Main features</div>
      <ul className="mt-4 space-y-3">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[13px] text-fg leading-relaxed">
            <span className="mt-[3px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
