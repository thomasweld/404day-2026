import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About 404 Day | Atlanta's Annual Free Music Festival",
  description: "Learn the story behind 404 Day — Atlanta's annual free outdoor music and culture festival held every April 4th in Piedmont Park since 2011.",
  alternates: { canonical: "https://404day.com/about" },
  openGraph: {
    title: "About 404 Day | Atlanta's Annual Free Music Festival",
    description: "Learn the story behind 404 Day — Atlanta's annual free outdoor music and culture festival held every April 4th in Piedmont Park since 2011.",
    url: "https://404day.com/about",
  },
  twitter: {
    title: "About 404 Day | Atlanta's Annual Free Music Festival",
    description: "Learn the story behind 404 Day — Atlanta's annual free outdoor music and culture festival held every April 4th in Piedmont Park since 2011.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
