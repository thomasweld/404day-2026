import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { basePath } from "./lib/constants";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
export const metadata: Metadata = {
  metadataBase: new URL("https://404day.com"),
  title: "404 Day: Celebrating Atlanta Culture",
  description:
    "404 Day is an annual celebration of Atlanta culture. Music, food, and community spirit in Piedmont Park. Free to attend every April 4th.",
  keywords: ["404day", "404 day", "festival", "Atlanta", "Piedmont Park", "music", "Georgia", "Atlanta culture"],
  icons: {
    icon: "404day-logo-black.png",
    apple: "404day-logo-white.png",
  },
  openGraph: {
    title: "404 Day - Celebrating Atlanta Culture",
    description: "Music, food, and community in Piedmont Park. Free to attend every April 4th.",
    type: "website",
    url: "https://404day.com",
    images: [{ url: "404day-atlanta-music-festival-flyer.jpg", width: 1200, height: 1200, alt: "404 Day 2026 - Free Music Festival in Piedmont Park, Atlanta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 Day - Celebrating Atlanta Culture",
    description: "Music, food, and community in Piedmont Park. Free to attend every April 4th.",
    images: ["https://404day.com/404day-atlanta-music-festival-flyer.jpg"],
  },
  alternates: {
    canonical: "https://404day.com",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();
  return (
    <html lang="en" data-base-path={basePath}>
      <head>
        <link rel="preload" as="image" href={`${basePath}/404day-atlanta-music-festival-hero.webp`} fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "404 Day 2026",
              "description": "Atlanta's annual free outdoor music and culture festival. Live music, local food vendors, and community spirit in Piedmont Park.",
              "startDate": "2026-04-04",
              "endDate": "2026-04-04",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "isAccessibleForFree": true,
              "url": "https://404day.com",
              "image": "https://404day.com/404day-logo-white.png",
              "location": {
                "@type": "Place",
                "name": "Piedmont Park",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "400 Park Dr NE",
                  "addressLocality": "Atlanta",
                  "addressRegion": "GA",
                  "postalCode": "30306",
                  "addressCountry": "US"
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "404 Day",
                "url": "https://404day.com"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://404day.com/tickets"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "404 Day",
              "url": "https://404day.com",
              "logo": "https://404day.com/404day-logo-black.png",
              "description": "404 Day is Atlanta's annual free outdoor music and culture festival held every April 4th in Piedmont Park.",
              "email": "info@404day.com",
              "telephone": "+14049227545",
              "sameAs": [
                "https://www.instagram.com/404day",
                "https://www.facebook.com/404day",
                "https://www.tiktok.com/partyinthefuture"
              ]
            }
          ])}}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-K5HXGGGNRB" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K5HXGGGNRB');
        `}</Script>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <SanityLive />
        {isDraftMode && <VisualEditing />}
      </body>
    </html>
  );
}
