import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpLeft } from "lucide-react";
import { db } from "@/lib/db";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { ArtworkCard } from "@/components/gallery/ArtworkCard";

export const dynamic = "force-dynamic";

interface MaterialDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: MaterialDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const mat = await db.material.findUnique({
    where: { slug },
  });

  if (!mat) return { title: "الخامة غير موجودة" };

  return {
    title: `خامة ${mat.nameAr} في الخط العربي — سهيل نصر`,
    description: mat.descriptionAr || "خامة فنية لتنفيذ أعمال الخط العربي",
  };
}

export default async function MaterialDetailPage({ params }: MaterialDetailPageProps) {
  const { slug } = await params;

  const material = await db.material.findUnique({
    where: { slug },
    include: {
      works: {
        where: { published: true },
        include: { technique: true, material: true },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!material) {
    notFound();
  }

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF8F2] text-[#0B0B0A] pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-[#817A6D] font-light">
            <Link href="/" className="hover:text-[#0B0B0A] transition-colors">الرئيسية</Link>
            <span>/</span>
            <Link href="/materials" className="hover:text-[#0B0B0A] transition-colors">الخامات</Link>
            <span>/</span>
            <span className="text-[#0B0B0A] font-medium">{material.nameAr}</span>
          </nav>

          {/* Material Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-sans tracking-[0.25em] text-[#B79A5B] uppercase block font-medium">
              {material.nameEn || "MATERIAL SHOWCASE"}
            </span>

            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0B0B0A]">
              {material.nameAr}
            </h1>

            {material.descriptionAr && (
              <p className="text-lg text-[#171614] font-light leading-relaxed">
                {material.descriptionAr}
              </p>
            )}

            <div className="pt-2">
              <Link
                href={`/commission?material=${material.slug}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors text-xs font-medium"
              >
                <span>طلب عمل مخصص على {material.nameAr}</span>
                <ArrowUpLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Associated Works Section */}
          <div className="pt-12 border-t border-[#0B0B0A]/8 space-y-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B0B0A]">
              الأعمال المنفذة على خامة {material.nameAr} ({material.works.length})
            </h2>

            {material.works.length === 0 ? (
              <p className="text-[#817A6D] text-sm py-12">
                لا توجد أعمال منشورة مسجلة تحت هذه الخامة حالياً.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {material.works.map((work) => (
                  <ArtworkCard
                    key={work.id}
                    id={work.id}
                    slug={work.slug}
                    titleAr={work.titleAr}
                    titleEn={work.titleEn}
                    coverImage={work.coverImage}
                    year={work.year}
                    materialName={work.material?.nameAr}
                    techniqueName={work.technique?.nameAr}
                    aspect="landscape"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
