/**
 * Theme detail page — premium hero, side-by-side desktop + mobile preview,
 * features grid, sticky pricing rail. Retokened to new palette.
 */

import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/app/_components/ui/container-wrapper";
import { Badge } from "@/app/_components/ui/badge-primitive";
import { CheckBullet } from "@/app/_components/marketing/marketing-feature-bullet";
import { DesktopPreviewFrame, MobilePreviewFrame } from "@/app/_components/marketing/marketing-preview-frame";
import { ThemesCtaBand } from "@/app/_components/marketing/themes/themes-gallery-create-and-sell-cta-band";
import {
  getThemeBySlug,
  buildPreviewUrl,
  industryClass,
  formatVnd,
  THEMES,
} from "../themes-static-data";
import { cn } from "@/app/_components/lib/cn-class-merger";

export function generateStaticParams() {
  return THEMES.map((t) => ({ slug: t.slug }));
}

interface DetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function ThemeDetailPage({ params }: DetailPageProps) {
  const { locale, slug } = await params;
  const theme = getThemeBySlug(slug);
  if (!theme) notFound();

  const previewUrl = buildPreviewUrl(theme, locale);
  const hasDemo = !!previewUrl;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background: `radial-gradient(at 80% 0%, ${theme.accent} 0%, transparent 45%)`,
          }}
        />
        <div className="absolute inset-0 -z-10 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />

        <Container size="xl" className="pt-12 pb-16">
          <Link
            href={`/${locale}/themes`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted hover:text-brand transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Quay lại marketplace
          </Link>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="soft" className="font-mono text-[11px] uppercase tracking-wider">
                  {theme.vertical} / {theme.style}
                </Badge>
                <Badge variant="outline" className="font-mono text-[10px]">v{theme.version}</Badge>
                <Badge variant="dot">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: theme.accent }} />
                  {hasDemo ? "Demo live" : "Coming soon"}
                </Badge>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-[-0.035em] leading-[1.02] text-fg">
                {theme.displayName}
              </h1>
              <p className="mt-5 text-xl text-fg-muted leading-relaxed max-w-2xl">
                {theme.tagline}
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {theme.industries.map((ind) => (
                  <span
                    key={ind}
                    className={cn(
                      "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium capitalize ring-1 ring-inset",
                      industryClass(ind),
                    )}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing card */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl bg-bg-elevated ring-1 ring-border shadow-lift p-6">
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-muted">
                  One-time purchase
                </div>
                <div className="mt-2 font-display text-4xl font-bold tracking-[-0.04em] text-fg">
                  {formatVnd(theme.priceVnd)}
                </div>
                <p className="mt-1.5 text-xs text-fg-muted leading-relaxed">
                  Hosting Ecommua tính riêng theo VPS · update miễn phí 12 tháng
                </p>
                <button
                  type="button"
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand text-brand-fg hover:bg-brand-strong font-semibold text-sm transition-all shadow-lift disabled:opacity-50 disabled:pointer-events-none"
                  disabled={!hasDemo}
                >
                  {hasDemo ? "Mua theme" : "Sắp ra mắt"}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>
                {hasDemo && previewUrl && (
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-bg ring-1 ring-border hover:ring-brand/50 text-fg font-semibold text-sm transition-all"
                  >
                    Try Demo (24h sandbox)
                  </a>
                )}
                <div className="mt-6 pt-5 border-t border-border space-y-2.5">
                  {[
                    "Source code đầy đủ, không obfuscate",
                    "Update miễn phí 12 tháng",
                    "Email + GitHub support",
                    "Self-host trên VPS của bạn",
                  ].map((b) => (
                    <div key={b} className="flex items-start gap-2 text-xs text-fg-muted">
                      <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Live Preview */}
      <section className="bg-bg-elevated border-b border-border">
        <Container size="xl" className="py-16">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <Badge variant="brand" className="mb-3">Live preview</Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-fg">
                Render thực, không phải mockup.
              </h2>
              <p className="mt-2 text-fg-muted text-sm">
                {hasDemo ? (
                  <>
                    Storefront chạy trên{" "}
                    <code className="font-mono text-xs bg-bg px-2 py-0.5 rounded ring-1 ring-border">
                      {theme.previewSiteCode}.localhost:3000
                    </code>
                  </>
                ) : (
                  "Demo store đang được setup"
                )}
              </p>
            </div>
            {hasDemo && previewUrl && (
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-bg ring-1 ring-border hover:ring-brand/50 px-4 py-2.5 text-sm font-semibold text-fg shadow-soft transition-all"
              >
                Mở demo trong tab mới
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
            )}
          </div>

          {hasDemo && previewUrl ? (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_414px] gap-8">
              <DesktopPreviewFrame
                src={previewUrl}
                url={previewUrl}
                title={`${theme.displayName} desktop preview`}
              />
              <div className="hidden lg:block">
                <MobilePreviewFrame
                  src={previewUrl}
                  title={`${theme.displayName} mobile preview`}
                />
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border-2 border-dashed border-border bg-bg py-32 text-center">
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-bg-muted">
                <svg className="h-6 w-6 text-fg-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" d="M12 6v6l4 2" />
                </svg>
              </div>
              <p className="text-fg font-semibold">Demo store chưa được provision</p>
              <p className="mt-1.5 text-sm text-fg-muted">
                Liên hệ team Ecommua để được preview manual
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Description + Features */}
      <Container size="xl" className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14">
          <div>
            <Badge variant="brand" className="mb-4">Giới thiệu</Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] leading-tight text-fg">
              Thiết kế dành riêng cho ngành{" "}
              <span className="capitalize text-brand">{theme.vertical}</span>.
            </h2>
            <p className="mt-6 text-lg text-fg-muted leading-relaxed">
              {theme.description}
            </p>

            {/* Spec table */}
            <div className="mt-10 rounded-2xl bg-bg-elevated ring-1 ring-border overflow-hidden">
              {[
                { k: "Vertical", v: theme.vertical },
                { k: "Style", v: theme.style },
                { k: "Version", v: theme.version },
                { k: "Industries", v: theme.industries.join(", ") },
                { k: "Slug", v: theme.slug },
              ].map((row, i) => (
                <div
                  key={row.k}
                  className={cn(
                    "flex items-center justify-between px-5 py-3.5 text-sm",
                    i > 0 && "border-t border-border",
                  )}
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-fg-muted">{row.k}</span>
                  <span className="font-medium text-fg capitalize">{row.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Badge variant="brand" className="mb-4">Highlights</Badge>
            <h2 className="font-display text-2xl font-bold tracking-tight text-fg mb-6">
              Có sẵn trong theme
            </h2>
            <ul className="space-y-4">
              {theme.features.map((f) => (
                <CheckBullet key={f}>{f}</CheckBullet>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <ThemesCtaBand locale={locale} />
    </>
  );
}
