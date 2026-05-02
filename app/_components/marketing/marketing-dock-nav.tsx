'use client';

/**
 * MarketingDockNav — macOS-style floating dock, 1:1 port of portfolio-vietcq
 * Dock.jsx with platform palette (lime/emerald/teal/amber/slate/zinc/stone).
 *
 * Behavior:
 *  - Hover any item → scale-125, neighbors get extra margin (sm:mx-4 vs 2.5)
 *  - Per-item colored gradient bg (text-white icon)
 *  - Tooltip pill -top-10 with arrow caret
 *  - Active route → scale-110 + shadow-lg + white dot indicator -bottom-1
 *  - Separators (w-0.5 h-6) after logo, before theme, before system tray
 *  - Mobile (<1024px) → vertical, bottom-right, scale-90
 *  - Theme toggle: shows opposite icon on hover; persists ecommua-theme
 */

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  HomeIcon,
  UserIcon,
  RectangleStackIcon,
  TagIcon,
  BookOpenIcon,
  ArrowRightOnRectangleIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { cn } from '../lib/cn-class-merger';

// ─── Nav config ────────────────────────────────────────────────────────────

type NavItem = {
  id: string;
  label: string;
  link: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  bg: string; // gradient bg classes
};

const DEFAULT_NAVIGATION_ITEMS: NavItem[] = [
  { id: 'home',    label: 'Home',    link: '',         icon: HomeIcon,            bg: 'bg-gradient-to-br from-cyan-500 to-cyan-700' },
  { id: 'about',   label: 'About',   link: '/about',   icon: UserIcon,            bg: 'bg-gradient-to-br from-emerald-500 to-emerald-700' },
  { id: 'themes',  label: 'Themes',  link: '/themes',  icon: RectangleStackIcon,  bg: 'bg-gradient-to-br from-teal-500 to-teal-700' },
  { id: 'pricing', label: 'Pricing', link: '/pricing', icon: TagIcon,             bg: 'bg-gradient-to-br from-sky-500 to-sky-700' },
  { id: 'blog',    label: 'Blog',    link: '/blog',    icon: BookOpenIcon,        bg: 'bg-gradient-to-br from-slate-500 to-slate-700' },
];

// ─── Theme handling (mirrors marketing-theme-toggle.tsx) ──────────────────

const THEME_KEY = 'ecommua-theme';
type Mode = 'light' | 'dark';

