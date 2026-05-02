/**
 * Static theme catalog for the marketplace gallery.
 *
 * Mirrors ecommua-themes/<vertical>/<style>/manifest.ts plus the demo siteCode
 * served from ecommua-storefront. Until Payload `themes` collection is seeded
 * + admin-managed, this static array is the source of truth for the gallery.
 */

export interface ThemeMeta {
  /** Theme directory name = manifest.ts `name` field. */
  slug: string;
  /** Marketing-facing display name. */
  displayName: string;
  /** One-liner shown on cards + hero. */
  tagline: string;
  /** Long description for the detail page. */
  description: string;
  /** Industry vertical (folder taxonomy): watch / fashion / electronics / general / ... */
  vertical: string;
  /** Visual style positioning. */
  style: string;
  /** Free-form industry tags for filter chips. */
  industries: readonly string[];
  /** Brand accent color (oklch) for card hover + detail hero. */
  accent: string;
  /** Storefront siteCode that serves a live demo, OR null if not yet deployed. */
  previewSiteCode: string | null;
  /** Feature highlights shown as bullet list on detail page. */
  features: readonly string[];
  /** Pricing in VND for one-time purchase. */
  priceVnd: number;
  /** Semver. */
  version: string;
}

export const THEMES: readonly ThemeMeta[] = [
  {
    slug: "luxury",
    displayName: "Watch Shop — Luxury",
    tagline: "Editorial dark-gold cho boutique đồng hồ cao cấp",
    description:
      "Theme luxury serif typography, palette gold-on-charcoal, layout editorial. Phù hợp boutique đồng hồ Thụy Sĩ, jewelry, cao cấp. Image-led PDP với gallery zoom, story-driven brand pages.",
    vertical: "watch",
    style: "luxury",
    industries: ["watch", "jewelry", "luxury"],
    accent: "oklch(0.72 0.14 80)",
    previewSiteCode: "watch-shop-demo",
    features: [
      "Editorial homepage với hero full-bleed",
      "Product detail page gallery zoom + 360°",
      "Brand story sections — long-form storytelling",
      "Serif Playfair Display + sans Inter",
      "Dark mode native",
    ],
    priceVnd: 2_990_000,
    version: "0.3.0",
  },
  {
    slug: "trendy",
    displayName: "Ecommua Fashion",
    tagline: "Trendy bold cho thời trang trẻ và beauty",
    description:
      "Theme trendy editorial grid, bold colors, mobile-first. Tối ưu cho fast-fashion, streetwear, beauty brands. Lookbook gallery, swatch picker, size guide.",
    vertical: "fashion",
    style: "trendy",
    industries: ["fashion", "beauty"],
    accent: "oklch(0.65 0.22 355)",
    previewSiteCode: "fashion-demo",
    features: [
      "Lookbook editorial grid",
      "Color swatch picker với live preview",
      "Size guide modal + measurements",
      "Instagram-style product gallery",
      "Sale countdown banners",
    ],
    priceVnd: 2_490_000,
    version: "1.2.0",
  },
  {
    slug: "art",
    displayName: "Artemis — Gallery",
    tagline: "Gallery layout cho thủ công, nghệ thuật, craft",
    description:
      "Theme nghệ thuật bold typography + portfolio grid. Phù hợp gallery, thủ công mỹ nghệ, ceramic, fine art. Masonry layout, story per product.",
    vertical: "fashion",
    style: "art",
    industries: ["fashion", "art", "craft"],
    accent: "oklch(0.55 0.18 25)",
    previewSiteCode: null,
    features: [
      "Portfolio masonry layout",
      "Long-form product narrative",
      "Artist bio + atelier story",
      "Bold display typography",
      "Editorial blog templates",
    ],
    priceVnd: 2_790_000,
    version: "0.3.0",
  },
  {
    slug: "casual",
    displayName: "Used Phones — Casual Tech",
    tagline: "Tech-forward cho điện tử và hàng second-hand",
    description:
      "Theme tech-forward layout đơn giản, trust-first. Phù hợp cửa hàng điện thoại, second-hand, electronics. Comparison table, condition badge, warranty info.",
    vertical: "electronics",
    style: "casual",
    industries: ["electronics", "tech"],
    accent: "oklch(0.55 0.16 250)",
    previewSiteCode: "used-phones-demo",
    features: [
      "Spec comparison table",
      "Condition badge (mint/good/fair)",
      "Warranty + return policy block",
      "Quick-add bulk inventory",
      "Tech-forward sans typography",
    ],
    priceVnd: 1_990_000,
    version: "1.2.0",
  },
  {
    slug: "default",
    displayName: "Ecommua Default",
    tagline: "Theme chuẩn — clean, accessible, mọi ngành",
    description:
      "Theme mặc định general-purpose, clean accessible. Tối ưu cho merchant chưa chọn theme ngành. Component baseline cho mọi industry.",
    vertical: "general",
    style: "default",
    industries: ["general"],
    accent: "oklch(0.55 0.05 250)",
    previewSiteCode: "default-demo",
    features: [
      "Component baseline 24 slots",
      "Accessible WCAG AA",
      "Light + dark mode",
      "Mobile-first responsive",
      "Fast LCP <2s",
    ],
    priceVnd: 990_000,
    version: "0.2.0",
  },
  {
    slug: "aimeos-default",
    displayName: "Aimeos Default",
    tagline: "Aimeos baseline — fallback cho mọi store",
    description:
      "Theme baseline Aimeos cho store mới. Khi chưa chọn theme ngành, mọi merchant render bằng theme này. Đảm bảo không vỡ checkout dù bất kỳ scenario.",
    vertical: "general",
    style: "aimeos-default",
    industries: ["general"],
    accent: "oklch(0.55 0.04 250)",
    previewSiteCode: "default-demo",
    features: [
      "Aimeos JSON:API direct mapping",
      "Fallback theme an toàn",
      "Tất cả 24 slots core",
      "Multi-currency baseline",
      "Multi-language baseline",
    ],
    priceVnd: 0,
    version: "0.3.0",
  },
] as const;

