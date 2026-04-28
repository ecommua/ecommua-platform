// Pricing page stub — Stripe integration deferred to later phase
export default function PricingPage() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Bảng giá</h1>
      <p className="text-gray-500 mb-12">Chọn gói phù hợp với nhu cầu của bạn.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Miễn phí</h2>
          <p className="text-4xl font-extrabold text-gray-900 mb-4">0đ</p>
          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li>✓ 1 cửa hàng</li>
            <li>✓ Chủ đề miễn phí</li>
            <li>✓ Hỗ trợ cộng đồng</li>
          </ul>
          <span className="inline-block bg-gray-100 text-gray-500 px-6 py-2 rounded-lg text-sm">Sắp ra mắt</span>
        </div>
        <div className="border-2 border-indigo-600 rounded-xl p-8 shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Pro</h2>
          <p className="text-4xl font-extrabold text-gray-900 mb-4">299k<span className="text-base font-normal text-gray-500">/tháng</span></p>
          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li>✓ Không giới hạn cửa hàng</li>
            <li>✓ Toàn bộ chủ đề premium</li>
            <li>✓ Hỗ trợ ưu tiên</li>
          </ul>
          <span className="inline-block bg-gray-100 text-gray-500 px-6 py-2 rounded-lg text-sm">Sắp ra mắt</span>
        </div>
      </div>
    </section>
  )
}
