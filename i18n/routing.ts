import { defineRouting } from 'next-intl/routing'

// next-intl routing — path-prefix /vi and /en
export const routing = defineRouting({
  locales: ['vi', 'en'],
  defaultLocale: 'vi',
  localePrefix: 'as-needed', // /vi is default, /en is prefixed
})
