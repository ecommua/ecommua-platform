/**
 * Blog demo seed — creates 1 author, 2 categories, 5 published posts
 * Run: npx tsx seed/blog-demo.ts
 * (from ecommua-platform directory)
 */

// Load .env.local before importing Payload (avoids @next/env dependency)
import { config as dotenvConfig } from 'dotenv'
import { resolve } from 'path'
dotenvConfig({ path: resolve(process.cwd(), '.env.local') })

import { getPayload } from 'payload'
import config from '../payload.config'

// Minimal Lexical JSON paragraph block
function lexicalDoc(text: string) {
  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      direction: 'ltr' as const,
      children: [
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          direction: 'ltr' as const,
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal' as const,
              style: '',
              text,
              version: 1,
            },
          ],
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          direction: 'ltr' as const,
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal' as const,
              style: '',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
              version: 1,
            },
          ],
        },
      ],
    },
  }
}

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding blog demo data...')

  // --- Author ---
  const author = await payload.create({
    collection: 'authors',
    data: {
      name: 'Nguyễn Văn A',
      slug: 'nguyen-van-a',
      bio: 'Chuyên gia thương mại điện tử với 5 năm kinh nghiệm.',
    },
    locale: 'vi',
  })

  await payload.update({
    collection: 'authors',
    id: author.id,
    data: {
      bio: 'E-commerce specialist with 5 years of experience.',
    },
    locale: 'en',
  })

  console.log(`Author created: ${author.id}`)

  // --- Categories ---
  const catTips = await payload.create({
    collection: 'categories',
    data: {
      name: 'Mẹo & Thủ thuật',
      slug: 'meo-thu-thuat',
      description: 'Những mẹo hữu ích cho cửa hàng online',
    },
    locale: 'vi',
  })

  await payload.update({
    collection: 'categories',
    id: catTips.id,
    data: {
      name: 'Tips & Tricks',
      description: 'Useful tips for your online store',
    },
    locale: 'en',
  })

  const catNews = await payload.create({
    collection: 'categories',
    data: {
      name: 'Tin tức',
      slug: 'tin-tuc',
      description: 'Cập nhật mới nhất từ ecommua',
    },
    locale: 'vi',
  })

  await payload.update({
    collection: 'categories',
    id: catNews.id,
    data: {
      name: 'News',
      description: 'Latest updates from ecommua',
    },
    locale: 'en',
  })

  console.log(`Categories created: ${catTips.id}, ${catNews.id}`)

  // --- Posts ---
  const postsData = [
    {
      slug: 'bat-dau-ban-hang-online',
      titleVi: 'Hướng dẫn bắt đầu bán hàng online',
      titleEn: 'Getting Started with Online Selling',
      excerptVi: 'Những bước đầu tiên để khởi nghiệp kinh doanh online thành công.',
      excerptEn: 'First steps to successfully start your online business.',
      bodyVi: 'Bán hàng online là xu hướng không thể bỏ qua trong thời đại số. Bài viết này sẽ hướng dẫn bạn từng bước từ chọn sản phẩm, tạo cửa hàng, đến tiếp thị.',
      bodyEn: 'Online selling is a trend you cannot ignore in the digital age. This article guides you step by step from choosing products, creating your store, to marketing.',
      category: catTips.id,
    },
    {
      slug: 'chon-chu-de-phu-hop',
      titleVi: 'Cách chọn chủ đề phù hợp cho cửa hàng',
      titleEn: 'How to Choose the Right Theme for Your Store',
      excerptVi: 'Chủ đề ảnh hưởng trực tiếp đến trải nghiệm người dùng và tỷ lệ chuyển đổi.',
      excerptEn: 'Your theme directly impacts user experience and conversion rates.',
      bodyVi: 'Một chủ đề đẹp và phù hợp với ngành hàng sẽ giúp tăng niềm tin của khách hàng và thúc đẩy doanh số. Hãy cân nhắc màu sắc, bố cục và tốc độ tải trang.',
      bodyEn: 'A beautiful theme matching your industry builds customer trust and drives sales. Consider color scheme, layout, and page load speed.',
      category: catTips.id,
    },
    {
      slug: 'toi-uu-hoa-trang-san-pham',
      titleVi: 'Tối ưu hóa trang sản phẩm để tăng doanh số',
      titleEn: 'Optimize Product Pages to Boost Sales',
      excerptVi: 'Trang sản phẩm là nơi quyết định việc khách có mua hàng hay không.',
      excerptEn: 'Product pages are where customers decide to buy or leave.',
      bodyVi: 'Ảnh sản phẩm chất lượng cao, mô tả chi tiết và nút kêu gọi hành động rõ ràng là ba yếu tố không thể thiếu trên trang sản phẩm.',
      bodyEn: 'High-quality product photos, detailed descriptions, and clear call-to-action buttons are three essential elements on your product page.',
      category: catTips.id,
    },
    {
      slug: 'ecommua-ra-mat-tinh-nang-moi',
      titleVi: 'ecommua ra mắt tính năng chủ đề thông minh',
      titleEn: 'ecommua Launches Smart Theme Feature',
      excerptVi: 'Chúng tôi vừa ra mắt tính năng chủ đề AI được cá nhân hóa theo từng ngành hàng.',
      excerptEn: 'We just launched an AI-powered theme feature personalized for each product category.',
      bodyVi: 'Tính năng mới này sử dụng trí tuệ nhân tạo để gợi ý chủ đề phù hợp nhất dựa trên loại sản phẩm và đối tượng khách hàng mục tiêu của bạn.',
      bodyEn: 'This new feature uses artificial intelligence to suggest the most suitable theme based on your product type and target customer demographic.',
      category: catNews.id,
    },
    {
      slug: 'xu-huong-thuong-mai-dien-tu-2025',
      titleVi: '5 xu hướng thương mại điện tử nổi bật năm 2025',
      titleEn: '5 Top E-commerce Trends of 2025',
      excerptVi: 'Thị trường thương mại điện tử đang thay đổi nhanh chóng. Đây là những xu hướng bạn cần biết.',
      excerptEn: 'The e-commerce market is changing rapidly. Here are the trends you need to know.',
      bodyVi: 'Social commerce, live streaming bán hàng, cá nhân hóa trải nghiệm, thanh toán không tiếp xúc và bán hàng đa kênh là 5 xu hướng định hình thương mại điện tử năm 2025.',
      bodyEn: 'Social commerce, live-stream selling, personalized experiences, contactless payments, and omnichannel retail are the 5 trends shaping e-commerce in 2025.',
      category: catNews.id,
    },
  ]

  for (const p of postsData) {
    const post = await payload.create({
      collection: 'posts',
      data: {
        title: p.titleVi,
        slug: p.slug,
        excerpt: p.excerptVi,
        body: lexicalDoc(p.bodyVi),
        author: author.id,
        category: p.category,
        status: 'published',
        publishedAt: new Date().toISOString(),
      },
      locale: 'vi',
    })

    // Add English translation
    await payload.update({
      collection: 'posts',
      id: post.id,
      data: {
        title: p.titleEn,
        excerpt: p.excerptEn,
        body: lexicalDoc(p.bodyEn),
      },
      locale: 'en',
    })

    console.log(`Post created: ${post.slug} (id: ${post.id})`)
  }

  console.log('Seed complete — 1 author, 2 categories, 5 posts.')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
