import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://degovan.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/how-we-work`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contributors`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
