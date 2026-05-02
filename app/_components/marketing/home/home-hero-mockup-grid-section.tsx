import Link from "next/link";
import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Hero — Comoret-faithful layout:
 *   - centered display headline + sub + amber CTA
 *   - background = TILTED (-14deg) plane with 3 horizontal rows of UI mockup tiles
 *     scrolling at different speeds (CSS marquee, GPU transform-only)
 *   - middle row goes opposite direction → parallax feel
 *   - pause on hover, respect prefers-reduced-motion (handled in globals.css)
 *
 * No JS animation lib. Tiles are token-built fake page mockups.
 */

// Each tile is a tiny page-mockup card. Variants give the wall texture variety.
type TileKind = "dashboard" | "blog" | "pricing" | "pdp" | "checkout" | "stat";

const ROW_A: TileKind[] = ["dashboard", "blog", "pricing", "pdp", "checkout", "stat", "blog", "dashboard"];
const ROW_B: TileKind[] = ["pdp", "stat", "checkout", "blog", "dashboard", "pricing", "stat", "pdp"];
const ROW_C: TileKind[] = ["blog", "pricing", "dashboard", "stat", "pdp", "checkout", "dashboard", "blog"];

function Tile({ kind }: { kind: TileKind }) {
  return (
    <div className="mx-3 h-[280px] w-[210px] shrink-0 rounded-2xl bg-bg-elevated ring-1 ring-border overflow-hidden p-3 flex flex-col gap-2 shadow-lift">
      {kind === "dashboard" && (
        <>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-fg/20" />
            <div className="h-2 w-2 rounded-full bg-fg/20" />
            <div className="h-2 w-2 rounded-full bg-fg/20" />
          </div>
          <div className="h-3 w-2/3 rounded bg-fg/15 mt-1" />
          <div className="h-2 w-1/3 rounded bg-fg/10" />
          <div className="mt-1 grid grid-cols-3 gap-1.5 flex-1">
            <div className="rounded-md bg-brand/30" />
            <div className="rounded-md bg-fg/10" />
            <div className="rounded-md bg-accent/30" />
            <div className="rounded-md bg-fg/10" />
            <div className="rounded-md bg-brand/40" />
            <div className="rounded-md bg-fg/10" />
          </div>
          <div className="h-1.5 w-1/2 rounded bg-fg/10" />
        </>
      )}
      {kind === "blog" && (
        <>
          <div className="h-3 w-1/2 rounded bg-fg/15" />
          <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-brand/30 to-accent/20" />
          <div className="h-2 w-3/4 rounded bg-fg/15 mt-1" />
          <div className="h-1.5 w-2/3 rounded bg-fg/10" />
          <div className="h-1.5 w-1/2 rounded bg-fg/10" />
          <div className="mt-auto h-1.5 w-1/3 rounded bg-accent/40" />
        </>
      )}
      {kind === "pricing" && (
        <>
          <div className="h-2.5 w-1/2 rounded bg-fg/15 mx-auto" />
          <div className="grid grid-cols-3 gap-1.5 flex-1 mt-2">
            <div className="rounded-md bg-fg/10 flex flex-col gap-1 p-1.5">
              <div className="h-1.5 w-2/3 rounded bg-fg/20" />
              <div className="h-3 w-1/2 rounded bg-fg/30 mt-1" />
            </div>
            <div className="rounded-md bg-brand/30 flex flex-col gap-1 p-1.5">
              <div className="h-1.5 w-2/3 rounded bg-fg/30" />
              <div className="h-3 w-1/2 rounded bg-fg/40 mt-1" />
            </div>
            <div className="rounded-md bg-fg/10 flex flex-col gap-1 p-1.5">
              <div className="h-1.5 w-2/3 rounded bg-fg/20" />
              <div className="h-3 w-1/2 rounded bg-fg/30 mt-1" />
            </div>
          </div>
        </>
      )}
      {kind === "pdp" && (
        <>
          <div className="aspect-square rounded-md bg-gradient-to-tr from-accent/40 via-brand/30 to-fg/10" />
          <div className="h-2.5 w-3/4 rounded bg-fg/20 mt-1" />
          <div className="h-2 w-1/3 rounded bg-fg/10" />
          <div className="mt-auto h-6 rounded-md bg-accent/60" />
        </>
      )}
      {kind === "checkout" && (
        <>
          <div className="h-2.5 w-1/2 rounded bg-fg/15" />
          <div className="h-1.5 w-1/3 rounded bg-fg/10" />
          <div className="h-5 w-full rounded bg-fg/10 mt-1" />
          <div className="h-5 w-full rounded bg-fg/10" />
          <div className="h-5 w-2/3 rounded bg-fg/10" />
          <div className="mt-auto h-7 rounded-md bg-accent/60" />
        </>
      )}
      {kind === "stat" && (
        <>
          <div className="h-2 w-1/2 rounded bg-fg/10" />
          <div className="font-display text-3xl font-bold tracking-tight text-brand mt-1">98%</div>
          <div className="h-1.5 w-2/3 rounded bg-fg/15" />
          <div className="h-1.5 w-1/2 rounded bg-fg/10" />
          <div className="mt-auto grid grid-cols-4 gap-1 h-10">
            <div className="rounded bg-brand/20 self-end h-1/3" />
            <div className="rounded bg-brand/30 self-end h-2/3" />
            <div className="rounded bg-brand/40 self-end h-1/2" />
            <div className="rounded bg-brand/60 self-end h-full" />
          </div>
        </>
      )}
    </div>
  );
}

