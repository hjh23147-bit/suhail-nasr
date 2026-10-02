import Link from "next/link";
import {
  Palette,
  Inbox,
  BookOpen,
  ArrowUpLeft,
  CheckCircle2,
} from "lucide-react";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminOverviewPage() {
  const [worksCount, publishedWorksCount, journalCount, requestsCount, newRequestsCount] =
    await Promise.all([
      db.work.count(),
      db.work.count({ where: { published: true } }),
      db.journalPost.count(),
      db.commissionRequest.count(),
      db.commissionRequest.count({ where: { status: "new" } }),
    ]);

  const recentRequests = await db.commissionRequest.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  return (
    <div className="space-y-10">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0B0B0A]/10 pb-6">
        <div>
          <span className="text-xs font-sans tracking-[0.2em] text-[#B79A5B] uppercase block font-semibold">
            نظرة عامة
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-[#0B0B0A]">
            لوحة الإدارة والتحكم
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/works/new"
            className="px-4 py-2 rounded-xl bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors text-xs font-medium flex items-center gap-1.5 shadow-sm"
          >
            <span>+ إضافة عمل فني</span>
          </Link>
          <Link
            href="/admin/journal/new"
            className="px-4 py-2 rounded-xl bg-[#F3EEE4] border border-[#0B0B0A]/10 text-[#0B0B0A] hover:bg-[#FAF8F2] transition-colors text-xs font-medium"
          >
            + مقال في دفتر الحرف
          </Link>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-[#817A6D]">
            <span>إجمالي الأعمال الفنية</span>
            <Palette className="w-4 h-4 text-[#B79A5B]" />
          </div>
          <div className="font-display text-3xl font-bold text-[#0B0B0A]">
            {worksCount}
          </div>
          <div className="text-[11px] text-[#817A6D]">
            {publishedWorksCount} منشور • {worksCount - publishedWorksCount} مسودة
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-[#817A6D]">
            <span>طلبات اللوحات المخصصة</span>
            <Inbox className="w-4 h-4 text-[#B79A5B]" />
          </div>
          <div className="font-display text-3xl font-bold text-[#0B0B0A]">
            {requestsCount}
          </div>
          <div className="text-[11px] text-[#B79A5B] flex items-center gap-1 font-medium">
            {newRequestsCount > 0 && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
            <span>{newRequestsCount} طلبات جديدة بحاجة للمراجعة</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-[#817A6D]">
            <span>تدوينات دفتر الحرف</span>
            <BookOpen className="w-4 h-4 text-[#B79A5B]" />
          </div>
          <div className="font-display text-3xl font-bold text-[#0B0B0A]">
            {journalCount}
          </div>
          <div className="text-[11px] text-[#817A6D]">مقالات وتأملات منشورة</div>
        </div>

        <div className="p-6 rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-[#817A6D]">
            <span>سناب شات المعروض</span>
            <CheckCircle2 className="w-4 h-4 text-[#B79A5B]" />
          </div>
          <div className="font-display text-3xl font-bold text-[#0B0B0A]">
            نشط
          </div>
          <div className="text-[11px] text-[#817A6D]">@sohilnasr7 مرجع معتمد</div>
        </div>
      </div>

      {/* Recent Commission Requests */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold text-[#0B0B0A]">
            أحدث طلبات الأعمال المخصصة
          </h2>
          <Link
            href="/admin/requests"
            className="text-xs text-[#B79A5B] hover:underline flex items-center gap-1 font-medium"
          >
            <span>عرض كل الطلبات</span>
            <ArrowUpLeft className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentRequests.length === 0 ? (
          <div className="p-8 rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 text-center text-xs text-[#817A6D]">
            لا توجد طلبات واردة حتى الآن.
          </div>
        ) : (
          <div className="rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 overflow-hidden divide-y divide-[#0B0B0A]/5 shadow-xs">
            {recentRequests.map((req) => (
              <div
                key={req.id}
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF8F2] transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-sm text-[#0B0B0A]">{req.name}</span>
                    <span
                      className={`text-[10px] px-2.5 py-0.5 rounded-full font-sans font-medium ${
                        req.status === "new"
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : req.status === "in_progress"
                          ? "bg-amber-100 text-amber-800 border border-amber-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {req.status === "new"
                        ? "جديد"
                        : req.status === "in_progress"
                        ? "قيد التنفيذ"
                        : req.status === "completed"
                        ? "مكتمل"
                        : req.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#817A6D] line-clamp-1 font-light">
                    {req.workType} • الخامة: {req.material} • النص: «{req.requestedText}»
                  </p>
                </div>

                <div className="text-left shrink-0">
                  <span className="text-xs font-mono text-[#0B0B0A]" dir="ltr">
                    {req.phone}
                  </span>
                  <div className="text-[10px] text-[#817A6D] mt-0.5">
                    {new Date(req.createdAt).toLocaleDateString("ar-SA")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
