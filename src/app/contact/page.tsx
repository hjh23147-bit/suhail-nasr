import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, MapPin, ExternalLink, ArrowUpLeft, ShieldCheck, Sparkles } from "lucide-react";
import { db } from "@/lib/db";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "التواصل والحسابات الرسمية — الخطاط سهيل نصر",
  description: "قنوات التواصل الرسمية للخطاط سهيل نصر بالرياض: الهاتف، واتساب، سناب شات، إنستغرام، وتيك توك.",
};

export default async function ContactPage() {
  const profile = await db.artistProfile.findFirst();
  const settings = await db.siteSettings.findFirst();

  const phone = profile?.phone || settings?.contactPhone || "+966 55 317 2286";
  const whatsapp = profile?.whatsapp || settings?.contactWhatsapp || "966553172286";
  const snapchatUrl = profile?.snapchatUrl || "https://www.snapchat.com/@Sohilnasr7";
  const instagramUrl = profile?.instagramUrl || "https://www.instagram.com/sohil.nassr";
  const tiktokUrl = profile?.tiktokUrl || "https://www.tiktok.com/@.sohil_nassr77";

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF8F2] text-[#0B0B0A] pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          <SectionHeading
            tag="القنوات الرسمية المعتمدة"
            title="التواصل مع الخطاط سهيل نصر"
            subtitle="نسعد بالتواصل معكم لمناقشة أفكاركم ومشاريعكم الخطية ومقتنياتكم الفاخرة عبر القنوات المعتمدة حصراً."
          />

          {/* Official Badge & Contact Overview Hero */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F3EEE4] border border-[#0B0B0A]/10 shadow-xl flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-[#B79A5B]/40 shadow-xl bg-white shrink-0">
              <Image
                src="/images/suhail-logo.jpg"
                alt="شعار وبيانات تواصل الخطاط سهيل نصر الرسمية"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="space-y-4 text-center md:text-right grow">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#B79A5B]/30 text-xs font-sans text-[#B79A5B] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#B79A5B]" />
                <span>حسابات وهوية موثقة رسمياً</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B0B0A]">
                منصة الخطاط سهيل نصر
              </h2>

              <p className="text-sm sm:text-base text-[#817A6D] font-light leading-relaxed max-w-xl">
                نرحب باستفسارات المقتنين، الجهات الحكومية، والشركات الكبرى لتنفيذ الإهداءات والتحف الخطية على الزجاج، الخشب، والسبح.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a
                  href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("السلام عليكم، أود الاستفسار عن أعمال الخط العربي لدى الأتيليه.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#25D366] hover:text-[#0B0B0A] transition-all text-xs font-medium flex items-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>محادثة واتساب فورية</span>
                </a>

                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="px-6 py-3 rounded-full bg-[#FAF8F2] border border-[#0B0B0A]/15 text-[#0B0B0A] hover:border-[#B79A5B] transition-colors text-xs font-medium flex items-center gap-2 dir-ltr"
                >
                  <Phone className="w-4 h-4 text-[#B79A5B]" />
                  <span>{phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social and Communication Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone & WhatsApp Card */}
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="p-6 rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 hover:border-[#B79A5B] transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#B79A5B]/15 text-[#B79A5B] flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0B0B0A]">
                  الاتصال الهاتفي
                </h3>
                <p className="text-xs text-[#817A6D] mt-1 font-light">
                  للتنسيق والمواعيد المباشرة
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#0B0B0A]/6 flex items-center justify-between text-xs font-medium text-[#0B0B0A] group-hover:text-[#B79A5B]">
                <span dir="ltr">{phone}</span>
                <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </div>
            </a>

            {/* Snapchat Card */}
            <a
              href={snapchatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 hover:border-[#B79A5B] transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFFC00] text-[#0B0B0A] flex items-center justify-center mb-4 shadow-xs">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.016 2.016c-3.766 0-6.732 2.966-6.732 6.732 0 .61.082 1.196.234 1.758-.844.281-1.465 1.055-1.465 1.992 0 .914.586 1.664 1.406 1.969-.023.187-.047.375-.047.562 0 1.945 1.055 3.656 2.625 4.57-.469.75-1.125 1.336-1.898 1.711-.328.164-.492.516-.398.867.094.352.422.586.773.586h.117c1.336-.07 2.555-.562 3.539-1.383.562.164 1.172.258 1.844.258s1.289-.094 1.844-.258c.984.82 2.203 1.312 3.539 1.383h.117c.352 0 .68-.234.773-.586.094-.352-.07-.703-.398-.867-.773-.375-1.43-1.008-1.898-1.711 1.57-.914 2.625-2.625 2.625-4.57 0-.188-.023-.375-.047-.562.82-.305 1.406-1.055 1.406-1.969 0-.938-.621-1.711-1.465-1.992.152-.562.234-1.148.234-1.758 0-3.766-2.966-6.732-6.732-6.732z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-[#0B0B0A]">
                  سناب شات
                </h3>
                <p className="text-xs text-[#817A6D] mt-1 font-light">
                  اليوميات والتوثيق الحي
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#0B0B0A]/6 flex items-center justify-between text-xs font-medium text-[#0B0B0A] group-hover:text-[#B79A5B]">
                <span className="font-mono">@Sohilnasr7</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 hover:border-[#E1306C] transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E1306C]/15 text-[#E1306C] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-[#0B0B0A]">
                  إنستغرام
                </h3>
                <p className="text-xs text-[#817A6D] mt-1 font-light">
                  معرض الصور واللوحات
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#0B0B0A]/6 flex items-center justify-between text-xs font-medium text-[#0B0B0A] group-hover:text-[#E1306C]">
                <span className="font-mono">@sohil.nassr</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* TikTok Card */}
            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 hover:border-[#000000] transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-black/10 text-black flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43V13a8.28 8.28 0 0 0 5.73 2.29V11.8a4.85 4.85 0 0 1-3.77-1.41V6.69z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-[#0B0B0A]">
                  تيك توك
                </h3>
                <p className="text-xs text-[#817A6D] mt-1 font-light">
                  فيديوهات قصيرة وفنون الخط
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#0B0B0A]/6 flex items-center justify-between text-xs font-medium text-[#0B0B0A] group-hover:text-black">
                <span className="font-mono">@.sohil_nassr77</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          </div>

          {/* Bottom Commission Box */}
          <div className="p-10 rounded-3xl bg-[#F3EEE4] text-[#0B0B0A] border border-[#0B0B0A]/8 text-center space-y-4 shadow-sm">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0B0B0A]">
              ترغب في طلب عمل مخصص؟
            </h3>
            <p className="text-xs sm:text-sm text-[#817A6D] font-light max-w-lg mx-auto leading-relaxed">
              يمكنك استخدام نموذج الطلبات التفاعلي لتحديد تفاصيل النص والمقاس والخامة وإرفاق الملفات بدقة وسنتواصل معك مباشرة.
            </p>
            <div className="pt-2">
              <Link
                href="/commission"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors text-xs font-medium shadow-md"
              >
                <span>الانتقال لنموذج الطلبات</span>
                <ArrowUpLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
