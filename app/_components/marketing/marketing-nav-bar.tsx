"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/cn-class-merger";
import { MarketingThemeToggle } from "./marketing-theme-toggle";

interface NavLink { href: string; labelVi: string; labelEn: string }

const NAV_LINKS: NavLink[] = [
  { href: "/about",   labelVi: "Giới thiệu", labelEn: "About" },
  { href: "/themes",  labelVi: "Themes",     labelEn: "Themes" },
  { href: "/pricing", labelVi: "Bảng giá",    labelEn: "Pricing" },
  { href: "/blog",    labelVi: "Blog",       labelEn: "Blog" },
];

export function MarketingNavBar({ locale }: { locale: string }) {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background">
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-inset ring-brand-200/60 dark:bg-brand-900/40 dark:ring-brand-700/60">
            <img src="/brand/logo.svg" alt="" width={22} height={22} />
          </span>
          <span className="font-display text-[17px] font-bold tracking-tight text-foreground">ecommua</span>
        </Link>

        <div className="hidden md:flex items-center justify-center gap-1">
          {NAV_LINKS.map((link) => {
            const href = `/${locale}${link.href}`;
            const active = pathname.startsWith(href);
            return (
              <Link
                key={link.href}
                href={href}
                className={cn(
                  "relative rounded-md px-3 py-1.5 text-sm font-medium",
                  active ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {locale === "vi" ? link.labelVi : link.labelEn}
                {active && <span className="absolute inset-x-3 -bottom-px h-px bg-brand-600" />}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 justify-self-end">
          <a
            href="/admin"
            className="hidden md:inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-muted-foreground"
          >
            {locale === "vi" ? "Đăng nhập" : "Sign in"}
          </a>
          <Link
            href={`/${locale}/themes`}
            className="hidden sm:inline-flex h-9 items-center gap-1.5 rounded-full bg-brand-600 px-4 text-sm font-semibold text-white"
          >
            {locale === "vi" ? "Bắt đầu" : "Get Started"}
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <MarketingThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden><path d="M18 6L6 18M6 6l12 12" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={`/${locale}${link.href}`} className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground">
                {locale === "vi" ? link.labelVi : link.labelEn}
              </Link>
            ))}
            <div className="my-2 h-px bg-border" />
            <a href="/admin" className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground">
              {locale === "vi" ? "Đăng nhập" : "Sign in"}
            </a>
            <Link href={`/${locale}/themes`} className="block rounded-md bg-brand-600 px-3 py-2.5 text-center text-sm font-semibold text-white mt-2">
              {locale === "vi" ? "Bắt đầu" : "Get Started"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
