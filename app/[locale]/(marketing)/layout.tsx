import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { MarketingDockNav } from '@/app/_components/marketing/marketing-dock-nav'
import { MarketingSiteFooter } from '@/app/_components/marketing/marketing-site-footer'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

// Marketing layout — premium nav + footer wrapper, next-intl provider.
export default async function MarketingLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'vi' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div lang={locale} className="flex flex-col min-h-screen bg-background text-foreground">
        <main className="flex-1">{children}</main>
        <MarketingSiteFooter locale={locale} />
        <MarketingDockNav locale={locale} />
      </div>
    </NextIntlClientProvider>
  )
}
