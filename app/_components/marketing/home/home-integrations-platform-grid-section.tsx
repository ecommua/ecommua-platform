import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Integrations grid — slice 06: centered headline + sub, 12-tile logo wall (3×4 / 4×3 / 6×2).
 * Static. No motion.
 */

const INTEGRATIONS = [
  "Aimeos", "Payload", "Next.js", "Postgres",
  "Tailwind", "Lexical", "Stripe", "SePay",
  "Cloudflare", "Vercel", "GitHub", "Docker",
];

export function HomeIntegrationsGridSection() {
  return (
    <section className="bg-bg-elevated py-28 border-y border-border">
      <Container size="xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-bg ring-1 ring-border px-3.5 py-1.5 text-[12px] font-mono font-semibold uppercase tracking-wider text-brand">
            Tích hợp
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-[-0.03em] leading-[1.02] text-fg">
            Cắm thẳng vào
            <br />
            <span className="text-brand">stack bạn đang dùng.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-fg-muted">
            SePay cho bank Việt, Stripe cho quốc tế, Cloudflare cho CDN. Không lock-in,
            không middleware bí hiểm — chỉ cần API key.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {INTEGRATIONS.map((name) => (
            <div
              key={name}
              className="aspect-[5/3] rounded-2xl bg-bg ring-1 ring-border flex items-center justify-center"
            >
              <span className="font-display text-[15px] font-semibold tracking-tight text-fg-muted">
                {name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
