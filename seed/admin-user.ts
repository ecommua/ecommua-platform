import { config as dotenvConfig } from 'dotenv'
import { resolve } from 'path'
dotenvConfig({ path: resolve(process.cwd(), '.env.local') })

import { getPayload } from 'payload'
import config from '../payload.config'

async function main() {
  const payload = await getPayload({ config })
  const existing = await payload.find({ collection: 'users', limit: 1, overrideAccess: true })
  if (existing.totalDocs > 0) {
    console.log('admin already exists:', existing.docs[0].email)
    process.exit(0)
  }
  const u = await payload.create({
    collection: 'users',
    data: { email: 'admin@ecommua.com', password: 'Admin123!', name: 'Admin', role: 'admin' },
  })
  console.log('created admin:', u.email, 'id:', u.id)
  process.exit(0)
}
main().catch((e) => { console.error(e); process.exit(1) })
