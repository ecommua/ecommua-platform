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
    <section className="bg-deep-space-blue py-24 sm:py-28 text-white">
      <Container size="xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] ring-1 ring-white/15 px-3.5 py-1.5 text-[12px] font-mono font-semibold uppercase tracking-wider text-brand">
            Tính năng
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-[-0.03em] leading-[1.02] text-white">
            Giải pháp chuyên sâu cho
            <br />
            <span className="text-accent">hoạt động thương mại thực thụ.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-white/70">
            Kiến trúc cấu hình linh hoạt. Từng khối chức năng đều được kiểm định khắt khe
            ở quy mô Production với hiệu suất cao nhất.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* 30+ Section — grid of theme thumbnails */}
          <div className="rounded-3xl bg-[#0a3d57] ring-1 ring-white/8 shadow-soft p-7">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">Cấu trúc Module</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Xây dựng trải nghiệm trọn vẹn thông qua hệ thống Block đa năng. Mọi thứ được đồng bộ mà không phá vỡ Layout.
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
                  className="aspect-[4/3] rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden relative"
                >
                  <Image src={src} alt="" fill sizes="180px" className="object-cover object-top" />
                </div>
              ))}
            </div>
          </div>

          {/* Style Guide — token swatches + component preview */}
          <div className="rounded-3xl bg-[#0a3d57] ring-1 ring-white/8 shadow-soft p-7 flex flex-col">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">Style guide & component</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Hệ thống Token chia các layer mạch lạc giúp thay đổi nhận diện mà không ảnh hưởng toàn hệ thống.
            </p>
            <div className="mt-6 aspect-[4/3] rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden relative">
              <Image
                src="/hero-tiles/localhost-3002-vi-themes-luxury.png"
                alt=""
                fill
                sizes="380px"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              {[
                "var(--color-deep-space-blue)",
                "var(--color-blue-green)",
                "var(--color-sky-blue-light)",
                "var(--color-amber-flame)",
                "var(--color-princeton-orange)",
              ].map((c, i) => (
                <span
                  key={i}
                  className="h-6 flex-1 rounded-md ring-1 ring-border"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* 25+ Trang — tall single preview */}
          <div className="rounded-3xl bg-[#0a3d57] ring-1 ring-white/8 shadow-soft p-7">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">Trải nghiệm toàn diện</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Chuẩn hóa quy trình thương mại điện tử với hệ thống trang chuẩn SEO tối ưu chuyên sâu.
            </p>
            <div className="mt-6 aspect-[4/3] rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden relative">
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
        <div className="mt-5 rounded-3xl bg-white/[0.06] ring-1 ring-white/15 p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">
              Khám phá Thư viện Giao diện
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Mỗi bộ giao diện được tích hợp tối ưu chuẩn UI/UX quốc tế. Sẵn sàng sử dụng tức thì.
            </p>
          </div>
          <Link
            href={`/${locale}/themes`}
            className="self-start sm:self-auto inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-fg"
          >
            Đến danh mục Giao diện
          </Link>
        </div>
      </Container>
    </section>
  );
}
