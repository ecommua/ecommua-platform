import Link from "next/link";
import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * "Comprehensive Features" 3-up — slice 05 layout:
 *   eyebrow + heading + sub
 *   3 cards: [30+ Section] [Style Guide & Components] [25+ Trang]
 *   bottom: full-width CTA card "Còn nhiều theme xịn hơn → Xem theme"
 */

export function HomeFeatureGroupASection({ locale }: { locale: string }) {
  return (
    <section className="bg-bg py-28">
      <Container size="xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-bg-elevated ring-1 ring-border px-3.5 py-1.5 text-[12px] font-mono font-semibold uppercase tracking-wider text-brand">
            Tính năng
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-[-0.03em] leading-[1.02] text-fg">
            Đủ thứ cần để
            <br />
            <span className="text-accent">vận hành nghiêm túc.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-fg-muted">
            Không phải template demo. Từng block đều đã chạy production ở store thật, sửa được,
            ráp được, không lo vỡ checkout.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* 30+ Section */}
          <div className="rounded-3xl bg-bg-elevated ring-1 ring-border p-7">
            <h3 className="font-display text-2xl font-bold tracking-tight text-fg">30+ Section</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              Hero, PDP, gallery, pricing, checkout. Block-based — kéo thả, hoán đổi, không vỡ layout.
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
                Style guide
                <br />& component
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                24 slot lõi dùng chung mọi theme. Đổi giao diện không phải sửa logic.
              </p>
            </div>
          </div>

          {/* 25+ Pages */}
          <div className="rounded-3xl bg-bg-elevated ring-1 ring-border p-7">
            <h3 className="font-display text-2xl font-bold tracking-tight text-fg">25+ Trang</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              Home, listing, PDP, cart, checkout, account, blog, 404. Đầy đủ trang để đi-vào-vận-hành luôn.
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
              Còn nhiều theme đẹp khác đang chờ
            </h3>
            <p className="mt-1 text-sm text-fg-muted">
              Mỗi theme đều ship full trang, full block. Đập hộp là chạy.
            </p>
          </div>
          <Link
            href={`/${locale}/themes`}
            className="self-start sm:self-auto inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-fg"
          >
            Xem theme
          </Link>
        </div>
      </Container>
    </section>
  );
}
