import { DOMAIN } from "data/const";
import { MetadataRoute } from "next";

// reference: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generate-a-sitemap

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${DOMAIN}/o-nas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${DOMAIN}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/napsali-o-nas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${DOMAIN}/vratit`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.2,
    },
  ];
}
