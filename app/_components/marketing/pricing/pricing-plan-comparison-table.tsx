/**
 * Plan comparison table — feature rows × 3 tier columns, grouped headers.
 * Layout-matched to ref/pricing/full.png (section 03).
 *
 * Structure (per ref):
 *   - "Plan Comparison" heading + 2-line subhead, centered.
 *   - Table:
 *       row 1 (header):   [Feature/Plan] [Basic Plan] [Business Plan] [Creator's Plan]
 *                         right cells show "X Plans" caption under col label
 *       group header bands (full-width tinted): "AI Bot Feature",
 *                         "Code Analysis", "Integration & Support"
 *       feature rows: 4 features per group, with check / dash (—) marks
 *   - Cols 2/3/4 are equal width (~210px in ref); col 1 wider (label).
 *   - Borders: thin top/bottom dividers between rows.
 *   - Checkmarks: fg color (small SVG), dashes: muted "—".
 */

import { Container } from "../../ui/container-wrapper";

type Cell = boolean; // true = check, false = dash

interface FeatureRow {
  label: string;
  basic: Cell;
  business: Cell;
  creator: Cell;
}

interface Group {
  title: string;
  rows: FeatureRow[];
}

const ALL = { basic: true, business: true, creator: true } as const;
const BC  = { basic: false, business: true, creator: true } as const;

const GROUPS: Group[] = [
  {
    title: "AI Bot Feature",
    rows: [
      { label: "Generative Code", ...ALL },
      { label: "Bug Detection", ...ALL },
      { label: "Natural Language Processing", ...BC },
      { label: "Automation In Code", ...BC },
      { label: "Analytics & Reporting", ...BC },
    ],
  },
  {
    title: "Code Analysis",
    rows: [
      { label: "Customizations", ...ALL },
      { label: "Real-Time Chat", ...ALL },
      { label: "Natural Language Processing", ...BC },
      { label: "Shared Communications", ...BC },
      { label: "Analytics & Reporting", ...BC },
    ],
  },
  {
    title: "Integration & Support",
    rows: [
      { label: "API Access", ...ALL },
      { label: "CRM Integration", ...ALL },
      { label: "Onboarding Assistance", ...BC },
      { label: "Compliance Support", ...BC },
      { label: "Analytics & Reporting", ...BC },
    ],
  },
];

const COLS = [
  { name: "Basic Plan", caption: "5 Plans", key: "basic" as const },
  { name: "Business Plan", caption: "10 Plans", key: "business" as const },
  { name: "Creator's Plan", caption: "12 Plans", key: "creator" as const },
];

export function PricingPlanComparisonTable() {
  return (
    <section className="relative bg-bg">
      <Container size="xl" className="py-24">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-fg">
            Plan Comparison
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] text-fg-muted leading-relaxed">
            Get an answered and helps you make decisions that are captivating,
            create friendly content that resonates with your audience.
          </p>
        </div>

        {/* table */}
        <div className="mx-auto max-w-5xl rounded-2xl ring-1 ring-border overflow-hidden bg-bg-elevated">
          {/* column header */}
          <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] items-end gap-0 px-6 sm:px-8 pt-6 pb-5 border-b border-border">
            <div className="text-[13px] font-semibold text-fg-muted">
              Feature/Plan
            </div>
            {COLS.map((c) => (
              <div key={c.key} className="text-center">
                <div className="text-[13px] font-semibold text-fg">{c.name}</div>
                <div className="mt-0.5 text-[11px] text-fg-muted">{c.caption}</div>
              </div>
            ))}
          </div>

          {/* groups */}
          {GROUPS.map((group) => (
            <div key={group.title}>
              {/* group band */}
              <div className="px-6 sm:px-8 py-3 bg-bg-muted text-center">
                <span className="text-[13px] font-semibold tracking-tight text-fg">
                  {group.title}
                </span>
              </div>
              {/* rows */}
              {group.rows.map((row, idx) => (
                <div
                  key={row.label}
                  className={[
                    "grid grid-cols-[1.6fr_1fr_1fr_1fr] items-center px-6 sm:px-8 py-3.5",
                    idx !== group.rows.length - 1 ? "border-b border-border/70" : "",
                  ].join(" ")}
                >
                  <div className="text-[13.5px] text-fg">{row.label}</div>
                  {COLS.map((c) => (
                    <div key={c.key} className="flex justify-center">
                      <CellMark on={row[c.key]} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CellMark({ on }: { on: boolean }) {
  if (!on) {
    return <span className="text-fg-muted/60 text-base leading-none">—</span>;
  }
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}
