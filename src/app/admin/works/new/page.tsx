import Link from "next/link";
import { ArrowRight, Save } from "lucide-react";
import { db } from "@/lib/db";
import { saveWorkAction } from "@/server/actions/admin";

export default async function NewWorkPage() {
  const materials = await db.material.findMany();
  const techniques = await db.technique.findMany();
  const categories = await db.category.findMany();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-[#0B0B0A]/10 pb-6">
        <div>
          <span className="text-xs font-sans tracking-[0.2em] text-[#B79A5B] uppercase block font-semibold">
            معرض الأعمال
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-[#0B0B0A]">
            إضافة عمل فني جديد
          </h1>
        </div>

        <Link
          href="/admin/works"
          className="text-xs text-[#817A6D] hover:text-[#0B0B0A] flex items-center gap-1"
        >
          <span>العودة للقائمة</span>
          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
        </Link>
      </div>

      <form action={saveWorkAction} className="space-y-6 bg-[#F3EEE4] p-8 rounded-3xl border border-[#0B0B0A]/8 text-xs shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">عنوان العمل بالعربية *</label>
            <input
              type="text"
              name="titleAr"
              required
              placeholder="مثال: أثر على زجاج بلوري"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            />
          </div>

          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">العنوان بالإنجليزية (اختياري)</label>
            <input
              type="text"
              name="titleEn"
              dir="ltr"
              placeholder="Imprint on Crystal Glass"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">المعرف الرابط (Slug) *</label>
            <input
              type="text"
              name="slug"
              required
              dir="ltr"
              placeholder="glass-imprint-crystalline"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            />
          </div>

          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">سنة الإنجاز</label>
            <input
              type="number"
              name="year"
              defaultValue={new Date().getFullYear()}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">الخامة</label>
            <select
              name="materialId"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            >
              <option value="">بدون تحديد</option>
              {materials.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.nameAr}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">التقنية</label>
            <select
              name="techniqueId"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            >
              <option value="">بدون تحديد</option>
              {techniques.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.nameAr}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">التصنيف</label>
            <select
              name="categoryId"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            >
              <option value="">بدون تحديد</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nameAr}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[#171614] mb-1.5 font-medium">مسار أو رابط الصورة الرئيسية *</label>
          <input
            type="text"
            name="coverImage"
            required
            defaultValue="/images/works/work-glass-1.svg"
            dir="ltr"
            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
          />
        </div>

        <div>
          <label className="block text-[#171614] mb-1.5 font-medium">مقتطف مختصر</label>
          <input
            type="text"
            name="excerptAr"
            placeholder="سطر يلخص فكرة العمل الفني"
            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
          />
        </div>

        <div>
          <label className="block text-[#171614] mb-1.5 font-medium">الوصف التحريري الكامل *</label>
          <textarea
            name="descriptionAr"
            required
            rows={4}
            placeholder="تفاصيل التكوين الخطي، أسلوب التنفيذ، وسياق العمل…"
            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
          />
        </div>

        <div className="flex items-center gap-8 pt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="published" defaultChecked className="rounded accent-[#B79A5B] w-4 h-4" />
            <span className="text-[#0B0B0A] text-xs">نشر العمل في المعرض العام مباشرة</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="featured" className="rounded accent-[#B79A5B] w-4 h-4" />
            <span className="text-[#0B0B0A] text-xs">تمييز كعمل فني مختار في الرئيسية</span>
          </label>
        </div>

        <div className="pt-6 border-t border-[#0B0B0A]/10">
          <button
            type="submit"
            className="px-8 py-3.5 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors font-medium text-xs flex items-center gap-2 shadow-sm"
          >
            <Save className="w-4 h-4" />
            <span>حفظ العمل الفني</span>
          </button>
        </div>
      </form>
    </div>
  );
}
