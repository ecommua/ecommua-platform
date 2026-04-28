import type { CollectionConfig } from 'payload'

// Media collection — handles all uploaded files (screenshots, avatars, etc.)
export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  admin: {
    useAsTitle: 'filename',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      localized: true,
    },
  ],
}
