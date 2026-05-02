import Link from "next/link";
import { Container } from "../../ui/container-wrapper";

/**
 * Section 05 — full-bleed brand-blue CTA band.
 * Mirrors ref slice 29 (Webflow's "Create and sell custom website templates")
 * but with Ecommua palette: brand blue bg, accent-orange button, white card mockups on right.
 */

export function ThemesCtaBand({ locale }: { locale: string }) {
  return (
    <section className="relative">
      <Container size="xl" className="py-16 lg:py-20">
        <div className="relative overflow-hidden rounded-2xl bg-brand text-brand-fg">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-0">
            {/* Copy */}
            <div className="px-8 py-12 lg:px-14 lg:py-16">
              <h2 className="font-display text-3xl lg:text-[42px] font-bold tracking-[-0.025em] leading-[1.05] max-w-md">
                Tạo và bán theme tuỳ chỉnh trên Ecommua
              </h2>
              <p className="mt-5 text-base lg:text-[15px] leading-relaxed opacity-90 max-w-md">
                Submit theme của bạn vào marketplace, đáp ứng tiêu chuẩn chất lượng Ecommua,
                hoặc khám phá bộ sưu tập theme do designer khắp Việt Nam đóng góp.
              </p>
              <Link
                href={`/${locale}/themes/submit`}
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-accent text-accent-fg hover:bg-accent-strong px-7 text-sm font-semibold transition-all hover:-translate-y-0.5 shadow-lift"
              >
                Get started
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mockup stack */}
            <div className="relative min-h-[280px] lg:min-h-[360px] overflow-hidden">
              {/* Three stacked white "preview" cards, layered */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="relative w-full max-w-lg aspect-[5/3]">
                  <MockCard className="absolute left-0 top-6 w-[60%] aspect-[4/3] rotate-[-4deg]" tone="warm" />
                  <MockCard className="absolute right-0 top-0 w-[55%] aspect-[3/4] rotate-[3deg]" tone="cool" />
                  <MockCard className="absolute left-1/2 bottom-0 w-[50%] aspect-[4/3] -translate-x-1/2 rotate-[-1deg]" tone="neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MockCard({ className, tone }: { className?: string; tone: "warm" | "cool" | "neutral" }) {
  const tones = {
    warm: "from-amber-100 via-orange-50 to-white",
    cool: "from-sky-100 via-white to-sky-50",
    neutral: "from-white via-slate-50 to-white",
  } as const;
  return (
    <div className={`${className} rounded-lg bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden`}>
      <div className="h-3 bg-slate-100 flex items-center gap-1 px-2">
        <span className="h-1 w-1 rounded-full bg-slate-300" />
        <span className="h-1 w-1 rounded-full bg-slate-300" />
        <span className="h-1 w-1 rounded-full bg-slate-300" />
      </div>
      <div className={`flex-1 h-[calc(100%-12px)] bg-gradient-to-br ${tones[tone]} p-3 flex flex-col gap-1.5`}>
        <div className="h-2 w-2/3 rounded-sm bg-slate-300/60" />
        <div className="h-1.5 w-1/2 rounded-sm bg-slate-200/80" />
        <div className="mt-auto grid grid-cols-3 gap-1">
          <div className="h-4 rounded-sm bg-slate-200/70" />
          <div className="h-4 rounded-sm bg-slate-200/70" />
          <div className="h-4 rounded-sm bg-slate-200/70" />
        </div>
      </div>
    </div>
  );
}
