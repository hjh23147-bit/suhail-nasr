import { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CommissionForm } from "@/features/commission/CommissionForm";

export const metadata: Metadata = {
  title: "طلب عمل مخصص — تحويل الفكرة إلى أثر",
  description: "اطلب عملاً خطياً مخصصاً على الزجاج، الخشب، السبح، المخمل، أو الورق المقهر من الخطاط سهيل نصر.",
};

interface CommissionPageProps {
  searchParams: Promise<{
    workType?: string;
    material?: string;
    ref?: string;
  }>;
}

export default async function CommissionPage({ searchParams }: CommissionPageProps) {
  const { workType, material, ref } = await searchParams;

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF8F2] text-[#0B0B0A] pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          <SectionHeading
            align="center"
            tag="استوديو الطلبات الخاصة"
            title="طلب عمل مخصص"
            subtitle="شاركنا فكرتك، النص المنشود، والخامة المفضلة لنقوم بدراستها وتحويلها إلى أثر فني فريد."
          />

          <CommissionForm
            initialWorkType={workType}
            initialMaterial={material}
            refWorkSlug={ref}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
