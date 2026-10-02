import { db } from "@/lib/db";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminMaterialsPage() {
  const materials = await db.material.findMany({
    include: {
      _count: { select: { works: true } },
    },
    orderBy: { nameAr: "asc" },
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-[#0B0B0A]/10 pb-6">
        <div>
          <span className="text-xs font-sans tracking-[0.2em] text-[#B79A5B] uppercase block font-semibold">
            إدارة الخامات
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-[#0B0B0A]">
            خامات وأسطح الخط العربي ({materials.length})
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((mat) => (
          <div
            key={mat.id}
            className="p-6 rounded-2xl bg-[#F3EEE4] border border-[#0B0B0A]/8 flex flex-col justify-between space-y-4 shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-[#817A6D] mb-2 font-mono">
                <span>{mat.slug}</span>
                <span className="text-[#B79A5B] font-medium">{mat._count.works} أعمال</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#0B0B0A]">
                {mat.nameAr}
              </h3>
              {mat.descriptionAr && (
                <p className="text-xs text-[#817A6D] font-light mt-2 line-clamp-3 leading-relaxed">
                  {mat.descriptionAr}
                </p>
              )}
            </div>

            <div className="pt-4 border-t border-[#0B0B0A]/8 flex items-center justify-between text-xs">
              <Link
                href={`/materials/${mat.slug}`}
                target="_blank"
                className="text-[#B79A5B] hover:underline flex items-center gap-1 font-medium"
              >
                <span>معاينة في الموقع</span>
                <ArrowUpLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
