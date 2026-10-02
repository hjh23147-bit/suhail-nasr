import { db } from "@/lib/db";
import { saveSocialPostAction, deleteSocialPostAction } from "@/server/actions/admin";
import { ExternalLink, Trash2, Plus } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminSocialPage() {
  const posts = await db.socialPost.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="space-y-10">
      <div className="border-b border-[#0B0B0A]/10 pb-6">
        <span className="text-xs font-sans tracking-[0.2em] text-[#B79A5B] uppercase block font-semibold">
          جسر التواصل
        </span>
        <h1 className="font-display text-3xl font-bold tracking-tight text-[#0B0B0A]">
          إدارة بطاقات سناب شات المنسقة
        </h1>
        <p className="text-xs text-[#817A6D] mt-1 font-light">
          إبراز روابط وتوثيقات حية من حساب سناب شات الرسمي (@sohilnasr7) في الصفحة الرئيسية.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form to add a new Snapchat Post */}
        <div className="lg:col-span-5 bg-[#F3EEE4] p-6 rounded-2xl border border-[#0B0B0A]/8 space-y-4 text-xs shadow-xs">
          <h2 className="font-display text-lg font-bold text-[#0B0B0A]">
            إضافة بطاقة جديدة
          </h2>

          <form action={saveSocialPostAction} className="space-y-4">
            <div>
              <label className="block text-[#171614] mb-1 font-medium">عنوان البطاقة *</label>
              <input
                type="text"
                name="title"
                required
                placeholder="مثال: كواليس الحفر على الزجاج"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-xs text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
              />
            </div>

            <div>
              <label className="block text-[#171614] mb-1 font-medium">رابط سناب شات *</label>
              <input
                type="url"
                name="url"
                required
                defaultValue="https://www.snapchat.com/@sohilnasr7"
                dir="ltr"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-xs text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
              />
            </div>

            <div>
              <label className="block text-[#171614] mb-1 font-medium">رابط الصورة المصغرة</label>
              <input
                type="text"
                name="thumbnail"
                defaultValue="/images/social/snap-1.svg"
                dir="ltr"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-xs text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
              />
            </div>

            <div>
              <label className="block text-[#171614] mb-1 font-medium">وصف مقتضب</label>
              <textarea
                name="description"
                rows={2}
                placeholder="تفاصيل التوثيق…"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-xs text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
              />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input type="checkbox" name="featured" defaultChecked className="rounded accent-[#B79A5B]" />
              <span className="text-[#0B0B0A]">عرض في الصفحة الرئيسية</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors font-medium text-xs flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة البطاقة</span>
            </button>
          </form>
        </div>

        {/* Existing Posts List */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="font-display text-lg font-bold text-[#0B0B0A]">
            البطاقات المعتمدة حالياً ({posts.length})
          </h2>

          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-4 rounded-xl bg-[#F3EEE4] border border-[#0B0B0A]/8 flex items-center justify-between gap-4 shadow-2xs"
              >
                <div>
                  <h4 className="font-bold text-sm text-[#0B0B0A]">{post.title}</h4>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#B79A5B] hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <span>{post.url}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  {post.description && (
                    <p className="text-xs text-[#817A6D] mt-1 line-clamp-1">{post.description}</p>
                  )}
                </div>

                <form
                  action={async () => {
                    "use server";
                    await deleteSocialPostAction(post.id);
                  }}
                >
                  <button
                    type="submit"
                    className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-colors"
                    title="حذف"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
