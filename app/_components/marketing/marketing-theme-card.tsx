import Link from "next/link";
import { cn } from "../lib/cn-class-merger";
import { Badge } from "../ui/badge-primitive";
import type { ThemeMeta } from "@/app/[locale]/(marketing)/themes/themes-static-data";
import { buildPreviewUrl, formatVnd, industryClass } from "@/app/[locale]/(marketing)/themes/themes-static-data";

/**
 * Premium theme card for marketplace gallery.
 * Live iframe scaled preview with browser-chrome top bar overlay,
 * hover lift, accent dot, price + CTA footer.
 */

export function MarketingThemeCard({ theme, locale }: { theme: ThemeMeta; locale: string }) {
  const hasDemo = !!theme.previewSiteCode;
  const previewUrl = hasDemo ? buildPreviewUrl(theme, locale) : null;

  return (
    <Link
      href={`/${locale}/themes/${theme.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white",
        "shadow-card transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-lift hover:border-slate-300",
      )}
    >
      {/* Preview frame */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        {/* Accent ambient glow */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(at 30% 20%, ${theme.accent} 0%, transparent 55%)`,
          }}
        />
        {/* Browser chrome overlay */}
        <div className="absolute top-0 inset-x-0 z-20 flex items-center gap-1.5 bg-white/70 backdrop-blur-md border-b border-slate-200/60 px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          <div className="ml-2 flex-1 truncate font-mono text-[10px] text-slate-400">
            {theme.previewSiteCode ?? "—"}.ecommua.vn
          </div>
        </div>

        {hasDemo && previewUrl ? (
          <div className="absolute inset-0 pt-7 pointer-events-none">
            <iframe
              src={previewUrl}
              className="origin-top-left"
              style={{
                width: "1440px",
                height: "1080px",
                transform: "scale(0.28)",
              }}
              loading="lazy"
              aria-hidden="true"
              tabIndex={-1}
            />
            {/* Subtle gradient overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center pt-7">
            <div className="text-center">
              <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 ring-1 ring-slate-200 shadow-soft">
                <svg className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" d="M12 6v6l4 2" />
                </svg>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                Demo coming soon
              </span>
            </div>
          </div>
        )}

        {/* Top-right version chip */}
        <div className="absolute top-2 right-2 z-30 rounded-md bg-white/90 backdrop-blur px-1.5 py-0.5 text-[10px] font-mono text-slate-600 shadow-soft ring-1 ring-slate-200/60">
          v{theme.version}
        </div>

        {/* Hover overlay CTA */}
        <div className="absolute inset-0 z-10 flex items-end justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-900/40 via-slate-900/0 to-transparent pointer-events-none">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-4 py-1.5 text-xs font-semibold text-slate-900 shadow-lift">
            Xem live preview
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-display text-[17px] font-semibold tracking-tight text-slate-900 leading-tight group-hover:text-brand-700 transition-colors">
            {theme.displayName}
          </h3>
          <span
            className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-white shadow-sm"
            style={{ backgroundColor: theme.accent }}
            aria-hidden
          />
        </div>
        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">{theme.tagline}</p>

        {/* Industry chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {theme.industries.slice(0, 3).map((ind) => (
            <span
              key={ind}
              className={cn(
                "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium capitalize ring-1 ring-inset",
                industryClass(ind),
              )}
            >
              {ind}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              One-time
            </div>
            <div className="text-[15px] font-semibold text-slate-900">
              {formatVnd(theme.priceVnd)}
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
            Chi tiết
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
