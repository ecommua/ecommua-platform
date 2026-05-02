import { Container } from "@/app/_components/ui/container-wrapper";

/** Trust strip — single horizontal row of partner / tech logos. Tight, monochrome, low opacity. */
const PARTNERS = [
  "Aimeos",
  "Payload CMS",
  "Next.js",
  "PostgreSQL",
  "Tailwind",
  "Lexical",
  "Stripe",
  "SePay",
];

export function HomeTrustStripSection() {
  return (
    <section className="bg-bg py-10 sm:py-14 border-y border-border">
      <Container size="xl">
        <p className="text-center text-[11px] font-mono uppercase tracking-[0.22em] text-fg-muted/60">
          Stack quen thuộc · Builder Việt đang chạy thật
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
          {PARTNERS.map((p) => (
            <span
              key={p}
              className="font-display text-[15px] font-semibold tracking-tight text-fg-muted/70 grayscale opacity-80 hover:opacity-100 transition-opacity"
            >
              {p}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
