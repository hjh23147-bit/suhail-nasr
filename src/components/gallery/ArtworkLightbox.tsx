"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronRight, ChevronLeft, ArrowUpLeft } from "lucide-react";

export interface LightboxItem {
  id: string;
  url: string;
  titleAr: string;
  titleEn?: string | null;
  materialName?: string | null;
  techniqueName?: string | null;
  year?: number | null;
  dimensions?: string | null;
  slug?: string;
}

interface ArtworkLightboxProps {
  items: LightboxItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ArtworkLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ArtworkLightboxProps) {
  const currentItem = items[currentIndex];

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handleNext(); // RTL: left arrow is next
      if (e.key === "ArrowRight") handlePrev(); // RTL: right arrow is prev
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
      {/* Top Bar Controls */}
      <div className="absolute top-0 inset-x-0 p-6 flex items-center justify-between text-[#FAF8F2] z-20">
        <div className="text-xs text-[#A49D91] font-sans">
          <span>{currentIndex + 1}</span> / <span>{items.length}</span>
        </div>

        <button
          onClick={onClose}
          aria-label="إغلاق العارض"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF8F2] transition-colors focus:outline-hidden"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Previous / Next Arrow Controls */}
      <button
        onClick={handlePrev}
        aria-label="العمل السابق"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#B79A5B] hover:text-[#0B0B0A] text-[#FAF8F2] transition-all z-20 focus:outline-hidden"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        aria-label="العمل التالي"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#B79A5B] hover:text-[#0B0B0A] text-[#FAF8F2] transition-all z-20 focus:outline-hidden"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Showcase */}
      <div className="relative w-full max-w-5xl h-[70vh] sm:h-[75vh] px-4 flex items-center justify-center">
        <Image
          src={currentItem.url}
          alt={currentItem.titleAr}
          fill
          priority
          sizes="90vw"
          className="object-contain"
        />
      </div>

      {/* Bottom Metadata Bar */}
      <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent text-[#FAF8F2] flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
        <div className="text-center sm:text-right">
          <h3 className="font-display text-2xl font-bold text-[#D0BB88]">
            {currentItem.titleAr}
          </h3>
          <div className="flex items-center gap-3 text-xs text-[#A49D91] mt-1">
            {currentItem.materialName && <span>الخامة: {currentItem.materialName}</span>}
            {currentItem.techniqueName && <span>• {currentItem.techniqueName}</span>}
            {currentItem.dimensions && <span>• {currentItem.dimensions}</span>}
            {currentItem.year && <span>• {currentItem.year}م</span>}
          </div>
        </div>

        {currentItem.slug && (
          <Link
            href={`/works/${currentItem.slug}`}
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#B79A5B] text-[#0B0B0A] hover:bg-white transition-colors text-xs font-medium flex items-center gap-1.5"
          >
            <span>صفحة تفاصيل اللوحة</span>
            <ArrowUpLeft className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}
