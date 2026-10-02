import Link from "next/link";
import {
  LayoutDashboard,
  Palette,
  Inbox,
  Layers,
  BookOpen,
  Share2,
  Settings,
  LogOut,
  ExternalLink,
} from "lucide-react";
import { logoutAdminAction } from "@/server/actions/admin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const adminNav = [
    { label: "لوحة التحكم", href: "/admin", icon: LayoutDashboard },
    { label: "الأعمال الفنية", href: "/admin/works", icon: Palette },
    { label: "طلبات اللوحات", href: "/admin/requests", icon: Inbox },
    { label: "الخامات والتقنيات", href: "/admin/materials", icon: Layers },
    { label: "دفتر الحرف", href: "/admin/journal", icon: BookOpen },
    { label: "سناب شات", href: "/admin/social", icon: Share2 },
    { label: "الإعدادات العامة", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F2] text-[#0B0B0A] flex flex-col md:flex-row antialiased">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#F3EEE4] border-b md:border-b-0 md:border-l border-[#0B0B0A]/10 flex flex-col justify-between shrink-0 p-6">
        <div className="space-y-8">
          {/* Brand */}
          <div className="flex items-center justify-between">
            <Link href="/admin" className="block focus:outline-hidden">
              <span className="font-display text-2xl font-bold tracking-tight text-[#0B0B0A]">
                سهيل نصر
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-[#B79A5B] uppercase font-semibold">
                ADMIN ATELIER
              </span>
            </Link>

            <Link
              href="/"
              target="_blank"
              title="معاينة الموقع العام"
              className="p-1.5 rounded-lg bg-[#0B0B0A]/5 hover:bg-[#0B0B0A]/10 text-[#817A6D] hover:text-[#0B0B0A] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1.5">
            {adminNav.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium text-[#171614] hover:text-[#B79A5B] hover:bg-[#FAF8F2] transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#B79A5B]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="pt-6 border-t border-[#0B0B0A]/10 mt-6">
          <form action={logoutAdminAction}>
            <button
              type="submit"
              className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>تسجيل الخروج</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Admin Content Viewport */}
      <main className="grow p-6 sm:p-10 max-w-7xl overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
