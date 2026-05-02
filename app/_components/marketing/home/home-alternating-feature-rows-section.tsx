import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Feature group B — alternating image+copy rows (3 features).
 */

const ROWS = [
  {
    eyebrow: "Multi-store",
    title: "1 vendor, N cửa hàng",
    body:
      "Aimeos site tree thật. Mỗi store có domain riêng, theme riêng, content riêng. Không phải simulate — kiến trúc multi-tenant từ ngày đầu.",
    align: "left" as const,
  },
  {
    eyebrow: "Self-host CLI",
    title: "bench new-site, deploy, backup",
    body:
      "CLI bench-style mượn từ ERPNext. Chạy trên VPS của bạn. Không Vercel, không vendor lock-in. Source code đầy đủ ngay phút đầu.",
    align: "right" as const,
  },
  {
    eyebrow: "Component baseline",
    title: "24 slot cốt lõi chia sẻ",
    body:
      "Mỗi theme tuân thủ 24 slot baseline: Header, PDP gallery, cart drawer, checkout. Đổi theme bất kỳ lúc nào — checkout không bao giờ vỡ.",
    align: "left" as const,
  },
];

export function HomeFeatureGroupBSection() {
  return (
    <section className="bg-bg py-28">
      <Container size="xl">
        <div className="space-y-24">
          {ROWS.map((r, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                r.align === "right" ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-bg-muted ring-1 ring-border px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-brand">
                  {r.eyebrow}
                </div>
                <h3 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.025em] leading-[1.08] text-fg">
                  {r.title}
                </h3>
                <p className="mt-5 text-[15px] leading-relaxed text-fg-muted max-w-md">
                  {r.body}
                </p>
              </div>
              <div className="aspect-[4/3] rounded-3xl bg-bg-elevated ring-1 ring-border overflow-hidden p-6 flex flex-col gap-3">
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-fg/20" />
                  <div className="h-2 w-2 rounded-full bg-fg/20" />
                  <div className="h-2 w-2 rounded-full bg-fg/20" />
                </div>
                <div className="h-3 w-1/3 rounded bg-fg/10" />
                <div className="grid grid-cols-3 gap-2 flex-1">
                  <div className="rounded-xl bg-brand/20" />
                  <div className="rounded-xl bg-accent/20" />
                  <div className="rounded-xl bg-fg/10" />
                  <div className="rounded-xl bg-fg/10" />
                  <div className="rounded-xl bg-brand/30" />
                  <div className="rounded-xl bg-fg/10" />
                </div>
                <div className="h-2 w-1/2 rounded bg-fg/10" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
