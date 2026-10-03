import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeft, ArrowDown, ExternalLink, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import {
  getArtistProfile,
  getFeaturedWorks,
  getMaterialsList,
  getJournalList,
  getSocialList,
} from "@/lib/queries";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArtworkCard } from "@/components/gallery/ArtworkCard";
import { MaterialCard } from "@/components/gallery/MaterialCard";
import { JournalCard } from "@/components/gallery/JournalCard";
import { SocialCard } from "@/components/gallery/SocialCard";
import { InkReveal } from "@/components/motion/InkReveal";
import { CinematicScriptMorpher } from "@/components/motion/CinematicScriptMorpher";
import { FlowingCalligraphyStream } from "@/components/motion/FlowingCalligraphyStream";
import { AtelierVideoReels } from "@/components/gallery/AtelierVideoReels";
import { AtelierVisionSection } from "@/components/gallery/AtelierVisionSection";

export const revalidate = 60;

export default async function HomePage() {
  const profile = await getArtistProfile();
  const featuredWorks = await getFeaturedWorks(6);

  const signatureWork =
    featuredWorks.find((w: any) => w.slug === "glass-imprint-crystalline") || featuredWorks[0];

  const materials = await getMaterialsList(8);
  const journalPosts = await getJournalList(2);
  const socialPosts = await getSocialList(2);

  const processSteps = [
    {
      number: "٠١",
      title: "الفكرة والجوهر",
      desc: "استيعاب النص واستخلاص معانيه العميقة لتحديد الهوية الخطية المناسبة.",
      image: "/images/suhail-calligraphy-hero.jpg",
    },
    {
      number: "٠٢",
      title: "اختيار الخامة وتطويعها",
      desc: "المفاضلة بين الزجاج، الخشب الصلب، أو السبح لضمان تفاعل السطح مع الحرف.",
      image: "/images/suhail-wood-action.jpg",
    },
    {
      number: "٠٣",
      title: "رسم التكوين والميزان",
      desc: "توزيع الكتل وضبط حركة السطر وميزان القلم بنسب الخطوط الأصيلة.",
      image: "/images/suhail-glass-action.jpg",
    },
    {
      number: "٠٤",
      title: "التنفيذ اليدوي الحي",
      desc: "الحفر الميكانيكي الدقيق أو الكي الحراري بحركات يد واثقة راسخة.",
      image: "/images/suhail-beads-action.jpg",
    },
  ];

  return (
    <>
      <SiteHeader />

      <main className="relative min-h-screen bg-[#FAF8F2] text-[#0B0B0A] overflow-hidden">
        {/* Animated Living Calligraphy Flow across the entire canvas */}
        <FlowingCalligraphyStream />

        {/* ========================================================
            SECTION 01: THE OPENING CINEMATIC HERO VIEWPORT
            ======================================================== */}
        <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#FAF8F2] text-[#0B0B0A] px-6 pt-32 pb-20 border-b border-[#0B0B0A]/8">
          {/* Ambient Calligraphic Background Graphic */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <Image
              src="/images/suhail-calligraphy-hero.jpg"
              alt="كواليس الخط العربي في استوديو سهيل نصر"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Soft Paper Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F2]/70 via-[#FAF8F2]/90 to-[#FAF8F2] pointer-events-none" />

          {/* Central Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
            <InkReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B79A5B]/30 bg-[#F3EEE4] text-[#B79A5B] text-xs font-sans tracking-[0.25em] uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>الأتيليه الحروفي والمعرض الفني • الرياض</span>
              </div>
            </InkReveal>

            <InkReveal delay={0.25}>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0B0B0A] leading-tight">
                حين يصبح الحرف أثراً
              </h1>
            </InkReveal>

            <InkReveal delay={0.35}>
              <p className="text-[#817A6D] text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
                المنصة الرسمية للأعمال الخطية الحية للفنان <strong className="font-bold text-[#0B0B0A]">سهيل نصر</strong> — ينقل نداء القلم إلى صلب الزجاج، تفاصيل الخشب، ملمس المخمل، وأفنية السبح النادرة.
              </p>
            </InkReveal>

            {/* DYNAMIC SCRIPT MORPHER: Writes Suhail Nasr in 6 Classical Scripts every few seconds */}
            <InkReveal delay={0.45}>
              <div className="pt-2 pb-4">
                <CinematicScriptMorpher />
              </div>
            </InkReveal>

            {/* Call To Action Buttons */}
            <InkReveal delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/works"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-all duration-300 font-medium text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                >
                  <span>اكتشف نفائس الأعمال</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </Link>

                <Link
                  href="https://www.snapchat.com/@sohilnasr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#FAF8F2] border border-[#0B0B0A]/15 text-[#0B0B0A] hover:border-[#B79A5B] transition-all duration-300 font-medium text-sm flex items-center justify-center gap-2 shadow-xs"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFFC00] border border-black/30" />
                  <span>يوميات السناب شات @sohilnasr7</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#817A6D]" />
                </Link>

                <Link
                  href="/commission"
                  className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#0B0B0A]/20 text-[#0B0B0A] hover:border-[#B79A5B] hover:text-[#B79A5B] transition-all duration-300 font-medium text-sm flex items-center justify-center"
                >
                  طلب تنفيذ مخصص
                </Link>
              </div>
            </InkReveal>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-12 flex flex-col items-center justify-center text-xs text-[#817A6D] font-light gap-2 pointer-events-none animate-bounce">
            <span>انتقل للاستكشاف</span>
            <ArrowDown className="w-4 h-4 text-[#B79A5B]" />
          </div>
        </section>

        {/* ========================================================
            SECTION 02: REAL ARTIST SPOTLIGHT (Suhail Nasr in Action)
            ======================================================== */}
        <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#0B0B0A]/8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Real Photo of Suhail Nasr at the SDAIA Calligraphy Showcase */}
            <div className="lg:col-span-5 relative aspect-4/5 rounded-3xl overflow-hidden bg-[#EFE9DC] border border-[#0B0B0A]/10 shadow-2xl">
              <Image
                src="/images/suhail-portrait.jpg"
                alt="الخطاط سهيل نصر في جناح الخط العربي الحي بالرياض"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 inset-x-6 text-[#FAF8F2]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-sans text-[#D0BB88] uppercase tracking-wider font-semibold">
                    الخطاط سهيل نصر
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#B79A5B]" />
                </div>
                <p className="text-sm font-light text-[#EFE9DC] leading-snug">
                  توثيق حي لجلسة كتابة ونقش إهداءات الأكواب الخزفية والسبح بالرياض.
                </p>
              </div>
            </div>

            {/* Biographical Context & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs text-[#B79A5B] font-sans font-semibold tracking-[0.2em] uppercase">
                <span>عن الخطاط ومحترفه • THE CALLIGRAPHER</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0B0A] leading-tight">
                أصالة القصبة وقوة الحفر على الخامات الحية
              </h2>

              <p className="text-base text-[#171614] font-light leading-relaxed whitespace-pre-line">
                {profile?.bioAr ||
                  "خطاط عربي مقيم في الرياض، متفرد في نقل الحرف العربي من الورق التقليدي إلى أبعاد وخامات حية كالحفر على الزجاج، الحرق على الخشب، ونقش الإهداءات على السبح والأكواب والمخمل، ليكون العمل أثراً باقياً يفيض بالأصالة والجمال المعاصر."}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[#817A6D]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#B79A5B]" />
                  <span>الرياض، المملكة العربية السعودية</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#B79A5B]" />
                  <span>أعمال يدوية حصرية بدون طباعة آلية</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors text-xs font-medium flex items-center gap-1.5 shadow-sm"
                >
                  <span>السيرة الكاملة والفلسفة الفنية</span>
                  <ArrowUpLeft className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="https://www.snapchat.com/@sohilnasr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-[#0B0B0A]/15 text-[#0B0B0A] hover:border-[#B79A5B] transition-colors text-xs font-medium flex items-center gap-1.5"
                >
                  <span>متابعة السناب شات</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#817A6D]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 03: VISION 2030 & MIDDLE EAST PRESTIGE
            ======================================================== */}
        <AtelierVisionSection />

        {/* ========================================================
            SECTION 04: FEATURED WORKS (Editorial Asymmetric Grid)
            ======================================================== */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              tag="مختارات الأتيليه"
              title="مختارات من الأعمال الحقيقية"
              subtitle="قطع خطية منتقاة تبرز تجليات الحرف العربي على وسائط متعددة وبتقنيات دقيقة تم توثيقها بالصورة الحية."
            />

            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0B0B0A] hover:text-[#B79A5B] transition-colors self-start md:self-end border-b border-[#0B0B0A]/20 pb-1"
            >
              <span>مشاهدة الأرشيف الكامل</span>
              <ArrowUpLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {featuredWorks.slice(0, 5).map((work, idx) => {
              const colSpan =
                idx === 0
                  ? "md:col-span-8"
                  : idx === 1
                  ? "md:col-span-4"
                  : idx === 2
                  ? "md:col-span-4"
                  : idx === 3
                  ? "md:col-span-4"
                  : "md:col-span-4";

              const aspect = idx === 0 ? "landscape" : "portrait";

              return (
                <div key={work.id} className={colSpan}>
                  <ArtworkCard
                    id={work.id}
                    slug={work.slug}
                    titleAr={work.titleAr}
                    titleEn={work.titleEn}
                    coverImage={work.coverImage}
                    year={work.year}
                    materialName={work.material?.nameAr}
                    techniqueName={work.technique?.nameAr}
                    featured={work.featured}
                    aspect={aspect}
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            SECTION 04: ATELIER VIDEO & REELS (Snapchat Integration)
            ======================================================== */}
        <AtelierVideoReels />

        {/* ========================================================
            SECTION 05: THE MATERIALS
            ======================================================== */}
        <section className="py-24 bg-[#F3EEE4] border-y border-[#0B0B0A]/8 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <SectionHeading
                tag="عوالم الخامات"
                title="الحرف لا يعيش على الورق فقط."
                subtitle="استكشاف رحلة الخط العربي حين يصافح شفافية الزجاج، دفء الخشب، فخامة المخمل، ودقة السبح."
              />

              <Link
                href="/materials"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#0B0B0A] hover:text-[#B79A5B] transition-colors self-start md:self-end border-b border-[#0B0B0A]/20 pb-1"
              >
                <span>دليل الخامات بالتفصيل</span>
                <ArrowUpLeft className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {materials.map((mat) => (
                <MaterialCard
                  key={mat.id}
                  nameAr={mat.nameAr}
                  nameEn={mat.nameEn}
                  slug={mat.slug}
                  descriptionAr={mat.descriptionAr}
                  worksCount={mat._count.works}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 06: SIGNATURE WORK SPOTLIGHT (Warm Editorial)
            ======================================================== */}
        {signatureWork && (
          <section className="bg-[#EFE9DC] text-[#0B0B0A] py-24 sm:py-32 px-6 sm:px-8 border-y border-[#0B0B0A]/8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Artwork Media Showcase */}
              <div className="lg:col-span-7 relative aspect-4/3 rounded-2xl overflow-hidden border border-[#0B0B0A]/12 shadow-xl bg-[#FAF8F2]">
                <Image
                  src={signatureWork.coverImage}
                  alt={signatureWork.titleAr}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

              {/* Technical Artwork Metadata & Story */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-sans tracking-[0.25em] text-[#B79A5B] uppercase block font-semibold">
                  عمل استثنائي • SIGNATURE PIECE
                </span>

                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#0B0B0A]">
                  {signatureWork.titleAr}
                </h3>

                <p className="text-[#817A6D] text-sm sm:text-base font-light leading-relaxed">
                  {signatureWork.descriptionAr}
                </p>

                {/* Structured Metadata Box */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#0B0B0A]/10 text-xs">
                  <div>
                    <span className="text-[#817A6D] block mb-1">الخامة</span>
                    <span className="text-[#0B0B0A] font-medium">{signatureWork.material?.nameAr || "الزجاج"}</span>
                  </div>
                  <div>
                    <span className="text-[#817A6D] block mb-1">التقنية</span>
                    <span className="text-[#0B0B0A] font-medium">{signatureWork.technique?.nameAr || "حفر ونقش يدوي"}</span>
                  </div>
                  <div>
                    <span className="text-[#817A6D] block mb-1">المقاس</span>
                    <span className="text-[#0B0B0A] font-medium">{signatureWork.dimensions || "أبعاد مخصصة"}</span>
                  </div>
                  <div>
                    <span className="text-[#817A6D] block mb-1">سنة التنفيذ</span>
                    <span className="text-[#0B0B0A] font-medium">{signatureWork.year ? `${signatureWork.year}م` : "—"}</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href={`/works/${signatureWork.slug}`}
                    className="px-6 py-3 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors text-xs font-medium flex items-center gap-1.5 shadow-sm"
                  >
                    <span>تفاصيل العمل الكاملة</span>
                    <ArrowUpLeft className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/commission?ref=${signatureWork.slug}`}
                    className="px-6 py-3 rounded-full border border-[#0B0B0A]/20 text-[#0B0B0A] hover:border-[#B79A5B] hover:text-[#B79A5B] transition-colors text-xs font-medium"
                  >
                    طلب تنفيذ مشابه
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 07: FROM PEN TO أثر (Visual Process Gallery)
            ======================================================== */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
          <SectionHeading
            align="center"
            tag="مسار الحرفة الحية"
            title="من القلم إلى الأثر"
            subtitle="مراحل متأنية تصاحب ولادة كل قطعة فنية في الأتيليه بيد الخطاط سهيل نصر حتى تبلغ كمالها البصري."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 overflow-hidden hover:border-[#B79A5B]/40 transition-all duration-500 shadow-2xs hover:shadow-lg flex flex-col"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#EFE9DC]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-[#D0BB88] px-3 py-1 rounded-full font-display text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between grow space-y-2">
                  <h4 className="font-display text-xl font-bold text-[#0B0B0A] group-hover:text-[#B79A5B] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#817A6D] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            SECTION 08: JOURNAL TEASER (دفتر الحرف)
            ======================================================== */}
        {journalPosts.length > 0 && (
          <section className="py-24 bg-[#F3EEE4] border-t border-[#0B0B0A]/8 px-6 sm:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <SectionHeading
                  tag="يوميات وتأملات"
                  title="دفتر الحرف"
                  subtitle="خواطر من كواليس الاستوديو في الرياض، وأسرار التعامل مع الخامات والتقنيات الخطية."
                />

                <Link
                  href="/journal"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0B0B0A] hover:text-[#B79A5B] transition-colors self-start md:self-end border-b border-[#0B0B0A]/20 pb-1"
                >
                  <span>تصفح كامل المقالات</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {journalPosts.map((post) => (
                  <JournalCard
                    key={post.id}
                    slug={post.slug}
                    titleAr={post.titleAr}
                    excerptAr={post.excerptAr}
                    coverImage={post.coverImage}
                    category={post.category}
                    publishedAt={post.publishedAt}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 09: SOCIAL ARCHIVE & SNAPCHAT
            ======================================================== */}
        {socialPosts.length > 0 && (
          <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <SectionHeading
                tag="نافذة الأتيليه"
                title="من السناب شات والمحترف"
                subtitle="مقتطفات ومقاطع فيديو مباشرة من الاستوديو يشاركها الخطاط سهيل نصر."
              />

              <Link
                href="https://www.snapchat.com/@sohilnasr7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#B79A5B] hover:text-[#0B0B0A] transition-colors self-start md:self-end"
              >
                <span>متابعة @sohilnasr7 على سناب شات</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {socialPosts.map((post) => (
                <SocialCard
                  key={post.id}
                  title={post.title}
                  url={post.url}
                  thumbnail={post.thumbnail}
                  description={post.description}
                  provider={post.provider}
                />
              ))}
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 10: BESPOKE COMMISSION CALLOUT
            ======================================================== */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 bg-[#F3EEE4] border-t border-[#0B0B0A]/8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-xs font-sans tracking-[0.25em] text-[#B79A5B] uppercase block font-semibold">
              اطلب قطعتك الفنية الخاصة • BESPOKE COMMISSION
            </span>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B0B0A] tracking-tight">
              هل لديك عبارة ترغب بتخليدها؟
            </h2>

            <p className="text-[#817A6D] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              نصمم وننقش أسماءك وعباراتك المفضلة على الزجاج الفاخر، خشب الجوز الطبيعي، السبح الملكية، أو أقمشة المخمل لتكون هدية تليق بالمقام وتبقى أثراً خالداً.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/commission"
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-all duration-300 font-medium text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <span>بدء طلب تنفيذ مخصص</span>
                <ArrowUpLeft className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-4 rounded-full border border-[#0B0B0A]/20 text-[#0B0B0A] hover:border-[#B79A5B] transition-all duration-300 font-medium text-sm flex items-center justify-center"
              >
                تواصل مع الأتيليه
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
