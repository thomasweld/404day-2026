"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { basePath } from "../lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/tickets", label: "Tickets" },
  { href: "/gallery", label: "Gallery" },
  { href: "/sponsorship", label: "Sponsorship" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    const path = (pathname || "/").replace(/\/$/, "") || "/";
    const link = (href || "/").replace(/\/$/, "") || "/";
    return path === link;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#f4b59e]/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="404day Festival — Home">
            <Image
              src={`${basePath}/404day-logo-black.png`}
              alt="404day Festival"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span className="text-lg font-black text-[#2d2d2d] hidden sm:block">
              <span className="gradient-text">404</span>Day
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-[#FF8A3D] bg-[#FF8A3D]/20 font-semibold"
                    : "text-[#5a5a5a] hover:text-[#FF8A3D] hover:bg-[#FF8A3D]/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/tickets" className="hidden sm:block btn-primary text-sm py-2 px-4">
              RSVP FREE
            </Link>
            <button
              className="md:hidden text-[#2d2d2d] p-2 rounded-lg hover:bg-[#f4b59e]/10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#f4b59e]/30 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-[#e87851] bg-[#f4b59e]/10"
                      : "text-[#5a5a5a] hover:text-[#e87851] hover:bg-[#f4b59e]/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/tickets"
                onClick={() => setMenuOpen(false)}
                className="btn-primary text-sm text-center mt-2 block"
              >
                RSVP FREE
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
