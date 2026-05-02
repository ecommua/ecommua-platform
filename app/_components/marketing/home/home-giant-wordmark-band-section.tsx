import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Giant ECOMMUA wordmark band — sits between final-CTA and footer.
 * Faint outline-style super-display text, full-width dark band.
 */
export function HomeGiantWordmarkBandSection() {
  return (
    <section className="relative overflow-hidden bg-deep-space-blue py-20 sm:py-28">
      <Container size="xl">
        <div className="text-center">
          <h2
            aria-label="ECOMMUA"
            className="font-display font-black text-brand-300/15 select-none"
            style={{
              fontSize: "clamp(120px, 18vw, 280px)",
              letterSpacing: "-0.04em",
              lineHeight: 0.85,
            }}
          >
            ECOMMUA
          </h2>
          <p className="mt-6 font-mono text-[12px] sm:text-[13px] uppercase tracking-[0.18em] text-white/50">
            Multi-store SaaS · Open source · Built in Vietnam
          </p>
        </div>
      </Container>
    </section>
  );
}
