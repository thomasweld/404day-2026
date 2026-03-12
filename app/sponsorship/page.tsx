import Image from "next/image";
import { basePath } from "../lib/constants";


const whySponsor = [
  {
    icon: "👥",
    stat: "Free",
    label: "Thanks to You",
    description: "Sponsor support keeps 404Day in the park free every year",
  },
  {
    icon: "🍑",
    stat: "ATL",
    label: "Culture",
    description: "A highlight of our city's cultural calendar",
  },
  {
    icon: "🎵",
    stat: "Music",
    label: "& Food",
    description: "Vibrant community spirit that makes our city special",
  },
  {
    icon: "🌳",
    stat: "Piedmont",
    label: "Park",
    description: "Beautiful setting for Atlanta's favorite April 4th celebration",
  },
];

export default function SponsorshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden hero-landscape">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur border border-[#fac355]/50 text-[#5a4a3a] text-xs font-semibold uppercase tracking-wider mb-6">
            Sponsorship
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
            <span className="text-[#1A2B3C]">Grow With</span>
            <br />
            <span className="gradient-text">404Day</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5a4a3a] leading-relaxed max-w-2xl mx-auto mb-10">
            Partner with Atlanta&apos;s premier cultural celebration. Your support helps keep 404Day free in the park and puts your brand in front of our vibrant community.
          </p>
          <a href="mailto:info@404day.com?subject=Sponsorship%20Inquiry" className="btn-primary text-base px-8 py-4">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Why Sponsor Stats */}
      <section className="py-20 bg-[#e8f0e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Sponsor 404Day?</h2>
            <p className="section-subtitle mx-auto">
              Your support keeps 404Day free in the park. Patron is our headlining sponsor. Without sponsors, this event would not be possible.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySponsor.map((item) => (
              <div key={item.label} className="card text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-4xl font-black gradient-text mb-1">{item.stat}</div>
                <div className="text-[#2d2d2d] font-semibold text-sm mb-2">{item.label}</div>
                <p className="text-[#5a5a5a] text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors in Action */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">404Day Premier Sponsors</h2>
          <p className="section-subtitle mx-auto">Thank you to our 2026 Premier Sponsors!</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Coca-Cola */}
          <div className="flex items-center justify-center bg-white rounded-2xl border border-[#f4b59e]/40 p-6 aspect-square">
            <Image
              src={`${basePath}/sponsors/CocaCola-404day-music-festival-sponsor.webp`}
              alt="Coca-Cola"
              width={200}
              height={200}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Patron */}
          <div className="flex items-center justify-center bg-white rounded-2xl border border-[#f4b59e]/40 p-6 aspect-square">
            <Image
              src={`${basePath}/sponsors/Patron-tequila-404day-music-festival-sponsor.png`}
              alt="Patron Tequila"
              width={200}
              height={200}
              className="w-full h-full object-contain"
            />
          </div>
          {/* MARTA */}
          <div className="flex items-center justify-center bg-white rounded-2xl border border-[#f4b59e]/40 p-0 aspect-square">
            <Image
              src={`${basePath}/sponsors/Marta-404day-music-festival-sponsor.png`}
              alt="MARTA"
              width={200}
              height={200}
              className="w-full h-full object-contain scale-125"
            />
          </div>
          {/* Comcast Xfinity */}
          <div className="flex items-center justify-center bg-white rounded-2xl border border-[#f4b59e]/40 p-6 aspect-square">
            <Image
              src={`${basePath}/sponsors/Comcast-Xfinity-404day-music-festival-sponsor.png`}
              alt="Comcast Xfinity"
              width={200}
              height={200}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* What You Get in Detail */}
      <section className="py-20 bg-[#e8f0e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Activation Opportunities</h2>
            <p className="section-subtitle mx-auto">Custom ways to connect with our community.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎪",
                title: "Branded Presence",
                desc: "Logo placement, signage, and visibility in Piedmont Park.",
              },
              {
                icon: "🎵",
                title: "Stage Recognition",
                desc: "Your brand alongside the music and performances.",
              },
              {
                icon: "📦",
                title: "Vendor Village",
                desc: "Presence in the food and vendor area.",
              },
              {
                icon: "📸",
                title: "Social & Photo",
                desc: "Recognition across our social channels and event photos.",
              },
              {
                icon: "🍑",
                title: "Community Impact",
                desc: "Help keep 404Day free for everyone, just like Patron does.",
              },
              {
                icon: "💌",
                title: "Year-Round Partnership",
                desc: "Ongoing relationship with Atlanta's favorite April 4th celebration.",
              },
            ].map((item) => (
              <div key={item.title} className="card flex items-start gap-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                <h3 className="text-[#2d2d2d] font-bold mb-1">{item.title}</h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto rounded-3xl p-12 text-center bg-white/80 border border-[#f4b59e]/50">
          <h2 className="text-3xl font-black text-[#2d2d2d] mb-4">Let&apos;s Build Something Together</h2>
          <p className="text-[#5a5a5a] mb-8 leading-relaxed">
            Our team is ready to create a custom partnership that aligns with your goals. Reach out and we&apos;ll get
            back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@404day.com?subject=Sponsorship%20Inquiry" className="btn-primary text-center">
              Email info@404day.com
            </a>
          </div>
          <p className="text-[#5a5a5a] text-xs mt-6">info@404day.com</p>
        </div>
      </section>
    </>
  );
}
