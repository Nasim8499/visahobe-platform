import type { MetadataRoute } from "next";
import { site } from "@/lib/utils";
import { countries } from "@/lib/content";
import { legalDocs } from "@/lib/legal";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url.replace(/\/$/, "");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tools/eligibility`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const countryRoutes: MetadataRoute.Sitemap = countries.map((c) => ({
    url: `${base}/visa/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const legalRoutes: MetadataRoute.Sitemap = legalDocs.map((d) => ({
    url: `${base}/legal/${d.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...staticRoutes, ...countryRoutes, ...legalRoutes];
}
