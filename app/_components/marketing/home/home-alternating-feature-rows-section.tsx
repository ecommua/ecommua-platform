import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Alternating feature rows — 3 deep-dive rows (image left/right alternating).
 * Static, no motion.
 */

const ROWS = [
  {
    eyebrow: "Multi-store",
    title: "Một tài khoản, mở bao nhiêu store cũng được.",
    body:
      "Mỗi store domain riêng, theme riêng, kho riêng — vẫn dùng chung 1 dashboard. Aimeos site tree thật, không phải mock. Sale Tết của brand A không lẫn vào brand B.",
    align: "left" as const,
  },
  {
    eyebrow: "Self-host CLI",
    title: "Một lệnh terminal là xong cái store mới.",
    body:
      "bench new-site, bench deploy, bench backup. CLI mượn ý tưởng từ ERPNext — dev nào cũng đọc hiểu trong 5 phút. Chạy trên VPS của bạn, không Vercel, không hoá đơn cuối tháng giật mình.",
    align: "right" as const,
  },
  {
    eyebrow: "Component baseline",
    title: "Đổi theme không bao giờ vỡ checkout.",
    body:
      "24 slot lõi giữ nguyên ở mọi theme: header, PDP gallery, cart drawer, payment form. Bạn đổi giao diện cuối tuần, khách thanh toán xong vẫn thấy y chang.",
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
                <h3 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.025em] leading-[1.06] text-fg">
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
