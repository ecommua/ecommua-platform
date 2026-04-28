import type { GlobalConfig } from 'payload'

// SiteSettings global — homepage hero + contact info (localized)
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'Marketplace chủ đề thương mại điện tử',
    },
    {
      name: 'heroSubtitle',
      type: 'text',
      localized: true,
      defaultValue: 'Khám phá và cài đặt chủ đề đẹp cho cửa hàng của bạn',
    },
    {
      name: 'contactEmail',
      type: 'email',
    },
  ],
}
