"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/cn-class-merger";
import { MarketingThemeToggle } from "./marketing-theme-toggle";

/**
 * Marketing top navigation — sticky, glass on scroll.
 * Layout matches ref slice 01-y53-2156: logo lockup left | primary links centered |
 * auth + brand-CTA + theme toggle right. Uses Ecommua palette (brand blue), NOT ref red.
 */

interface NavLink {
  href: string;
  labelVi: string;
  labelEn: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "/about", labelVi: "Giới thiệu", labelEn: "About" },
  { href: "/themes", labelVi: "Themes", labelEn: "Themes" },
  { href: "/pricing", labelVi: "Bảng giá", labelEn: "Pricing" },
  { href: "/blog", labelVi: "Blog", labelEn: "Blog" },
];

export function MarketingNavBar({ locale }: { locale: string }) {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl shadow-soft"
          : "border-b border-transparent bg-background/50 backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 lg:px-8">
        {/* Brand lockup — left */}
        <Link href={`/${locale}`} className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 ring-1 ring-inset ring-brand-200/60 dark:from-brand-900/40 dark:to-brand-800/40 dark:ring-brand-700/60 transition-transform group-hover:scale-105">
            <img src="/brand/logo.svg" alt="" width={22} height={22} className="select-none" />
          </span>
          <span className="font-display text-[17px] font-bold tracking-tight text-foreground">
            ecommua
          </span>
        </Link>

        {/* Primary links — center */}
        <div className="hidden md:flex items-center justify-center gap-1">
          {NAV_LINKS.map((link) => {
            const href = `/${locale}${link.href}`;
            const active = pathname.startsWith(href);
            return (
              <Link
                key={link.href}
                href={href}
                className={cn(
                  "relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {locale === "vi" ? link.labelVi : link.labelEn}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-600 to-transparent" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right cluster — auth + CTA + theme toggle */}
        <div className="flex items-center gap-2 justify-self-end">
          <a
            href="/admin"
            className="hidden md:inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            {locale === "vi" ? "Đăng nhập" : "Sign in"}
          </a>
          <Link
            href={`/${locale}/themes`}
            className="hidden sm:inline-flex h-9 items-center gap-1.5 rounded-full bg-brand-600 hover:bg-brand-700 px-4 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-lift"
          >
            {locale === "vi" ? "Bắt đầu" : "Get Started"}
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <MarketingThemeToggle />

          {/* Mobile burger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {locale === "vi" ? link.labelVi : link.labelEn}
              </Link>
            ))}
            <div className="my-2 h-px bg-border" />
            <a
              href="/admin"
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
            >
              {locale === "vi" ? "Đăng nhập" : "Sign in"}
            </a>
            <Link
              href={`/${locale}/themes`}
              className="block rounded-md bg-brand-600 hover:bg-brand-700 px-3 py-2.5 text-center text-sm font-semibold text-white mt-2"
            >
              {locale === "vi" ? "Bắt đầu" : "Get Started"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
