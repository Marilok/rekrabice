import { MetadataRoute } from 'next';
 
const DOMAIN = "https://rekrabice.cz"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
    },
    {
      url: `${DOMAIN}/o-nas`,
      lastModified: new Date(),
    },
    {
      url: `${DOMAIN}/kontakt`,
      lastModified: new Date(),
    },
    {
        url: `${DOMAIN}/napsali-o-nas`,
        lastModified: new Date(),
      },
  ];
}