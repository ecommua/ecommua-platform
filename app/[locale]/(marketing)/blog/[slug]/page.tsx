import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

// Post shape — subset of generated payload-types; extended once generate:types runs
type Post = {
  id: string | number
  title: string
  slug: string
  excerpt?: string | null
  publishedAt?: string | null
  status: string
  body?: SerializedEditorState | null
  heroImage?: { url?: string | null; alt?: string | null } | null
  author?: { name?: string | null } | null
}

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    locale: locale as 'vi' | 'en',
    limit: 1,
  })

  const post = result.docs[0] as Post | undefined
  if (!post) return { title: 'Not Found' }

  return {
    title: `${post.title} | ecommua Blog`,
    description: post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
    },
  }
}

// Blog detail page — renders a single published post by slug
export default async function BlogDetailPage({ params }: Props) {
  const { locale, slug } = await params
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    locale: locale as 'vi' | 'en',
    limit: 1,
  })

  const post = result.docs[0] as Post | undefined
  if (!post) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Back link */}
      <a
        href={`/${locale}/blog`}
        className="text-sm text-indigo-600 hover:underline mb-6 inline-block"
      >
        ← {locale === 'vi' ? 'Tất cả bài viết' : 'All posts'}
      </a>

      {/* Hero image */}
      {post.heroImage?.url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.heroImage.url}
          alt={post.heroImage.alt ?? post.title}
          className="w-full rounded-xl mb-8 object-cover max-h-80"
        />
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-3">{post.title}</h1>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        {post.publishedAt && (
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US')}
          </time>
        )}
        {post.author?.name && <span>{post.author.name}</span>}
      </div>

      {/* Excerpt */}
      {post.excerpt && (
        <p className="text-lg text-gray-600 mb-8 font-light border-l-4 border-indigo-200 pl-4">
          {post.excerpt}
        </p>
      )}

      {/* Body — Payload Lexical rich text */}
      {post.body && (
        <div className="prose prose-gray max-w-none">
          <RichText data={post.body} />
        </div>
      )}
    </article>
  )
}
