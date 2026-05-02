import Link from "next/link";
import { Container } from "../ui/container-wrapper";

/**
 * Full-width CTA band — dark gradient slab, large display heading,
 * dual buttons. Drops at end of marketing pages above footer.
 */

export function MarketingCtaBand({
  locale,
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  locale: string;
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <Container size="xl" className="py-20">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-16 sm:px-16 sm:py-20 ring-1 ring-slate-900 shadow-lift">
          {/* Glow blobs */}
          <div
            aria-hidden
            className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(closest-side, oklch(0.65 0.18 235 / 0.7), transparent)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(closest-side, oklch(0.78 0.10 200 / 0.55), transparent)" }}
          />
          {/* Grid texture */}
          <div className="absolute inset-0 bg-grid opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.025em] text-white leading-[1.05]">
              {title ?? "Bắt đầu với Ecommua hôm nay."}
            </h2>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              {subtitle ?? "Cài theme 5 phút, ship hàng được ngay. Self-host, mã nguồn của bạn, không khoá cứng platform."}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={primaryHref ?? `/${locale}/themes`}
                className="group inline-flex h-12 items-center gap-2 rounded-xl bg-white text-slate-900 hover:bg-slate-100 px-7 text-[15px] font-semibold shadow-lift transition-all hover:-translate-y-0.5"
              >
                {primaryLabel ?? "Khám phá theme"}
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={secondaryHref ?? `/${locale}/pricing`}
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 ring-1 ring-inset ring-white/20 px-7 text-[15px] font-semibold text-white transition-all"
              >
                {secondaryLabel ?? "Xem bảng giá"}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
