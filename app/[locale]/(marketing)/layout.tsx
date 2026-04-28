import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

// Marketing layout — wraps all marketing pages with next-intl provider
export default async function MarketingLayout({ children, params }: Props) {
  const { locale } = await params

  // Validate locale against defined routing locales
  if (!routing.locales.includes(locale as 'vi' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div lang={locale} className="flex flex-col min-h-screen">
        <header className="border-b bg-white sticky top-0 z-10">
          <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-bold text-lg text-indigo-600">ecommua</a>
            <div className="flex gap-6 text-sm font-medium text-gray-600">
              <a href="/themes" className="hover:text-indigo-600">Themes</a>
              <a href="/pricing" className="hover:text-indigo-600">Pricing</a>
              <a href="/about" className="hover:text-indigo-600">About</a>
              <a href="/admin" className="hover:text-indigo-600">Admin</a>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-6 text-center text-sm text-gray-500">
          © 2025 ecommua. All rights reserved.
        </footer>
      </div>
    </NextIntlClientProvider>
  )
}
