"use client";

import { useState, useEffect } from "react";
import { Sparkles, PenTool, RefreshCw } from "lucide-react";

interface ScriptItem {
  id: string;
  name: string;
  category: string;
  renderedText: string;
  fontClass: string;
  description: string;
  rule: string;
  ornament: string;
}

const SCRIPTS: ScriptItem[] = [
  {
    id: "thuluth",
    name: "خط الثلث الجلي",
    category: "أم الخطوط العربية",
    renderedText: "الخَطَّاطُ سُهَيْل نَصْر",
    fontClass: "font-thuluth tracking-tight",
    description: "تاج الهيبة والوقار والتشكيل الزخرفي المتقن",
    rule: "ميزان القلم: ٧ نقاط • زاوية القصبة: ٧٥°",
    ornament: "✦ سُهَيْل نَصْر ✦",
  },
  {
    id: "diwani",
    name: "الخط الديواني الجلي",
    category: "الخط السلطاني الملكي",
    renderedText: "الخطّاط سهيل نصر",
    fontClass: "font-diwani tracking-normal",
    description: "انسيابية التدفق الموسيقي وتداخل الحروف البديع",
    rule: "حركات حلزونية رشيقة • ليونة تامة في نهايات المدات",
    ornament: "❊ أثر الحرف الملكي ❊",
  },
  {
    id: "kufi",
    name: "الخط الكوفي الهندسي",
    category: "أصالة المعمار الأول",
    renderedText: "الخطاط سهيل نصر",
    fontClass: "font-kufi tracking-wider font-bold",
    description: "عراقة الجذور الإسلامية ونقاء التكوين المعماري الصارم",
    rule: "تناسب هندسي قائم • توازن الكتل والفراغات الأثرية",
    ornament: "❖ الرياض — الأتيليه الحروفي ❖",
  },
  {
    id: "ruqaa",
    name: "خط الرقعة الفاخر",
    category: "رشاقة وقوة اليد",
    renderedText: "الخطاط سُهيل نصر",
    fontClass: "font-ruqaa tracking-tight font-bold",
    description: "عفوية الحركة وقوة السحبات الحبرية السريعة",
    rule: "ميلان حاد للسطر • وضوح واختزال دون تشكيل فائض",
    ornament: "— نقش حي ومباشر —",
  },
  {
    id: "naskh",
    name: "خط النسخ الشريف",
    category: "ميزان البيان والوضوح",
    renderedText: "الخَطَّاطُ سُهَيْلُ نَصْر",
    fontClass: "font-naskh tracking-normal font-bold",
    description: "وضوح القراءة وصرامة النسب الذهبية للمحابر",
    rule: "ميزان الألف: ٥ نقاط • دقة الصنعة وأصول المحراب",
    ornament: "« حين يصبح الحرف أثراً »",
  },
  {
    id: "nastaliq",
    name: "خط النستعليق الشاعري",
    category: "عروس الخطوط الشرقية",
    renderedText: "خطّاط سهيل نصر",
    fontClass: "font-nastaliq tracking-wide text-5xl sm:text-6xl",
    description: "انحدار نغمي شاعري يفيض بالعذوبة ورقة الاستدارة",
    rule: "ميل موسيقي من اليمين للأعلى إلى اليسار للأسفل",
    ornament: "❦ نفائس الحبر والأثر ❦",
  },
];

export function CinematicScriptMorpher() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 3800; // 3.8s per script
    const updateFreq = 50;
    const step = (updateFreq / intervalTime) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % SCRIPTS.length);
          return 0;
        }
        return prev + step;
      });
    }, updateFreq);

    return () => clearInterval(timer);
  }, [isPaused]);

  const activeScript = SCRIPTS[currentIndex];

  const handleSelectScript = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 bg-[#F3EEE4]/90 backdrop-blur-md border border-[#0B0B0A]/10 shadow-2xl overflow-hidden transition-all duration-700"
    >
      {/* Ambient background gold glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#B79A5B]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#3B2B20]/10 blur-3xl pointer-events-none" />

      {/* Top Header Bar: Script Info & Progress */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-[#0B0B0A]/8">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#B79A5B]/20 text-[#B79A5B] flex items-center justify-center shrink-0 border border-[#B79A5B]/30">
            <PenTool className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans font-semibold tracking-wider text-[#B79A5B] uppercase">
                {activeScript.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B79A5B] animate-pulse" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#0B0B0A]">
              بـ: {activeScript.name}
            </h3>
          </div>
        </div>

        {/* Live Rule / Metrology Badge */}
        <div className="flex items-center gap-2 text-[11px] font-sans text-[#817A6D] bg-[#FAF8F2] px-3.5 py-1.5 rounded-full border border-[#0B0B0A]/6">
          <Sparkles className="w-3.5 h-3.5 text-[#B79A5B]" />
          <span>{activeScript.rule}</span>
        </div>
      </div>

      {/* Main Dynamic Calligraphy Showcase Area */}
      <div className="py-12 sm:py-16 text-center flex flex-col items-center justify-center min-h-[220px]">
        <div className="relative group">
          {/* Subtle Golden Halo behind active name */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B79A5B]/15 to-transparent blur-xl scale-125 pointer-events-none" />

          {/* Morphing Name with authentic script typography */}
          <div
            key={activeScript.id}
            className={`relative text-4xl sm:text-6xl md:text-7xl font-bold text-[#0B0B0A] leading-relaxed transition-all duration-700 animate-in fade-in zoom-in-95 ${activeScript.fontClass}`}
          >
            {activeScript.renderedText}
          </div>
        </div>

        {/* Script aesthetic description */}
        <p className="mt-4 text-xs sm:text-sm font-sans text-[#817A6D] font-light max-w-lg leading-relaxed animate-in fade-in duration-500">
          «{activeScript.description}»
        </p>

        {/* Secondary Ornament */}
        <span className="text-[11px] tracking-widest text-[#B79A5B] mt-2 font-display">
          {activeScript.ornament}
        </span>
      </div>

      {/* Bottom Script Selector Tabs & Timeline Progress Bar */}
      <div className="space-y-4 pt-6 border-t border-[#0B0B0A]/8">
        {/* Progress Bar indicating next script switch */}
        <div className="w-full h-1 bg-[#0B0B0A]/8 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#B79A5B] to-[#D0BB88] transition-all duration-75 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Classical Scripts Quick Switcher Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {SCRIPTS.map((script, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={script.id}
                onClick={() => handleSelectScript(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans transition-all duration-300 flex items-center gap-1.5 focus:outline-hidden ${
                  isActive
                    ? "bg-[#0B0B0A] text-[#FAF8F2] shadow-md scale-105"
                    : "bg-[#FAF8F2] text-[#817A6D] hover:text-[#0B0B0A] hover:bg-white border border-[#0B0B0A]/6"
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#B79A5B]" />}
                <span>{script.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
