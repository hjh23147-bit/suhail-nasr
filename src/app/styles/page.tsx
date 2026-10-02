import { Metadata } from "next";
import Link from "next/link";
import { db } from "@/lib/db";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "الأساليب والخطوط المعتمدة",
  description: "الأساليب والمدارس الخطية المعتمدة في أعمال الخطاط سهيل نصر.",
};

export default async function StylesPage() {
  const styles = await db.style.findMany({
    include: {
      works: {
        where: { published: true },
        take: 3,
      },
    },
  });

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF8F2] text-[#0B0B0A] pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeading
            tag="مدارس الخط وقواعد القلم"
            title="الأساليب الفنية"
            subtitle="الأساليب المعتمدة في تنفيذ الأعمال؛ من هيبة الثلث وانسيابية الديواني، إلى قوة الرقعة وحرية التشكيل المعاصر."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {styles.map((style) => (
              <div
                key={style.id}
                className="p-8 rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 flex flex-col justify-between space-y-6"
              >
                <div>
                  <span className="text-xs font-sans tracking-[0.2em] text-[#B79A5B] uppercase block mb-2">
                    {style.nameEn || "CALLIGRAPHY STYLE"}
                  </span>

                  <h3 className="font-display text-3xl font-bold text-[#0B0B0A]">
                    {style.nameAr}
                  </h3>

                  {style.descriptionAr && (
                    <p className="text-sm text-[#817A6D] font-light leading-relaxed mt-4">
                      {style.descriptionAr}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-[#0B0B0A]/8 flex items-center justify-between text-xs">
                  <span className="text-[#817A6D]">الأعمال المنفذة بهذا النمط</span>
                  <Link
                    href={`/works`}
                    className="font-medium text-[#0B0B0A] hover:text-[#B79A5B] transition-colors"
                  >
                    استعراض المعرض ({style.works.length})
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
