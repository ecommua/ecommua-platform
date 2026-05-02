import { cn } from "../lib/cn-class-merger";

/**
 * Live preview frame primitives — desktop browser chrome + mobile phone frame.
 * Used on theme detail page to render iframe at native viewport, scaled for fit.
 */

export function DesktopPreviewFrame({
  src,
  url,
  title,
  className,
}: {
  src: string;
  url: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-slate-200 bg-white shadow-lift overflow-hidden", className)}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-rose-400/90" />
        <span className="h-3 w-3 rounded-full bg-amber-400/90" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
        <div className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-xs font-mono text-slate-500 ring-1 ring-slate-200/80 shadow-soft">
          <span className="text-emerald-600">●</span> {url}
        </div>
        <div className="hidden sm:flex items-center gap-1 text-slate-400">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path strokeLinecap="round" d="M12 5v14m-7-7h14" />
          </svg>
        </div>
      </div>
      {/* Iframe — render at 1440 viewport, scale to container */}
      <div className="relative aspect-[1440/900] overflow-hidden bg-white">
        <iframe
          src={src}
          title={title}
          className="absolute top-0 left-0 origin-top-left"
          style={{ width: "1440px", height: "900px", transform: "scale(0.6667)" }}
        />
      </div>
    </div>
  );
}

export function MobilePreviewFrame({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative rounded-[2.75rem] border-[12px] border-slate-900 bg-slate-900 shadow-lift overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-slate-900 rounded-b-2xl z-10" />
        {/* Side button hints */}
        <div aria-hidden className="absolute -left-[14px] top-20 h-12 w-1 rounded-l bg-slate-900" />
        <div aria-hidden className="absolute -right-[14px] top-28 h-16 w-1 rounded-r bg-slate-900" />
        <iframe
          src={src}
          title={title}
          className="block bg-white"
          style={{ width: "390px", height: "844px" }}
        />
      </div>
      <p className="mt-4 text-xs text-slate-500 font-mono tracking-wide">390 × 844 · iPhone 14</p>
    </div>
  );
}
