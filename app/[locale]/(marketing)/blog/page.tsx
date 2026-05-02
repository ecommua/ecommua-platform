/**
 * Blog list — magazine-grade list, reads from Payload `posts` collection.
 * Featured first post hero, then grid.
 */

import Link from "next/link";
import { getPayload } from "payload";
import config from "@payload-config";
import type { Metadata } from "next";
import { Container } from "@/app/_components/ui/container-wrapper";
import { Badge } from "@/app/_components/ui/badge-primitive";

type Post = {
  id: string | number;
  title: string;
  slug: string;
  excerpt?: string | null;
  publishedAt?: string | null;
  status: string;
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "vi" ? "Blog" : "Blog",
  };
}

export default async function BlogListPage({ params }: Props) {
  const { locale } = await params;
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "posts",
    where: { status: { equals: "published" } },
    locale: locale as "vi" | "en",
    limit: 20,
    sort: "-publishedAt",
  });

  const posts = result.docs as Post[];
  const [featured, ...rest] = posts;

  const fmt = (d?: string | null) =>
    d ? new Date(d).toLocaleDateString(locale === "vi" ? "vi-VN" : "en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }) : "";

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden border-b border-slate-200/60">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/30 to-white" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]" />

        <Container size="xl" className="pt-20 pb-12">
          <Badge variant="brand" className="mb-5">Blog</Badge>
          <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-[-0.035em] leading-[1.05] text-slate-900 max-w-3xl">
            Tâm sự, ghi chú, câu chuyện<br />
            <span className="text-slate-500">từ team xây Ecommua.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Bài viết về thương mại điện tử Việt Nam, multi-tenant architecture, theme design và open-source.
          </p>
        </Container>
      </section>

      {/* ── List ─────────────────────────────────────────────────── */}
      <Container size="xl" className="py-16">
        {posts.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-slate-200 bg-white py-32 text-center">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <svg className="h-6 w-6 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-slate-500 font-semibold">
              {locale === "vi" ? "Chưa có bài viết nào." : "No posts yet."}
            </p>
            <p className="mt-1 text-sm text-slate-400">
              {locale === "vi" ? "Quay lại sau nhé." : "Check back soon."}
            </p>
          </div>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <Link
                href={`/${locale}/blog/${featured.slug}`}
                className="group block mb-16 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 sm:p-14 ring-1 ring-slate-900 shadow-lift hover:shadow-glow transition-all relative overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute -top-32 -right-20 h-96 w-96 rounded-full opacity-30 blur-3xl"
                  style={{ background: "radial-gradient(closest-side, oklch(0.65 0.18 235 / 0.7), transparent)" }}
                />
                <div className="relative max-w-3xl">
                  <Badge variant="soft" className="mb-5 bg-white/10 text-white ring-white/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Bài mới nhất
                  </Badge>
                  <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.025em] leading-[1.05] text-white group-hover:text-brand-200 transition-colors">
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p className="mt-5 text-lg text-slate-300 leading-relaxed line-clamp-3">
                      {featured.excerpt}
                    </p>
                  )}
                  <div className="mt-7 flex items-center gap-4 text-sm text-slate-400">
                    {featured.publishedAt && (
                      <time dateTime={featured.publishedAt} className="font-mono">
                        {fmt(featured.publishedAt)}
                      </time>
                    )}
                    <span className="text-slate-600">·</span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-white group-hover:gap-2.5 transition-all">
                      {locale === "vi" ? "Đọc tiếp" : "Read more"}
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {/* Rest grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <Link
                    key={post.id}
                    href={`/${locale}/blog/${post.slug}`}
                    className="group flex flex-col rounded-2xl bg-white ring-1 ring-slate-200 hover:ring-slate-300 p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-0.5"
                  >
                    {post.publishedAt && (
                      <time
                        dateTime={post.publishedAt}
                        className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 mb-3"
                      >
                        {fmt(post.publishedAt)}
                      </time>
                    )}
                    <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900 leading-snug group-hover:text-brand-700 transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                      {locale === "vi" ? "Đọc tiếp" : "Read more"}
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
}