/** Lookup helper for the detail page route handler. */
export function getThemeBySlug(slug: string): ThemeMeta | null {
  return THEMES.find((t) => t.slug === slug) ?? null;
}

/** Storefront base URL — wildcard subdomain serves siteCode. */
export const STOREFRONT_BASE =
  process.env.NEXT_PUBLIC_STOREFRONT_URL ?? "http://localhost:3000";

/** Build live demo URL for a theme — null if no demo is provisioned. */
export function buildPreviewUrl(theme: ThemeMeta, locale = "vi"): string | null {
  if (!theme.previewSiteCode) return null;
  // Storefront proxy: subdomain → siteCode header. Local dev uses .localhost.
  // Production: <siteCode>.ecommua.vn
  const url = new URL(STOREFRONT_BASE);
  // Replace localhost with siteCode.localhost for local dev
  if (url.hostname === "localhost") {
    return `${url.protocol}//${theme.previewSiteCode}.localhost:${url.port || "3000"}/${locale}`;
  }
  return `${url.protocol}//${theme.previewSiteCode}.${url.hostname}${url.port ? ":" + url.port : ""}/${locale}`;
}

/** Industry filter chip color presets. */
export const INDUSTRY_COLORS: Record<string, string> = {
  general: "bg-slate-100 text-slate-700 ring-slate-200",
  watch: "bg-amber-100 text-amber-800 ring-amber-200",
  jewelry: "bg-yellow-100 text-yellow-800 ring-yellow-200",
  luxury: "bg-amber-50 text-amber-900 ring-amber-300",
  fashion: "bg-pink-100 text-pink-800 ring-pink-200",
  beauty: "bg-rose-100 text-rose-800 ring-rose-200",
  art: "bg-purple-100 text-purple-800 ring-purple-200",
  craft: "bg-orange-100 text-orange-800 ring-orange-200",
  electronics: "bg-blue-100 text-blue-800 ring-blue-200",
  tech: "bg-cyan-100 text-cyan-800 ring-cyan-200",
};

export function industryClass(name: string): string {
  return INDUSTRY_COLORS[name] ?? "bg-slate-100 text-slate-700 ring-slate-200";
}

export function formatVnd(amount: number): string {
  if (amount === 0) return "Miễn phí";
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(amount);
}
