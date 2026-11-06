import type { MetadataRoute } from 'next';
import { projects } from '@/data';

const baseUrl = 'https://devray.qzz.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chat`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => {
    const lastModified = new Date(project.updatedAt);
    return {
      url: `${baseUrl}/work/${project.slug}`,
      lastModified: Number.isNaN(lastModified.getTime()) ? now : lastModified,
      changeFrequency: 'monthly',
      priority: project.featured ? 0.8 : 0.6,
    };
  });

  return [...staticRoutes, ...projectRoutes];
}
