import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RSVP Free to 404 Day 2026 | Piedmont Park, Atlanta",
  description: "Reserve your free spot at 404 Day 2026. April 4th in Piedmont Park, Atlanta, Georgia. Music, food, and community — free to attend.",
  alternates: { canonical: "https://404day.com/tickets" },
  openGraph: {
    title: "RSVP Free to 404 Day 2026 | Piedmont Park, Atlanta",
    description: "Reserve your free spot at 404 Day 2026. April 4th in Piedmont Park, Atlanta, Georgia. Music, food, and community — free to attend.",
    url: "https://404day.com/tickets",
  },
  twitter: {
    title: "RSVP Free to 404 Day 2026 | Piedmont Park, Atlanta",
    description: "Reserve your free spot at 404 Day 2026. April 4th in Piedmont Park, Atlanta, Georgia. Music, food, and community — free to attend.",
  },
};

export default function TicketsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
