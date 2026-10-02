import { db } from "@/lib/db";
import { updateCommissionStatusAction } from "@/server/actions/admin";

export const dynamic = "force-dynamic";

interface RequestsPageProps {
  searchParams: Promise<{
    status?: string;
  }>;
}

export default async function AdminRequestsPage({ searchParams }: RequestsPageProps) {
  const { status: filterStatus } = await searchParams;

  const requests = await db.commissionRequest.findMany({
    where: filterStatus ? { status: filterStatus } : {},
    orderBy: { createdAt: "desc" },
  });

  const statuses = [
    { key: "all", label: "الكل" },
    { key: "new", label: "جديدة" },
    { key: "reviewing", label: "قيد المراجعة" },
    { key: "contacted", label: "تم التواصل" },
    { key: "approved", label: "معتمدة" },
    { key: "in_progress", label: "قيد التنفيذ" },
    { key: "completed", label: "مكتملة" },
    { key: "cancelled", label: "ملغاة" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-[#0B0B0A]/10 pb-6">
        <div>
          <span className="text-xs font-sans tracking-[0.2em] text-[#B79A5B] uppercase block font-semibold">
            صندوق الوارد
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-[#0B0B0A]">
            طلبات الأعمال المخصصة ({requests.length})
          </h1>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {statuses.map((s) => {
          const isSelected =
            s.key === "all" ? !filterStatus : filterStatus === s.key;
          return (
            <a
              key={s.key}
              href={s.key === "all" ? "/admin/requests" : `/admin/requests?status=${s.key}`}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
                isSelected
                  ? "bg-[#B79A5B] text-[#0B0B0A] font-bold"
                  : "bg-[#F3EEE4] text-[#817A6D] hover:text-[#0B0B0A] border border-[#0B0B0A]/5"
              }`}
            >
              {s.label}
            </a>
          );
        })}
      </div>

      {/* Requests List */}
      {requests.length === 0 ? (
        <div className="p-16 text-center rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 text-xs text-[#817A6D]">
          لا توجد طلبات واردة مطابقة لهذا التصنيف.
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((req) => (
            <div
              key={req.id}
              className="p-6 rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 space-y-4 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0B0B0A]/8 pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-xl font-bold text-[#0B0B0A]">
                      {req.name}
                    </h3>
                    <span className="text-xs font-mono text-[#B79A5B]" dir="ltr">
                      {req.phone}
                    </span>
                    {req.email && (
                      <span className="text-xs text-[#817A6D]" dir="ltr">
                        {req.email}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#817A6D] mt-1 flex items-center gap-3">
                    <span>النوع: {req.workType}</span>
                    <span>•</span>
                    <span>الخامة: {req.material}</span>
                    <span>•</span>
                    <span>الكمية: {req.quantity}</span>
                    {req.dimensions && <span>• المقاس: {req.dimensions}</span>}
                    {req.deadline && <span>• موعد التسليم: {req.deadline}</span>}
                  </div>
                </div>

                {/* Status Update Form */}
                <form
                  action={async (formData: FormData) => {
                    "use server";
                    const newStatus = formData.get("newStatus")?.toString();
                    if (newStatus) {
                      await updateCommissionStatusAction(req.id, newStatus);
                    }
                  }}
                  className="flex items-center gap-2"
                >
                  <select
                    name="newStatus"
                    defaultValue={req.status}
                    className="px-3 py-1.5 rounded-lg bg-[#FAF8F2] border border-[#0B0B0A]/15 text-xs text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B]"
                  >
                    <option value="new">جديد</option>
                    <option value="reviewing">قيد المراجعة</option>
                    <option value="contacted">تم التواصل</option>
                    <option value="approved">معتمد</option>
                    <option value="in_progress">قيد التنفيذ</option>
                    <option value="completed">مكتمل</option>
                    <option value="cancelled">ملغي</option>
                  </select>

                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-lg bg-[#0B0B0A] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors text-xs font-medium text-[#FAF8F2]"
                  >
                    تحديث
                  </button>
                </form>
              </div>

              {/* Text to write */}
              <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#0B0B0A]/8 space-y-1">
                <span className="text-[11px] text-[#B79A5B] block font-semibold">النص المطلوب كتابته:</span>
                <p className="font-display text-lg text-[#0B0B0A] leading-relaxed">
                  «{req.requestedText}»
                </p>
              </div>

              {req.message && (
                <div className="text-xs text-[#817A6D] bg-[#FAF8F2] p-3 rounded-xl font-light">
                  <span className="text-[#0B0B0A] font-medium ml-1">ملاحظات العميل:</span>
                  {req.message}
                </div>
              )}

              <div className="text-[11px] text-[#817A6D] flex items-center justify-between pt-2">
                <span>تاريخ استلام الطلب: {new Date(req.createdAt).toLocaleString("ar-SA")}</span>
                <a
                  href={`https://wa.me/${req.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `السلام عليكم ورحمة الله، الأستاذ/ة ${req.name} بخصوص طلبكم الفني للخطاط سهيل نصر.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline font-medium"
                >
                  مراسلة العميل عبر واتساب مباشرة
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
