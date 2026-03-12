"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Integrate with a backend service (e.g. Resend, Formspree, or a serverless API route)
    // for production form handling. Currently sets local state for UI feedback only.
    setSubmitted(true);
  }

  const contactMethods = [
    {
      icon: "📧",
      title: "General Inquiries",
      value: "info@404day.com",
      href: "mailto:info@404day.com",
      color: "#fac355",
    },
    {
      icon: "🤝",
      title: "Sponsorship",
      value: "info@404day.com",
      href: "mailto:info@404day.com",
      color: "#e87851",
    },
    {
      icon: "🛒",
      title: "Vendors",
      value: "404DayVendors@gmail.com.com",
      href: "mailto:404DayVendors@gmail.com.com",
      color: "#e87851",
    },
    {
      icon: "🎤",
      title: "Performers & Artists",
      value: "404DayArtists@gmail.com",
      href: "mailto:404DayArtists@gmail.com",
      color: "#9ec367",
    },
    {
      icon: "📱",
      title: "Text",
      value: "404.922.7545",
      href: "tel:4049227545",
      color: "#f4b59e",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              className="card flex items-start gap-3 group"
            >
              <span className="text-2xl">{method.icon}</span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: method.color }}>
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

            {submitted ? (
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
                  q: "When and where is 404Day 2026?",
                  a: "April 4th, 2026 at Piedmont Park in Atlanta, Georgia.",
                },
                {
                  q: "Is it really free?",
                  a: "Yes! 404Day is free to attend thanks to our sponsors, especially our headlining sponsor Patron, who help keep this event in the park free every year.",
                },
                {
                  q: "How do I become a vendor?",
                  a: "Email 404DayVendors@gmail.com with details about your business and what you'd like to offer.",
                },
                {
                  q: "How do I perform at 404Day?",
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
