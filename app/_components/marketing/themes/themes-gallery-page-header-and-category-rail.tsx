import Link from "next/link";
import { Container } from "../../ui/container-wrapper";
import { cn } from "../../lib/cn-class-merger";

/**
 * Section 01 — top sub-nav: search input on left, page title on right.
 * Mirrors Webflow templates marketplace header strip.
 */

export function ThemesPageHeader({
  locale,
  filter,
  totalCount,
}: {
  locale: string;
  filter: string | null;
  totalCount: number;
}) {
  return (
    <section className="border-b border-border">
      <Container size="xl" className="py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 lg:gap-12 items-center">
          {/* Search */}
          <form action={`/${locale}/themes`} method="get" className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-fg-muted"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
            </svg>
            <input
              type="search"
              name="q"
              placeholder="Tìm theme cho ngành của bạn"
              className={cn(
                "w-full h-11 rounded-xl bg-bg-elevated text-fg placeholder:text-fg-muted",
                "ring-1 ring-inset ring-border focus:ring-2 focus:ring-ring focus:outline-none",
                "pl-11 pr-4 text-sm transition-all",
              )}
            />
          </form>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.025em] text-fg leading-tight">
            {filter ? (
              <>
                Kết quả cho <span className="text-brand">"{filter}"</span>
              </>
            ) : (
              <>
                Theme bán sẵn cho mọi ngành{" "}
                <span className="text-fg-muted font-normal text-2xl lg:text-3xl">
                  · {totalCount}
                </span>
              </>
            )}
          </h1>
        </div>
      </Container>
    </section>
  );
}

/**
 * Vertical category list — left rail. Each row: small icon + label + count.
 * Matches Webflow's sidebar pattern (no background pill, just spaced rows).
 */
export function ThemesCategoryRail({
  locale,
  filter,
  industries,
  counts,
  total,
}: {
  locale: string;
  filter: string | null;
  industries: string[];
  counts: Record<string, number>;
  total: number;
}) {
  return (
    <nav aria-label="Lọc theo ngành" className="lg:sticky lg:top-24 lg:self-start">
      <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-muted mb-5">
        Browse by industry
      </div>
      <ul className="space-y-1">
        <CategoryRow
          href={`/${locale}/themes`}
          active={!filter}
          label="All templates"
          count={total}
          icon="grid"
        />
        <CategoryRow
          href={`/${locale}/themes?industry=featured`}
          active={filter === "featured"}
          label="Featured"
          count={1}
          icon="star"
        />
        {industries.map((ind) => (
          <CategoryRow
            key={ind}
            href={`/${locale}/themes?industry=${ind}`}
            active={filter === ind}
            label={cap(ind)}
            count={counts[ind] ?? 0}
            icon="dot"
          />
        ))}
      </ul>
    </nav>
  );
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function CategoryRow({
  href,
  active,
  label,
  count,
  icon,
}: {
  href: string;
  active: boolean;
  label: string;
  count: number;
  icon: "grid" | "star" | "dot";
}) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "group flex items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors",
          active
            ? "text-brand font-semibold"
            : "text-fg-muted hover:text-fg",
        )}
      >
        <CategoryIcon kind={icon} active={active} />
        <span className="flex-1 truncate">{label}</span>
        <span
          className={cn(
            "font-mono text-[10px] tabular-nums",
            active ? "text-brand" : "text-fg-muted/70",
          )}
        >
          {count}
        </span>
      </Link>
    </li>
  );
}

function CategoryIcon({ kind, active }: { kind: "grid" | "star" | "dot"; active: boolean }) {
  const cls = cn("h-4 w-4 shrink-0", active ? "text-brand" : "text-fg-muted/70");
  if (kind === "grid")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    );
  if (kind === "star")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden>
        <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6L12 17l-5.5 2.9 1.1-6L3.2 9.4l6.1-.9L12 3z" />
      </svg>
    );
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
