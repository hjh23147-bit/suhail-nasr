import { db } from "@/lib/db";
import {
  FALLBACK_PROFILE,
  FALLBACK_WORKS,
  FALLBACK_MATERIALS,
  FALLBACK_JOURNAL,
  FALLBACK_SOCIAL,
} from "@/lib/data-fallback";

export async function getArtistProfile() {
  try {
    const profile = await db.artistProfile.findFirst();
    if (profile) return profile;
  } catch (err) {
    console.warn("Using fallback artist profile:", err);
  }
  return FALLBACK_PROFILE;
}

export async function getFeaturedWorks(take = 6) {
  try {
    const works = await db.work.findMany({
      where: { published: true },
      include: { material: true, technique: true },
      orderBy: { createdAt: "desc" },
      take,
    });
    if (works && works.length > 0) return works;
  } catch (err) {
    console.warn("Using fallback featured works:", err);
  }
  return FALLBACK_WORKS.slice(0, take);
}

export async function getMaterialsList(take = 8) {
  try {
    const materials = await db.material.findMany({
      include: {
        _count: {
          select: { works: true },
        },
      },
      take,
    });
    if (materials && materials.length > 0) return materials;
  } catch (err) {
    console.warn("Using fallback materials:", err);
  }
  return FALLBACK_MATERIALS.slice(0, take);
}

export async function getJournalList(take = 2) {
  try {
    const posts = await db.journalPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      take,
    });
    if (posts && posts.length > 0) return posts;
  } catch (err) {
    console.warn("Using fallback journal posts:", err);
  }
  return FALLBACK_JOURNAL.slice(0, take);
}

export async function getSocialList(take = 2) {
  try {
    const posts = await db.socialPost.findMany({
      where: { featured: true },
      take,
    });
    if (posts && posts.length > 0) return posts;
  } catch (err) {
    console.warn("Using fallback social posts:", err);
  }
  return FALLBACK_SOCIAL.slice(0, take);
}
