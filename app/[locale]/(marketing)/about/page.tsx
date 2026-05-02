/**
 * About page — mission, ethos, team, contact. Open-source self-host narrative.
 */

import { Container } from "@/app/_components/ui/container-wrapper";
import { Badge } from "@/app/_components/ui/badge-primitive";
import { MarketingCtaBand } from "@/app/_components/marketing/marketing-cta-band";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden border-b border-slate-200/60">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />

        <Container size="lg" className="pt-20 pb-16">
          <Badge variant="brand" className="mb-5">Giới thiệu</Badge>
          <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-[-0.035em] leading-[1.02] text-slate-900 max-w-3xl">
            Made in Vietnam,<br />
            <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent">
              built for the world
            </span>.
          </h1>
          <p className="mt-7 max-w-2xl text-xl text-slate-600 leading-relaxed">
            Ecommua là nền tảng marketplace theme thương mại điện tử dành cho merchant Việt Nam.
            Chúng tôi tin vào open-source, self-host, và mã nguồn của bạn — không phải của vendor.
          </p>
        </Container>
      </section>

      {/* ── Mission ──────────────────────────────────────────────── */}
      <Container size="lg" className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14">
          <div>
            <Badge variant="brand" className="mb-4">Sứ mệnh</Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] leading-tight text-slate-900">
              Giúp merchant Việt Nam ship cửa hàng đẹp,<br />
              không cần đội thiết kế riêng.
            </h2>
            <div className="mt-7 space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>
                Cửa hàng online Việt Nam thường rơi vào hai cực: hoặc generic Shopee, hoặc thuê freelancer
                vài chục triệu mà chất lượng phụ thuộc may rủi. Ecommua sinh ra để giải quyết khoảng giữa.
              </p>
              <p>
                Theme premium ship sẵn, thiết kế bởi designer thực, code bởi developer thực. One-time
                purchase, source code đầy đủ, self-host. Không lock-in vendor. Không subscription bắt buộc.
              </p>
              <p>
                Stack mở: Next.js, Aimeos, Payload, PostgreSQL. CLI mượn từ ERPNext bench — gold-standard
                multi-tenant SaaS deploy. Bạn có toàn quyền với hệ thống.
              </p>
            </div>
          </div>

          {/* Side stats card */}
          <aside className="space-y-4">
            <div className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-soft p-6">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 mb-3">
                Triết lý
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  "Open source by default",
                  "Self-host first, cloud optional",
                  "Code của bạn, không phải của Ecommua",
                  "YAGNI · KISS · DRY",
                  "Made in Vietnam, sold worldwide",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 shadow-lift">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-3">
                Stack
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-medium text-slate-200">
                {["Next.js 16", "React 19", "Payload 3", "Aimeos", "PostgreSQL", "Tailwind v4", "next-intl", "Lexical"].map((s) => (
                  <span key={s}>· {s}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>

      {/* ── Why open source ──────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-50/80 to-white border-y border-slate-200/60">
        <Container size="xl" className="py-20">
          <div className="max-w-3xl">
            <Badge variant="brand" className="mb-4">Vì sao chúng tôi chọn open-source?</Badge>
            <h2 className="font-display text-4xl font-bold tracking-[-0.025em] leading-tight text-slate-900">
              Bạn xứng đáng có toàn quyền với cửa hàng của mình.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                t: "Không lock-in",
                d: "Source code của bạn ngay từ phút đầu. Không obfuscate. Không SaaS bí mật. Bạn có thể fork, modify, tự host bất kỳ lúc nào.",
              },
              {
                t: "Audit được",
                d: "Mọi dòng code đều public. Bug fix nhanh hơn. Security audit dễ hơn. Cộng đồng đóng góp.",
              },
              {
                t: "Trường tồn",
                d: "Nếu Ecommua dừng hoạt động, code của bạn vẫn chạy. Bạn vẫn deploy được. Khác hẳn SaaS đóng.",
              },
            ].map((i) => (
              <div key={i.t} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-soft">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-inset ring-brand-200/60 text-brand-700">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 5.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900 mb-2">
                  {i.t}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{i.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Contact ──────────────────────────────────────────────── */}
      <Container size="lg" className="py-20">
        <div className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-card p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="brand" className="mb-3">Liên hệ</Badge>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                Có câu hỏi? Chúng tôi trả lời.
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Cần tư vấn theme cho ngành đặc thù, custom design, hoặc enterprise support?
                Email chúng tôi — phản hồi trong 24h.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="mailto:hello@ecommua.com"
                className="flex items-center gap-3 rounded-xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 px-4 py-3.5 transition-all"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 text-brand-700">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div className="flex-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500">Email</div>
                  <div className="font-semibold text-slate-900">hello@ecommua.com</div>
                </div>
              </a>
              <a
                href="https://github.com/ecommua"
                className="flex items-center gap-3 rounded-xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 px-4 py-3.5 transition-all"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 text-slate-700">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2C6.475 2 2 6.475 2 12c0 4.425 2.864 8.166 6.839 9.494.5.092.683-.217.683-.483 0-.241-.008-.875-.013-1.717-2.78.604-3.366-1.342-3.366-1.342-.454-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.748-1.026 2.748-1.026.546 1.379.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.013 10.013 0 0 0 22 12c0-5.525-4.475-10-10-10Z" />
                  </svg>
                </span>
                <div className="flex-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500">GitHub</div>
                  <div className="font-semibold text-slate-900">github.com/ecommua</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>

      <MarketingCtaBand locale={locale} />
    </>
  );
}
