import type { MetadataRoute } from "next";
import { mgArticles, siteConfig } from "@/lib/site-data";

const staticRoutes = [
  "",
  "/projects",
  "/pets",
  "/pets/growth",
  "/pets/emojis",
  "/pets/gallery",
  "/mg",
  "/resources",
  "/ai"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-06-25");
  const routes = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.75
  }));

  const articleRoutes = mgArticles.map((article) => ({
    url: `${siteConfig.url}/mg/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...routes, ...articleRoutes];
}
