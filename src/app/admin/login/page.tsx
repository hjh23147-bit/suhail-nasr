import { Metadata } from "next";
import Link from "next/link";
import { Lock, ArrowRight } from "lucide-react";
import { loginAdminAction } from "@/server/actions/admin";

export const metadata: Metadata = {
  title: "تسجيل الدخول — لوحة التحكم الأتيليه",
};

interface LoginPageProps {
  searchParams: Promise<{
    error?: string;
  }>;
}

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;

  return (
    <main className="min-h-screen bg-[#FAF8F2] text-[#0B0B0A] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Subtle Calligraphic Texture */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <span className="font-display text-[26rem] select-none text-[#B79A5B]">ن</span>
      </div>

      <div className="w-full max-w-md bg-[#F3EEE4] border border-[#0B0B0A]/10 p-8 sm:p-10 rounded-3xl shadow-xl relative z-10 space-y-8">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#B79A5B]/15 text-[#B79A5B] flex items-center justify-center mx-auto mb-3">
            <Lock className="w-6 h-6 stroke-[1.5]" />
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0B0B0A]">
            لوحة إدارة الأتيليه
          </h1>
          <p className="text-xs text-[#817A6D] font-light">
            بوابة الإدارة الخاصة للخطاط سهيل نصر
          </p>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-red-100 border border-red-300 text-red-800 text-xs text-center">
            {error}
          </div>
        )}

        <form action={loginAdminAction} className="space-y-5">
          <div>
            <label className="block text-xs font-medium text-[#171614] mb-1.5">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              required
              defaultValue="admin@suhailnasr.art"
              dir="ltr"
              placeholder="admin@suhailnasr.art"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#171614] mb-1.5">
              كلمة المرور
            </label>
            <input
              type="password"
              name="password"
              required
              defaultValue="Atelier@Suhail2026"
              dir="ltr"
              placeholder="••••••••••••"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F2] border border-[#0B0B0A]/15 text-sm text-[#0B0B0A] focus:outline-hidden focus:border-[#B79A5B] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors font-medium text-xs shadow-md tracking-wider flex items-center justify-center gap-2 mt-6 focus:outline-hidden"
          >
            <span>تسجيل الدخول</span>
          </button>
        </form>

        <div className="pt-4 border-t border-[#0B0B0A]/10 text-center">
          <Link
            href="/"
            className="text-xs text-[#817A6D] hover:text-[#0B0B0A] transition-colors inline-flex items-center gap-1 font-light"
          >
            <span>العودة إلى المعرض العام</span>
            <ArrowRight className="w-3 h-3 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </main>
  );
}
