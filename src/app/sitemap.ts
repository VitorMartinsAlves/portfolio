import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

  if (!siteUrl) return [];

  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-11-04"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/curriculo`,
      lastModified: new Date("2026-11-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
