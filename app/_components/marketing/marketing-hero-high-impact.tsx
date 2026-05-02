import Link from "next/link";
import { Container } from "../ui/container-wrapper";
import { Badge } from "../ui/badge-primitive";

/**
 * High-impact hero — gradient backdrop with grid overlay, eyebrow tag,
 * outsized display heading, dual CTA. Linear-style polish.
 */

export function MarketingHeroHighImpact({ locale }: { locale: string }) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/30 to-white" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      {/* Brand glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[640px] w-[1100px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, oklch(0.78 0.10 235 / 0.55), transparent 70%)",
        }}
      />

      <Container size="xl" className="relative pt-24 pb-32 sm:pt-32 sm:pb-40 text-center">
        <div className="animate-fade-up">
          {/* Eyebrow */}
          <div className="inline-flex">
            <Badge variant="brand" className="px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-600" />
              </span>
              Theme Marketplace · Beta
            </Badge>
          </div>

          {/* Display heading */}
          <h1 className="mt-7 font-display text-[40px] sm:text-[64px] lg:text-[80px] font-bold tracking-[-0.035em] leading-[1.02] text-fg">
            Theme bán sẵn cho<br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent">
                mọi ngành hàng
              </span>
              <svg className="absolute -bottom-1 left-0 right-0 w-full h-3 text-brand-300/60" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" aria-hidden>
                <path d="M2 8 Q50 2 100 6 T 198 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Sub */}
          <p className="mx-auto mt-7 max-w-xl text-lg text-fg-muted leading-relaxed">
            Cài 5 phút, ship hàng được ngay. Self-host CLI — code của bạn, không phụ thuộc Vercel,
            multi-tenant từ ngày đầu.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={`/${locale}/themes`}
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-fg hover:bg-bg-elevated px-6 text-[15px] font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5"
            >
              Khám phá theme
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/pricing`}
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-white ring-1 ring-border hover:ring-border px-6 text-[15px] font-semibold text-fg shadow-soft transition-all"
            >
              Xem bảng giá
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 text-sm text-fg-muted">
            <span className="inline-flex items-center gap-2">
              <svg className="h-4 w-4 text-[#22C55E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              One-time purchase
            </span>
            <span className="hidden sm:inline text-fg-muted">·</span>
            <span className="inline-flex items-center gap-2">
              <svg className="h-4 w-4 text-[#22C55E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Self-host CLI
            </span>
            <span className="hidden sm:inline text-fg-muted">·</span>
            <span className="inline-flex items-center gap-2">
              <svg className="h-4 w-4 text-[#22C55E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Mã nguồn của bạn
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
