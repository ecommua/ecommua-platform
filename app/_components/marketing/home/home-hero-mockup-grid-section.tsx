import Link from "next/link";
import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Hero — Comoret-style dark stage:
 *   - Always-dark hero band (deep navy) with subtle blue-green radial glow
 *   - Big centered display headline + sub + amber→orange gradient CTA
 *   - Bottom half: tilted (-12deg) WALL of real product screenshots,
 *     3 marquee rows scrolling at different speeds
 *
 * No JS animation lib. Uses .hero-row / .hero-stage classes from globals.css.
 */

const TILES = [
  "/hero-tiles/localhost-3002-vi-themes.png",
  "/hero-tiles/localhost-3002-vi-pricing.png",
  "/hero-tiles/localhost-3002-vi-themes-luxury.png",
  "/hero-tiles/localhost-3002-vi-themes-trendy.png",
  "/hero-tiles/localhost-3002-vi-themes-casual.png",
  "/hero-tiles/localhost-3002-vi-blog.png",
  "/hero-tiles/default-demo-localhost-3000-vi.png",
  "/hero-tiles/watch-shop-demo-localhost-3000-vi.png",
  "/hero-tiles/fashion-demo-localhost-3000-vi.png",
  "/hero-tiles/used-phones-demo-localhost-3000-vi.png",
];

const ROW_A = [TILES[0], TILES[6], TILES[1], TILES[7], TILES[2], TILES[8]];
const ROW_B = [TILES[5], TILES[3], TILES[9], TILES[4], TILES[0], TILES[6]];
const ROW_C = [TILES[8], TILES[2], TILES[7], TILES[1], TILES[9], TILES[3]];
const ROW_D = [TILES[1], TILES[5], TILES[6], TILES[0], TILES[4], TILES[2]];

function Tile({ src }: { src: string }) {
  return (
    <div className="mx-2 h-[230px] w-[360px] shrink-0 overflow-hidden rounded-[14px] bg-[#0a1f2e] ring-1 ring-white/10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
    </div>
  );
}

function MarqueeRow({
  tiles,
  direction,
  slow,
}: {
  tiles: string[];
  direction: "left" | "right";
  slow?: boolean;
}) {
  const doubled = [...tiles, ...tiles];
  return (
    <div
      className={`hero-row ${direction === "left" ? "hero-row-left" : "hero-row-right"} ${slow ? "hero-row-slow" : ""}`}
    >
      {doubled.map((src, i) => (
        <Tile key={i} src={src} />
      ))}
    </div>
  );
}

export function HomeHeroSection({ locale }: { locale: string }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-deep-space-blue)" }}
    >
      {/* radial spotlight — blue-green accent, soft */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 22%, rgb(33 158 188 / 0.30) 0%, transparent 65%)",
        }}
      />
      {/* secondary warm glow lower */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[600px]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 100%, rgb(255 183 3 / 0.10) 0%, transparent 70%)",
        }}
      />
      {/* subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container size="xl" className="relative pt-20 pb-6 sm:pt-24 sm:pb-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] backdrop-blur ring-1 ring-white/15 px-3.5 py-1.5 text-[12px] font-mono font-semibold uppercase tracking-wider text-white/70">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-amber-flame)" }} />
            Beta dành riêng cho thị trường Việt
          </div>
          <h1 className="mt-7 font-display text-[44px] sm:text-[64px] lg:text-[80px] font-bold tracking-[-0.03em] leading-[1.02] text-white">
            Khởi tạo siêu tốc,
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--color-amber-flame) 0%, var(--color-princeton-orange) 100%)",
              }}
            >
              mở khoá giới hạn.
            </span>
          </h1>
          <p className="mt-7 mx-auto max-w-xl text-[17px] sm:text-[18px] leading-relaxed text-white/70">
            Nền tảng E-commerce đa điểm chạm (multi-store), tự do lưu trữ (self-host).
            Vận hành chỉ trong vài giờ thay vì vài tháng. Làm chủ mã nguồn, tự do tuỳ chỉnh.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href={`/${locale}/themes`}
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-[14px] font-semibold text-[#1a0e00] shadow-[0_10px_40px_-10px_rgba(255,183,3,0.6)]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--color-amber-flame) 0%, var(--color-princeton-orange) 100%)",
              }}
            >
              Trải nghiệm ngay
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-[12px] text-white/50">
            Dữ liệu độc lập · Cấu trúc tuỳ biến · Triển khai chuẩn quốc tế
          </p>
        </div>
      </Container>

      {/* Tilted mockup wall — fills bottom ~55% of hero */}
      <div className="relative h-[820px] sm:h-[920px] overflow-hidden">
        <div
          aria-hidden
          className="hero-stage absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{
            transform: "rotate(-14deg) scale(1.5)",
            transformOrigin: "center",
          }}
        >
          <MarqueeRow tiles={ROW_A} direction="left" />
          <MarqueeRow tiles={ROW_B} direction="right" />
          <MarqueeRow tiles={ROW_C} direction="left" slow />
          <MarqueeRow tiles={ROW_D} direction="right" />
        </div>
        {/* top fade into hero copy */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-32"
          style={{
            background:
              "linear-gradient(180deg, var(--color-deep-space-blue) 0%, transparent 100%)",
          }}
        />
        {/* bottom fade into next section */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
          style={{
            background:
              "linear-gradient(0deg, var(--color-deep-space-blue) 0%, transparent 100%)",
          }}
        />
        {/* side vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(2,48,71,0.7) 100%)",
          }}
        />
      </div>
    </section>
  );
}
