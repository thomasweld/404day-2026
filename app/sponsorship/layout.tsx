import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsor 404 Day 2026 | Atlanta Festival Sponsorship",
  description: "Partner with 404 Day and reach thousands of Atlanta festival-goers. Explore sponsorship packages for Atlanta's premier free outdoor music festival.",
  alternates: { canonical: "https://404day.com/sponsorship" },
  openGraph: {
    title: "Sponsor 404 Day 2026 | Atlanta Festival Sponsorship",
    description: "Partner with 404 Day and reach thousands of Atlanta festival-goers. Explore sponsorship packages for Atlanta's premier free outdoor music festival.",
    url: "https://404day.com/sponsorship",
  },
  twitter: {
    title: "Sponsor 404 Day 2026 | Atlanta Festival Sponsorship",
    description: "Partner with 404 Day and reach thousands of Atlanta festival-goers. Explore sponsorship packages for Atlanta's premier free outdoor music festival.",
  },
};

export default function SponsorshipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
