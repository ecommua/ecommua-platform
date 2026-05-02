import Link from "next/link";
import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Hero — layout-match Comoret ref (slice 01):
 *   - centered display headline (~80px)
 *   - centered subhead, max ~520px wide
 *   - amber CTA pill ("Bắt đầu")
 *   - 5-up grid of page-mockup tiles below the CTA
 *
 * Tokens only — bg/fg/brand/accent. Light + dark both work.
 */

const MOCKUP_TILES = [
  { label: "Insight & Blogs", aspect: "aspect-[3/4]" },
  { label: "Sales", aspect: "aspect-[3/4]" },
  { label: "Insight & Blogs", aspect: "aspect-[3/4]" },
  { label: "Insight & Blogs", aspect: "aspect-[3/4]" },
  { label: "Insight & Blogs", aspect: "aspect-[3/4]" },
];

export function HomeHeroSection({ locale }: { locale: string }) {
  return (
    <section className="relative overflow-hidden bg-bg pt-24 pb-32">
      {/* radial glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[820px] -z-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 20%, rgb(33 158 188 / 0.18) 0%, transparent 70%)",
        }}
      />
      <Container size="xl" className="relative">
        {/* eyebrow + heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-[56px] sm:text-[68px] lg:text-[76px] font-bold tracking-[-0.025em] leading-[1.04] text-fg">
            Ecommua Multi-store
            <br />
            UI Template
          </h1>
          <p className="mt-6 mx-auto max-w-md text-[15px] leading-relaxed text-fg-muted">
            Theme premium ship sẵn cho merchant Việt Nam. Self-host CLI bench-style,
            multi-tenant từ ngày đầu, mã nguồn mở.
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              href={`/${locale}/themes`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[14px] font-semibold text-accent-fg shadow-lift"
            >
              Bắt đầu
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* mockup tiles */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {MOCKUP_TILES.map((tile, i) => (
            <div
              key={i}
              className={`${tile.aspect} rounded-2xl bg-bg-elevated ring-1 ring-border overflow-hidden relative`}
            >
              {/* fake page mockup contents */}
              <div className="absolute inset-0 p-3 flex flex-col gap-2">
                <div className="h-3 w-2/3 rounded bg-fg/10" />
                <div className="h-2 w-1/2 rounded bg-fg/10" />
                <div className="mt-2 grid grid-cols-2 gap-1.5 flex-1">
                  <div className="rounded bg-fg/10" />
                  <div className="rounded bg-brand/30" />
                  <div className="rounded bg-accent/30" />
                  <div className="rounded bg-fg/10" />
                </div>
                <div className="h-1.5 w-3/4 rounded bg-fg/10" />
                <div className="h-1.5 w-1/2 rounded bg-fg/10" />
              </div>
              <span className="absolute bottom-2 left-2 right-2 text-[9px] font-mono uppercase tracking-wider text-fg-muted truncate">
                {tile.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
