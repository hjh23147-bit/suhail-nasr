import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, ExternalLink, MapPin, ShieldCheck, Sparkles, PenTool } from "lucide-react";
import { getArtistProfile } from "@/lib/queries";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { AtelierVisionSection } from "@/components/gallery/AtelierVisionSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "عن الخطاط سهيل نصر — المسيرة والأثر الفني",
  description: "سيرة وفلسفة الخطاط سهيل نصر في فن الحرف العربي وتقنيات الحفر على الزجاج والخشب والسبح بالرياض.",
};

export default async function AboutPage() {
  const profile = await getArtistProfile();

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF8F2] text-[#0B0B0A] pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Top Hero Overview with Real Portrait */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative aspect-4/5 rounded-3xl overflow-hidden bg-[#EFE9DC] border border-[#0B0B0A]/10 shadow-2xl">
              <Image
                src="/images/suhail-portrait.jpg"
                alt="الخطاط سهيل نصر"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 inset-x-6 text-[#FAF8F2]">
                <span className="text-xs text-[#D0BB88] font-sans font-semibold block mb-0.5">
                  محترف الرياض
                </span>
                <span className="text-sm font-light text-[#EFE9DC]">
                  الخطاط سهيل نصر في جناح الخط العربي الحي
                </span>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EEE4] border border-[#B79A5B]/30 text-xs font-sans tracking-[0.2em] text-[#B79A5B] uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>سيرة فنان • ARTIST PROFILE</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#0B0B0A]">
                {profile?.nameAr || "الخطاط سهيل نصر"}
              </h1>

              <p className="font-display text-2xl text-[#B79A5B] font-light">
                «{profile?.philosophyAr || "حين يصبح الحرف أثراً."}»
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#817A6D]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#B79A5B]" />
                  <span>{profile?.location || "الرياض، المملكة العربية السعودية"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#B79A5B]" />
                  <span>خطاط وفنان محترف مستقل</span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#171614] font-light leading-relaxed whitespace-pre-line">
                {profile?.bioAr ||
                  "خطاط عربي مقيم في الرياض، متفرد في نقل الحرف العربي من الورق التقليدي إلى أبعاد وخامات حية كالحفر على الزجاج، الحرق على الخشب، ونقش الإهداءات على السبح والأكواب والمخمل، ليكون العمل أثراً باقياً يفيض بالأصالة والجمال المعاصر."}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/commission"
                  className="px-8 py-3.5 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors text-xs font-medium flex items-center gap-2 shadow-md"
                >
                  <span>طلب عمل خطي خاص</span>
                  <ArrowUpLeft className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="https://www.snapchat.com/@sohilnasr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full border border-[#0B0B0A]/15 bg-[#FAF8F2] text-[#0B0B0A] hover:border-[#B79A5B] transition-colors text-xs font-medium flex items-center gap-2"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFFC00] border border-black/30" />
                  <span>سناب شات @sohilnasr7</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#817A6D]" />
                </a>
              </div>
            </div>
          </div>

          {/* Exhibition & Studio Real Photos Gallery */}
          <div className="space-y-8 pt-8 border-t border-[#0B0B0A]/8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-sans tracking-[0.2em] text-[#B79A5B] uppercase font-semibold">
                لقطات من مسار الصنعة
              </span>
              <h2 className="font-display text-3xl font-bold text-[#0B0B0A]">
                من المحترف إلى محافل التوثيق الحي
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-[#EFE9DC] border border-[#0B0B0A]/10 shadow-md">
                <Image
                  src="/images/suhail-real-portrait.jpg"
                  alt="الخطاط سهيل نصر في الرياض"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-sans text-[#FAF8F2]">الخطاط سهيل نصر • الرياض</span>
                </div>
              </div>

              <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-[#EFE9DC] border border-[#0B0B0A]/10 shadow-md">
                <Image
                  src="/images/suhail-glass-action.jpg"
                  alt="جلسة حفر ونقش الزجاج الكريستالي"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-sans text-[#FAF8F2]">الحفر برأس الألماس على الكريستال</span>
                </div>
              </div>

              <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-[#EFE9DC] border border-[#0B0B0A]/10 shadow-md">
                <Image
                  src="/images/suhail-wood-action.jpg"
                  alt="جلسة الحرق الحراري على خشب الجوز"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-sans text-[#FAF8F2]">الكي الفني على الأخشاب الطبيعية</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision 2030 & Middle East Prestige Section */}
          <AtelierVisionSection />

          {/* Philosophy Section */}
          <div className="p-10 sm:p-14 rounded-3xl bg-[#F3EEE4] border border-[#0B0B0A]/8 space-y-6 relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-[#B79A5B]/20 text-[#B79A5B] flex items-center justify-center border border-[#B79A5B]/30 mb-2">
              <PenTool className="w-6 h-6" />
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#0B0B0A]">
              الفلسفة الفنية والتقنية
            </h3>

            <p className="text-base sm:text-lg text-[#171614] font-light leading-[2.2] whitespace-pre-line">
              الخط بالنسبة لي ليس مجرد كتابة حروف مصفوفة، بل هو حوار روحي بين حركة اليد وسكون المادة. حين يتجاوز القلم حدود الورق نحو صلابة الزجاج ودفء الخشب وغموض المخمل، يتحول الحرف إلى كيان له ظل ووزن وأثر دائم.
              <br /><br />
              كل قطعة تخرج من المحترف هي شاهد حي مصمم خصيصاً ليحمل اسم صاحبه أو رسالته بأعلى معايير الدقة والجمال.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
