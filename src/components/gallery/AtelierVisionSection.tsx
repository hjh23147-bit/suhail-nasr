"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpLeft, Award, Compass, Feather, Eye } from "lucide-react";

export function AtelierVisionSection() {
  return (
    <section className="relative py-28 px-6 sm:px-8 bg-[#F3EEE4] border-y border-[#0B0B0A]/8 overflow-hidden">
      {/* Ambient Atmospheric Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#B79A5B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3B2B20]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Section Tag & Prestige Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F2] border border-[#B79A5B]/30 text-xs font-sans tracking-[0.25em] text-[#B79A5B] uppercase font-bold shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#B79A5B]" />
            <span>رؤية الأتيليه • صُنّاع الأثر والريادة</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B0B0A] tracking-tight leading-tight">
            من إرث الحروف .. نصنع مستقبل الإبداع
          </h2>

          <p className="text-base sm:text-lg text-[#817A6D] font-light leading-relaxed">
            منصة رقمية متكاملة تجمع بين أصالة الخط العربي وروح الابتكار، لتكون نافذة عالمية تُبرز جماليات الحرف العربي وتُسهم في تحقيق رؤية المملكة 2030.
          </p>
        </div>

        {/* Masterpiece Vision Artwork Showcase Card */}
        <div className="relative rounded-3xl overflow-hidden bg-[#FAF8F2] border border-[#0B0B0A]/12 shadow-2xl transition-all duration-700 hover:border-[#B79A5B]/50 hover:shadow-3xl">
          <div className="relative aspect-16/9 w-full overflow-hidden bg-[#0B0B0A]">
            <Image
              src="/images/suhail-vision-2030.png"
              alt="من إرث الحروف نصنع مستقبل الإبداع — منصة الخطاط سهيل نصر"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />

            {/* Subtle Gradient Framing */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Floating Top-Right Golden Seal */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/75 backdrop-blur-md border border-[#B79A5B]/40 px-4 py-2 rounded-2xl flex items-center gap-2.5 shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B79A5B] animate-pulse" />
              <span className="text-xs sm:text-sm font-sans font-semibold text-[#D0BB88] tracking-wider">
                رؤية المملكة 2030 • الثقافة والفنون
              </span>
            </div>
          </div>

          {/* Bottom Descriptive Narrative Grid */}
          <div className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#FAF8F2] border-t border-[#0B0B0A]/8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F3EEE4] border border-[#B79A5B]/25 flex items-center justify-center text-[#B79A5B]">
                <Feather className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0B0B0A]">
                أصالة الحرف وسر القلم
              </h3>
              <p className="text-xs sm:text-sm text-[#817A6D] font-light leading-relaxed">
                التمسك الصارم بأصول وقواعد الخطوط الستة الكلاسيكية، ونقل روح المخطوطات القديمة إلى مقتنيات معاصرة تحاكي الذوق الرفيع.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F3EEE4] border border-[#B79A5B]/25 flex items-center justify-center text-[#B79A5B]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0B0B0A]">
                تطويع الخامات الحية
              </h3>
              <p className="text-xs sm:text-sm text-[#817A6D] font-light leading-relaxed">
                نقل الحرف من سطح الورق إلى شفافية ونقاء الزجاج الكريستالي، صلابة خشب الجوز المعتق، وبريق كهرمان السبح النادرة.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F3EEE4] border border-[#B79A5B]/25 flex items-center justify-center text-[#B79A5B]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0B0B0A]">
                ريادة الشرق الأوسط
              </h3>
              <p className="text-xs sm:text-sm text-[#817A6D] font-light leading-relaxed">
                حضور مميز في كبرى المحافل الرسمية والمعارض الثقافية، وتوثيق حي ينقل تجربة الخط العربي إلى مقتنين ونخبة حول العالم.
              </p>
            </div>
          </div>

          {/* Action Bar */}
          <div className="px-8 py-5 bg-[#F3EEE4]/60 border-t border-[#0B0B0A]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-sans text-[#817A6D] text-center sm:text-right">
              ✦ أعمال حصرية موقعة وموثقة برقم تسلسلي خاص بكل قطعة من استوديو الرياض
            </span>

            <div className="flex items-center gap-3">
              <Link
                href="/commission"
                className="px-6 py-2.5 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors text-xs font-medium flex items-center gap-1.5 shadow-sm"
              >
                <span>طلب اقتناء أو تنفيذ خاص</span>
                <ArrowUpLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
