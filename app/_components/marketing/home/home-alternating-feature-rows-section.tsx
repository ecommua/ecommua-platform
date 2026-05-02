import Image from "next/image";
import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Alternating feature rows — 3 wide horizontal CARD rows, image+copy alternating.
 * Each row is a single elevated card on bg, NOT pale token boxes. Real screenshots from
 * /hero-tiles/* used as preview imagery (mimics Comoret).
 */

const ROWS = [
  {
    eyebrow: "Multi-store",
    title: "Một tài khoản, mở bao nhiêu store cũng được.",
    body:
      "Mỗi store domain riêng, theme riêng, kho riêng — vẫn dùng chung 1 dashboard. Aimeos site tree thật, không phải mock. Sale Tết của brand A không lẫn vào brand B.",
    image: "/hero-tiles/localhost-3002-vi-themes.png",
    align: "left" as const,
  },
  {
    eyebrow: "Self-host CLI",
    title: "Một lệnh terminal là xong cái store mới.",
    body:
      "bench new-site, bench deploy, bench backup. CLI mượn ý tưởng từ ERPNext — dev nào cũng đọc hiểu trong 5 phút. Chạy trên VPS của bạn, không Vercel, không hoá đơn cuối tháng giật mình.",
    image: "/hero-tiles/localhost-3002-vi-pricing.png",
    align: "right" as const,
  },
  {
    eyebrow: "Component baseline",
    title: "Đổi theme không bao giờ vỡ checkout.",
    body:
      "24 slot lõi giữ nguyên ở mọi theme: header, PDP gallery, cart drawer, payment form. Bạn đổi giao diện cuối tuần, khách thanh toán xong vẫn thấy y chang.",
    image: "/hero-tiles/watch-shop-demo-localhost-3000-vi.png",
    align: "left" as const,
  },
];

export function HomeFeatureGroupBSection() {
  return (
    <section className="bg-bg py-24 sm:py-28">
      <Container size="xl">
        <div className="space-y-6">
          {ROWS.map((r, i) => (
            <div
              key={i}
              className="rounded-[32px] bg-bg-elevated ring-1 ring-border overflow-hidden"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 items-center ${
                  r.align === "right" ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* copy */}
                <div className="p-8 sm:p-12 lg:p-14">
                  <div className="inline-flex items-center gap-2 rounded-full bg-bg ring-1 ring-border px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-brand">
                    {r.eyebrow}
                  </div>
                  <h3 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-[-0.025em] leading-[1.06] text-fg">
                    {r.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-relaxed text-fg-muted max-w-md">
                    {r.body}
                  </p>
                </div>
                {/* image */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px] bg-bg-muted overflow-hidden">
                  <Image
                    src={r.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 720px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
