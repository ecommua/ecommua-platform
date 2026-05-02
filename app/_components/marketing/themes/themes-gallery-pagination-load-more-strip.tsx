/**
 * Section 04 — pagination / load-more strip.
 * Static for now (no real pagination since 6 themes fits in one page).
 */

export function ThemesLoadMore({ shown, total }: { shown: number; total: number }) {
  const allShown = shown >= total;
  return (
    <div className="mt-14 flex flex-col items-center gap-4 border-t border-border pt-10">
      <p className="text-sm text-fg-muted tabular-nums">
        Showing <span className="font-semibold text-fg">{shown}</span> of{" "}
        <span className="font-semibold text-fg">{total}</span> templates
      </p>
      <button
        type="button"
        disabled={allShown}
        className="inline-flex h-11 items-center gap-2 rounded-xl bg-bg-elevated ring-1 ring-inset ring-border px-6 text-sm font-semibold text-fg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {allShown ? "All templates loaded" : "Load more templates"}
        {!allShown && (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        )}
      </button>
    </div>
  );
}
