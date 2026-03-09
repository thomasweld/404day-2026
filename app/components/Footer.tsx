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
                <span className="gradient-text">404</span>day
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
                  label: "X (Twitter)",
                  href: "#",
                  icon: (
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/80 text-[#5a5a5a] hover:text-[#e87851] hover:bg-[#f4b59e]/20 transition-all border border-[#9ec367]/30"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#9ec367]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5a5a5a]">
          <p>© {new Date().getFullYear()} 404day Festival. All rights reserved.</p>
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
