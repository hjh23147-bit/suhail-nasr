import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ArtworkCardProps {
  id: string;
  slug: string;
  titleAr: string;
  titleEn?: string | null;
  coverImage: string;
  year?: number | null;
  materialName?: string | null;
  techniqueName?: string | null;
  featured?: boolean;
  className?: string;
  aspect?: "portrait" | "landscape" | "square";
}

export function ArtworkCard({
  slug,
  titleAr,
  titleEn,
  coverImage,
  year,
  materialName,
  techniqueName,
  featured = false,
  className = "",
  aspect = "landscape",
}: ArtworkCardProps) {
  const aspectClasses = {
    portrait: "aspect-4/5",
    landscape: "aspect-4/3",
    square: "aspect-square",
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col bg-[#F3EEE4] border border-[#0B0B0A]/8 overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl hover:border-[#B79A5B]/40",
        className
      )}
    >
      {/* Artwork Image Container with 1-3% smooth hover zoom */}
      <Link href={`/works/${slug}`} className={cn("relative w-full overflow-hidden block", aspectClasses[aspect])}>
        <Image
          src={coverImage}
          alt={titleAr}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Ambient Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span className="text-xs text-[#FAF8F2] font-medium flex items-center gap-1.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span>تأمل تفاصيل العمل</span>
            <ArrowUpLeft className="w-3.5 h-3.5 text-[#D0BB88]" />
          </span>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 bg-[#0B0B0A]/80 backdrop-blur-xs text-[#D0BB88] border border-[#B79A5B]/30 px-3 py-1 rounded-full text-[11px] font-sans">
            عمل مختار
          </div>
        )}
      </Link>

      {/* Metadata Panel */}
      <div className="p-5 flex flex-col justify-between grow space-y-3 bg-[#FAF8F2]">
        <div>
          <div className="flex items-center justify-between text-xs text-[#817A6D] mb-1.5 font-light">
            {materialName && <span className="text-[#B79A5B] font-medium">{materialName}</span>}
            {year && <span>{year}م</span>}
          </div>

          <Link href={`/works/${slug}`} className="block focus:outline-hidden">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B0B0A] group-hover:text-[#B79A5B] transition-colors leading-snug">
              {titleAr}
            </h3>
            {titleEn && (
              <p className="text-xs text-[#817A6D] font-light mt-0.5 tracking-wide">
                {titleEn}
              </p>
            )}
          </Link>
        </div>

        {techniqueName && (
          <div className="pt-2 border-t border-[#0B0B0A]/6 text-[11px] text-[#817A6D] flex items-center justify-between">
            <span>التقنية: {techniqueName}</span>
          </div>
        )}
      </div>
    </div>
  );
}
