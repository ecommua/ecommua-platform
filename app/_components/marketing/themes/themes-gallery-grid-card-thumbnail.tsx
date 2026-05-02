import Link from "next/link";
import type { ThemeMeta } from "@/app/[locale]/(marketing)/themes/themes-static-data";
import { buildPreviewUrl, formatVnd } from "@/app/[locale]/(marketing)/themes/themes-static-data";

/**
 * Theme grid card — Webflow templates style.
 * Aspect-ratio thumbnail, title|price line, author/category line beneath.
 */

export function ThemesGridCard({ theme, locale }: { theme: ThemeMeta; locale: string }) {
  const previewUrl = buildPreviewUrl(theme, locale);
  const hasDemo = !!previewUrl;

  return (
    <Link
      href={`/${locale}/themes/${theme.slug}`}
      className="group flex flex-col gap-3"
    >
      {/* Thumb */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-bg-elevated ring-1 ring-border transition-all group-hover:ring-brand/40 group-hover:shadow-lift">
        <div
          aria-hidden
          className="absolute inset-0 opacity-90"
          style={{
            background: `radial-gradient(at 30% 20%, ${theme.accent} 0%, transparent 55%)`,
          }}
        />
        {hasDemo && previewUrl ? (
          <div className="absolute inset-0 pointer-events-none">
            <iframe
              src={previewUrl}
              className="origin-top-left"
              style={{ width: "1440px", height: "1080px", transform: "scale(0.22)" }}
              loading="lazy"
              aria-hidden
              tabIndex={-1}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[11px] uppercase tracking-wider text-fg-muted">
              Coming soon
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-fg/30 via-transparent to-transparent pointer-events-none">
          <span className="inline-flex h-9 items-center gap-1.5 rounded-full bg-bg/95 backdrop-blur px-4 text-xs font-semibold text-fg ring-1 ring-border shadow-lift">
            View details
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-0.5">
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-[15px] font-semibold tracking-tight text-fg group-hover:text-brand transition-colors">
            {theme.displayName}
          </span>
          <span className="text-fg-muted/60 text-sm">|</span>
          <span className="text-sm font-semibold text-fg">{formatVnd(theme.priceVnd)}</span>
        </div>
        <div className="mt-0.5 text-sm text-fg-muted capitalize">
          {theme.industries.slice(0, 2).join(" · ")}
        </div>
      </div>
    </Link>
  );
}
