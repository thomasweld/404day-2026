"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { name, email, subject, message } = formState;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:ricky@404day.com?subject=${encodeURIComponent(subject || "Contact Form")} - ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`;
  }

  const cardColors = ["#e87851", "#fac355", "#9ec367"];

  const contactMethods = [
    {
      icon: "📧",
      title: "General Inquiries",
      value: "info@404day.com",
      href: "mailto:info@404day.com",
    },
    {
      icon: "🤝",
      title: "Sponsorship",
      value: "info@404day.com",
      href: "mailto:info@404day.com",
    },
    {
      icon: "🛒",
      title: "Vendors",
      value: "404DayVendors@gmail.com",
      href: "mailto:404DayVendors@gmail.com",
    },
    {
      icon: "🎤",
      title: "Performers & Artists",
      value: "404DayArtists@gmail.com",
      href: "mailto:404DayArtists@gmail.com",
    },
    {
      icon: "📱",
      title: "Text",
      value: "404.922.7545",
      href: "tel:4049227545",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden hero-landscape">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur border border-[#9ec367]/50 text-[#5a4a3a] text-xs font-semibold uppercase tracking-wider mb-6">
            Contact Us
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
            <span className="text-[#1A2B3C]">Get in</span>
            <br />
            <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5a4a3a] leading-relaxed max-w-2xl mx-auto">
            Vendors, performers, media, or sponsors: we want to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Social Media Card — index 0 */}
          <div className="card">
            <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: cardColors[0] }}>
              Follow Us
            </div>
            <div className="flex gap-3">
              {[
                { label: "Instagram", href: "https://www.instagram.com/404day", icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                )},
                { label: "Facebook", href: "https://www.facebook.com/404day", icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                )},
                { label: "YouTube", href: "https://www.youtube.com/watch?v=qXZFvMsHxNg", icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                  </svg>
                )},
                { label: "TikTok", href: "https://www.tiktok.com/partyinthefuture", icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                  </svg>
                )},
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f4f4f4] text-[#5a5a5a] hover:text-[#e87851] hover:bg-[#f4b59e]/20 transition-all border border-[#E0E0E0]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {contactMethods.map((method, i) => (
            <a
              key={method.title}
              href={method.href}
              className="card flex items-start gap-3 group"
            >
              <span className="text-2xl">{method.icon}</span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: cardColors[(i + 1) % cardColors.length] }}>
                  {method.title}
                </div>
                <div className="text-[#5a5a5a] text-sm group-hover:text-[#2d2d2d] transition-colors">
                  {method.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div>
            <h2 className="section-title">Send Us a Message</h2>
            <p className="text-[#5a5a5a] mb-8">
              Fill out the form and a member of our team will reach out shortly.
            </p>

            {false ? (
              <div
                className="p-8 rounded-2xl text-center"
                style={{
                  background: "rgba(158,195,103,0.1)",
                  border: "1px solid rgba(158,195,103,0.3)",
                }}
              >
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-[#2d2d2d] font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-[#5a5a5a] text-sm">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#5a5a5a] mb-2">
                      Name <span className="text-[#e87851]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-[#f4b59e]/50 text-[#2d2d2d] placeholder-[#8a8a8a] focus:outline-none focus:border-[#e87851] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#5a5a5a] mb-2">
                      Email <span className="text-[#e87851]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-[#f4b59e]/50 text-[#2d2d2d] placeholder-[#8a8a8a] focus:outline-none focus:border-[#e87851] transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5a5a5a] mb-2">Subject</label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#f4b59e]/50 text-[#2d2d2d] focus:outline-none focus:border-[#e87851] transition-colors"
                  >
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="vendor">Vendor Application</option>
                    <option value="sponsorship">Sponsorship / Media</option>
                    <option value="performer">Performer / Artist</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5a5a5a] mb-2">
                    Message <span className="text-[#e87851]">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#f4b59e]/50 text-[#2d2d2d] placeholder-[#8a8a8a] focus:outline-none focus:border-[#e87851] transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-center py-4">
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* FAQ */}
          <div>
            <h2 className="section-title">Frequently Asked</h2>
            <div className="space-y-4">
              {[
                {
                  q: "When and where is 404 Day 2026?",
                  a: "April 4th, 2026 at Piedmont Park in Atlanta, Georgia.",
                },
                {
                  q: "Is it really free?",
                  a: "Yes! 404 Day is free to attend thanks to our sponsors, especially our headlining sponsor Patron, who help keep this event in the park free every year.",
                },
                {
                  q: "How do I become a vendor?",
                  a: "Email 404DayVendors@gmail.com with details about your business and what you'd like to offer.",
                },
                {
                  q: "How do I perform at 404 Day?",
                  a: "Email 404DayArtists@gmail.com with your act and availability. Our team reviews all submissions.",
                },
                {
                  q: "Who do I contact for sponsorship or media?",
                  a: "Email info@404day.com for sponsorship opportunities and media inquiries.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="p-5 rounded-xl bg-white border border-[#f4b59e]/40"
                >
                  <h4 className="text-[#2d2d2d] font-semibold text-sm mb-2">{faq.q}</h4>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
