import { routing } from '@/i18n/routing'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

// Generate static params for all supported locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// Locale layout — sets lang attribute on html via root layout (children only here)
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  return <div lang={locale}>{children}</div>
}
