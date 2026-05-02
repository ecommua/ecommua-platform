import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Integrations grid — DARK band (deep-space-blue) with title above and a 4×3 grid of
 * monochrome brand chips inside a rounded inner card. Mimics Comoret integrations layout.
 */

const INTEGRATIONS = [
  "Aimeos",
  "Payload",
  "Next.js",
  "Postgres",
  "Tailwind",
  "Lexical",
  "Stripe",
  "SePay",
  "Cloudflare",
  "Vercel",
  "GitHub",
  "Docker",
];

export function HomeIntegrationsGridSection() {
  return (
    <section className="bg-deep-space-blue py-24 sm:py-28 text-white">
      <Container size="xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3.5 py-1.5 text-[12px] font-mono font-semibold uppercase tracking-wider text-accent">
            Tích hợp
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-[-0.03em] leading-[1.02] text-white">
            Cắm thẳng vào
            <br />
            <span className="text-accent">stack bạn đang dùng.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-white/70">
            SePay cho bank Việt, Stripe cho quốc tế, Cloudflare cho CDN. Không lock-in,
            không middleware bí hiểm — chỉ cần API key.
          </p>
        </div>

        {/* Inner dark card panel */}
        <div className="mt-14 rounded-[32px] bg-white/[0.03] ring-1 ring-white/10 p-6 sm:p-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {INTEGRATIONS.map((name) => (
              <div
                key={name}
                className="aspect-[5/2.4] rounded-2xl bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center hover:bg-white/[0.08] transition-colors"
              >
                <span className="font-display text-[14px] sm:text-[15px] font-semibold tracking-tight text-white/75">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
