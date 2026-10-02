# DATABASE.md — توثيق معمارية قاعدة البيانات
## منصة ومعرض الخطاط سهيل نصر — SUHAIL NASR Digital Atelier

> **الإصدار:** 1.0.0  
> **نظام إدارة قواعد البيانات:** SQLite (بيئة التطوير والتجربة الفورية) / جاهزية كاملة لـ PostgreSQL (بيئة الإنتاج)  
> **ORM:** Prisma 6.x

---

### 1. الكيانات والعلاقات (Entities & Relationships)

تم تصميم قاعدة البيانات وفقاً للقسم 20 من `REQUIREMENTS.md`، بهيكل معياري يمنع تكرار البيانات ويدعم العلاقات المترابطة:

```mermaid
erDiagram
    ArtistProfile {
        string id PK
        string nameAr
        string nameEn
        string titleAr
        string titleEn
        string bioAr
        string bioEn
        string philosophyAr
        string philosophyEn
        string phone
        string whatsapp
        string snapchatUrl
        string location
    }

    Work {
        string id PK
        string titleAr
        string titleEn
        string slug UK
        string coverImage
        boolean featured
        boolean published
        int year
        string dimensions
        string categoryId FK
        string materialId FK
        string techniqueId FK
        string styleId FK
    }

    WorkMedia {
        string id PK
        string workId FK
        string url
        string type
        string altAr
        int sortOrder
    }

    Material {
        string id PK
        string nameAr
        string nameEn
        string slug UK
        string descriptionAr
    }

    Technique {
        string id PK
        string nameAr
        string descriptionAr
    }

    Style {
        string id PK
        string nameAr
        string descriptionAr
    }

    Category {
        string id PK
        string nameAr
        string slug UK
    }

    JournalPost {
        string id PK
        string titleAr
        string slug UK
        string contentAr
        string category
        boolean published
    }

    CommissionRequest {
        string id PK
        string name
        string phone
        string email
        string requestedText
        string material
        string status
        string attachments
    }

    User {
        string id PK
        string email UK
        string passwordHash
        string role
    }

    Work }o--|| Category : belongs_to
    Work }o--|| Material : executed_on
    Work }o--|| Technique : crafted_with
    Work }o--|| Style : written_in
    Work ||--o{ WorkMedia : contains
```

---

### 2. دورة حياة طلبات الأعمال المخصصة (Commission Lifecycle)

كل طلب عمل فني يمر بالحالات التالية:
1. `new`: طلب جديد مستلم من العميل عبر نموذج الموقع.
2. `reviewing`: قيد المراجعة الفنية من الخطاط سهيل نصر لتحديد إمكانية التنفيذ.
3. `contacted`: تم التواصل مع العميل لمناقشة التفاصيل وتأكيد النص والمقاس.
4. `approved`: تم اعتماد الطلب والبدء في التجهيز.
5. `in_progress`: جاري تنفيذ الحفر أو الحرق أو التخطيط في الاستوديو.
6. `completed`: تم إنجاز العمل وتسليمه للعميل بنجاح.
7. `cancelled`: تم إلغاء الطلب بناءً على رغبة العميل أو تعذر التنفيذ.

---

### 3. إعداد بيئة الإنتاج والترحيل لـ PostgreSQL

للانتقال إلى خادم PostgreSQL في بيئة الإنتاج:
1. قم بتغيير مزود البيانات في `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
2. ضبط رابط الاتصال في متغيرات البيئة:
   ```env
   DATABASE_URL="postgresql://user:password@host:5432/suhail_nasr_db?schema=public"
   ```
3. تشغيل أمر الترحيل والتغذية:
   ```bash
   npx prisma migrate deploy
   npm run seed
   ```
