"use client";

import * as React from "react";
import { cn } from "../lib/cn-class-merger";

/**
 * Theme toggle — sun/moon, persists to localStorage("ecommua-theme").
 * FOUC-safe: relies on the inline script in <head> setting the class
 * before paint. This component only mutates state after mount.
 */

const STORAGE_KEY = "ecommua-theme";

type Mode = "light" | "dark";

function readMode(): Mode {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyMode(mode: Mode) {
  const root = document.documentElement;
  root.classList.toggle("dark", mode === "dark");
  root.style.colorScheme = mode;
}

export function MarketingThemeToggle({ className }: { className?: string }) {
  const [mode, setMode] = React.useState<Mode>("light");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const initial = readMode();
    setMode(initial);
    applyMode(initial);
    setMounted(true);
  }, []);

  const toggle = React.useCallback(() => {
    setMode((prev) => {
      const next: Mode = prev === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage unavailable — non-fatal */
      }
      applyMode(next);
      return next;
    });
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={mode === "dark"}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md text-fg-muted",
        "ring-1 ring-border transition-colors hover:text-fg hover:bg-bg-elevated",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      {/* Render both icons; CSS hides one based on .dark to avoid hydration mismatch */}
      <svg
        className={cn("h-4 w-4 transition-opacity", mode === "dark" ? "opacity-0 absolute" : "opacity-100")}
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg
        className={cn("h-4 w-4 transition-opacity", mode === "dark" ? "opacity-100" : "opacity-0 absolute")}
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <span className="sr-only">{mounted ? mode : "theme"}</span>
    </button>
  );
}
