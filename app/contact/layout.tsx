import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact 404 Day | Vendors, Artists & Sponsors",
  description: "Get in touch with the 404 Day team. Inquiries for vendors, performers, artists, sponsors, and media. Email or text us directly.",
  alternates: { canonical: "https://404day.com/contact" },
  openGraph: {
    title: "Contact 404 Day | Vendors, Artists & Sponsors",
    description: "Get in touch with the 404 Day team. Inquiries for vendors, performers, artists, sponsors, and media. Email or text us directly.",
    url: "https://404day.com/contact",
  },
  twitter: {
    title: "Contact 404 Day | Vendors, Artists & Sponsors",
    description: "Get in touch with the 404 Day team. Inquiries for vendors, performers, artists, sponsors, and media. Email or text us directly.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
