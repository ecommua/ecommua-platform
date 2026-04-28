// Homepage — hero + features + browse themes CTA
export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Marketplace chủ đề thương mại điện tử
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Khám phá và cài đặt chủ đề đẹp cho cửa hàng của bạn
        </p>
        <a
          href="/themes"
          className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Khám phá chủ đề
        </a>
      </section>

      {/* Features */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Tại sao chọn ecommua?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Dễ cài đặt', desc: 'Một click để áp dụng chủ đề vào cửa hàng', icon: '⚡' },
            { title: 'Thiết kế chuyên nghiệp', desc: 'Hàng chục mẫu thiết kế đẹp, chuẩn UX', icon: '🎨' },
            { title: 'Hỗ trợ đa ngành', desc: 'Thời trang, điện tử, F&B và nhiều hơn nữa', icon: '🏪' },
          ].map((f) => (
            <div key={f.title} className="bg-white border rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
