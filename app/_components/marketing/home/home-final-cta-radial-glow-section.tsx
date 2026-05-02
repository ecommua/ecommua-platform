import Link from "next/link";
import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Final CTA — DARK band (deep-space-blue) wrapping a large rounded inner panel with
 * radial amber glow at bottom-center, giant headline, dual CTA pill.
 */

export function HomeFinalCtaSection({ locale }: { locale: string }) {
  return (
    <section className="bg-deep-space-blue py-20 sm:py-24">
      <Container size="xl">
        <div className="relative overflow-hidden rounded-[40px] bg-white/[0.03] ring-1 ring-white/10 px-8 py-24 sm:py-32">
          {/* radial glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[120%]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 80%, rgb(232 116 59 / 0.55) 0%, rgb(241 160 113 / 0.22) 35%, transparent 70%)",
            }}
          />
          {/* subtle top sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />

          <div className="relative text-center">
            <h2 className="mx-auto max-w-3xl font-display text-5xl sm:text-6xl lg:text-[80px] font-bold tracking-[-0.03em] leading-[1.02] text-white">
              Lên store đầu tiên
              <br />
              <span className="text-accent">trong tuần này.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-white/70">
              Tải về, chạy lệnh, cắm domain. Dữ liệu của bạn, server của bạn. Không phí ẩn, không bị khoá.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/themes`}
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition-colors"
              >
                Xem theme
              </Link>
              <Link
                href={`/${locale}/pricing`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-fg shadow-lift"
              >
                Trải nghiệm ngay
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
