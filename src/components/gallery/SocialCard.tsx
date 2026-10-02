import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface SocialCardProps {
  title: string;
  url: string;
  thumbnail?: string | null;
  description?: string | null;
  provider?: string;
}

export function SocialCard({
  title,
  url,
  thumbnail,
  description,
  provider = "snapchat",
}: SocialCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-[#FAF8F2] text-[#0B0B0A] border border-[#0B0B0A]/8 rounded-2xl overflow-hidden hover:border-[#B79A5B]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 focus:outline-hidden"
    >
      {thumbnail && (
        <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F3EEE4]">
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-[#FFFC00] text-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
            {provider}
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col justify-between grow space-y-4">
        <div>
          <h4 className="font-display text-lg sm:text-xl font-bold group-hover:text-[#B79A5B] transition-colors leading-snug">
            {title}
          </h4>
          {description && (
            <p className="text-xs text-[#817A6D] font-light leading-relaxed mt-2 line-clamp-2">
              {description}
            </p>
          )}
        </div>

        <div className="pt-3 border-t border-[#0B0B0A]/6 flex items-center justify-between text-xs text-[#817A6D] group-hover:text-[#0B0B0A] transition-colors">
          <span>مشاهدة في سناب شات</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#B79A5B]" />
        </div>
      </div>
    </a>
  );
}
