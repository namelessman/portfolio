import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date().toISOString().split("T")[0];

  return [
    {
      url: "https://namelessman.com",
      lastModified: new Date(buildDate),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
