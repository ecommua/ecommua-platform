// About page stub
export default function AboutPage() {
  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Giới thiệu</h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        ecommua là nền tảng marketplace chủ đề thương mại điện tử dành cho thị trường Việt Nam.
        Chúng tôi cung cấp các chủ đề thiết kế chuyên nghiệp, dễ cài đặt cho hệ thống mshop/Aimeos.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Sứ mệnh của chúng tôi là giúp các nhà bán lẻ Việt Nam xây dựng cửa hàng trực tuyến đẹp,
        hiệu quả mà không cần kiến thức kỹ thuật chuyên sâu.
      </p>
      <div className="mt-10 p-6 bg-indigo-50 rounded-xl">
        <h2 className="font-semibold text-gray-900 mb-2">Liên hệ</h2>
        <p className="text-sm text-gray-600">Email: <a href="mailto:hello@ecommua.com" className="text-indigo-600 hover:underline">hello@ecommua.com</a></p>
      </div>
    </section>
  )
}
