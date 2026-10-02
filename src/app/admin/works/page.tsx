import Link from "next/link";
import Image from "next/image";
import { Plus, Trash2, Eye } from "lucide-react";
import { db } from "@/lib/db";
import { deleteWorkAction } from "@/server/actions/admin";

export const dynamic = "force-dynamic";

export default async function AdminWorksPage() {
  const works = await db.work.findMany({
    include: { material: true, technique: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-[#0B0B0A]/10 pb-6">
        <div>
          <span className="text-xs font-sans tracking-[0.2em] text-[#B79A5B] uppercase block font-semibold">
            إدارة المحتوى
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-[#0B0B0A]">
            الأعمال الفنية ({works.length})
          </h1>
        </div>

        <Link
          href="/admin/works/new"
          className="px-5 py-2.5 rounded-xl bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors text-xs font-medium flex items-center gap-1.5 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>إضافة عمل جديد</span>
        </Link>
      </div>

      <div className="rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead className="bg-[#FAF8F2] text-[#817A6D] border-b border-[#0B0B0A]/8">
              <tr>
                <th className="p-4">العمل</th>
                <th className="p-4">الخامة</th>
                <th className="p-4">التقنية</th>
                <th className="p-4">السنة</th>
                <th className="p-4">الحالة</th>
                <th className="p-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0B0B0A]/5">
              {works.map((work) => (
                <tr key={work.id} className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="relative w-12 h-10 rounded-lg overflow-hidden bg-[#EFE9DC] shrink-0 border border-[#0B0B0A]/10">
                      <Image
                        src={work.coverImage}
                        alt={work.titleAr}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="font-bold text-sm text-[#0B0B0A] block">
                        {work.titleAr}
                      </span>
                      <span className="text-[11px] text-[#817A6D]">{work.slug}</span>
                    </div>
                  </td>
                  <td className="p-4 text-[#817A6D]">{work.material?.nameAr || "—"}</td>
                  <td className="p-4 text-[#817A6D]">{work.technique?.nameAr || "—"}</td>
                  <td className="p-4 text-[#817A6D]">{work.year ? `${work.year}م` : "—"}</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium ${
                        work.published
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-amber-100 text-amber-800 border border-amber-300"
                      }`}
                    >
                      {work.published ? "منشور" : "مسودة"}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <Link
                        href={`/works/${work.slug}`}
                        target="_blank"
                        className="p-1.5 rounded-lg bg-white/80 hover:bg-[#FAF8F2] text-[#817A6D] hover:text-[#0B0B0A] border border-[#0B0B0A]/10 transition-colors"
                        title="معاينة العمل"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </Link>

                      <form
                        action={async () => {
                          "use server";
                          await deleteWorkAction(work.id);
                        }}
                      >
                        <button
                          type="submit"
                          className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-colors"
                          title="حذف"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
