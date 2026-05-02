/**
 * Themes gallery — pixel-perfect rebuild per ref/homepage-templates/full.png.
 * Layout: search+title strip → 2-col [category rail | content] → CTA band.
 * Content stack: featured banner → grid → load-more.
 */

import { Container } from "@/app/_components/ui/container-wrapper";
import { THEMES } from "./themes-static-data";
import {
  ThemesPageHeader,
  ThemesCategoryRail,
} from "@/app/_components/marketing/themes/themes-gallery-page-header-and-category-rail";
import { ThemesFeaturedCard } from "@/app/_components/marketing/themes/themes-gallery-featured-template-banner";
import { ThemesGridCard } from "@/app/_components/marketing/themes/themes-gallery-grid-card-thumbnail";
import { ThemesLoadMore } from "@/app/_components/marketing/themes/themes-gallery-pagination-load-more-strip";
import { ThemesCtaBand } from "@/app/_components/marketing/themes/themes-gallery-create-and-sell-cta-band";

interface ThemesPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
  params: Promise<{ locale: string }>;
}

export default async function ThemesPage({ searchParams, params }: ThemesPageProps) {
  const sp = await searchParams;
  const { locale } = await params;
  const filter = typeof sp.industry === "string" ? sp.industry : null;

  const list = filter && filter !== "featured"
    ? THEMES.filter((t) => t.industries.includes(filter))
    : THEMES;

  const allIndustries = Array.from(new Set(THEMES.flatMap((t) => t.industries))).sort();
  const counts: Record<string, number> = {};
  for (const ind of allIndustries) {
    counts[ind] = THEMES.filter((t) => t.industries.includes(ind)).length;
  }

  // Featured = first theme; rest go in 3-col grid
  const [featured, ...rest] = list;

  return (
    <>
      {/* 01. Header strip — search + page title */}
      <ThemesPageHeader locale={locale} filter={filter} totalCount={THEMES.length} />

      {/* 02–04. Sidebar + content (featured banner, grid, load more) */}
      <Container size="xl" className="py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
          <ThemesCategoryRail
            locale={locale}
            filter={filter}
            industries={allIndustries}
            counts={counts}
            total={THEMES.length}
          />

          <div>
            {list.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-border bg-bg-elevated py-24 text-center">
                <div className="text-fg-muted font-medium">
                  Chưa có theme nào cho ngành{" "}
                  <strong className="text-fg capitalize">{filter}</strong>.
                </div>
              </div>
            ) : (
              <>
                {/* 02. Featured banner */}
                {featured && (
                  <div className="mb-10">
                    <ThemesFeaturedCard theme={featured} locale={locale} />
                  </div>
                )}

                {/* 03. Grid */}
                {rest.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
                    {rest.map((theme) => (
                      <ThemesGridCard key={theme.slug} theme={theme} locale={locale} />
                    ))}
                  </div>
                )}

                {/* 04. Load more */}
                <ThemesLoadMore shown={list.length} total={THEMES.length} />
              </>
            )}
          </div>
        </div>
      </Container>

      {/* 05. CTA band */}
      <ThemesCtaBand locale={locale} />
    </>
  );
}
