/**
 * "Supercharge Your Success" CTA band — pricing-page footer CTA above shared
 * site footer. Layout-matched to ref/pricing/full.png section 04.
 *
 * Composition:
 *   - centered headline (display, 4xl-5xl) + small subhead.
 *   - gradient pill CTA "Get Started" with chevron-disc.
 *   - dashboard mockup card (rounded, ring, shadow-lift) below CTA.
 *     Mockup is a stylised SVG/HTML composition (no real dashboard ref);
 *     we keep it light: sidebar + 4 stat tiles + 2 chart tiles.
 *   - radial accent glow behind headline.
 */

import { Container } from "../../ui/container-wrapper";

export function PricingSuperchargeCtaBand() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-24 -z-10 h-[520px] w-[1100px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-princeton-orange), transparent 70%)",
        }}
      />

      <Container size="xl" className="pt-24 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-[1.1] text-fg">
            Supercharge Your Success - Get
            <br className="hidden sm:block" /> Started With A Free Trial
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] text-fg-muted leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold text-accent-fg shadow-soft"
            style={{
              background:
                "linear-gradient(90deg, var(--color-accent-400) 0%, var(--color-princeton-orange) 100%)",
            }}
          >
            Get Started
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/25">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* dashboard mockup */}
        <div className="mt-14 mx-auto max-w-5xl rounded-2xl ring-1 ring-border bg-bg-elevated shadow-lift overflow-hidden">
          <div className="grid grid-cols-[180px_1fr] min-h-[360px]">
            {/* Sidebar */}
            <aside className="bg-bg-muted border-r border-border p-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="inline-block h-5 w-5 rounded-md" style={{ background: "var(--color-princeton-orange)" }} />
                <span className="font-display text-sm font-bold tracking-tight text-fg">CORONET</span>
              </div>
              <div className="h-7 rounded-md bg-bg ring-1 ring-border" />
              <div className="space-y-1.5">
                <div className="h-7 rounded-md bg-accent/15 px-2 flex items-center text-[11px] font-semibold text-accent">Dashboard</div>
                {["All pages", "Reports", "Products", "Task"].map((l) => (
                  <div key={l} className="h-7 rounded-md px-2 flex items-center text-[11px] text-fg-muted">{l}</div>
                ))}
              </div>
              <div className="mt-auto space-y-1.5">
                {["Settings", "Template pages"].map((l) => (
                  <div key={l} className="h-7 rounded-md px-2 flex items-center text-[11px] text-fg-muted">{l}</div>
                ))}
                <div className="mt-3 h-9 rounded-md bg-accent text-accent-fg flex items-center justify-center text-[11px] font-semibold">
                  Get template
                </div>
              </div>
            </aside>

            {/* Main */}
            <div className="p-5 space-y-4">
              <div>
                <div className="text-[13px] font-semibold text-fg">Welcome back, John</div>
                <div className="text-[10px] text-fg-muted">Measure your advertising ROI and report website news</div>
              </div>

              {/* stat tiles */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { k: "Happiness", v: "50.8K", d: "+12%" },
                  { k: "Monthly users", v: "23.6K", d: "+8%" },
                  { k: "New sign-ups", v: "756", d: "+5%" },
                  { k: "Subscriptions", v: "2.3K", d: "+3%" },
                ].map((s) => (
                  <div key={s.k} className="rounded-lg bg-bg ring-1 ring-border p-3">
                    <div className="text-[10px] text-fg-muted">{s.k}</div>
                    <div className="mt-1 font-display text-base font-bold tracking-tight text-fg">{s.v}</div>
                    <div className="mt-1 inline-block rounded-sm bg-accent/15 px-1 text-[9px] font-semibold text-accent">{s.d}</div>
                  </div>
                ))}
              </div>

              {/* charts */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-bg ring-1 ring-border p-3">
                  <div className="text-[10px] text-fg-muted">Total revenue</div>
                  <div className="font-display text-lg font-bold tracking-tight text-fg">$240.8K</div>
                  <svg viewBox="0 0 200 60" className="mt-2 w-full h-14" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-princeton-orange)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="var(--color-princeton-orange)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 50 Q 30 30 50 35 T 100 25 T 150 30 T 200 18 L 200 60 L 0 60 Z" fill="url(#g1)" />
                    <path d="M0 50 Q 30 30 50 35 T 100 25 T 150 30 T 200 18" fill="none" stroke="var(--color-princeton-orange)" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="rounded-lg bg-bg ring-1 ring-border p-3">
                  <div className="text-[10px] text-fg-muted">Top growth</div>
                  <div className="font-display text-lg font-bold tracking-tight text-fg">$144.6K</div>
                  <div className="mt-2 flex items-end gap-1 h-14">
                    {[40, 60, 35, 75, 45, 85, 55, 70, 50, 90, 60, 80].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{ height: `${h}%`, background: "var(--color-princeton-orange)" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
