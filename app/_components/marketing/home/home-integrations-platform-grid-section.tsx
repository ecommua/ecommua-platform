import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Integrations grid — slice 06: dark band, centered headline, logo tile grid.
 * "Integrations To Platforms That Power Your Business"
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
        <h2 className="mx-auto max-w-3xl text-center font-display text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-[-0.025em] leading-[1.08] text-fg">
          Tích hợp với nền tảng
          <br />
          <span className="text-brand">vận hành kinh doanh.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-center text-[15px] leading-relaxed text-fg-muted">
          Plug-and-play với hệ sinh thái merchant Việt Nam quen thuộc. Không lock-in.
        </p>

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
