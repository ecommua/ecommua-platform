import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

// Combines next-intl locale routing — excludes /admin and /api from i18n
export default createMiddleware(routing)

export const config = {
  matcher: [
    // Match all paths except Payload admin, API, and static files
    '/((?!admin|api|_next/static|_next/image|favicon.ico|public|hero-tiles|icons|brand|fonts|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff|woff2|ttf|eot|map)).*)',
  ],
}