function MarqueeRow({
  tiles,
  direction,
  slow,
}: {
  tiles: TileKind[];
  direction: "left" | "right";
  slow?: boolean;
}) {
  // double the tiles so the loop is seamless
  const doubled = [...tiles, ...tiles];
  return (
    <div
      className={`hero-row ${direction === "left" ? "hero-row-left" : "hero-row-right"} ${slow ? "hero-row-slow" : ""}`}
    >
      {doubled.map((kind, i) => (
        <Tile key={i} kind={kind} />
      ))}
    </div>
  );
}

export function HomeHeroSection({ locale }: { locale: string }) {
  return (
    <section className="relative overflow-hidden bg-bg pt-24 pb-32">
      {/* radial spotlight behind copy */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[820px] -z-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 25%, rgb(33 158 188 / 0.18) 0%, transparent 70%)",
        }}
      />

      {/* tilted scrolling tile wall — sits BEHIND the headline */}
      <div
        aria-hidden
        className="hero-stage pointer-events-none absolute inset-0 -z-0 flex flex-col justify-center gap-6 opacity-50 dark:opacity-40"
        style={{ transform: "rotate(-14deg) scale(1.35) translateY(8%)", transformOrigin: "center" }}
      >
        <MarqueeRow tiles={ROW_A} direction="left" />
        <MarqueeRow tiles={ROW_B} direction="right" />
        <MarqueeRow tiles={ROW_C} direction="left" slow />
      </div>

      {/* fade overlay so headline reads cleanly */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 38%, var(--color-bg) 0%, transparent 75%)",
        }}
      />

      <Container size="xl" className="relative">
        <div className="mx-auto max-w-3xl text-center pt-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-bg-elevated/80 backdrop-blur ring-1 ring-border px-3.5 py-1.5 text-[12px] font-mono font-semibold uppercase tracking-wider text-fg-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            v0.1 — open beta cho merchant Việt
          </div>
          <h1 className="mt-7 font-display text-[56px] sm:text-[72px] lg:text-[88px] font-bold tracking-[-0.03em] leading-[0.98] text-fg">
            Mở store nhanh hơn,
            <br />
            <span className="text-accent">không bị khoá tay.</span>
          </h1>
          <p className="mt-7 mx-auto max-w-xl text-[16px] leading-relaxed text-fg-muted">
            Nền tảng thương mại tự host, multi-store thật, theme đẹp ship sẵn. Từ landing đến
            checkout chỉ vài giờ — không phải vài tháng. Code của bạn, server của bạn.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/${locale}/themes`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[14px] font-semibold text-accent-fg shadow-lift"
            >
              Bắt đầu miễn phí
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/pricing`}
              className="inline-flex items-center gap-2 rounded-full bg-bg-elevated/80 backdrop-blur px-6 py-3.5 text-[14px] font-semibold text-fg ring-1 ring-border"
            >
              Xem bảng giá
            </Link>
          </div>
          <p className="mt-6 text-[12px] text-fg-muted/80">
            Mã nguồn mở · Không khoá vendor · Trả 1 lần, dùng mãi
          </p>
        </div>
      </Container>
    </section>
  );
}
