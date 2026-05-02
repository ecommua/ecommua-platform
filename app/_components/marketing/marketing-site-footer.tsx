import Link from "next/link";

/**
 * Marketing mega footer — pixel-matched to ref slices 17-y11235 → 27-y12309.
 * Layout: 4-col sitemap (brand+desc | Product | Company | Utility),
 * giant ECOMMUA outlined wordmark band, bottom legal+locale row.
 * Always renders on dark surface (--brand-950) regardless of mode — matches ref.
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
    <footer className="relative mt-24 bg-brand-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-10">
        {/* Top: 4-col grid — brand block spans wider */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-inset ring-white/20">
                <img src="/brand/logo.svg" alt="" width={22} height={22} />
              </span>
              <span className="font-display text-[17px] font-bold tracking-tight text-white">
                ecommua
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm text-white/60 leading-relaxed">
              {locale === "vi"
                ? "Marketplace theme thương mại điện tử cho thị trường Việt Nam. Self-host, multi-tenant, mã nguồn của bạn."
                : "E-commerce theme marketplace built for Vietnam. Self-host, multi-tenant, your code."}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://github.com/ecommua"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/15 text-white/70"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.475 2 2 6.475 2 12c0 4.425 2.864 8.166 6.839 9.494.5.092.683-.217.683-.483 0-.241-.008-.875-.013-1.717-2.78.604-3.366-1.342-3.366-1.342-.454-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.748-1.026 2.748-1.026.546 1.379.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.013 10.013 0 0 0 22 12c0-5.525-4.475-10-10-10Z" />
                </svg>
              </a>
              <a
                href="mailto:hello@ecommua.com"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/15 text-white/70"
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
              <h3 className="text-base font-semibold text-white mb-5">
                {locale === "vi" ? col.title.vi : col.title.en}
              </h3>
              <ul className="space-y-3.5">
                {col.links.map((l) => (
                  <li key={l.href + l.labelEn}>
                    {l.external ? (
                      <a
                        href={l.href}
                        className="text-sm text-white/55"
                      >
                        {locale === "vi" ? l.labelVi : l.labelEn}
                      </a>
                    ) : (
                      <Link
                        href={`/${locale}${l.href}`}
                        className="text-sm text-white/55"
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

        {/* Giant outlined wordmark — matches slice 27 */}
        <div className="mt-20 select-none overflow-hidden">
          <div
            aria-hidden
            className="font-display text-center font-extrabold leading-none tracking-tight"
            style={{
              fontSize: "clamp(80px, 22vw, 280px)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.08)",
              letterSpacing: "-0.04em",
            }}
          >
            ECOMMUA
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            © 2026 Ecommua. Multi-tenant e-commerce platform. Made in Vietnam.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/45">
            <Link
              href={`/${locale === "vi" ? "en" : "vi"}`}
              className=" font-mono uppercase tracking-wider"
            >
              {locale === "vi" ? "EN" : "VI"}
            </Link>
            <span className="text-white/20">·</span>
            <Link href={`/${locale}/blog`} className="">
              {locale === "vi" ? "Điều khoản" : "Terms"}
            </Link>
            <span className="text-white/20">·</span>
            <Link href={`/${locale}/blog`} className="">
              {locale === "vi" ? "Bảo mật" : "Privacy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
