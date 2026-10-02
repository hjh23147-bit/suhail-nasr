import { db } from "@/lib/db";
import { updateSiteSettingsAction } from "@/server/actions/admin";
import { Save } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const settings = await db.siteSettings.findFirst();

  return (
    <div className="max-w-3xl space-y-8">
      <div className="border-b border-[#0B0B0A]/10 pb-6">
        <span className="text-xs font-sans tracking-[0.2em] text-[#B79A5B] uppercase block font-semibold">
          الإعدادات العامة
        </span>
        <h1 className="font-display text-3xl font-bold tracking-tight text-[#0B0B0A]">
          إعدادات الموقع والبيانات الرسمية
        </h1>
      </div>

      <form action={updateSiteSettingsAction} className="space-y-6 bg-[#F3EEE4] p-8 rounded-3xl border border-[#0B0B0A]/8 text-xs shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">اسم الأتيليه / الفنان بالعربية</label>
            <input
              type="text"
              name="siteNameAr"
              defaultValue={settings?.siteNameAr || "الخطاط سهيل نصر"}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            />
          </div>

          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">الموقع الجغرافي</label>
            <input
              type="text"
              name="location"
              defaultValue={settings?.location || "الرياض، المملكة العربية السعودية"}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[#171614] mb-1.5 font-medium">الشعار الفني المركزي</label>
          <input
            type="text"
            name="taglineAr"
            defaultValue={settings?.taglineAr || "حين يصبح الحرف أثراً."}
            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">رقم الهاتف للاتصال المباشر</label>
            <input
              type="text"
              name="contactPhone"
              dir="ltr"
              defaultValue={settings?.contactPhone || "+966500000000"}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            />
          </div>

          <div>
            <label className="block text-[#171614] mb-1.5 font-medium">رقم الواتساب (بدون أصفار إضافية)</label>
            <input
              type="text"
              name="contactWhatsapp"
              dir="ltr"
              defaultValue={settings?.contactWhatsapp || "966500000000"}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[#171614] mb-1.5 font-medium">رابط حساب سناب شات الرسمي</label>
          <input
            type="url"
            name="snapchatUrl"
            dir="ltr"
            defaultValue={settings?.snapchatUrl || "https://www.snapchat.com/@sohilnasr7"}
            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
          />
        </div>

        <div className="pt-6 border-t border-[#0B0B0A]/10">
          <button
            type="submit"
            className="px-8 py-3.5 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors font-medium text-xs flex items-center gap-2 shadow-sm"
          >
            <Save className="w-4 h-4" />
            <span>حفظ الإعدادات</span>
          </button>
        </div>
      </form>
    </div>
  );
}
