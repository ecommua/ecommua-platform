import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'

// Post shape — subset of generated payload-types; extended once generate:types runs
type Post = {
  id: string | number
  title: string
  slug: string
  excerpt?: string | null
  publishedAt?: string | null
  status: string
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'vi' ? 'Blog | ecommua' : 'Blog | ecommua',
  }
}

// Blog list page — renders all published posts for a given locale
export default async function BlogListPage({ params }: Props) {
  const { locale } = await params
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'posts',
    where: { status: { equals: 'published' } },
    locale: locale as 'vi' | 'en',
    limit: 20,
    sort: '-publishedAt',
  })

  const posts = result.docs as Post[]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {locale === 'vi' ? 'Blog' : 'Blog'}
      </h1>

      {posts.length === 0 ? (
        <p className="text-gray-500">
          {locale === 'vi' ? 'Chưa có bài viết nào.' : 'No posts yet.'}
        </p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="border-b pb-8 last:border-0">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                <a
                  href={`/${locale}/blog/${post.slug}`}
                  className="hover:text-indigo-600 transition-colors"
                >
                  {post.title}
                </a>
              </h2>

              {post.excerpt && (
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{post.excerpt}</p>
              )}

              <div className="flex items-center gap-4 text-xs text-gray-400">
                {post.publishedAt && (
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US')}
                  </time>
                )}
                <a
                  href={`/${locale}/blog/${post.slug}`}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  {locale === 'vi' ? 'Đọc tiếp →' : 'Read more →'}
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
