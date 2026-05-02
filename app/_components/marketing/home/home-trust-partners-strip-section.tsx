import { Container } from "@/app/_components/ui/container-wrapper";

/** Trust strip — single horizontal row of partner / tech logos (slice 03). */
const PARTNERS = ["Aimeos", "Payload CMS", "Next.js", "PostgreSQL", "Tailwind", "Lexical"];

export function HomeTrustStripSection() {
  return (
    <section className="bg-bg py-12 border-y border-border">
      <Container size="xl">
        <p className="text-center text-[12px] font-mono uppercase tracking-[0.2em] text-fg-muted/70">
          Được build trên những công cụ bạn đã quen
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
          {PARTNERS.map((p) => (
            <span
              key={p}
              className="font-display text-[15px] font-semibold tracking-tight text-fg-muted opacity-70"
            >
              {p}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
