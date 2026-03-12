import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { basePath } from "./lib/constants";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
export const metadata: Metadata = {
  metadataBase: new URL("https://thomasweld.github.io/404day"),
  title: "404Day: Celebrating Atlanta Culture",
  description:
    "404Day is an annual celebration of Atlanta culture. Music, food, and community spirit in Piedmont Park. Free to attend every April 4th.",
  keywords: ["404day", "404 day", "festival", "Atlanta", "Piedmont Park", "music", "Georgia", "Atlanta culture"],
  icons: {
    icon: "404day-logo-black.png",
    apple: "404day-logo-white.png",
  },
  openGraph: {
    title: "404Day - Celebrating Atlanta Culture",
    description: "Music, food, and community in Piedmont Park. Free to attend every April 4th.",
    type: "website",
    url: "https://thomasweld.github.io/404day/",
    images: [{ url: "404day-logo-white.png", width: 400, height: 400, alt: "404day Festival Logo" }],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <SanityLive />
        {isDraftMode && <VisualEditing />}
      </body>
    </html>
  );
}
