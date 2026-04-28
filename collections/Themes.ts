import type { CollectionConfig } from 'payload'

// Themes collection — theme catalog for the platform marketplace
export const Themes: CollectionConfig = {
  slug: 'themes',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'industry', 'price', 'version'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'industry',
      type: 'select',
      options: [
        { label: 'Fashion', value: 'fashion' },
        { label: 'Electronics', value: 'electronics' },
        { label: 'Food & Beverage', value: 'food' },
        { label: 'Home & Living', value: 'home' },
        { label: 'Beauty', value: 'beauty' },
        { label: 'General', value: 'general' },
      ],
      defaultValue: 'general',
    },
    {
      name: 'screenshots',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'previewUrl',
      type: 'text',
      label: 'Preview URL',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
    },
    {
      name: 'version',
      type: 'text',
      required: true,
      defaultValue: '1.0.0',
    },
  ],
}
