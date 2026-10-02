import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  align?: "right" | "center" | "left";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  tag,
  align = "right",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const alignmentClasses = {
    right: "text-right items-start",
    center: "text-center items-center mx-auto",
    left: "text-left items-end",
  };

  return (
    <div className={cn("flex flex-col space-y-3 max-w-3xl", alignmentClasses[align], className)}>
      {tag && (
        <span
          className={cn(
            "text-xs font-sans tracking-[0.25em] uppercase font-medium",
            dark ? "text-[#D0BB88]" : "text-[#B79A5B]"
          )}
        >
          {tag}
        </span>
      )}

      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.2]",
          dark ? "text-[#FAF8F2]" : "text-[#0B0B0A]"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg font-light leading-relaxed max-w-2xl",
            dark ? "text-[#A49D91]" : "text-[#817A6D]"
          )}
        >
          {subtitle}
        </p>
      )}

      <div
        className={cn(
          "w-12 h-[2px] mt-2 rounded-full",
          dark ? "bg-[#B79A5B]" : "bg-[#B79A5B]/80",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
}
