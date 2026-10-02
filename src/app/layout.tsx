import type { Metadata, Viewport } from "next";
import { Amiri, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0B0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "الخطاط سهيل نصر — حين يصبح الحرف أثراً",
    template: "%s | الخطاط سهيل نصر",
  },
  description:
    "الأتيليه الرقمي والمعرض الفني للخطاط سهيل نصر بالرياض. فنون الخط العربي، الحفر على الزجاج، الحرق على الخشب، ونقش الإهداءات على السبح والمخمل.",
  keywords: [
    "الخطاط سهيل نصر",
    "خطاط الرياض",
    "خط عربي",
    "حفر على الزجاج",
    "حرق على الخشب",
    "نقش سبح",
    "مخمل وسجاد",
    "معرض خط عربي",
  ],
  authors: [{ name: "سهيل نصر — Suhail Nasr" }],
  creator: "سهيل نصر",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://suhailnasr.art"),
  openGraph: {
    title: "الخطاط سهيل نصر — حين يصبح الحرف أثراً",
    description: "الأتيليه الفني الخاص للخطاط سهيل نصر بالرياض.",
    locale: "ar_SA",
    type: "website",
    siteName: "سهيل نصر — SUHAIL NASR",
  },
  twitter: {
    card: "summary_large_image",
    title: "الخطاط سهيل نصر — حين يصبح الحرف أثراً",
    description: "فنون الخط العربي والحفر على الخامات الفاخرة بالرياض.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${amiri.variable} ${ibmPlexArabic.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF8F2] text-[#0B0B0A] antialiased selection:bg-[#B79A5B] selection:text-[#0B0B0A]">
        {children}
      </body>
    </html>
  );
}
