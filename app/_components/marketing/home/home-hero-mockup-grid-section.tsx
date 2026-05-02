'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ThithoHeroLayeredSlideArrowButton from './_thitho/thitho-hero-layered-slide-arrow-button';

/**
 * Hero — Thitho-style: tilted card straightens on scroll (rotateX 30->0,
 * scale 0.985->1, translateY -8->32, easeOutExpo, rAF lerp).
 * Theme-aware via <html>.classList.contains('dark') observation.
 */

function useDarkClassObserver(): boolean {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const html = document.documentElement;
    const update = () => setIsDark(html.classList.contains('dark'));
    update();
    const obs = new MutationObserver(update);
    obs.observe(html, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);
  return isDark;
}

export function HomeHeroSection({ locale }: { locale: string }) {
  // theme observer kept for future use; bg now uses radial overlay only
  useDarkClassObserver();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const startPxRef = useRef<number>(8);
  const endPxRef = useRef<number>(0);
  const [rotationX, setRotationX] = useState<number>(30);
  const [scale, setScale] = useState<number>(0.985);
  const [translateY, setTranslateY] = useState<number>(-8);
  const targetRotRef = useRef<number>(30);
  const targetScaleRef = useRef<number>(0.985);
  const targetTyRef = useRef<number>(-8);

  useEffect(() => {
    const computeTargets = () => {
      if (!containerRef.current) return;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (endPxRef.current === 0) {
        startPxRef.current = 8;
        endPxRef.current = startPxRef.current + viewportHeight * 0.75;
      }
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const startPx = startPxRef.current;
      const endPx = endPxRef.current;
      const clamped = clamp((scrollY - startPx) / Math.max(endPx - startPx, 1), 0, 1);
      const eased = easeOutExpo(clamped);
      targetRotRef.current = lerp(30, 0, eased);
      targetScaleRef.current = lerp(0.985, 1, eased);
      targetTyRef.current = lerp(-8, 32, eased);
    };

    computeTargets();
    let rafId = 0;
    const tick = () => {
      setRotationX((p) => p + (targetRotRef.current - p) * 0.15);
      setScale((p) => p + (targetScaleRef.current - p) * 0.12);
      setTranslateY((p) => p + (targetTyRef.current - p) * 0.15);
      rafId = window.requestAnimationFrame(tick);
    };
    rafId = window.requestAnimationFrame(tick);
    const onScrollOrResize = () => computeTargets();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-bg">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(60% 50% at 50% 22%, var(--prussian-blue) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 w-full px-6 lg:px-16 xl:px-20 2xl:px-32 pt-14 md:pt-22">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative inline-flex items-center justify-center rounded-full border border-accent/30 bg-gradient-to-r from-accent/10 via-accent/15 to-accent/10 px-8 py-3 text-base md:text-lg font-semibold shadow-lg backdrop-blur-sm">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/5 to-accent/10 blur-xl" />
            <span className="relative bg-gradient-to-r from-accent-strong via-accent to-accent-strong bg-clip-text text-transparent">
              Thiết kế cửa hàng của bạn để kinh doanh ngay hôm nay.
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl md:text-7xl font-extrabold leading-tight tracking-tight text-fg">
            Nhiều cửa hàng.
            <br className="hidden md:block" />
            <span className="text-accent">Một dashboard.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-fg-muted">
            Chạy trên VPS của bạn. Mã nguồn mở. Không bị khóa nền tảng.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ThithoHeroLayeredSlideArrowButton href={`/${locale}/themes`} variant="primary" size="md">
              Trải nghiệm ngay
            </ThithoHeroLayeredSlideArrowButton>
            <Link
              href={`/${locale}/themes`}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg hover:bg-bg-muted transition-colors"
            >
              Khám phá theme
            </Link>
          </div>
        </div>

        <div className="relative mt-6 md:mt-8 pb-16 lg:pb-24">
          <div
            className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.35)] transition-shadow duration-300 dark:shadow-[0_30px_120px_rgba(0,0,0,0.6),_0_0_100px_var(--prussian-blue)]"
            style={{
              transformStyle: 'preserve-3d',
              transform: `perspective(1800px) rotateX(${rotationX}deg) translateY(${translateY}px) scale(${scale})`,
              transformOrigin: 'top center',
              transition: 'transform 0.06s linear',
              willChange: 'transform',
            }}
          >
            <div className="relative bg-bg border-8 border-border rounded-3xl p-4">
              <Image
                src="/hero-tiles/localhost-3002-vi-themes.png"
                alt="Ecommua dashboard preview"
                width={1480}
                height={950}
                priority
                className="h-auto w-full select-none rounded-2xl"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-border/20" aria-hidden />
          </div>
        </div>
      </div>

    </section>
  );
}

function easeOutExpo(x: number) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}
