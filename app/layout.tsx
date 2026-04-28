import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ecommua Platform',
  description: 'E-commerce theme marketplace',
}

// Root layout — minimal, no font overhead, children handle locale-specific layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
