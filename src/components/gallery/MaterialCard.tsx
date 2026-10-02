import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface MaterialCardProps {
  nameAr: string;
  nameEn?: string | null;
  slug: string;
  descriptionAr?: string | null;
  worksCount?: number;
  className?: string;
}

export function MaterialCard({
  nameAr,
  nameEn,
  slug,
  descriptionAr,
  worksCount,
  className = "",
}: MaterialCardProps) {
  return (
    <Link
      href={`/materials/${slug}`}
      className={cn(
        "group relative flex flex-col justify-between p-8 rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 hover:border-[#B79A5B] transition-all duration-500 hover:shadow-xl hover:-translate-y-1 focus:outline-hidden",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between text-xs text-[#817A6D] mb-4">
          <span className="font-sans uppercase tracking-[0.2em] text-[#B79A5B]">
            {nameEn || "MATERIAL"}
          </span>
          {typeof worksCount === "number" && (
            <span>{worksCount} {worksCount === 1 ? "عمل فني" : "أعمال"}</span>
          )}
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0B0B0A] group-hover:text-[#B79A5B] transition-colors">
          {nameAr}
        </h3>

        {descriptionAr && (
          <p className="text-sm text-[#817A6D] font-light leading-relaxed mt-3 line-clamp-3">
            {descriptionAr}
          </p>
        )}
      </div>

      <div className="pt-6 mt-6 border-t border-[#0B0B0A]/6 flex items-center justify-between text-xs font-medium text-[#0B0B0A] group-hover:text-[#B79A5B] transition-colors">
        <span>استعراض الأعمال المنفذة</span>
        <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
      </div>
    </Link>
  );
}
