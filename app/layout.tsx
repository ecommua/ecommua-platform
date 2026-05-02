import type { Metadata } from 'next'
import './globals.css'

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

// Root layout — minimal, no font overhead, children handle locale-specific layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires raw script content
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
