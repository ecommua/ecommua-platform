import Link from "next/link";
import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Feature group A — slice 05 layout:
 *   Heading: "Comprehensive Features To Manage Customers."
 *   3-up grid: [30+ Sections] [Style Guide & Components] [25+ Pages]
 *   below: full-width "Get More Awesome SaaS Templates" CTA card
 */

export function HomeFeatureGroupASection({ locale }: { locale: string }) {
  return (
    <section className="bg-bg py-28">
      <Container size="xl">
        <h2 className="mx-auto max-w-3xl text-center font-display text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-[-0.025em] leading-[1.05] text-fg">
          Tính năng toàn diện để
          <br />
          <span className="text-accent">vận hành cửa hàng.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* 30+ Sections */}
          <div className="rounded-3xl bg-bg-elevated ring-1 ring-border p-7">
            <h3 className="font-display text-2xl font-bold tracking-tight text-fg">30+ Section</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              Hero, PDP, gallery, pricing, checkout. Block-based, hoán đổi không vỡ layout.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="aspect-[4/3] rounded-xl bg-bg-muted ring-1 ring-border" />
              <div className="aspect-[4/3] rounded-xl bg-bg-muted ring-1 ring-border" />
              <div className="aspect-[4/3] rounded-xl bg-brand/20 ring-1 ring-border" />
              <div className="aspect-[4/3] rounded-xl bg-bg-muted ring-1 ring-border" />
            </div>
          </div>

          {/* Style Guide & Components */}
          <div className="rounded-3xl bg-bg-elevated ring-1 ring-border p-7 flex flex-col">
            <div className="flex-1 flex items-center justify-center py-8">
              <div className="relative">
                <div className="absolute -left-6 -top-3 h-32 w-24 rounded-xl bg-fg/10 ring-1 ring-border rotate-[-8deg]" />
                <div className="absolute -left-2 top-1 h-32 w-24 rounded-xl bg-fg/15 ring-1 ring-border rotate-[-3deg]" />
                <div className="relative h-32 w-24 rounded-xl bg-accent text-accent-fg ring-1 ring-border flex items-center justify-center font-mono text-xs">
                  #FB8500
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-fg">
                Style Guide
                <br />& Components
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                24 slot cốt lõi chia sẻ. Đổi theme, không vỡ checkout.
              </p>
            </div>
          </div>

          {/* 25+ Pages */}
          <div className="rounded-3xl bg-bg-elevated ring-1 ring-border p-7">
            <h3 className="font-display text-2xl font-bold tracking-tight text-fg">25+ Trang</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              Home, listing, PDP, cart, checkout, account. Sẵn sàng deploy không thiếu trang nào.
            </p>
            <div className="mt-6 aspect-[4/3] rounded-xl bg-bg-muted ring-1 ring-border overflow-hidden p-3 flex flex-col gap-2">
              <div className="h-3 w-1/3 rounded bg-fg/10" />
              <div className="h-2 w-1/2 rounded bg-fg/10" />
              <div className="mt-1 flex-1 rounded bg-gradient-to-br from-brand/30 to-accent/20" />
              <div className="flex gap-1">
                <div className="h-1.5 w-12 rounded bg-fg/10" />
                <div className="h-1.5 w-8 rounded bg-fg/10" />
                <div className="h-1.5 w-10 rounded bg-fg/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA card */}
        <div className="mt-5 rounded-3xl bg-bg-elevated ring-1 ring-border p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-fg">
              Còn nhiều theme SaaS xịn hơn
            </h3>
            <p className="mt-1 text-sm text-fg-muted">
              Giảm công sức thủ công, tăng hiệu năng team.
            </p>
          </div>
          <Link
            href={`/${locale}/themes`}
            className="self-start sm:self-auto inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-fg hover:bg-accent-strong transition-colors"
          >
            Xem theme
          </Link>
        </div>
      </Container>
    </section>
  );
}
