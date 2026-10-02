import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ExternalLink, ArrowUpLeft, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F3EEE4] text-[#0B0B0A] pt-20 pb-12 border-t border-[#0B0B0A]/10 relative overflow-hidden">
      {/* Background Subtle Calligraphic Flourish */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.04] translate-x-1/4 translate-y-1/4">
        <span className="font-display text-[30rem] leading-none select-none text-[#B79A5B]">أثر</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#0B0B0A]/10">
          {/* Brand Identity & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3.5 focus:outline-hidden">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#B79A5B]/40 shadow-xs bg-white shrink-0">
                <Image
                  src="/images/suhail-logo.jpg"
                  alt="شعار الخطاط سهيل نصر الرسمي"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B0B0A] block leading-none">
                  سهيل نصر
                </span>
                <span className="block text-[11px] font-sans tracking-[0.2em] text-[#B79A5B] mt-1 uppercase">
                  منصة الخطاط سهيل نصر • SUHAIL NASR
                </span>
              </div>
            </Link>

            <p className="font-display text-xl text-[#B79A5B] font-light">
              «من إرث الحروف .. نصنع مستقبل الإبداع»
            </p>

            <p className="text-[#817A6D] text-sm leading-relaxed max-w-md font-light">
              منصة رقمية متكاملة تجمع بين أصالة الخط العربي وروح الابتكار، لتكون نافذة عالمية تبرز جماليات الحرف العربي وتسهم في تحقيق رؤية المملكة 2030.
            </p>

            <div className="pt-2 text-xs text-[#817A6D] flex flex-wrap items-center gap-3">
              <span>الرياض، المملكة العربية السعودية</span>
              <span>•</span>
              <span className="text-[#B79A5B] font-medium">أرقى فنون الخط بالشرق الأوسط</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-[#B79A5B] font-semibold">
              استكشف الأتيليه
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/works" className="text-[#171614] hover:text-[#B79A5B] transition-colors">
                  معرض الأعمال الفنية
                </Link>
              </li>
              <li>
                <Link href="/materials" className="text-[#171614] hover:text-[#B79A5B] transition-colors">
                  أرشيف الخامات
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-[#171614] hover:text-[#B79A5B] transition-colors">
                  دفتر الحرف (المدونة)
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#171614] hover:text-[#B79A5B] transition-colors">
                  الخدمات الفنية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#171614] hover:text-[#B79A5B] transition-colors">
                  عن الخطاط سهيل نصر
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Commission */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-[#B79A5B] font-semibold">
              التواصل والحسابات الرسمية
            </h4>
            <p className="text-sm text-[#817A6D] font-light leading-relaxed">
              يسعدنا استقبال طلباتكم واستفساراتكم مباشرة عبر القنوات الرسمية المعتمدة:
            </p>

            {/* Direct Phone & WhatsApp Callouts */}
            <div className="space-y-2 pt-1">
              <a
                href="tel:+966553172286"
                className="flex items-center gap-2.5 text-sm font-sans font-medium text-[#0B0B0A] hover:text-[#B79A5B] transition-colors dir-ltr justify-end"
              >
                <span>+966 55 317 2286</span>
                <Phone className="w-4 h-4 text-[#B79A5B]" />
              </a>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/commission"
                  className="px-5 py-2.5 rounded-full bg-[#B79A5B] text-[#0B0B0A] hover:bg-[#0B0B0A] hover:text-[#FAF8F2] transition-colors text-xs font-medium flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>طلب عمل مخصص</span>
                  <ArrowUpLeft className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="https://wa.me/966553172286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-[#0B0B0A]/15 bg-white text-[#0B0B0A] hover:border-[#25D366] hover:text-[#25D366] transition-colors text-xs font-medium flex items-center justify-center gap-2 shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>واتساب مباشر</span>
                </a>
              </div>
            </div>

            {/* Verified Social Media Channels */}
            <div className="pt-3 border-t border-[#0B0B0A]/8 space-y-2 text-xs">
              <a
                href="https://www.snapchat.com/@Sohilnasr7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#171614] hover:text-[#B79A5B] transition-colors py-1"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFFC00] border border-black/20" />
                  <span>سناب شات</span>
                </span>
                <span className="font-mono text-[#817A6D]">@Sohilnasr7</span>
              </a>

              <a
                href="https://www.instagram.com/sohil.nassr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#171614] hover:text-[#B79A5B] transition-colors py-1"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E1306C]" />
                  <span>إنستغرام</span>
                </span>
                <span className="font-mono text-[#817A6D]">@sohil.nassr</span>
              </a>

              <a
                href="https://www.tiktok.com/@.sohil_nassr77"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#171614] hover:text-[#B79A5B] transition-colors py-1"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#000000]" />
                  <span>تيك توك</span>
                </span>
                <span className="font-mono text-[#817A6D]">@.sohil_nassr77</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#817A6D] gap-4">
          <p>
            © {new Date().getFullYear()} سهيل نصر — Suhail Nasr. جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#B79A5B] transition-colors">
              تواصل مع الاستوديو
            </Link>
            <span>•</span>
            <Link href="/admin" className="hover:text-[#B79A5B] transition-colors">
              بوابة الإدارة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
