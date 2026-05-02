'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/app/_components/lib/cn-class-merger';

interface LayeredButtonProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
}

// Two-layer pill button: top label slides right on hover to reveal arrow.
export default function ThithoHeroLayeredSlideArrowButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  onClick,
}: LayeredButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  } as const;

  const variants = {
    default: { bottom: 'bg-bg-muted/60 border-border', top: 'bg-bg hover:bg-bg-muted', text: 'text-fg' },
    primary: { bottom: 'bg-accent/20 border-accent/40', top: 'bg-accent hover:bg-accent-strong', text: 'text-accent-fg' },
    secondary: { bottom: 'bg-bg-muted/60 border-border', top: 'bg-bg-elevated hover:bg-bg-muted', text: 'text-fg' },
  } as const;

  const v = variants[variant];

  const content = (
    <div className={cn('relative group cursor-pointer inline-flex items-center rounded-lg overflow-hidden border', v.bottom, className)}>
      <div
        className={cn(
          'relative rounded-lg border border-transparent z-10 font-semibold shadow-sm transition-all duration-300 ease-out group-hover:translate-x-8 group-hover:shadow-lg',
          v.top,
          v.text,
          sizeClasses[size]
        )}
      >
        {children}
      </div>
      <div className="flex items-center justify-center w-8 h-full">
        <svg
          className="w-5 h-5 text-fg/40 group-hover:text-fg/80 transition-all duration-300 ease-out"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
