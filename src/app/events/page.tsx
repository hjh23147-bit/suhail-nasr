import { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { db } from "@/lib/db";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "المعارض والفعاليات",
  description: "المعارض الفنية والورش والمشاركات المعتمدة للخطاط سهيل نصر.",
};

export default async function EventsPage() {
  const events = await db.event.findMany({
    orderBy: { startDate: "desc" },
  });

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF8F2] text-[#0B0B0A] pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          <SectionHeading
            tag="المشاركات والأنشطة"
            title="المعارض والفعاليات"
            subtitle="الأجندة الفنية، المعارض واللقاءات الحية للخط العربي."
          />

          {events.length === 0 ? (
            <div className="p-12 rounded-3xl bg-[#F3EEE4] border border-[#0B0B0A]/8 text-center space-y-4 max-w-2xl mx-auto">
              <p className="font-display text-2xl text-[#0B0B0A]">
                لا توجد معارض مجدولة حالياً.
              </p>
              <p className="text-sm text-[#817A6D] font-light">
                يتم الإعلان عن الورش والمعارض التشكيلية الجديدة عبر هذه الصفحة وحساب سناب شات الرسمي.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="p-8 rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 space-y-4"
                >
                  <div className="flex items-center justify-between text-xs text-[#817A6D]">
                    <span className="px-3 py-1 rounded-full bg-[#FAF8F2] text-[#B79A5B] font-medium">
                      {event.status === "upcoming" ? "قادمة" : event.status === "ongoing" ? "جارية" : "سابقة"}
                    </span>
                    {event.startDate && (
                      <span className="flex items-center gap-1 font-light">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{new Date(event.startDate).toLocaleDateString("ar-SA")}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#0B0B0A]">
                    {event.titleAr}
                  </h3>

                  {event.location && (
                    <div className="flex items-center gap-1.5 text-xs text-[#817A6D]">
                      <MapPin className="w-3.5 h-3.5 text-[#B79A5B]" />
                      <span>{event.location}</span>
                    </div>
                  )}

                  {event.descriptionAr && (
                    <p className="text-sm text-[#817A6D] font-light leading-relaxed">
                      {event.descriptionAr}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
