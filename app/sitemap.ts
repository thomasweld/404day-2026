import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://404day.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/events`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/tickets`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/sponsorship`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];
}
