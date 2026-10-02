import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#FAF8F2] text-[#0B0B0A] relative overflow-hidden">
      {/* Decorative Background Calligraphic Curve */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <span className="font-display text-[28rem] leading-none select-none">ن</span>
      </div>

      <div className="max-w-md w-full text-center relative z-10 space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F3EEE4] border border-[#B79A5B]/30 text-[#B79A5B] mb-2">
          <Compass className="w-8 h-8 stroke-[1.5]" />
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0B0B0A]">
          يبدو أن هذا الحرف خرج من السطر.
        </h1>

        <p className="text-[#817A6D] text-lg leading-relaxed font-light">
          الصفحة أو العمل الفني الذي تبحث عنه غير موجود أو تم نقله في الأتيليه.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/works"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-all duration-300 font-medium text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            <span>لنعد إلى المعرض</span>
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-[#0B0B0A]/15 text-[#0B0B0A] hover:border-[#0B0B0A] transition-all duration-300 font-medium text-sm flex items-center justify-center"
          >
            الرئيسية
          </Link>
        </div>
      </div>
    </main>
  );
}
