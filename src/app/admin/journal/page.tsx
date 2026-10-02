import Link from "next/link";
import { Plus, Trash2, Eye } from "lucide-react";
import { db } from "@/lib/db";
import { deleteJournalPostAction } from "@/server/actions/admin";

export const dynamic = "force-dynamic";

export default async function AdminJournalPage() {
  const posts = await db.journalPost.findMany({
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-[#0B0B0A]/10 pb-6">
        <div>
          <span className="text-xs font-sans tracking-[0.2em] text-[#B79A5B] uppercase block font-semibold">
            دفتر الحرف
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-[#0B0B0A]">
            المقالات والتدوينات ({posts.length})
          </h1>
        </div>

        <Link
          href="/admin/journal/new"
          className="px-5 py-2.5 rounded-xl bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors text-xs font-medium flex items-center gap-1.5 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>كتابة مقال جديد</span>
        </Link>
      </div>

      <div className="rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead className="bg-[#FAF8F2] text-[#817A6D] border-b border-[#0B0B0A]/8">
              <tr>
                <th className="p-4">عنوان المقال</th>
                <th className="p-4">القسم</th>
                <th className="p-4">تاريخ النشر</th>
                <th className="p-4">الحالة</th>
                <th className="p-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0B0B0A]/5">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="p-4">
                    <span className="font-bold text-sm text-[#0B0B0A] block">
                      {post.titleAr}
                    </span>
                    <span className="text-[11px] text-[#817A6D]">{post.slug}</span>
                  </td>
                  <td className="p-4 text-[#817A6D]">{post.category}</td>
                  <td className="p-4 text-[#817A6D]">
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("ar-SA") : "—"}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium ${
                        post.published
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-amber-100 text-amber-800 border border-amber-300"
                      }`}
                    >
                      {post.published ? "منشور" : "مسودة"}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <Link
                        href={`/journal/${post.slug}`}
                        target="_blank"
                        className="p-1.5 rounded-lg bg-white/80 hover:bg-[#FAF8F2] text-[#817A6D] hover:text-[#0B0B0A] border border-[#0B0B0A]/10 transition-colors"
                        title="معاينة"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </Link>

                      <form
                        action={async () => {
                          "use server";
                          await deleteJournalPostAction(post.id);
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
