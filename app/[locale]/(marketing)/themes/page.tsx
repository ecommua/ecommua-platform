/**
 * themes/page.tsx — Platform theme gallery.
 *
 * Reads theme metadata from a static snapshot of ecommua-themes manifests so
 * the gallery is always in sync with shipped themes without requiring a DB seed
 * or cross-package import at runtime.
 *
 * Preview link → storefront /vi/themes/<style>/preview (opens in new tab).
 * Payload `themes` collection is left intact for future marketplace use.
 *
 * Optional filter: ?industry=watch narrows cards to matching industry tags.
 */

import type { ReadonlyURLSearchParams } from "next/navigation";

// ── Static manifest snapshot ──────────────────────────────────────────────────
// Kept in sync with ecommua-themes/themes/*/manifest.ts via codegen or manual update.

interface ThemeSnapshot {
  style: string;
  displayName: string;
  description: string;
  industries: string[];
  version: string;
}

const THEMES: readonly ThemeSnapshot[] = [
  {
    style: "aimeos-default",
    displayName: "Aimeos Default",
    description: "Theme mặc định Aimeos — dùng cho mọi store khi chưa chọn theme ngành. Clean, accessible, general-purpose.",
    industries: ["general"],
    version: "0.3.0",
  },
  {
    style: "art",
    displayName: "Artemis — Gallery",
    description: "Theme nghệ thuật dành cho thời trang, gallery, thủ công mỹ nghệ. Editorial layout, bold typography.",
    industries: ["fashion", "art", "craft"],
    version: "0.3.0",
  },
  {
    style: "casual",
    displayName: "Used Phones — Casual Tech",
    description: "Theme thân thiện cho thiết bị điện tử, hàng second-hand. Tông màu sáng, layout đơn giản.",
    industries: ["electronics", "general"],
    version: "1.2.0",
  },
  {
    style: "default",
    displayName: "Ecommua Default",
    description: "Theme mặc định — dùng cho mọi merchant khi chưa chọn theme ngành. General-purpose, clean, accessible.",
    industries: ["general"],
    version: "0.2.0",
  },
  {
    style: "luxury",
    displayName: "Watch Shop — Luxury",
    description: "Luxury dark-gold theme cho boutique đồng hồ cao cấp. Editorial layout, serif typography, gold accent.",
    industries: ["watch", "jewelry", "fashion"],
    version: "0.3.0",
  },
  {
    style: "trendy",
    displayName: "Ecommua Fashion",
    description: "Theme thời trang trẻ trung, beauty. Bold colors, editorial grid, mobile-first.",
    industries: ["fashion", "beauty"],
    version: "1.2.0",
  },
] as const;

// ── Industry badge colors ─────────────────────────────────────────────────────

const INDUSTRY_BADGE: Record<string, string> = {
  general: "bg-gray-100 text-gray-700",
  watch: "bg-amber-100 text-amber-800",
  jewelry: "bg-yellow-100 text-yellow-800",
  fashion: "bg-purple-100 text-purple-800",
  art: "bg-pink-100 text-pink-800",
  craft: "bg-orange-100 text-orange-800",
  electronics: "bg-blue-100 text-blue-800",
  beauty: "bg-rose-100 text-rose-800",
};

function badgeClass(industry: string): string {
  return INDUSTRY_BADGE[industry] ?? "bg-slate-100 text-slate-700";
}

// ── Storefront URL ────────────────────────────────────────────────────────────

const STOREFRONT_URL =
  process.env.NEXT_PUBLIC_STOREFRONT_URL ?? "http://localhost:3000";

// ── Page ──────────────────────────────────────────────────────────────────────

interface ThemesPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ThemesPage({ searchParams }: ThemesPageProps) {
  const sp = await searchParams;
  const industryFilter = typeof sp.industry === "string" ? sp.industry : null;

  const filtered = industryFilter
    ? THEMES.filter((t) => t.industries.includes(industryFilter))
    : THEMES;

  // Collect unique industry tags for filter bar
  const allIndustries = Array.from(
    new Set(THEMES.flatMap((t) => t.industries))
  ).sort();

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Danh sách chủ đề</h1>
        <p className="mt-1 text-sm text-gray-500">
          {filtered.length}/{THEMES.length} theme
          {industryFilter ? ` · ngành ${industryFilter}` : ""}
        </p>
      </div>

      {/* Industry filter bar */}
      <div className="mb-6 flex flex-wrap gap-2">
        <a
          href="?"
          className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
            !industryFilter
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300"
          }`}
        >
          Tất cả
        </a>
        {allIndustries.map((ind) => (
          <a
            key={ind}
            href={`?industry=${encodeURIComponent(ind)}`}
            className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors capitalize ${
              industryFilter === ind
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300"
            }`}
          >
            {ind}
          </a>
        ))}
      </div>

      {/* Theme cards grid */}
      {filtered.length === 0 ? (
        <p className="py-16 text-center text-gray-400">
          Không có theme nào cho ngành &ldquo;{industryFilter}&rdquo;.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((theme) => (
            <div
              key={theme.style}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Screenshot placeholder */}
              <div className="h-40 bg-indigo-50 flex items-center justify-center text-gray-300 text-xs font-mono">
                {theme.style}
              </div>

              {/* Card body */}
              <div className="p-4">
                {/* Name + version */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h2 className="font-semibold text-gray-900 leading-tight line-clamp-1">
                    {theme.displayName}
                  </h2>
                  <span className="shrink-0 text-xs text-gray-400 font-mono">
                    v{theme.version}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                  {theme.description}
                </p>

                {/* Industry badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {theme.industries.map((ind) => (
                    <span
                      key={ind}
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize ${badgeClass(ind)}`}
                    >
                      {ind}
                    </span>
                  ))}
                </div>

                {/* Preview CTA */}
                <a
                  href={`${STOREFRONT_URL}/vi/themes/${theme.style}/preview`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-indigo-600 text-indigo-600 text-sm py-1.5 rounded hover:bg-indigo-50 transition-colors"
                >
                  Xem trước ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
