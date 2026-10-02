import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowUpLeft } from "lucide-react";
import { db } from "@/lib/db";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";

export const dynamic = "force-dynamic";

interface JournalDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: JournalDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await db.journalPost.findUnique({
    where: { slug },
  });

  if (!post) return { title: "المقال غير موجود" };

  return {
    title: `${post.titleAr} — دفتر الحرف`,
    description: post.excerptAr || "مقالة من دفتر الحرف للخطاط سهيل نصر",
  };
}

export default async function JournalDetailPage({ params }: JournalDetailPageProps) {
  const { slug } = await params;

  const post = await db.journalPost.findUnique({
    where: { slug },
  });

  if (!post || !post.published) {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("ar-SA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF8F2] text-[#0B0B0A] pt-32 pb-24 px-6 sm:px-8">
        <article className="max-w-3xl mx-auto space-y-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-[#817A6D] font-light">
            <Link href="/" className="hover:text-[#0B0B0A] transition-colors">الرئيسية</Link>
            <span>/</span>
            <Link href="/journal" className="hover:text-[#0B0B0A] transition-colors">دفتر الحرف</Link>
            <span>/</span>
            <span className="text-[#0B0B0A] font-medium truncate">{post.titleAr}</span>
          </nav>

          {/* Article Header */}
          <header className="space-y-4">
            <div className="flex items-center gap-4 text-xs text-[#817A6D]">
              <span className="px-3 py-1 rounded-full bg-[#F3EEE4] text-[#B79A5B] font-medium">
                {post.category}
              </span>
              {formattedDate && (
                <span className="flex items-center gap-1 font-light">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formattedDate}</span>
                </span>
              )}
              <span className="flex items-center gap-1 font-light">
                <User className="w-3.5 h-3.5" />
                <span>{post.author || "سهيل نصر"}</span>
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0B0B0A] leading-tight">
              {post.titleAr}
            </h1>

            {post.excerptAr && (
              <p className="text-lg text-[#171614] font-medium leading-relaxed border-r-4 border-[#B79A5B] pr-4 py-1">
                {post.excerptAr}
              </p>
            )}
          </header>

          {/* Cover Media */}
          {post.coverImage && (
            <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-[#EFE9DC] border border-[#0B0B0A]/8 shadow-lg">
              <Image
                src={post.coverImage}
                alt={post.titleAr}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="pt-6 border-t border-[#0B0B0A]/8 font-light text-base sm:text-lg leading-[2] text-[#171614] whitespace-pre-line space-y-6">
            {post.contentAr}
          </div>

          {/* Footer Callout */}
          <div className="pt-12 mt-12 border-t border-[#0B0B0A]/8 flex flex-col sm:flex-row items-center justify-between gap-4 p-8 rounded-2xl bg-[#F3EEE4]">
            <div>
              <h4 className="font-display text-xl font-bold text-[#0B0B0A]">
                هل ألهمتك هذه التدوينة؟
              </h4>
              <p className="text-xs text-[#817A6D] mt-1 font-light">
                يسعدنا مناقشة فكرتك وتنفيذ عمل خطي خاص يعكس ذوقك الرفيع.
              </p>
            </div>

            <Link
              href="/commission"
              className="px-6 py-3 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors text-xs font-medium flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>طلب عمل مخصص</span>
              <ArrowUpLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
