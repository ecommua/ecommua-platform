import Link from "next/link";
import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Final CTA — theme-aware band (bg-bg) wrapping rounded inner elevated panel with
 * accent radial glow at bottom-center, giant headline, dual CTA pill. Adapts light/dark.
 */

export function HomeFinalCtaSection({ locale }: { locale: string }) {
  return (
    <section className="py-20 sm:py-24 bg-bg">
      <Container size="xl">
        <div className="relative overflow-hidden rounded-[40px] ring-1 ring-border bg-bg-elevated px-8 py-24 sm:py-32">
          {/* radial glow — accent lime, visible on both light + dark */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[120%]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 80%, var(--orange) 0%, transparent 70%)",
            }}
          />
          {/* subtle top sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fg/20 to-transparent"
          />

          <div className="relative text-center">
            <h2 className="mx-auto max-w-3xl font-display text-5xl sm:text-6xl lg:text-[80px] font-bold tracking-[-0.03em] leading-[1.02] text-fg">
              Mở cửa hàng đầu tiên
              <br />
              <span className="text-accent">trong tuần này.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-fg-muted">
              Tải về, chạy lệnh, gắn domain. Dữ liệu của bạn, server của bạn. Không phí ẩn, không bị khóa.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/themes`}
                className="inline-flex items-center justify-center rounded-full bg-bg-muted px-7 py-3.5 text-sm font-semibold text-fg ring-1 ring-border hover:bg-bg-muted/80 transition-colors"
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
