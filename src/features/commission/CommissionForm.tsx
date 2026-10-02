"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle2, Send, Loader2 } from "lucide-react";
import { submitCommissionRequest, CommissionActionResult } from "@/server/actions/commission";

interface CommissionFormProps {
  initialWorkType?: string;
  initialMaterial?: string;
  refWorkSlug?: string;
}

export function CommissionForm({
  initialWorkType = "",
  initialMaterial = "",
  refWorkSlug = "",
}: CommissionFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<CommissionActionResult | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const res = await submitCommissionRequest(formData);

    setSubmitting(false);
    setResult(res);

    if (res.success) {
      window.scrollTo({ top: 100, behavior: "smooth" });
    }
  };

  if (result?.success) {
    return (
      <div className="p-10 sm:p-14 rounded-3xl bg-[#FAF8F2] border border-[#B79A5B]/30 text-center space-y-6 shadow-xl animate-in fade-in duration-500">
        <div className="w-16 h-16 rounded-full bg-[#B79A5B]/10 text-[#B79A5B] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 stroke-[1.5]" />
        </div>

        <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#0B0B0A]">
          شكراً لك.
        </h3>

        <p className="font-display text-xl text-[#B79A5B]">
          وصلت فكرتك إلى الاستوديو.
        </p>

        <p className="text-sm text-[#817A6D] max-w-md mx-auto font-light leading-relaxed">
          سيتم مراجعة طلبك بدقة من قبل الخطاط سهيل نصر، والتواصل معك لمناقشة التكوين والبدء في تحويل الحرف إلى أثر.
        </p>

        <div className="pt-4">
          <button
            onClick={() => setResult(null)}
            className="px-8 py-3 rounded-full border border-[#0B0B0A]/20 text-[#0B0B0A] hover:border-[#0B0B0A] text-xs font-medium transition-colors"
          >
            تقديم طلب آخر
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-[#FAF8F2] p-8 sm:p-12 rounded-3xl border border-[#0B0B0A]/8 shadow-sm">
      {/* Honeypot for bots */}
      <input type="text" name="website_verify" className="hidden" tabIndex={-1} autoComplete="off" />

      {result?.message && !result.success && (
        <div className="p-4 rounded-xl bg-red-50 text-red-800 text-xs border border-red-200">
          {result.message}
        </div>
      )}

      {/* Group 1: Personal Contacts */}
      <div className="space-y-4">
        <h3 className="font-display text-xl font-bold text-[#0B0B0A] border-b border-[#0B0B0A]/8 pb-2">
          ١. معلومات التواصل
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-[#171614] mb-1.5">
              الاسم الكريم <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="الاسم الكامل"
              className="w-full px-4 py-3 rounded-xl bg-[#F3EEE4] border border-[#0B0B0A]/10 text-sm focus:outline-hidden focus:border-[#B79A5B] transition-colors"
            />
            {result?.errors?.name && (
              <p className="text-red-500 text-[11px] mt-1">{result.errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-[#171614] mb-1.5">
              رقم التواصل (جوال / واتساب) <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+966 5X XXX XXXX"
              dir="ltr"
              className="w-full px-4 py-3 rounded-xl bg-[#F3EEE4] border border-[#0B0B0A]/10 text-sm text-right focus:outline-hidden focus:border-[#B79A5B] transition-colors"
            />
            {result?.errors?.phone && (
              <p className="text-red-500 text-[11px] mt-1">{result.errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#171614] mb-1.5">
            البريد الإلكتروني (اختياري)
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@domain.com"
            dir="ltr"
            className="w-full px-4 py-3 rounded-xl bg-[#F3EEE4] border border-[#0B0B0A]/10 text-sm text-right focus:outline-hidden focus:border-[#B79A5B] transition-colors"
          />
        </div>
      </div>

      {/* Group 2: Artwork Specifications */}
      <div className="space-y-4 pt-4">
        <h3 className="font-display text-xl font-bold text-[#0B0B0A] border-b border-[#0B0B0A]/8 pb-2">
          ٢. تفاصيل العمل الفني
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-[#171614] mb-1.5">
              نوع العمل المطلوب <span className="text-red-500">*</span>
            </label>
            <select
              name="workType"
              defaultValue={initialWorkType || "لوحة فنية جدارية"}
              required
              className="w-full px-4 py-3 rounded-xl bg-[#F3EEE4] border border-[#0B0B0A]/10 text-sm focus:outline-hidden focus:border-[#B79A5B] transition-colors"
            >
              <option value="لوحة فنية جدارية">لوحة فنية جدارية</option>
              <option value="كتابة وحفر على الزجاج">كتابة وحفر على الزجاج</option>
              <option value="حرق وتعتيق على الخشب">حرق وتعتيق على الخشب</option>
              <option value="نقش على شاهد وحبات سبحة">نقش على شاهد وحبات سبحة</option>
              <option value="كتابة مخصصة على كوب خزفي">كتابة مخصصة على كوب خزفي</option>
              <option value="عمل خاص على المخمل أو السجاد">عمل خاص على المخمل أو السجاد</option>
              <option value="درع تكريمي أو إهداء رسمي">درع تكريمي أو إهداء رسمي</option>
              <option value="طلب خاص آخر">طلب خاص آخر</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#171614] mb-1.5">
              الخامة المفضلة <span className="text-red-500">*</span>
            </label>
            <select
              name="material"
              defaultValue={initialMaterial || "الزجاج"}
              required
              className="w-full px-4 py-3 rounded-xl bg-[#F3EEE4] border border-[#0B0B0A]/10 text-sm focus:outline-hidden focus:border-[#B79A5B] transition-colors"
            >
              <option value="الزجاج">الزجاج البلوري</option>
              <option value="الخشب الطبيعي">الخشب الطبيعي</option>
              <option value="المخمل الفاخر">المخمل الفاخر</option>
              <option value="السجاد التراثي">السجاد التراثي</option>
              <option value="السبح">السبح النادرة</option>
              <option value="الأكواب الخزفية">الأكواب الخزفية</option>
              <option value="الورق المقهر الطبيعي">الورق المقهر الطبيعي</option>
              <option value="غير محدد (استشارة الفنان)">غير محدد (استشارة الفنان)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#171614] mb-1.5">
            النص أو العبارة المطلوب كتابتها <span className="text-red-500">*</span>
          </label>
          <textarea
            name="requestedText"
            required
            rows={3}
            placeholder="اكتب الآية، البيت الشعري، أو الاسم والإهداء المطلوب تخطيطه…"
            className="w-full px-4 py-3 rounded-xl bg-[#F3EEE4] border border-[#0B0B0A]/10 text-sm focus:outline-hidden focus:border-[#B79A5B] transition-colors"
          />
          {result?.errors?.requestedText && (
            <p className="text-red-500 text-[11px] mt-1">{result.errors.requestedText}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-[#171614] mb-1.5">
              المقاس التقريبي
            </label>
            <input
              type="text"
              name="dimensions"
              placeholder="مثال: 50 × 70 سم"
              className="w-full px-4 py-3 rounded-xl bg-[#F3EEE4] border border-[#0B0B0A]/10 text-sm focus:outline-hidden focus:border-[#B79A5B] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#171614] mb-1.5">
              الكمية المطلوبة
            </label>
            <input
              type="number"
              name="quantity"
              defaultValue={1}
              min={1}
              className="w-full px-4 py-3 rounded-xl bg-[#F3EEE4] border border-[#0B0B0A]/10 text-sm focus:outline-hidden focus:border-[#B79A5B] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#171614] mb-1.5">
              الموعد المطلوب للتسليم
            </label>
            <input
              type="text"
              name="deadline"
              placeholder="مثال: خلال أسبوعين"
              className="w-full px-4 py-3 rounded-xl bg-[#F3EEE4] border border-[#0B0B0A]/10 text-sm focus:outline-hidden focus:border-[#B79A5B] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#171614] mb-1.5">
            ملاحظات إضافية أو تفاصيل الفكرة
          </label>
          <textarea
            name="message"
            rows={3}
            placeholder="أي تفاصيل تتعلق بالمناسبة، اللون المفضل، أو أسلوب الخط المرغوب…"
            className="w-full px-4 py-3 rounded-xl bg-[#F3EEE4] border border-[#0B0B0A]/10 text-sm focus:outline-hidden focus:border-[#B79A5B] transition-colors"
          />
        </div>
      </div>

      <div className="pt-6 border-t border-[#0B0B0A]/8">
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] disabled:opacity-50 transition-all duration-300 font-medium text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl focus:outline-hidden"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>جاري إرسال الطلب للاستوديو…</span>
            </>
          ) : (
            <>
              <span>إرسال الطلب إلى الاستوديو</span>
              <Send className="w-4 h-4 rtl:-scale-x-100" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
