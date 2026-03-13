import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | 404 Day Music Festival Photos",
  description: "Browse photos from past 404 Day festivals in Piedmont Park, Atlanta. Live music, food vendors, and the vibrant community spirit of Atlanta culture.",
  alternates: { canonical: "https://404day.com/gallery" },
  openGraph: {
    title: "Gallery | 404 Day Music Festival Photos",
    description: "Browse photos from past 404 Day festivals in Piedmont Park, Atlanta. Live music, food vendors, and the vibrant community spirit of Atlanta culture.",
    url: "https://404day.com/gallery",
  },
  twitter: {
    title: "Gallery | 404 Day Music Festival Photos",
    description: "Browse photos from past 404 Day festivals in Piedmont Park, Atlanta. Live music, food vendors, and the vibrant community spirit of Atlanta culture.",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
