"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import {
  authenticateAdmin,
  clearSessionCookie,
  getSession,
} from "@/lib/auth";
import {
  LoginSchema,
  WorkSchema,
  JournalPostSchema,
  SocialPostSchema,
} from "@/lib/validations";

/**
 * Handle Admin Login
 */
export async function loginAdminAction(formData: FormData): Promise<void> {
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const val = LoginSchema.safeParse({ email, password });
  if (!val.success) {
    redirect("/admin/login?error=" + encodeURIComponent("يرجى إدخال بريد إلكتروني وكلمة مرور صحيحة."));
  }

  const result = await authenticateAdmin(val.data.email, val.data.password);
  if (!result.success) {
    redirect("/admin/login?error=" + encodeURIComponent(result.error || "فشل تسجيل الدخول."));
  }

  redirect("/admin");
}

/**
 * Handle Admin Logout
 */
export async function logoutAdminAction(): Promise<void> {
  await clearSessionCookie();
  redirect("/admin/login");
}

/**
 * Update Commission Request Status
 */
export async function updateCommissionStatusAction(
  requestId: string,
  status: string,
  internalNotes?: string
): Promise<{ success: boolean; error?: string }> {
  const session = await getSession();
  if (!session) return { success: false, error: "غير مصرح." };

  await db.commissionRequest.update({
    where: { id: requestId },
    data: {
      status,
      ...(internalNotes !== undefined ? { internalNotes } : {}),
    },
  });

  revalidatePath("/admin/requests");
  return { success: true };
}

/**
 * Save or Update a Work
 */
export async function saveWorkAction(formData: FormData): Promise<void> {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const id = formData.get("id")?.toString();
  const rawData = {
    titleAr: formData.get("titleAr")?.toString() || "",
    titleEn: formData.get("titleEn")?.toString() || "",
    slug: formData.get("slug")?.toString() || "",
    excerptAr: formData.get("excerptAr")?.toString() || "",
    excerptEn: formData.get("excerptEn")?.toString() || "",
    descriptionAr: formData.get("descriptionAr")?.toString() || "",
    descriptionEn: formData.get("descriptionEn")?.toString() || "",
    coverImage: formData.get("coverImage")?.toString() || "/images/works/work-glass-1.svg",
    featured: formData.get("featured") === "on",
    published: formData.get("published") === "on",
    year: Number(formData.get("year")) || new Date().getFullYear(),
    dimensions: formData.get("dimensions")?.toString() || "",
    materialId: formData.get("materialId")?.toString() || null,
    techniqueId: formData.get("techniqueId")?.toString() || null,
    categoryId: formData.get("categoryId")?.toString() || null,
  };

  const val = WorkSchema.safeParse(rawData);
  if (!val.success) {
    redirect("/admin/works");
  }

  const d = val.data;

  if (id) {
    await db.work.update({
      where: { id },
      data: {
        titleAr: d.titleAr,
        titleEn: d.titleEn || null,
        slug: d.slug,
        excerptAr: d.excerptAr || null,
        descriptionAr: d.descriptionAr,
        coverImage: d.coverImage,
        featured: d.featured,
        published: d.published,
        year: d.year,
        dimensions: d.dimensions || null,
        materialId: d.materialId || null,
        techniqueId: d.techniqueId || null,
        categoryId: d.categoryId || null,
      },
    });
  } else {
    await db.work.create({
      data: {
        titleAr: d.titleAr,
        titleEn: d.titleEn || null,
        slug: d.slug,
        excerptAr: d.excerptAr || null,
        descriptionAr: d.descriptionAr,
        coverImage: d.coverImage,
        featured: d.featured,
        published: d.published,
        year: d.year,
        dimensions: d.dimensions || null,
        materialId: d.materialId || null,
        techniqueId: d.techniqueId || null,
        categoryId: d.categoryId || null,
      },
    });
  }

  revalidatePath("/works");
  revalidatePath("/admin/works");
  redirect("/admin/works");
}

/**
 * Delete a Work
 */
export async function deleteWorkAction(id: string): Promise<{ success: boolean; error?: string }> {
  const session = await getSession();
  if (!session) return { success: false, error: "غير مصرح." };

  await db.work.delete({ where: { id } });

  revalidatePath("/works");
  revalidatePath("/admin/works");
  return { success: true };
}

