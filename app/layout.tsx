import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

// Inter — primary UI sans, full Vietnamese diacritic support, variable
const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
})
// Geist Mono — code/numerics
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono-geist',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ecommua Platform',
    template: '%s | Ecommua',
  },
  description: 'E-commerce theme marketplace',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icons/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/icons/apple-touch-icon.png', sizes: '180x180' },
  },
  openGraph: {
    type: 'website',
    siteName: 'Ecommua',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630, alt: 'Ecommua' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/icons/og-image.png'],
  },
  robots: { follow: true, index: true },
}

// JSON-LD Organization schema — feeds Google Knowledge Panel + rich results.
// Logo URL must be absolute when published; dev uses relative path.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ecommua.com'
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ecommua',
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-512.png`,
  sameAs: [] as string[], // populate with social URLs when available
}

// Root layout — minimal, no font overhead, children handle locale-specific layout.
// NOTE: React 19 dev warning "Encountered a script tag while rendering React component"
// is a KNOWN false positive for <script> in <head> — the script DOES execute server-side
// on initial load. See https://github.com/facebook/react/issues/30493
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`h-full antialiased ${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* FOUC-safe theme bootstrap — runs sync before paint */}
        <script src="/marketing-theme-bootstrap-fouc-safe.js" />
        {/* JSON-LD Organization — Google rich results */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires raw script body
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
