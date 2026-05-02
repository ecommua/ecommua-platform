import { Container } from "@/app/_components/ui/container-wrapper";

/** Big-stat / quote band — large stat number + customer quote. */
export function HomeStatQuoteBandSection() {
  return (
    <section className="bg-bg-elevated py-28 border-y border-border">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          {/* big stat */}
          <div>
            <div className="font-display text-[120px] sm:text-[160px] font-bold tracking-[-0.04em] leading-[0.9] text-brand">
              98%
            </div>
            <p className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-fg max-w-md">
              merchant ship store đầu tiên trong vòng 1 tuần.
            </p>
            <p className="mt-3 text-[15px] text-fg-muted max-w-md">
              Theme ship sẵn + bench CLI + multi-tenant baseline = không phải xây lại.
            </p>
          </div>

          {/* quote */}
          <figure className="rounded-3xl bg-bg ring-1 ring-border p-8 lg:p-10">
            <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M9 7H4v6h3c0 2-1 4-3 4v2c4 0 6-3 6-7V7zm11 0h-5v6h3c0 2-1 4-3 4v2c4 0 6-3 6-7V7z" />
            </svg>
            <blockquote className="mt-5 font-display text-xl sm:text-2xl font-medium tracking-tight leading-snug text-fg">
              &ldquo;Tụi mình chạy 4 store cùng lúc trên 1 vendor. Aimeos site tree
              thật giúp content sale-Tết-2026 không lẫn lộn giữa các brand.&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-brand/30" />
              <div>
                <div className="text-sm font-semibold text-fg">Trần Minh Hà</div>
                <div className="text-xs text-fg-muted">Founder · Hà Nội Watch Co.</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
