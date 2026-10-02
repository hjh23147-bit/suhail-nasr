"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause, X, ExternalLink, Sparkles, Eye, Clock, ArrowUpLeft, ShieldCheck } from "lucide-react";

interface VideoReel {
  id: string;
  titleAr: string;
  craftAr: string;
  duration: string;
  views: string;
  thumbnail: string;
  snapchatUrl: string;
  descriptionAr: string;
  tags: string[];
}

const REELS_DATA: VideoReel[] = [
  {
    id: "reel-glass",
    titleAr: "توثيق الحفر المباشر على الزجاج البلوري",
    craftAr: "حفر ونقش يدوي بالألماس",
    duration: "0:48",
    views: "+14.8K",
    thumbnail: "/images/suhail-glass-action.jpg",
    snapchatUrl: "https://www.snapchat.com/@sohilnasr7",
    descriptionAr: "كواليس حية من محترف الرياض توثق تفريغ ونقش عبارة خطية بالديواني الجلي على زجاج كريستالي نقي برأس الألماس الدقيق.",
    tags: ["حفر زجاج", "خط ديواني", "أتيليه الرياض"],
  },
  {
    id: "reel-wood",
    titleAr: "جلسة الحرق الحراري على خشب الجوز المعتق",
    craftAr: "حرق وتعتيق فني على الخشب",
    duration: "0:56",
    views: "+19.3K",
    thumbnail: "/images/suhail-wood-action.jpg",
    snapchatUrl: "https://www.snapchat.com/@sohilnasr7",
    descriptionAr: "تصاعد دخان العود والأخشاب الطبيعية أثناء كي وتثبيت حروف الثلث الجلي بعمق ألياف الخشب الصلب.",
    tags: ["حرق خشب", "خط الثلث", "صنعة يدوية"],
  },
  {
    id: "reel-beads",
    titleAr: "نقش مجهري وتذهيب خالص لسبحة الكهرمان",
    craftAr: "كتابة مجهرية وتذهيب يدوي",
    duration: "0:42",
    views: "+28.6K",
    thumbnail: "/images/suhail-beads-action.jpg",
    snapchatUrl: "https://www.snapchat.com/@sohilnasr7",
    descriptionAr: "دقة متناهية تحت عدسة التكبير لنقش أسماء مخصصة بماء الذهب عيار ٢٤ على شواهد وحبات سبحة كهرمان نادرة.",
    tags: ["سبح كهرمان", "تذهيب", "مقتنيات خاصة"],
  },
  {
    id: "reel-calligraphy",
    titleAr: "تخطيط بقصبة البامبو وحبر السناج الكربوني",
    craftAr: "الخط العربي الكلاسيكي",
    duration: "1:15",
    views: "+32.1K",
    thumbnail: "/images/suhail-calligraphy-hero.jpg",
    snapchatUrl: "https://www.snapchat.com/@sohilnasr7",
    descriptionAr: "أصول الصنعة وميزان الحرف وفق القواعد الكلاسيكية الأصيلة على ورق مقهر يدوي بأحبار طبيعية.",
    tags: ["حبر السناج", "قصبة الخط", "ورق مقهر"],
  },
];

