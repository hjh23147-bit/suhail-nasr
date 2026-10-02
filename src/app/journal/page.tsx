import { Metadata } from "next";
import { db } from "@/lib/db";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JournalCard } from "@/components/gallery/JournalCard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "دفتر الحرف — المدونة والتأملات",
  description: "يوميات وتأملات فنية من استوديو الخطاط سهيل نصر في الرياض.",
};

export default async function JournalPage() {
  const posts = await db.journalPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF8F2] text-[#0B0B0A] pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeading
            tag="بين الحبر والأثر"
            title="دفتر الحرف"
            subtitle="مدونة شخصية توثق رحلة الحرف، أسرار التعامل مع الخامات، خواطر من خلف كواليس الأتيليه، وتجارب الخط المعاصر."
          />

          {posts.length === 0 ? (
            <p className="text-[#817A6D] text-center py-24 font-light">
              لا توجد مقالات منشورة حالياً في دفتر الحرف.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
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
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
