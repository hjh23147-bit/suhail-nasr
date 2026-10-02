import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpLeft, ArrowRight, Sparkles } from "lucide-react";
import { db } from "@/lib/db";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { ArtworkCard } from "@/components/gallery/ArtworkCard";

export const dynamic = "force-dynamic";

interface WorkDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = await db.work.findUnique({
    where: { slug },
  });

  if (!work) return { title: "العمل الفني غير موجود" };

  return {
    title: `${work.titleAr} — الخطاط سهيل نصر`,
    description: work.excerptAr || work.descriptionAr || "عمل فني للخطاط سهيل نصر",
    openGraph: {
      title: work.titleAr,
      description: work.excerptAr || work.descriptionAr || "",
      images: [work.coverImage],
    },
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;

  const work = await db.work.findUnique({
    where: { slug },
    include: {
      material: true,
      technique: true,
      style: true,
      category: true,
      media: {
        orderBy: { sortOrder: "asc" },
      },
    },
  });

  if (!work || !work.published) {
    notFound();
  }

  // Related works from same material or category
  const relatedWorks = await db.work.findMany({
    where: {
      published: true,
      id: { not: work.id },
      OR: [
        { materialId: work.materialId },
        { categoryId: work.categoryId },
      ],
    },
    include: { material: true, technique: true },
    take: 3,
  });

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF8F2] text-[#0B0B0A] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-[#817A6D] mb-8 font-light">
            <Link href="/" className="hover:text-[#0B0B0A] transition-colors">الرئيسية</Link>
            <span>/</span>
            <Link href="/works" className="hover:text-[#0B0B0A] transition-colors">الأعمال</Link>
            <span>/</span>
            <span className="text-[#0B0B0A] font-medium">{work.titleAr}</span>
          </nav>

          {/* Main Artwork Grid (Visual Showcase + Metadata) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
            {/* Visual Hero Image */}
            <div className="lg:col-span-8 space-y-6">
              <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden bg-[#EFE9DC] border border-[#0B0B0A]/10 shadow-xl">
                <Image
                  src={work.coverImage}
                  alt={work.titleAr}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>

              {/* Gallery of extra media if available */}
              {work.media.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {work.media.map((item) => (
                    <div
                      key={item.id}
                      className="relative aspect-square rounded-xl overflow-hidden bg-[#EFE9DC] border border-[#0B0B0A]/10 shadow-xs"
                    >
                      <Image
                        src={item.url}
                        alt={item.altAr || work.titleAr}
                        fill
                        sizes="25vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Editorial Metadata Sidebar */}
            <div className="lg:col-span-4 space-y-8 sticky top-28 bg-[#F3EEE4] p-8 rounded-2xl border border-[#0B0B0A]/8">
              <div>
                {work.category && (
                  <span className="text-xs font-sans tracking-[0.2em] text-[#B79A5B] uppercase block mb-2 font-medium">
                    {work.category.nameAr}
                  </span>
                )}

                <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#0B0B0A] leading-tight">
                  {work.titleAr}
                </h1>

                {work.titleEn && (
                  <p className="text-xs text-[#817A6D] tracking-wider mt-1 font-sans">
                    {work.titleEn}
                  </p>
                )}
              </div>

              {work.excerptAr && (
                <p className="text-base text-[#171614] font-medium leading-relaxed border-r-2 border-[#B79A5B] pr-3">
                  {work.excerptAr}
                </p>
              )}

              {/* Technical Artwork Specifications */}
              <div className="space-y-4 pt-4 border-t border-[#0B0B0A]/8 text-xs">
                {work.material && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#817A6D]">الخامة</span>
                    <Link
                      href={`/materials/${work.material.slug}`}
                      className="font-medium text-[#0B0B0A] hover:text-[#B79A5B] transition-colors"
                    >
                      {work.material.nameAr}
                    </Link>
                  </div>
                )}

                {work.technique && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#817A6D]">التقنية</span>
                    <span className="font-medium text-[#0B0B0A]">{work.technique.nameAr}</span>
                  </div>
                )}

                {work.style && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#817A6D]">الأسلوب الخطي</span>
                    <span className="font-medium text-[#0B0B0A]">{work.style.nameAr}</span>
                  </div>
                )}

                {work.dimensions && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#817A6D]">المقاس والأبعاد</span>
                    <span className="font-medium text-[#0B0B0A]">{work.dimensions}</span>
                  </div>
                )}

                {work.year && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#817A6D]">سنة الإنجاز</span>
                    <span className="font-medium text-[#0B0B0A]">{work.year}م</span>
                  </div>
                )}
              </div>

              {/* Commission CTA Button */}
              <div className="pt-6 border-t border-[#0B0B0A]/8 space-y-3">
                <Link
                  href={`/commission?ref=${work.slug}&material=${work.material?.slug || ""}`}
                  className="w-full py-4 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-all duration-300 font-medium text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <span>طلب تنفيذ عمل مماثل</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </Link>

                <p className="text-[11px] text-[#817A6D] text-center font-light leading-relaxed">
                  يتم تنفيذ القطع يدوياً بصورة حصرية ومخصصة وفق النص والمقاس المطلوب.
                </p>
              </div>
            </div>
          </div>

          {/* Full Artwork Description */}
          {work.descriptionAr && (
            <div className="max-w-3xl mb-24 space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#0B0B0A]">
                عن العمل وسياقه الفني
              </h2>
              <p className="text-base text-[#171614] font-light leading-relaxed whitespace-pre-line">
                {work.descriptionAr}
              </p>
            </div>
          )}

          {/* Related Works */}
          {relatedWorks.length > 0 && (
            <div className="pt-16 border-t border-[#0B0B0A]/8 space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-[#0B0B0A]">
                  أعمال ذات صلة
                </h3>
                <Link
                  href="/works"
                  className="text-xs text-[#817A6D] hover:text-[#B79A5B] transition-colors"
                >
                  عرض جميع الأعمال
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {relatedWorks.map((rw) => (
                  <ArtworkCard
                    key={rw.id}
                    id={rw.id}
                    slug={rw.slug}
                    titleAr={rw.titleAr}
                    titleEn={rw.titleEn}
                    coverImage={rw.coverImage}
                    year={rw.year}
                    materialName={rw.material?.nameAr}
                    techniqueName={rw.technique?.nameAr}
                    aspect="landscape"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
