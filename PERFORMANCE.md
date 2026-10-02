# PERFORMANCE.md — معايير الأداء والتحسين التقني
## منصة ومعرض الخطاط سهيل نصر — SUHAIL NASR Digital Atelier

> **الإصدار:** 1.0.0  
> **الأهداف الأساسية:** استهداف مؤشرات Core Web Vitals العالية وتجربة تصفح فورية (LCP < 2.5s, CLS < 0.1, INP < 200ms).

---

### 1. استراتيجية العرض عبر الخادم (Server Components First)

- **تقليل حزم JavaScript:** جميع الصفحات العامة ومسارات الاستعراض (`/`, `/works`, `/materials`, `/journal`, `/about`, `/contact`, `/services`) تعمل كمكونات خادمة (React Server Components).
- **حصر Client Components:** تقتصر مكونات العميل (`"use client"`) على العناصر التي تتطلب تفاعلاً مع المتصفح فقط:
  - `SiteHeader.tsx` (رصد التمرير وقائمة الجوال)
  - `ArtworkLightbox.tsx` (التنقل بلوحة المفاتيح)
  - `CommissionForm.tsx` (إرسال النموذج وعرض حالة التحميل)
  - `InkReveal.tsx` (تأثيرات الحركة الناعمة عبر Framer Motion)

---

### 2. نظام تحسين الصور والوسائط (Image Optimization Pipeline)

1. **استخدام `next/image`:**
   - تطبيق المقاسات المتجاوبة التلقائية (`sizes="(max-width: 768px) 100vw, 50vw"`).
   - توفير خاصية التحميل الكسول التلقائي (Lazy Loading) لجميع الأعمال غير الظاهرة في الشاشة الأولى.
   - استخدام `priority` حصرياً للعمل الفني الرئيسي في الشاشة الأولى (Hero Artwork) لمنع تأخير LCP.
2. **صيغ رسومية موجهة (Scalable Vector Graphics & Modern Formats):**
   - اعتماد صيغ SVG فائقة النقاء والخفيفة جداً للأعمال التجريبية والرموز والأصول الثابتة.
   - دعم صيغ AVIF و WebP في بيئة الإنتاج لتقليل حجم صور الأعمال الكبيرة بنسبة تفوق 70%.

---

### 3. تحسين الخطوط والأصول الطباعية (Font Optimization)

- تحميل خطوط `Amiri` و `IBM_Plex_Sans_Arabic` عبر `@next/font/google` المدمج.
- استخدام `display: "swap"` لمنع وميض النصوص غير المنسقة (FOIT).
- تحديد فئات الحروف المقتصرة على الأبجدية العربية (`subsets: ["arabic"]`) لتقليل حجم ملف الخط بنسبة 60%.

---

### 4. دعم تفضيل تقليل الحركة (Reduced Motion Support)

- احترام إعدادات المستخدم في نظام التشغيل (`prefers-reduced-motion`).
- إيقاف كافة تأثيرات الانتقال المعقدة في Framer Motion عند تفعيل هذا الخيار لضمان تجربة مستقرة وخفيفة على الأجهزة الضعيفة.
