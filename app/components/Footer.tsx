import Link from "next/link";
import Image from "next/image";
import { basePath } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#e8f0e4] border-t border-[#9ec367]/40 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src={`${basePath}/404day-logo-black.png`} alt="404day Festival" width={48} height={48} className="object-contain" />
              <span className="text-2xl font-black text-[#2d2d2d]">
                <span className="gradient-text">{`404 `}</span>day
              </span>
            </Link>
            <p className="text-[#5a5a5a] text-sm leading-relaxed">
              An annual celebration of Atlanta culture. Music, food, and community spirit in Piedmont Park. Free every April 4th.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#e87851] font-semibold mb-4 text-sm uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/events", label: "Events" },
                { href: "/tickets", label: "Tickets" },
                { href: "/gallery", label: "Gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#5a5a5a] hover:text-[#e87851] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-[#e87851] font-semibold mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
            <ul className="space-y-2">
              {[
                { href: "/sponsorship", label: "Sponsorship", external: false },
                { href: "/contact", label: "Contact Us", external: false },
                { href: "/tickets", label: "RSVP Free", external: false },
              ].map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#5a5a5a] hover:text-[#e87851] text-sm transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-[#5a5a5a] hover:text-[#e87851] text-sm transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#e87851] font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-[#5a5a5a]">
              <li>
                <a href="mailto:info@404day.com" className="hover:text-[#e87851] transition-colors">
                  info@404day.com
                </a>
              </li>
              <li>Text: 404.922.7545</li>
            </ul>
            {/* Social Links */}
            <div className="flex gap-3 mt-5">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/404day",
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/404day",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/watch?v=qXZFvMsHxNg",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                    </svg>
                  ),
                },
                {
                  label: "TikTok",
                  href: "https://www.tiktok.com/partyinthefuture",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/80 text-[#5a5a5a] hover:text-[#e87851] hover:bg-[#f4b59e]/20 transition-all border border-[#9ec367]/30"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#9ec367]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5a5a5a]">
          <p>© {new Date().getFullYear()} 404 Day. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-[#e87851]">♥</span>
            {" "}by{" "}
            <a href="https://ticketwin.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#e87851] transition-colors">
              Ticketwin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
