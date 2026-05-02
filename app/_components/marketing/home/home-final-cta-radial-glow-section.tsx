import Link from "next/link";
import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Final CTA — slice 16. Big rounded panel with radial glow at bottom-center,
 * giant headline, sub, dual CTA (View Demo white pill + Get started accent pill).
 */

export function HomeFinalCtaSection({ locale }: { locale: string }) {
  return (
    <section className="bg-bg py-28">
      <Container size="xl">
        <div className="relative overflow-hidden rounded-[40px] bg-bg-elevated ring-1 ring-border px-8 py-24 sm:py-32">
          {/* radial glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[120%]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 80%, rgb(251 133 0 / 0.45) 0%, rgb(255 183 3 / 0.2) 35%, transparent 70%)",
            }}
          />

          <div className="relative text-center">
            <h2 className="mx-auto max-w-3xl font-display text-5xl sm:text-6xl lg:text-[80px] font-bold tracking-[-0.03em] leading-[1.02] text-fg">
              Bắt đầu với
              <br />
              <span className="text-accent">Ecommua ngay!</span>
            </h2>
            <p className="mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-fg-muted">
              Self-host SaaS commerce platform. Multi-store, multi-tenant, mã nguồn mở.
              Trả 1 lần, dùng mãi mãi.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/themes`}
                className="inline-flex items-center justify-center rounded-full bg-bg px-7 py-3.5 text-sm font-semibold text-fg ring-1 ring-border"
              >
                Xem demo
              </Link>
              <Link
                href={`/${locale}/pricing`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-fg shadow-lift"
              >
                Bắt đầu
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
