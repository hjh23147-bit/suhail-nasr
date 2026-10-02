import { Metadata } from "next";
import Link from "next/link";
import { db } from "@/lib/db";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArtworkCard } from "@/components/gallery/ArtworkCard";
import { normalizeArabicText } from "@/lib/arabic-search";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "معرض الأعمال الفنية",
  description: "استعراض أرشيف الأعمال الخطية للخطاط سهيل نصر على الزجاج والخشب والمخمل والسبح.",
};

interface WorksPageProps {
  searchParams: Promise<{
    material?: string;
    q?: string;
  }>;
}

export default async function WorksPage({ searchParams }: WorksPageProps) {
  const { material: selectedMaterial, q: searchQuery } = await searchParams;

  const materials = await db.material.findMany({
    orderBy: { nameAr: "asc" },
  });

  const allWorks = await db.work.findMany({
    where: {
      published: true,
      ...(selectedMaterial ? { material: { slug: selectedMaterial } } : {}),
    },
    include: {
      material: true,
      technique: true,
      category: true,
    },
    orderBy: { createdAt: "desc" },
  });

  // Filter in memory using normalized Arabic search if query present
  const filteredWorks = searchQuery
    ? allWorks.filter((w) => {
        const normQ = normalizeArabicText(searchQuery);
        const normTitle = normalizeArabicText(w.titleAr);
        const normDesc = normalizeArabicText(w.descriptionAr || "");
        const normMat = normalizeArabicText(w.material?.nameAr || "");
        return normTitle.includes(normQ) || normDesc.includes(normQ) || normMat.includes(normQ);
      })
    : allWorks;

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF8F2] text-[#0B0B0A] pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <SectionHeading
              tag="الأرشيف الفني"
              title="معرض الأعمال"
              subtitle="حين يتحول الحرف إلى كيان ملموس ينبض بالحياة عبر خامات الزجاج والخشب والسبح والمخمل."
            />

            {/* Quick Search Input */}
            <form method="GET" className="w-full md:w-72">
              <input
                type="text"
                name="q"
                defaultValue={searchQuery || ""}
                placeholder="بحث في الأعمال والخامات…"
                className="w-full px-5 py-3 rounded-full bg-[#F3EEE4] border border-[#0B0B0A]/10 text-sm focus:outline-hidden focus:border-[#B79A5B] transition-colors"
              />
              {selectedMaterial && <input type="hidden" name="material" value={selectedMaterial} />}
            </form>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#0B0B0A]/8">
            <Link
              href="/works"
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                !selectedMaterial
                  ? "bg-[#0B0B0A] text-[#FAF8F2]"
                  : "bg-[#F3EEE4] text-[#817A6D] hover:text-[#0B0B0A]"
              }`}
            >
              الكل ({allWorks.length})
            </Link>

            {materials.map((m) => {
              const isSelected = selectedMaterial === m.slug;
              return (
                <Link
                  key={m.id}
                  href={`/works?material=${m.slug}${searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ""}`}
                  className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-[#B79A5B] text-[#0B0B0A] font-bold"
                      : "bg-[#F3EEE4] text-[#817A6D] hover:text-[#0B0B0A]"
                  }`}
                >
                  {m.nameAr}
                </Link>
              );
            })}
          </div>

          {/* Works Gallery Grid */}
          {filteredWorks.length === 0 ? (
            <div className="py-24 text-center space-y-4">
              <p className="font-display text-2xl text-[#817A6D]">
                لا توجد أعمال منشورة هنا بعد.
              </p>
              <Link
                href="/works"
                className="inline-block px-6 py-2.5 rounded-full border border-[#0B0B0A]/20 text-xs font-medium hover:border-[#0B0B0A]"
              >
                عرض كل الأعمال
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWorks.map((work) => (
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
                  featured={work.featured}
                  aspect="landscape"
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
