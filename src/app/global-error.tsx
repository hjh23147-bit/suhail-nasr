'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#FAF8F2] text-[#0B0B0A] min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md text-center bg-white p-8 rounded-2xl shadow-xl border border-[#B79A5B]/30">
          <h2 className="text-2xl font-bold font-serif mb-4 text-[#8C1D2F]">حدث خطأ غير متوقع</h2>
          <p className="text-sm text-[#555] mb-6">نعتذر عن هذا الخطأ المؤقت، يرجى إعادة المحاولة.</p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 bg-[#B79A5B] text-white rounded-lg font-medium hover:bg-[#A38547] transition-colors"
          >
            إعادة المحاولة
          </button>
        </div>
      </body>
    </html>
  )
}
