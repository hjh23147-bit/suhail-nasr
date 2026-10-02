import { Metadata } from "next";
import { db } from "@/lib/db";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MaterialCard } from "@/components/gallery/MaterialCard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "أرشيف الخامات",
  description: "دليل الخامات الحية للخط العربي: الزجاج، الخشب الطبيعي، المخمل، السجاد، الأكواب، والسبح.",
};

export default async function MaterialsPage() {
  const materials = await db.material.findMany({
    include: {
      _count: {
        select: { works: true },
      },
    },
    orderBy: { nameAr: "asc" },
  });

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF8F2] text-[#0B0B0A] pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeading
            tag="وسائط الحرف العربي"
            title="أرشيف الخامات"
            subtitle="لا يقتصر الحرف على الورق المقهر؛ بل يتجذر في ألياف الخشب، ينحت في صفاء الزجاج، ويخلد على حبات السبح النادرة."
          />

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
      </main>

      <Footer />
    </>
  );
}
