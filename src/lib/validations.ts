import { z } from "zod";

/**
 * Validation schema for admin login
 */
export const LoginSchema = z.object({
  email: z.string().email("البريد الإلكتروني غير صالح"),
  password: z.string().min(6, "كلمة المرور يجب أن لا تقل عن 6 أحرف"),
});

/**
 * Validation schema for commission request from public clients
 */
export const CommissionRequestSchema = z.object({
  name: z.string().min(2, "يرجى كتابة الاسم الكريم (حرفين على الأقل)").max(100),
  phone: z
    .string()
    .min(8, "يرجى إدخال رقم اتصال صحيح")
    .max(20)
    .regex(/^[\d+\s-]+$/, "صيغة رقم الهاتف غير صحيحة"),
  email: z.string().email("البريد الإلكتروني غير صحيح").optional().or(z.literal("")),
  workType: z.string().min(2, "يرجى اختيار أو تحديد نوع العمل المطلوبة"),
  material: z.string().min(2, "يرجى تحديد الخامة المرغوبة"),
  requestedText: z.string().min(2, "يرجى كتابة النص أو الاسم المطلوب تخطيطه").max(1000),
  dimensions: z.string().max(100).optional().or(z.literal("")),
  quantity: z.coerce.number().min(1).default(1),
  budget: z.string().max(100).optional().or(z.literal("")),
  deadline: z.string().max(100).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
  attachments: z.string().optional().default("[]"),
});

export type CommissionInput = z.infer<typeof CommissionRequestSchema>;

/**
 * Validation schema for creating or updating a Work
 */
export const WorkSchema = z.object({
  titleAr: z.string().min(2, "عنوان العمل بالعربية مطلوب"),
  titleEn: z.string().optional().or(z.literal("")),
  slug: z.string().min(2, "المعرف الرابط (Slug) مطلوب").regex(/^[a-z0-9-]+$/, "الرابط يجب أن يحتوي على أحرف إنجليزية وأرقام وشرطات فقط"),
  excerptAr: z.string().max(300).optional().or(z.literal("")),
  excerptEn: z.string().max(300).optional().or(z.literal("")),
  descriptionAr: z.string().min(5, "الوصف العربي مطلوب"),
  descriptionEn: z.string().optional().or(z.literal("")),
  coverImage: z.string().min(1, "صورة العمل مطلوبة"),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  year: z.coerce.number().min(1990).max(2100).optional(),
  dimensions: z.string().max(100).optional().or(z.literal("")),
  categoryId: z.string().optional().or(z.literal("")),
  materialId: z.string().optional().or(z.literal("")),
  techniqueId: z.string().optional().or(z.literal("")),
  styleId: z.string().optional().or(z.literal("")),
  seoTitle: z.string().max(120).optional().or(z.literal("")),
  seoDescription: z.string().max(250).optional().or(z.literal("")),
});

/**
 * Validation schema for journal post
 */
export const JournalPostSchema = z.object({
  titleAr: z.string().min(3, "عنوان المقال مطلوب"),
  titleEn: z.string().optional().or(z.literal("")),
  slug: z.string().min(2, "المعرف الرابط (Slug) مطلوب"),
  excerptAr: z.string().max(400).optional().or(z.literal("")),
  excerptEn: z.string().max(400).optional().or(z.literal("")),
  contentAr: z.string().min(10, "محتوى المقال العربي مطلوب"),
  contentEn: z.string().optional().or(z.literal("")),
  coverImage: z.string().optional().or(z.literal("")),
  category: z.string().default("من الاستوديو"),
  tags: z.string().optional().or(z.literal("")),
  published: z.boolean().default(true),
});

/**
 * Validation schema for social post (Snapchat showcase)
 */
export const SocialPostSchema = z.object({
  title: z.string().min(3, "عنوان المنشور مطلوب"),
  url: z.string().url("رابط سناب شات غير صالح"),
  thumbnail: z.string().optional().or(z.literal("")),
  description: z.string().max(500).optional().or(z.literal("")),
  featured: z.boolean().default(false),
  sortOrder: z.coerce.number().default(0),
});
