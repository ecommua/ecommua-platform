import Link from "next/link";
import Image from "next/image";
import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * "Comprehensive Features" 3-up — bento style mimicking Comoret slice 05:
 *   eyebrow + heading + sub
 *   3 cards: [30+ Section · grid of theme thumbs] [Style Guide · stacked color cards] [25+ Trang · single tall preview]
 *   bottom: full-width CTA card "Còn nhiều theme đẹp khác → Xem theme"
 */

export function HomeFeatureGroupASection({ locale }: { locale: string }) {
  return (
    <section className="bg-bg py-24 sm:py-28">
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

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* 30+ Section — grid of theme thumbnails */}
          <div className="rounded-3xl bg-bg-elevated ring-1 ring-border p-7">
            <h3 className="font-display text-2xl font-bold tracking-tight text-fg">30+ Section</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              Hero, PDP, gallery, pricing, checkout. Block-based — kéo thả, hoán đổi, không vỡ layout.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              {[
                "/hero-tiles/localhost-3002-vi-themes-luxury.png",
                "/hero-tiles/localhost-3002-vi-themes-trendy.png",
                "/hero-tiles/localhost-3002-vi-themes-casual.png",
                "/hero-tiles/fashion-demo-localhost-3000-vi.png",
              ].map((src) => (
                <div
                  key={src}
                  className="aspect-[4/3] rounded-xl bg-bg-muted ring-1 ring-border overflow-hidden relative"
                >
                  <Image src={src} alt="" fill sizes="180px" className="object-cover object-top" />
                </div>
              ))}
            </div>
          </div>

          {/* Style Guide — stacked color tokens */}
          <div className="rounded-3xl bg-bg-elevated ring-1 ring-border p-7 flex flex-col">
            <div className="flex-1 flex items-center justify-center py-10">
              <div className="relative">
                <div className="absolute -left-10 -top-2 h-36 w-28 rounded-2xl bg-fg/10 ring-1 ring-border rotate-[-10deg] shadow-lg" />
                <div className="absolute -left-3 top-2 h-36 w-28 rounded-2xl bg-fg/15 ring-1 ring-border rotate-[-4deg] shadow-lg" />
                <div className="relative h-36 w-28 rounded-2xl bg-accent text-accent-fg ring-1 ring-border flex items-end justify-center pb-3 font-mono text-xs shadow-xl">
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

          {/* 25+ Trang — tall single preview */}
          <div className="rounded-3xl bg-bg-elevated ring-1 ring-border p-7">
            <h3 className="font-display text-2xl font-bold tracking-tight text-fg">25+ Trang</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              Home, listing, PDP, cart, checkout, account, blog, 404. Đầy đủ trang để đi-vào-vận-hành luôn.
            </p>
            <div className="mt-6 aspect-[4/3] rounded-xl bg-bg-muted ring-1 ring-border overflow-hidden relative">
              <Image
                src="/hero-tiles/localhost-3002-vi-pricing.png"
                alt=""
                fill
                sizes="380px"
                className="object-cover object-top"
              />
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
