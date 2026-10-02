import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, CheckCircle2 } from "lucide-react";
import { db } from "@/lib/db";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "الخدمات الفنية والأعمال المخصصة",
  description: "خدمات الخط العربي والحفر على الزجاج والخشب والسبح والمخمل للخطاط سهيل نصر.",
};

export default async function ServicesPage() {
  const services = await db.service.findMany({
    where: { active: true },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF8F2] text-[#0B0B0A] pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeading
            tag="خدمات الأتيليه"
            title="الخدمات الفنية"
            subtitle="نقدم تجارب خطية أصيلة تناسب متطلبات المقتنين والجهات والمناسبات الفاخرة بدقة وحرفية يدوية خالصة."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col bg-[#F3EEE4] border border-[#0B0B0A]/8 rounded-2xl overflow-hidden hover:border-[#B79A5B]/40 hover:shadow-xl transition-all duration-500"
              >
                {service.coverImage && (
                  <div className="relative aspect-16/9 w-full overflow-hidden bg-[#EFE9DC]">
                    <Image
                      src={service.coverImage}
                      alt={service.titleAr}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="p-8 flex flex-col justify-between grow space-y-6">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0B0B0A] group-hover:text-[#B79A5B] transition-colors">
                      {service.titleAr}
                    </h3>
                    <p className="text-sm text-[#817A6D] font-light leading-relaxed mt-3">
                      {service.descriptionAr}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#0B0B0A]/8 flex items-center justify-between">
                    <Link
                      href={`/commission?workType=${encodeURIComponent(service.titleAr)}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B0B0A] text-[#FAF8F2] group-hover:bg-[#B79A5B] group-hover:text-[#0B0B0A] transition-colors text-xs font-medium"
                    >
                      <span>طلب الخدمة</span>
                      <ArrowUpLeft className="w-3.5 h-3.5" />
                    </Link>
                  </div>
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
