"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "الأعمال", href: "/works" },
    { label: "الخامات", href: "/materials" },
    { label: "دفتر الحرف", href: "/journal" },
    { label: "عن سهيل", href: "/about" },
    { label: "الخدمات", href: "/services" },
    { label: "تواصل", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#FAF8F2]/92 backdrop-blur-md py-4 border-b border-[#0B0B0A]/8 shadow-xs"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Official Logo */}
        <Link href="/" className="group flex items-center gap-3.5 focus:outline-hidden">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#B79A5B]/40 shadow-xs group-hover:scale-105 group-hover:border-[#B79A5B] transition-all duration-300 bg-white shrink-0">
            <Image
              src="/images/suhail-logo.jpg"
              alt="شعار الخطاط سهيل نصر الرسمي"
              fill
              priority
              sizes="44px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0B0B0A] group-hover:text-[#B79A5B] transition-colors duration-300 leading-none">
              سهيل نصر
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] uppercase text-[#817A6D] transition-colors duration-300 mt-1">
              منصة الخطاط سهيل نصر • SUHAIL NASR
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 relative py-1 focus:outline-hidden",
                  isActive
                    ? "text-[#B79A5B] font-semibold"
                    : "text-[#171614] hover:text-[#B79A5B]"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-[2px] rounded-full bg-[#B79A5B]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/commission"
            className="px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex items-center gap-1.5 focus:outline-hidden bg-[#0B0B0A] text-[#FAF8F2] hover:bg-[#B79A5B] hover:text-[#0B0B0A] hover:shadow-md"
          >
            <span>اطلب عملاً</span>
            <ArrowUpLeft className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/commission"
            className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-[#0B0B0A] text-[#FAF8F2]"
          >
            اطلب عملاً
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="القائمة الرئيسية"
            className="p-2 rounded-lg text-[#0B0B0A] hover:bg-black/5 transition-colors focus:outline-hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#FAF8F2] border-b border-[#0B0B0A]/10 shadow-2xl py-6 px-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-display py-2 border-b border-[#0B0B0A]/5 transition-colors flex items-center justify-between",
                    isActive ? "text-[#B79A5B] font-bold" : "text-[#0B0B0A] hover:text-[#B79A5B]"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#B79A5B]" />}
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/commission"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-[#0B0B0A] text-[#FAF8F2] text-center text-sm font-medium hover:bg-[#B79A5B] hover:text-[#0B0B0A] transition-colors"
              >
                اطلب عملاً مخصصاً
              </Link>
              <div className="flex items-center justify-center gap-6 pt-3 text-xs text-[#817A6D]">
                <a
                  href="https://www.snapchat.com/@sohilnasr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B79A5B] transition-colors"
                >
                  Snapchat @sohilnasr7
                </a>
                <span>•</span>
                <span>الرياض، السعودية</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
