import Link from "next/link";
import { ArrowRight, Save } from "lucide-react";
import { saveJournalPostAction } from "@/server/actions/admin";

export default function NewJournalPostPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-[#0B0B0A]/10 pb-6">
        <div>
          <span className="text-xs font-sans tracking-[0.2em] text-[#B79A5B] uppercase block font-semibold">
            دفتر الحرف
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-[#0B0B0A]">
            كتابة مقال جديد
          </h1>
        </div>

        <Link
          href="/admin/journal"
          className="text-xs text-[#817A6D] hover:text-[#0B0B0A] flex items-center gap-1"
        >
          <span>العودة للمقالات</span>
          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
        </Link>
      </div>

      <form action={saveJournalPostAction} className="space-y-6 bg-[#F3EEE4] p-8 rounded-3xl border border-[#0B0B0A]/8 text-xs shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">عنوان المقال بالعربية *</label>
            <input
              type="text"
              name="titleAr"
              required
              placeholder="مثال: سر الحفر على زجاج الكريستال"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            />
          </div>

          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">المعرف الرابط (Slug) *</label>
            <input
              type="text"
              name="slug"
              required
              dir="ltr"
              placeholder="glass-crystal-secrets"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">القسم التصنيفي</label>
            <select
              name="category"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            >
              <option value="من الاستوديو">من الاستوديو</option>
              <option value="خامات وتقنيات">خامات وتقنيات</option>
              <option value="خلف الكواليس">خلف الكواليس</option>
              <option value="تأملات">تأملات</option>
              <option value="أعمال جديدة">أعمال جديدة</option>
            </select>
          </div>

          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">الكلمات المفتاحية (مفصولة بفاصلة)</label>
            <input
              type="text"
              name="tags"
              placeholder="زجاج, حفر, كواليس"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[#171614] mb-1.5 font-medium">رابط صورة الغلاف</label>
          <input
            type="text"
            name="coverImage"
            defaultValue="/images/journal/post-1.svg"
            dir="ltr"
            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
          />
        </div>

        <div>
          <label className="block text-[#171614] mb-1.5 font-medium">المقتطف التعريفي</label>
          <input
            type="text"
            name="excerptAr"
            placeholder="موجز المقال يظهر في البطاقة…"
            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
          />
        </div>

        <div>
          <label className="block text-[#171614] mb-1.5 font-medium">نص المقال الكامل *</label>
          <textarea
            name="contentAr"
            required
            rows={8}
            placeholder="اكتب التدوينة هنا بحرية…"
            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B] leading-relaxed"
          />
        </div>

        <div className="pt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="published" defaultChecked className="rounded accent-[#B79A5B] w-4 h-4" />
            <span className="text-[#0B0B0A] text-xs">نشر المقال فوراً للجمهور</span>
          </label>
        </div>

        <div className="pt-6 border-t border-[#0B0B0A]/10">
          <button
            type="submit"
            className="px-8 py-3.5 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors font-medium text-xs flex items-center gap-2 shadow-sm"
          >
            <Save className="w-4 h-4" />
            <span>حفظ المقال</span>
          </button>
        </div>
      </form>
    </div>
  );
}
