import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | 404 Day 2026 — April 4th in Piedmont Park",
  description: "Upcoming 404 Day events and schedule. Join us April 4th, 2026 in Piedmont Park, Atlanta for a free day of music, food, and community.",
  alternates: { canonical: "https://404day.com/events" },
  openGraph: {
    title: "Events | 404 Day 2026 — April 4th in Piedmont Park",
    description: "Upcoming 404 Day events and schedule. Join us April 4th, 2026 in Piedmont Park, Atlanta for a free day of music, food, and community.",
    url: "https://404day.com/events",
  },
  twitter: {
    title: "Events | 404 Day 2026 — April 4th in Piedmont Park",
    description: "Upcoming 404 Day events and schedule. Join us April 4th, 2026 in Piedmont Park, Atlanta for a free day of music, food, and community.",
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
