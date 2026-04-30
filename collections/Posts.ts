import type { CollectionConfig, CollectionBeforeChangeHook } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

// Set publishedAt timestamp when status transitions to published
const setPublishedAt: CollectionBeforeChangeHook = ({ data, originalDoc }) => {
  const wasPublished = originalDoc?.status === 'published'
  const isPublishing = data?.status === 'published'

  if (isPublishing && !wasPublished && !data.publishedAt) {
    return { ...data, publishedAt: new Date().toISOString() }
  }

  return data
}

// Posts collection — main blog content with drafts, versioning, and localization
export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'author', 'publishedAt'],
    description: 'Blog posts with draft/publish workflow',
  },
  versions: {
    drafts: true,
  },
  access: {
    // Public reads only see published posts; authenticated users see all
    read: ({ req }) => {
      if (req.user) return true
      return {
        status: {
          equals: 'published',
        },
      }
    },
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  hooks: {
    beforeChange: [setPublishedAt],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        description: 'URL slug, no spaces',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'body',
      type: 'richText',
      localized: true,
      editor: lexicalEditor(),
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      required: true,
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
}
