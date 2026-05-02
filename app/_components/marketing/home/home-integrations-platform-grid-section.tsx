import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Integrations grid — DARK band with 4×4 grid of REAL brand glyphs (monochrome SVG)
 * + brand name in mono caps. Mimics Comoret integrations slice.
 */

type Integration = { name: string; glyph: React.ReactNode };

// Monochrome SVG glyphs — currentColor inherits text-white/70.
const G = {
  aimeos: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2 2 22h4l1.6-3.5h8.8L18 22h4L12 2zm-2.7 12.5L12 8.5l2.7 6h-5.4z" />
    </svg>
  ),
  payload: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M11 2 3 7v10l8 5V12L19 7l-8-5z" opacity=".7" />
      <path d="M13 22V12l8-5v10l-8 5z" />
    </svg>
  ),
  next: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 1 0 5.6 18.3L7.5 7v9.5h-2V5h2.5l8.7 11.7A10 10 0 0 0 12 2zm3.5 12.6V5h2v12.2l-2-2.6z" />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  ),
  bun: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <ellipse cx="12" cy="13" rx="10" ry="8" />
      <circle cx="9" cy="12" r="1.2" fill="#0a1f2e" />
      <circle cx="15" cy="12" r="1.2" fill="#0a1f2e" />
      <path d="M10 15.5c.6.8 1.3 1.2 2 1.2s1.4-.4 2-1.2" stroke="#0a1f2e" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  ),
  hono: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2c-1 4-6 7-6 12a6 6 0 0 0 12 0c0-2-1-3-2-4 0 2-1 3-2 3 0-3-1-6-2-11z" />
    </svg>
  ),
  postgres: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  redis: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M2 7l10-4 10 4-10 4L2 7z" />
      <path d="M2 12l10 4 10-4" opacity=".55" />
      <path d="M2 17l10 4 10-4" opacity=".35" />
    </svg>
  ),
  s3: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2 3 6v12l9 4 9-4V6l-9-4zm0 2.3 6.5 2.9L12 10 5.5 7.2 12 4.3zM5 8.7l6 2.7v8.3L5 17V8.7zm14 0V17l-6 2.7v-8.3l6-2.7z" />
    </svg>
  ),
  stripe: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13 9.5c0-.7.6-1 1.5-1 1.3 0 3 .4 4.3 1.1V5.7C17.4 5.2 16 5 14.5 5 11 5 8.5 6.8 8.5 9.7c0 4.6 6.4 3.9 6.4 5.9 0 .8-.7 1.1-1.7 1.1-1.5 0-3.4-.6-4.8-1.4v3.9c1.6.7 3.2.9 4.8.9 3.6 0 6.2-1.7 6.2-4.7 0-5-6.4-4.1-6.4-5.9z" />
    </svg>
  ),
  sepay: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="14" y="14" width="2" height="2" />
      <rect x="18" y="14" width="2" height="2" />
      <rect x="14" y="18" width="6" height="2" />
    </svg>
  ),
  lexical: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 4h16v3H4zM4 10h11v3H4zM4 16h16v3H4z" />
    </svg>
  ),
  ckeditor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M16 9a4 4 0 1 0 0 6" strokeLinecap="round" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 4c-3 0-5 1.5-6 4.5 1.5-2 3.2-2.7 5.2-2.2 1.1.3 1.9 1.1 2.8 2 1.5 1.5 3.2 3.2 7 3.2 3 0 5-1.5 6-4.5-1.5 2-3.2 2.7-5.2 2.2-1.1-.3-1.9-1.1-2.8-2C17.5 5.7 15.8 4 12 4zM6 12c-3 0-5 1.5-6 4.5 1.5-2 3.2-2.7 5.2-2.2 1.1.3 1.9 1.1 2.8 2 1.5 1.5 3.2 3.2 7 3.2 3 0 5-1.5 6-4.5-1.5 2-3.2 2.7-5.2 2.2-1.1-.3-1.9-1.1-2.8-2C11.5 13.7 9.8 12 6 12z" />
    </svg>
  ),
  ts: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <text x="12" y="17" textAnchor="middle" fontFamily="monospace" fontWeight="900" fontSize="10" fill="#0a1f2e">TS</text>
    </svg>
  ),
  cloudflare: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.5 16h-11a3.5 3.5 0 0 1-.6-7c.4-3 3-5 6-5 2.6 0 4.8 1.6 5.7 4 .3-.1.5-.1.8-.1a3.5 3.5 0 0 1 0 7l-.9.1z" />
    </svg>
  ),
};

const INTEGRATIONS: Integration[] = [
  { name: "Aimeos", glyph: G.aimeos },
  { name: "Payload", glyph: G.payload },
  { name: "Next.js", glyph: G.next },
  { name: "React", glyph: G.react },
  { name: "Bun", glyph: G.bun },
  { name: "Hono", glyph: G.hono },
  { name: "PostgreSQL", glyph: G.postgres },
  { name: "Redis", glyph: G.redis },
  { name: "S3", glyph: G.s3 },
  { name: "Stripe", glyph: G.stripe },
  { name: "SePay", glyph: G.sepay },
  { name: "Lexical", glyph: G.lexical },
  { name: "CKEditor", glyph: G.ckeditor },
  { name: "Tailwind", glyph: G.tailwind },
  { name: "TypeScript", glyph: G.ts },
  { name: "Cloudflare", glyph: G.cloudflare },
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {INTEGRATIONS.map(({ name, glyph }) => (
              <div
                key={name}
                className="aspect-[5/2.4] rounded-2xl bg-deep-space-blue/40 ring-1 ring-white/10 flex items-center justify-center gap-3 px-3 hover:bg-white/[0.06] transition-colors"
              >
                <span className="h-7 w-7 shrink-0 text-white/80">{glyph}</span>
                <span className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-white/75 truncate">
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
