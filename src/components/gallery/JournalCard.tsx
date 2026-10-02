import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeft, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface JournalCardProps {
  slug: string;
  titleAr: string;
  excerptAr?: string | null;
  coverImage?: string | null;
  category?: string;
  publishedAt?: Date | null;
  className?: string;
}

export function JournalCard({
  slug,
  titleAr,
  excerptAr,
  coverImage,
  category = "من الاستوديو",
  publishedAt,
  className = "",
}: JournalCardProps) {
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("ar-SA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <article
      className={cn(
        "group flex flex-col bg-[#FAF8F2] border border-[#0B0B0A]/8 rounded-2xl overflow-hidden hover:border-[#B79A5B]/40 hover:shadow-lg transition-all duration-500",
        className
      )}
    >
      {coverImage && (
        <Link href={`/journal/${slug}`} className="relative aspect-16/9 w-full overflow-hidden block">
          <Image
            src={coverImage}
            alt={titleAr}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
      )}

      <div className="p-6 flex flex-col justify-between grow space-y-4">
        <div>
          <div className="flex items-center gap-3 text-xs text-[#817A6D] mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#F3EEE4] text-[#B79A5B] font-medium text-[11px]">
              {category}
            </span>
            {formattedDate && (
              <span className="flex items-center gap-1 font-light">
                <Calendar className="w-3 h-3 text-[#817A6D]" />
                <span>{formattedDate}</span>
              </span>
            )}
          </div>

          <Link href={`/journal/${slug}`}>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B0B0A] group-hover:text-[#B79A5B] transition-colors leading-snug">
              {titleAr}
            </h3>
          </Link>

          {excerptAr && (
            <p className="text-sm text-[#817A6D] font-light leading-relaxed mt-2 line-clamp-3">
              {excerptAr}
            </p>
          )}
        </div>

        <div className="pt-4 border-t border-[#0B0B0A]/6 flex items-center justify-between">
          <Link
            href={`/journal/${slug}`}
            className="text-xs font-medium text-[#0B0B0A] group-hover:text-[#B79A5B] flex items-center gap-1 transition-colors"
          >
            <span>قراءة التدوينة</span>
            <ArrowUpLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
