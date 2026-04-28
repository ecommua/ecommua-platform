import { getPayload } from 'payload'
import config from '@payload-config'

// Themes catalog page — fetches from Payload Themes collection
export default async function ThemesPage() {
  const payload = await getPayload({ config })

  const { docs: themes } = await payload.find({
    collection: 'themes',
    limit: 24,
    locale: 'vi',
  })

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Danh sách chủ đề</h1>

      {themes.length === 0 ? (
        <div className="text-center py-24 text-gray-400">
          <p className="text-lg">Chưa có chủ đề nào. Hãy thêm qua trang Admin.</p>
          <a href="/admin" className="mt-4 inline-block text-indigo-600 hover:underline">
            Vào Admin →
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <div key={theme.id} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 bg-indigo-50 flex items-center justify-center text-gray-300 text-sm">
                {/* Screenshot placeholder — Payload media integration in next phase */}
                No preview
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-gray-900 truncate">{theme.title as string}</h2>
                <p className="text-xs text-gray-500 mt-1 capitalize">{theme.industry ?? 'General'}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-indigo-600 font-bold text-sm">
                    {theme.price === 0 ? 'Miễn phí' : `${theme.price?.toLocaleString('vi-VN')}đ`}
                  </span>
                  <span className="text-xs text-gray-400">v{theme.version}</span>
                </div>
                {theme.previewUrl && (
                  <a
                    href={theme.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-center border border-indigo-600 text-indigo-600 text-sm py-1.5 rounded hover:bg-indigo-50 transition-colors"
                  >
                    Xem trước
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
