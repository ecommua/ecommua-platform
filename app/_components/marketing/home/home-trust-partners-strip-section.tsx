import { Container } from "@/app/_components/ui/container-wrapper";

/** Trust strip — single horizontal row of partner / tech logos (slice 03). */
const PARTNERS = ["Aimeos", "Payload CMS", "Next.js", "PostgreSQL", "Tailwind", "Lexical"];

export function HomeTrustStripSection() {
  return (
    <section className="bg-bg py-10 border-y border-border">
      <Container size="xl">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
          {PARTNERS.map((p) => (
            <span
              key={p}
              className="font-display text-[15px] font-semibold tracking-tight text-fg-muted opacity-70 hover:opacity-100 transition-opacity"
            >
              {p}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
