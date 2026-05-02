import Image from "next/image";
import { Container } from "@/app/_components/ui/container-wrapper";

/**
 * Bento — Coronet-inspired 5-card grid.
 * Layout (desktop):
 *   2 stacked left  ·  1 tall center (phone-mockup style)  ·  2 stacked right
 * Layout (mobile): single column.
 *
 * Cards: rounded-3xl, light bg in light mode, prussian-blue/elevated bg in dark.
 * Each card has small image preview + bold short title + 1-line caption.
 */

type Card = {
  title: string;
  caption: string;
  image: string;
};

const LEFT_TOP: Card = {
  title: "Block ghép như Lego",
  caption: "Kéo thả block, đổi thứ tự, layout không vỡ.",
  image: "/hero-tiles/localhost-3002-vi-themes-luxury.png",
};
const LEFT_BOTTOM: Card = {
  title: "25+ trang sẵn sàng",
  caption: "Home, PDP, cart, checkout, blog — đầy đủ.",
  image: "/hero-tiles/localhost-3002-vi-pricing.png",
};
const CENTER: Card = {
  title: "Demo store thật",
  caption: "Cài là chạy, không cần sửa code.",
  image: "/hero-tiles/default-demo-localhost-3000-vi.png",
};
const RIGHT_TOP: Card = {
  title: "Design token tách lớp",
  caption: "Đổi màu brand một dòng, cả site đồng bộ.",
  image: "/hero-tiles/localhost-3002-vi-themes-trendy.png",
};
const RIGHT_BOTTOM: Card = {
  title: "Multi-store thật",
  caption: "Mỗi brand domain riêng, kho riêng — chung 1 dashboard.",
  image: "/hero-tiles/watch-shop-demo-localhost-3000-vi.png",
};

function SmallCard({ card }: { card: Card }) {
  return (
    <div className="group rounded-3xl bg-bg-elevated ring-1 ring-border p-5 sm:p-6 flex flex-col gap-4 shadow-soft">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-bg-muted ring-1 ring-border">
        <Image
          src={card.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 360px"
          className="object-cover object-top"
        />
      </div>
      <div>
        <h3 className="font-display text-[20px] sm:text-[22px] font-bold tracking-tight text-fg leading-tight">
          {card.title}
        </h3>
        <p className="mt-1.5 text-[13.5px] leading-snug text-fg-muted">
          {card.caption}
        </p>
      </div>
    </div>
  );
}

function CenterCard({ card }: { card: Card }) {
  return (
    <div className="rounded-3xl bg-bg-elevated ring-1 ring-border p-6 sm:p-8 flex flex-col gap-6 shadow-card h-full justify-center">
      {/* Phone-mockup: plain styled div as phone frame, screenshot inside */}
      <div className="relative mx-auto aspect-[9/19.5] w-[200px] sm:w-[220px] rounded-[44px] bg-black p-[6px] ring-1 ring-white/10 shadow-2xl">
        <div className="relative h-full w-full rounded-[38px] overflow-hidden bg-bg">
          <Image
            src={card.image}
            alt=""
            fill
            sizes="220px"
            className="object-cover object-top"
          />
        </div>
        {/* dynamic island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-16 rounded-full bg-black" />
      </div>
      <div className="text-center">
        <h3 className="font-display text-2xl font-bold tracking-tight text-fg leading-tight">
          {card.title}
        </h3>
        <p className="mt-2 text-sm leading-snug text-fg-muted max-w-[260px] mx-auto">
          {card.caption}
        </p>
      </div>
    </div>
  );
}

export function HomeFeatureGroupASection({ locale: _locale }: { locale: string }) {
  return (
    <section className="bg-bg py-24 sm:py-28">
      <Container size="xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-bg-muted ring-1 ring-border px-3.5 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-fg-muted">
            Tính năng
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-[-0.03em] leading-[1.04] text-fg">
            Đủ thứ cần để
            <br />
            <span style={{ color: "var(--color-accent-600)" }}>
              vận hành nghiêm túc.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-fg-muted">
            Module tách bạch, chỉnh được tới từng block.
          </p>
        </div>

        {/* Bento grid: 1 col mobile, 3 cols desktop with center spanning 2 rows */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:auto-rows-fr">
          {/* Left column */}
          <div className="flex flex-col gap-5">
            <SmallCard card={LEFT_TOP} />
            <SmallCard card={LEFT_BOTTOM} />
          </div>

          {/* Center tall */}
          <div className="lg:row-span-1">
            <CenterCard card={CENTER} />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-5">
            <SmallCard card={RIGHT_TOP} />
            <SmallCard card={RIGHT_BOTTOM} />
          </div>
        </div>
      </Container>
    </section>
  );
}
