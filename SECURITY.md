# SECURITY.md — معايير وإجراءات الأمان والحماية
## منصة ومعرض الخطاط سهيل نصر — SUHAIL NASR Digital Atelier

> **الإصدار:** 1.0.0  
> **المرجع:** `REQUIREMENTS.md` والقواعد الإلزامية لتطوير الويب الآمن

---

### 1. طبقات الأمان المطبقة (Security Architecture)

1. **المصادقة وإدارة الجلسات (Authentication & Session Management):**
   - استخدام الرموز المشفرة (Signed JWTs) باستخدام خوارزمية `HS256` عبر Web Crypto API (`jose`).
   - تخزين الرموز حصرياً في ملفات تعريف ارتباط مشفرة ومحمية:
     - `httpOnly: true` لمنع الوصول عبر سكريبتات المتصفح (حماية من XSS).
     - `secure: true` في بيئة الإنتاج لضمان مرورها عبر HTTPS فقط.
     - `sameSite: "lax"` للحماية من هجمات تزوير الطلبات عبر المواقع (CSRF).
   - منع تخزين رموز المصادقة الحساسة في `localStorage` أو `sessionStorage`.

2. **التحقق وتطهير المدخلات (Input Validation & Sanitization):**
   - فحص وتدقيق كل المدخلات القادمة من الواجهة في جهة الخادم عبر **Zod Schemas**.
   - تطبيق قيود صارمة على أنواع الحقول، الأطوال المسموحة، وصيغ أرقام الهواتف والروابط والبريد الإلكتروني.
   - منع هجمات حقن الأوامر وSQL Injection عبر استخدام Prisma المعلم (Parameterized Queries).

3. **حماية مسارات لوحة التحكم (Route Protection):**
   - حماية مسار `/admin/*` عبر `src/middleware.ts`.
   - توجيه أي طلب غير مصرح به تلقائياً إلى صفحة الدخول `/admin/login` مع حفظ مسار العودة الآمن.

4. **الترويسات الأمنية (Security Headers):**
   - `X-Frame-Options: SAMEORIGIN` لمنع هجمات الاختطاف بالنقرات (Clickjacking).
   - `X-Content-Type-Options: nosniff` لمنع المتصفحات من تخمين أنواع MIME.
   - `Referrer-Policy: strict-origin-when-cross-origin` لحماية بيانات الإحالة.
   - `Permissions-Policy` لمنع الوصول غير المصرح به للميكروفون والكاميرا والموقع الجغرافي.

5. **أمان معالجة وتخزين الملفات (File Upload Security):**
   - التحقق من الامتدادات ونوع MIME الحقيقي للملفات قبل حفظها.
   - تعقيم أسماء الملفات وتوليد معرفات عشوائية فريدة لمنع مسارات الحقن (Path Traversal).
   - تحديد سقف أقصى لحجم المرفقات والصور.
