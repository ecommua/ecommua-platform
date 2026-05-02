import Link from "next/link";
import type { ThemeMeta } from "@/app/[locale]/(marketing)/themes/themes-static-data";
import { buildPreviewUrl, formatVnd } from "@/app/[locale]/(marketing)/themes/themes-static-data";

/**
 * Section 02 — featured theme banner. One large card spanning full grid width.
 * Live iframe preview on right, copy + CTA on left.
 */

export function ThemesFeaturedCard({ theme, locale }: { theme: ThemeMeta; locale: string }) {
  const previewUrl = buildPreviewUrl(theme, locale);

  return (
    <Link
      href={`/${locale}/themes/${theme.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-bg-elevated transition-all hover:border-brand/40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-0">
        {/* Copy */}
        <div className="flex flex-col justify-between p-7 lg:p-10">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 text-accent ring-1 ring-inset ring-accent/30 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6L12 17l-5.5 2.9 1.1-6L3.2 9.4l6.1-.9L12 3z" />
              </svg>
              Featured template
            </div>
            <h2 className="mt-5 font-display text-3xl lg:text-[40px] font-bold tracking-[-0.025em] leading-[1.05] text-fg">
              {theme.displayName}
            </h2>
            <p className="mt-4 text-base text-fg-muted leading-relaxed max-w-md">
              {theme.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {theme.industries.map((ind) => (
                <span
                  key={ind}
                  className="inline-flex items-center rounded-md bg-bg ring-1 ring-inset ring-border px-2 py-0.5 text-[11px] font-medium text-fg-muted capitalize"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between gap-4">
            <div>
              <div className="font-display text-2xl font-bold tracking-tight text-fg">
                {formatVnd(theme.priceVnd)}
              </div>
              <div className="text-xs text-fg-muted mt-0.5">One-time · v{theme.version}</div>
            </div>
            <span className="inline-flex h-11 items-center gap-2 rounded-xl bg-brand text-brand-fg px-5 text-sm font-semibold transition-all group-hover:bg-brand-strong">
              View details
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>

        {/* Preview */}
        <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-bg-muted">
          <div
            aria-hidden
            className="absolute inset-0 opacity-80"
            style={{
              background: `radial-gradient(at 30% 20%, ${theme.accent} 0%, transparent 60%)`,
            }}
          />
          {previewUrl ? (
            <div className="absolute inset-4 lg:inset-8 rounded-xl overflow-hidden ring-1 ring-border shadow-lift bg-bg pointer-events-none">
              <iframe
                src={previewUrl}
                className="origin-top-left"
                style={{ width: "1440px", height: "1080px", transform: "scale(0.42)" }}
                loading="lazy"
                aria-hidden
                tabIndex={-1}
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                Demo coming soon
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