export function AtelierVideoReels() {
  const [activeReel, setActiveReel] = useState<VideoReel | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative py-24 px-6 sm:px-8 bg-[#F3EEE4] border-y border-[#0B0B0A]/8 overflow-hidden">
      {/* Background Decorative Flourish */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B79A5B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#0B0B0A]/8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B79A5B]" />
              <span className="text-xs font-sans tracking-[0.25em] text-[#B79A5B] uppercase font-semibold">
                ستوديو التوثيق المرئي • LIVE REELS & ATELIER
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0B0A] tracking-tight">
              كواليس الحرف من قلب المحترف
            </h2>

            <p className="text-sm sm:text-base text-[#817A6D] font-light max-w-2xl leading-relaxed">
              شاهد الخطاط سهيل نصر في جلسات حية يوثق فيها تطويع خامات الزجاج والخشب والسبح، مع روابط مباشرة لمشاهدة اليوميات على سناب شات.
            </p>
          </div>

          {/* Official Snapchat Verified Badge */}
          <Link
            href="https://www.snapchat.com/@sohilnasr7"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#FAF8F2] px-5 py-3.5 rounded-2xl border border-[#0B0B0A]/10 hover:border-[#B79A5B] transition-all shadow-xs hover:shadow-md shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-[#FFFC00] flex items-center justify-center text-[#0B0B0A] font-bold shadow-xs">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.016 2.016c-3.766 0-6.732 2.966-6.732 6.732 0 .61.082 1.196.234 1.758-.844.281-1.465 1.055-1.465 1.992 0 .914.586 1.664 1.406 1.969-.023.187-.047.375-.047.562 0 1.945 1.055 3.656 2.625 4.57-.469.75-1.125 1.336-1.898 1.711-.328.164-.492.516-.398.867.094.352.422.586.773.586h.117c1.336-.07 2.555-.562 3.539-1.383.562.164 1.172.258 1.844.258s1.289-.094 1.844-.258c.984.82 2.203 1.312 3.539 1.383h.117c.352 0 .68-.234.773-.586.094-.352-.07-.703-.398-.867-.773-.375-1.43-1.008-1.898-1.711 1.57-.914 2.625-2.625 2.625-4.57 0-.188-.023-.375-.047-.562.82-.305 1.406-1.055 1.406-1.969 0-.938-.621-1.711-1.465-1.992.152-.562.234-1.148.234-1.758 0-3.766-2.966-6.732-6.732-6.732z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#0B0B0A] font-bold">
                <span>سناب شات الرسمي</span>
                <ShieldCheck className="w-3.5 h-3.5 text-[#B79A5B]" />
              </div>
              <span className="text-[11px] text-[#817A6D] font-mono dir-ltr block text-right">
                @sohilnasr7
              </span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#817A6D] group-hover:text-[#0B0B0A] transition-colors mr-1" />
          </Link>
        </div>

        {/* Video Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {REELS_DATA.map((reel) => (
            <div
              key={reel.id}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#FAF8F2] border border-[#0B0B0A]/10 hover:border-[#B79A5B] transition-all duration-500 hover:shadow-xl"
            >
              {/* Thumbnail Container with Play Overlay */}
              <div className="relative aspect-4/5 w-full overflow-hidden bg-[#0B0B0A]">
                <Image
                  src={reel.thumbnail}
                  alt={reel.titleAr}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badges: Duration & Views */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[10px] font-mono text-[#FAF8F2]">
                    <Clock className="w-3 h-3 text-[#B79A5B]" />
                    <span>{reel.duration}</span>
                  </span>

                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[10px] font-mono text-[#FAF8F2]">
                    <Eye className="w-3 h-3 text-[#D0BB88]" />
                    <span>{reel.views}</span>
                  </span>
                </div>

                {/* Center Play Action Button */}
                <button
                  onClick={() => {
                    setActiveReel(reel);
                    setIsPlaying(true);
                  }}
                  aria-label={`تشغيل فيديو: ${reel.titleAr}`}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#B79A5B]/90 hover:bg-[#FAF8F2] text-[#0B0B0A] flex items-center justify-center shadow-2xl transition-all duration-300 scale-95 group-hover:scale-110 z-10 focus:outline-hidden"
                >
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </button>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-3 inset-x-3 text-[#FAF8F2] z-10">
                  <span className="text-[10px] font-sans text-[#D0BB88] block mb-1">
                    {reel.craftAr}
                  </span>
                  <h3 className="font-display text-sm font-bold leading-snug line-clamp-2">
                    {reel.titleAr}
                  </h3>
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="p-4 flex flex-col justify-between grow space-y-3">
                <p className="text-xs text-[#817A6D] font-light line-clamp-2 leading-relaxed">
                  {reel.descriptionAr}
                </p>

                <div className="pt-2 border-t border-[#0B0B0A]/6 flex items-center justify-between text-xs">
                  <button
                    onClick={() => {
                      setActiveReel(reel);
                      setIsPlaying(true);
                    }}
                    className="font-medium text-[#0B0B0A] hover:text-[#B79A5B] flex items-center gap-1 transition-colors"
                  >
                    <span>معاينة المقطع</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>

                  <Link
                    href={reel.snapchatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B79A5B] hover:text-[#0B0B0A] flex items-center gap-1 font-sans text-[11px] transition-colors"
                  >
                    <span>سناب شات</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Reel Player Modal */}
      {activeReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-[#0B0B0A] rounded-3xl overflow-hidden border border-[#B79A5B]/30 shadow-2xl text-[#FAF8F2]">
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveReel(null)}
              aria-label="إغلاق الفيديو"
              className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF8F2] transition-colors focus:outline-hidden"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Simulated Live Video Player Viewport */}
            <div className="relative aspect-16/10 w-full overflow-hidden bg-black flex items-center justify-center">
              <Image
                src={activeReel.thumbnail}
                alt={activeReel.titleAr}
                fill
                priority
                className="object-cover opacity-85"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

              {/* Animated Sound Wave Bars when Playing */}
              {isPlaying && (
                <div className="absolute top-5 right-5 flex items-end gap-1 h-6 z-10 bg-black/50 px-3 py-1 rounded-full border border-white/10">
                  <span className="w-1 bg-[#B79A5B] h-3 animate-pulse rounded-full" />
                  <span className="w-1 bg-[#D0BB88] h-5 animate-bounce rounded-full" />
                  <span className="w-1 bg-[#B79A5B] h-4 animate-pulse rounded-full" />
                  <span className="w-1 bg-[#FAF8F2] h-2 animate-bounce rounded-full" />
                  <span className="text-[10px] font-sans text-[#D0BB88] mr-1.5">مقطع حي</span>
                </div>
              )}

              {/* Play / Pause Toggle Center */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل"}
                className="w-16 h-16 rounded-full bg-[#B79A5B]/90 hover:bg-[#FAF8F2] text-[#0B0B0A] flex items-center justify-center shadow-2xl transition-transform hover:scale-105 z-10 focus:outline-hidden"
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 fill-current" />
                ) : (
                  <Play className="w-7 h-7 fill-current translate-x-0.5" />
                )}
              </button>

              {/* Simulated Progress Scrubber Bar */}
              <div className="absolute bottom-0 inset-x-0 h-1.5 bg-white/20">
                <div className="h-full bg-gradient-to-r from-[#B79A5B] to-[#D0BB88] w-2/3 animate-pulse" />
              </div>
            </div>

            {/* Reel Details & Direct Snapchat Link */}
            <div className="p-6 sm:p-8 space-y-6 bg-[#11100F]">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#B79A5B] font-sans">
                  <span>{activeReel.craftAr}</span>
                  <span>•</span>
                  <span>مدة المقطع {activeReel.duration}</span>
                  <span>•</span>
                  <span>الرياض</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#FAF8F2]">
                  {activeReel.titleAr}
                </h3>

                <p className="text-sm text-[#A49D91] font-light leading-relaxed">
                  {activeReel.descriptionAr}
                </p>
              </div>

              {/* Action Buttons: Snapchat Direct + Commission */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
                <Link
                  href={activeReel.snapchatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto grow py-3.5 px-6 rounded-full bg-[#FFFC00] hover:bg-yellow-300 text-[#0B0B0A] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.016 2.016c-3.766 0-6.732 2.966-6.732 6.732 0 .61.082 1.196.234 1.758-.844.281-1.465 1.055-1.465 1.992 0 .914.586 1.664 1.406 1.969-.023.187-.047.375-.047.562 0 1.945 1.055 3.656 2.625 4.57-.469.75-1.125 1.336-1.898 1.711-.328.164-.492.516-.398.867.094.352.422.586.773.586h.117c1.336-.07 2.555-.562 3.539-1.383.562.164 1.172.258 1.844.258s1.289-.094 1.844-.258c.984.82 2.203 1.312 3.539 1.383h.117c.352 0 .68-.234.773-.586.094-.352-.07-.703-.398-.867-.773-.375-1.43-1.008-1.898-1.711 1.57-.914 2.625-2.625 2.625-4.57 0-.188-.023-.375-.047-.562.82-.305 1.406-1.055 1.406-1.969 0-.938-.621-1.711-1.465-1.992.152-.562.234-1.148.234-1.758 0-3.766-2.966-6.732-6.732-6.732z" />
                  </svg>
                  <span>مشاهدة التوثيق الكامل على سناب شات @sohilnasr7</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/commission"
                  onClick={() => setActiveReel(null)}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF8F2] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>طلب تنفيذ مماثل</span>
                  <ArrowUpLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
