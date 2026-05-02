import Link from "next/link";

/**
 * Marketing mega footer — pixel-matched to ref slices 17-y11235 → 27-y12309.
 * Layout: 4-col sitemap (brand+desc | Product | Company | Utility),
 * giant ECOMMUA outlined wordmark band, bottom legal+locale row.
 * Adapts to both light and dark modes flawlessly.
 */

interface FooterColumn {
  title: { vi: string; en: string };
  links: Array<{ href: string; labelVi: string; labelEn: string; external?: boolean }>;
}

const COLUMNS: FooterColumn[] = [
  {
    title: { vi: "Sản phẩm", en: "Product" },
    links: [
      { href: "/themes", labelVi: "Marketplace theme", labelEn: "Theme marketplace" },
      { href: "/pricing", labelVi: "Bảng giá", labelEn: "Pricing" },
      { href: "/themes?industry=fashion", labelVi: "Theme thời trang", labelEn: "Fashion themes" },
      { href: "/themes?industry=watch", labelVi: "Theme đồng hồ", labelEn: "Watch themes" },
    ],
  },
  {
    title: { vi: "Công ty", en: "Company" },
    links: [
      { href: "/about", labelVi: "Giới thiệu", labelEn: "About" },
      { href: "/blog", labelVi: "Blog", labelEn: "Blog" },
      { href: "https://github.com/ecommua", labelVi: "GitHub", labelEn: "GitHub", external: true },
      { href: "mailto:hello@ecommua.com", labelVi: "Liên hệ", labelEn: "Contact", external: true },
    ],
  },
  {
    title: { vi: "Tiện ích", en: "Utility" },
    links: [
      { href: "/admin", labelVi: "Đăng nhập", labelEn: "Sign in", external: true },
      { href: "/admin", labelVi: "Tạo cửa hàng", labelEn: "Create store", external: true },
      { href: "/blog", labelVi: "Tài liệu", labelEn: "Documentation" },
    ],
  },
];

export function MarketingSiteFooter({ locale }: { locale: string }) {
  return (
    <footer className="relative mt-24 bg-bg text-fg overflow-hidden border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-10">
        {/* Top: 4-col grid — brand block spans wider */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2">
              <img src="/brand/logo.svg" alt="" width={28} height={28} className="h-7 w-7" />
              <span className="font-display text-[17px] font-bold tracking-tight text-fg">
                ecommua
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm text-fg-muted leading-relaxed">
              {locale === "vi"
                ? "Marketplace theme thương mại điện tử cho thị trường Việt Nam. Self-host, multi-tenant, mã nguồn của bạn."
                : "E-commerce theme marketplace built for Vietnam. Self-host, multi-tenant, your code."}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://github.com/ecommua"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-border text-fg-muted hover:text-fg hover:bg-bg-muted transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.475 2 2 6.475 2 12c0 4.425 2.864 8.166 6.839 9.494.5.092.683-.217.683-.483 0-.241-.008-.875-.013-1.717-2.78.604-3.366-1.342-3.366-1.342-.454-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.748-1.026 2.748-1.026.546 1.379.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.013 10.013 0 0 0 22 12c0-5.525-4.475-10-10-10Z" />
                </svg>
              </a>
              <a
                href="mailto:hello@ecommua.com"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-border text-fg-muted hover:text-fg hover:bg-bg-muted transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title.en}>
              <h3 className="text-base font-semibold text-fg mb-5">
                {locale === "vi" ? col.title.vi : col.title.en}
              </h3>
              <ul className="space-y-3.5">
                {col.links.map((l) => (
                  <li key={l.href + l.labelEn}>
                    {l.external ? (
                      <a
                        href={l.href}
                        className="text-sm text-fg-muted hover:text-fg transition-colors"
                      >
                        {locale === "vi" ? l.labelVi : l.labelEn}
                      </a>
                    ) : (
                      <Link
                        href={`/${locale}${l.href}`}
                        className="text-sm text-fg-muted hover:text-fg transition-colors"
                      >
                        {locale === "vi" ? l.labelVi : l.labelEn}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Outlined wordmark — full-width, logo matches cap height, balanced */}
        <div className="mt-16 w-full select-none hidden sm:flex items-center justify-center">
          <div className="flex items-center justify-center gap-4 leading-none">
            <img
              src="/brand/logo.svg"
              alt=""
              aria-hidden
              style={{ height: "1em", width: "auto", fontSize: "clamp(50px, 12vw, 180px)" }}
            />
            <span
              aria-hidden
              className="font-display font-extrabold tracking-tight"
              style={{
                fontSize: "clamp(50px, 12vw, 180px)",
                lineHeight: 1,
                color: "transparent",
                WebkitTextStroke: "1px var(--border)",
                letterSpacing: "-0.04em",
              }}
            >
              ECOMMUA
            </span>
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="mt-10 pt-8 border-t border-border flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-fg-muted">
            © 2026 Ecommua. Multi-tenant e-commerce platform. Made in Vietnam.
          </p>
          <div className="flex items-center gap-4 text-xs text-fg-muted">
            <Link
              href={`/${locale === "vi" ? "en" : "vi"}`}
              className=" font-mono uppercase tracking-wider hover:text-fg transition-colors"
            >
              {locale === "vi" ? "EN" : "VI"}
            </Link>
            <span className="text-border">·</span>
            <Link href={`/${locale}/blog`} className="hover:text-fg transition-colors">
              {locale === "vi" ? "Điều khoản" : "Terms"}
            </Link>
            <span className="text-border">·</span>
            <Link href={`/${locale}/blog`} className="hover:text-fg transition-colors">
              {locale === "vi" ? "Bảo mật" : "Privacy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