function readMode(): Mode {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function applyMode(m: Mode) {
  const r = document.documentElement;
  r.classList.toggle('dark', m === 'dark');
  r.style.colorScheme = m;
}

// ─── NavigationItem ────────────────────────────────────────────────────────

interface NavItemProps {
  item: NavItem;
  href: string;
  isActive: boolean;
  isHovered: boolean;
  isMobile: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function NavigationItem({ item, href, isActive, isHovered, isMobile, onHover, onLeave }: NavItemProps) {
  const Icon = item.icon;
  return (
    <Link
      href={href}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      title={item.label}
      aria-label={item.label}
      className={cn(
        'relative group flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl transition-all duration-500 ease-out transform cursor-pointer',
        item.bg,
        'shadow-lg',
        isHovered ? 'scale-125' : isActive ? 'scale-110' : 'hover:scale-110 active:scale-95',
      )}
    >
      <Icon
        className={cn(
          'transition-all duration-500 ease-out text-white',
          isHovered ? (isMobile ? 'w-8 h-8' : 'w-11 h-11') : (isMobile ? 'w-7 h-7' : 'w-10 h-10'),
        )}
      />
      <span
        className={cn(
          'absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-white transition-all duration-500',
          isActive ? 'scale-100' : 'scale-0',
        )}
      />
      {/* Tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden md:block">
        {item.label}
        <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-zinc-900 dark:border-t-white" />
      </span>
    </Link>
  );
}

// ─── Logo ──────────────────────────────────────────────────────────────────

function LogoButton({
  href, isHovered, isMobile, onHover, onLeave,
}: { href: string; isHovered: boolean; isMobile: boolean; onHover: () => void; onLeave: () => void }) {
  return (
    <Link
      href={href}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        'relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl transition-all duration-500 ease-out transform cursor-pointer',
        'bg-accent/20 hover:bg-accent/30 ring-1 ring-accent/30',
        isHovered ? 'scale-125' : 'hover:scale-110',
      )}
      title="ecommua"
      aria-label="ecommua home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/logo.svg" alt="ecommua" className={isMobile ? 'w-8 h-8' : 'w-11 h-11'} />
    </Link>
  );
}

// ─── ThemeToggle ───────────────────────────────────────────────────────────

function ThemeToggleButton({
  mode, setMode, isHovered, isMobile, onHover, onLeave,
}: {
  mode: Mode; setMode: (m: Mode) => void; isHovered: boolean; isMobile: boolean; onHover: () => void; onLeave: () => void;
}) {
  const next: Mode = mode === 'dark' ? 'light' : 'dark';
  const iconSize = isMobile ? 32 : 40;
  const idleSize = isMobile ? 28 : 34;
  return (
    <button
      type="button"
      onClick={() => setMode(next)}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        'relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl transition-all duration-500 ease-out transform cursor-pointer active:scale-95',
        isHovered ? 'scale-125' : 'hover:scale-110',
        mode === 'dark' ? 'bg-yellow-600/20 hover:bg-yellow-600/30' : 'bg-slate-600/20 hover:bg-slate-600/30',
      )}
      title={`Switch to ${next} mode`}
      aria-label={`Switch to ${next} mode`}
    >
      {isHovered ? (
        mode === 'dark'
          ? <FaMoon size={iconSize} className="text-slate-600 transition-all duration-500" />
          : <FaSun size={iconSize} className="text-yellow-600 transition-all duration-500" />
      ) : (
        mode === 'dark'
          ? <FaSun size={idleSize} className="text-yellow-600 transition-all duration-500" />
          : <FaMoon size={idleSize} className="text-slate-600 transition-all duration-500" />
      )}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden md:block">
        {mode === 'dark' ? 'Light mode' : 'Dark mode'}
        <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-zinc-900 dark:border-t-white" />
      </span>
    </button>
  );
}

// ─── Locale switch ─────────────────────────────────────────────────────────

function LocaleButton({
  locale, isHovered, isMobile, onHover, onLeave,
}: { locale: string; isHovered: boolean; isMobile: boolean; onHover: () => void; onLeave: () => void }) {
  const router = useRouter();
  const pathname = usePathname() ?? '/';
  const otherLocale = locale === 'vi' ? 'en' : 'vi';
  const switchLocale = () => {
    const stripped = pathname.replace(/^\/(vi|en)(?=\/|$)/, '');
    router.push(`/${otherLocale}${stripped || ''}`);
  };
  return (
    <button
      type="button"
      onClick={switchLocale}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        'relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl transition-all duration-500 ease-out transform cursor-pointer text-white shadow-lg',
        'bg-gradient-to-br from-stone-500 to-stone-700',
        isHovered ? 'scale-125' : 'hover:scale-110',
      )}
      title={`Switch to ${otherLocale.toUpperCase()}`}
      aria-label={`Switch to ${otherLocale.toUpperCase()}`}
    >
      <GlobeAltIcon className={isMobile ? 'w-7 h-7' : 'w-10 h-10'} />
      <span className="absolute bottom-1 right-1 text-[9px] font-extrabold uppercase leading-none">{otherLocale}</span>
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden md:block">
        {otherLocale === 'vi' ? 'Tiếng Việt' : 'English'}
        <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-zinc-900 dark:border-t-white" />
      </span>
    </button>
  );
}

// ─── Login button ──────────────────────────────────────────────────────────

function LoginButton({
  isHovered, isMobile, onHover, onLeave,
}: { isHovered: boolean; isMobile: boolean; onHover: () => void; onLeave: () => void }) {
  return (
    <a
      href="/admin"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        'relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl transition-all duration-500 ease-out transform cursor-pointer text-white shadow-lg',
        'bg-gradient-to-br from-accent to-accent-strong',
        isHovered ? 'scale-125' : 'hover:scale-110',
      )}
      title="Đăng nhập"
      aria-label="Đăng nhập"
    >
      <ArrowRightOnRectangleIcon className={cn(isMobile ? 'w-7 h-7' : 'w-10 h-10', 'text-accent-fg')} />
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden md:block">
        Đăng nhập
        <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-zinc-900 dark:border-t-white" />
      </span>
    </a>
  );
}

// ─── Main Dock ─────────────────────────────────────────────────────────────

export function MarketingDockNav({ locale }: { locale: string }) {
  const pathname = usePathname() ?? '';
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [mode, setModeState] = React.useState<Mode>('light');
  const [mounted, setMounted] = React.useState(false);
  const leaveTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const initial = readMode();
    setModeState(initial);
    applyMode(initial);
    setMounted(true);
  }, []);

  const setMode = React.useCallback((next: Mode) => {
    try { window.localStorage.setItem(THEME_KEY, next); } catch { /* noop */ }
    applyMode(next);
    setModeState(next);
  }, []);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleDockEnter = () => {
    if (leaveTimer.current) { clearTimeout(leaveTimer.current); leaveTimer.current = null; }
  };
  const handleDockLeave = () => {
    leaveTimer.current = setTimeout(() => setHoveredItem(null), 200);
  };

  const items = DEFAULT_NAVIGATION_ITEMS;
  const hrefFor = (it: NavItem) => `/${locale}${it.link}`;
  const isActive = (it: NavItem) => {
    const target = `/${locale}${it.link}`;
    if (it.link === '') return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname === target || pathname.startsWith(`${target}/`);
  };
  const lastItemId = items[items.length - 1]?.id;

  const dockBgClass = 'bg-black/15 dark:bg-white/15 backdrop-blur-2xl shadow-2xl shadow-black/20 dark:shadow-white/10';

  return (
    <nav
      onMouseEnter={handleDockEnter}
      onMouseLeave={handleDockLeave}
      aria-label="Primary"
      className={cn(
        'fixed z-50',
        dockBgClass,
        'bottom-6 right-6 sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto',
        'rounded-2xl sm:px-5 sm:py-3 px-3 py-5',
        'flex flex-col sm:flex-row items-center justify-center',
        isMobile ? 'scale-90' : 'scale-100',
      )}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center">
        {/* Logo */}
        <div className={cn(
          'flex flex-col sm:flex-row items-center transition-all duration-300 ease-out',
          hoveredItem === 'logo' ? 'sm:mx-4 my-2 sm:my-0' : 'sm:mx-2.5 my-1.5 sm:my-0',
        )}>
          <LogoButton
            href={`/${locale}`}
            isHovered={hoveredItem === 'logo'}
            isMobile={isMobile}
            onHover={() => setHoveredItem('logo')}
            onLeave={() => setHoveredItem(null)}
          />
        </div>
        {/* Separator after logo */}
        <div className={cn(
          'transition-all duration-300 ease-out bg-white/20 dark:bg-white/30',
          hoveredItem === 'logo' || hoveredItem === items[0]?.id ? 'sm:mx-5 my-3 sm:my-0' : 'sm:mx-4 my-2 sm:my-0',
          'w-6 h-0.5 sm:w-0.5 sm:h-6',
        )} />

        {/* Nav items */}
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              'flex flex-col sm:flex-row items-center transition-all duration-300 ease-out',
              hoveredItem === item.id ? 'sm:mx-4 my-2 sm:my-0' : 'sm:mx-2.5 my-1.5 sm:my-0',
            )}
          >
            <NavigationItem
              item={item}
              href={hrefFor(item)}
              isActive={isActive(item)}
              isHovered={hoveredItem === item.id}
              isMobile={isMobile}
              onHover={() => setHoveredItem(item.id)}
              onLeave={() => setHoveredItem(null)}
            />
          </div>
        ))}

        {/* Separator before theme */}
        <div className={cn(
          'transition-all duration-300 ease-out bg-white/20 dark:bg-white/30',
          hoveredItem === lastItemId || hoveredItem === 'theme' ? 'sm:mx-5 my-3 sm:my-0' : 'sm:mx-4 my-2 sm:my-0',
          'w-6 h-0.5 sm:w-0.5 sm:h-6',
        )} />

        {/* Theme toggle */}
        <div className={cn(
          'transition-all duration-300 ease-out',
          hoveredItem === 'theme' ? 'sm:mx-4 my-2 sm:my-0' : 'sm:mx-2 my-1.5 sm:my-0',
        )}>
          {mounted && (
            <ThemeToggleButton
              mode={mode}
              setMode={setMode}
              isHovered={hoveredItem === 'theme'}
              isMobile={isMobile}
              onHover={() => setHoveredItem('theme')}
              onLeave={() => setHoveredItem(null)}
            />
          )}
        </div>

        {/* Locale */}
        <div className={cn(
          'flex flex-col sm:flex-row items-center transition-all duration-300 ease-out',
          hoveredItem === 'locale' ? 'sm:mx-4 my-2 sm:my-0' : 'sm:mx-2.5 my-1.5 sm:my-0',
        )}>
          <LocaleButton
            locale={locale}
            isHovered={hoveredItem === 'locale'}
            isMobile={isMobile}
            onHover={() => setHoveredItem('locale')}
            onLeave={() => setHoveredItem(null)}
          />
        </div>

        {/* Separator before login */}
        <div className={cn(
          'transition-all duration-300 ease-out bg-white/20 dark:bg-white/30',
          hoveredItem === 'locale' || hoveredItem === 'login' ? 'sm:mx-5 my-3 sm:my-0' : 'sm:mx-4 my-2 sm:my-0',
          'w-6 h-0.5 sm:w-0.5 sm:h-6',
        )} />

        {/* Login (accent CTA) */}
        <div className={cn(
          'flex flex-col sm:flex-row items-center transition-all duration-300 ease-out',
          hoveredItem === 'login' ? 'sm:mx-4 my-2 sm:my-0' : 'sm:mx-2.5 my-1.5 sm:my-0',
        )}>
          <LoginButton
            isHovered={hoveredItem === 'login'}
            isMobile={isMobile}
            onHover={() => setHoveredItem('login')}
            onLeave={() => setHoveredItem(null)}
          />
        </div>
      </div>
    </nav>
  );
}
