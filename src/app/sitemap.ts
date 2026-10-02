import { MetadataRoute } from "next";
import { db } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://suhailnasr.art";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/works`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/materials`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/styles`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/journal`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/commission`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  // Dynamic Works
  const works = await db.work.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true },
  });

  const workRoutes: MetadataRoute.Sitemap = works.map((w) => ({
    url: `${baseUrl}/works/${w.slug}`,
    lastModified: w.updatedAt,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic Materials
  const materials = await db.material.findMany({
    select: { slug: true, updatedAt: true },
  });

  const materialRoutes: MetadataRoute.Sitemap = materials.map((m) => ({
    url: `${baseUrl}/materials/${m.slug}`,
    lastModified: m.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic Journal Posts
  const journalPosts = await db.journalPost.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true },
  });

  const journalRoutes: MetadataRoute.Sitemap = journalPosts.map((p) => ({
    url: `${baseUrl}/journal/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...workRoutes, ...materialRoutes, ...journalRoutes];
}