/**
 * Save or Update Journal Post
 */
export async function saveJournalPostAction(formData: FormData): Promise<void> {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const id = formData.get("id")?.toString();
  const rawData = {
    titleAr: formData.get("titleAr")?.toString() || "",
    titleEn: formData.get("titleEn")?.toString() || "",
    slug: formData.get("slug")?.toString() || "",
    excerptAr: formData.get("excerptAr")?.toString() || "",
    contentAr: formData.get("contentAr")?.toString() || "",
    coverImage: formData.get("coverImage")?.toString() || "/images/journal/post-1.svg",
    category: formData.get("category")?.toString() || "من الاستوديو",
    tags: formData.get("tags")?.toString() || "",
    published: formData.get("published") === "on",
  };

  const val = JournalPostSchema.safeParse(rawData);
  if (!val.success) {
    redirect("/admin/journal");
  }

  const d = val.data;

  if (id) {
    await db.journalPost.update({
      where: { id },
      data: { ...d },
    });
  } else {
    await db.journalPost.create({
      data: { ...d },
    });
  }

  revalidatePath("/journal");
  revalidatePath("/admin/journal");
  redirect("/admin/journal");
}

/**
 * Delete Journal Post
 */
export async function deleteJournalPostAction(id: string): Promise<{ success: boolean; error?: string }> {
  const session = await getSession();
  if (!session) return { success: false, error: "غير مصرح." };

  await db.journalPost.delete({ where: { id } });

  revalidatePath("/journal");
  revalidatePath("/admin/journal");
  return { success: true };
}

/**
 * Save Social Post
 */
export async function saveSocialPostAction(formData: FormData): Promise<void> {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const id = formData.get("id")?.toString();
  const rawData = {
    title: formData.get("title")?.toString() || "",
    url: formData.get("url")?.toString() || "",
    thumbnail: formData.get("thumbnail")?.toString() || "/images/social/snap-1.svg",
    description: formData.get("description")?.toString() || "",
    featured: formData.get("featured") === "on",
    sortOrder: Number(formData.get("sortOrder")) || 0,
  };

  const val = SocialPostSchema.safeParse(rawData);
  if (!val.success) {
    redirect("/admin/social");
  }

  if (id) {
    await db.socialPost.update({ where: { id }, data: val.data });
  } else {
    await db.socialPost.create({ data: val.data });
  }

  revalidatePath("/");
  revalidatePath("/admin/social");
  redirect("/admin/social");
}

/**
 * Delete Social Post
 */
export async function deleteSocialPostAction(id: string): Promise<{ success: boolean; error?: string }> {
  const session = await getSession();
  if (!session) return { success: false, error: "غير مصرح." };

  await db.socialPost.delete({ where: { id } });

  revalidatePath("/");
  revalidatePath("/admin/social");
  return { success: true };
}

/**
 * Update Site Settings
 */
export async function updateSiteSettingsAction(formData: FormData): Promise<void> {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  await db.siteSettings.upsert({
    where: { id: "default" },
    update: {
      siteNameAr: formData.get("siteNameAr")?.toString() || "الخطاط سهيل نصر",
      taglineAr: formData.get("taglineAr")?.toString() || "حين يصبح الحرف أثراً.",
      contactPhone: formData.get("contactPhone")?.toString() || "",
      contactWhatsapp: formData.get("contactWhatsapp")?.toString() || "",
      snapchatUrl: formData.get("snapchatUrl")?.toString() || "https://www.snapchat.com/@sohilnasr7",
      location: formData.get("location")?.toString() || "الرياض، المملكة العربية السعودية",
    },
    create: {
      id: "default",
      siteNameAr: formData.get("siteNameAr")?.toString() || "الخطاط سهيل نصر",
      taglineAr: formData.get("taglineAr")?.toString() || "حين يصبح الحرف أثراً.",
      contactPhone: formData.get("contactPhone")?.toString() || "",
      contactWhatsapp: formData.get("contactWhatsapp")?.toString() || "",
      snapchatUrl: formData.get("snapchatUrl")?.toString() || "https://www.snapchat.com/@sohilnasr7",
      location: formData.get("location")?.toString() || "الرياض، المملكة العربية السعودية",
    },
  });

  revalidatePath("/");
  revalidatePath("/admin/settings");
}
