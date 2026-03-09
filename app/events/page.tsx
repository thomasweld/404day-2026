import Link from "next/link";
import Image from "next/image";
import { basePath } from "../lib/constants";

const schedule = [
  { time: "All Day", title: "Music & Performances", stage: "Main Stage", type: "music", image: "404day-music-festival-dj-booth.jpg" },
  { time: "All Day", title: "Food & Vendors", stage: "Vendor Village", type: "food", image: "404day-music-festival-vitamin-water-vendor.jpg" },
  { time: "All Day", title: "Community Vibes", stage: "Piedmont Park", type: "general", image: "404day-music-festival-crowd-dance-party-1.JPG" },
];

const typeColors: Record<string, string> = {
  general: "#9ec367",
  food: "#fac355",
  music: "#e87851",
};

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden hero-landscape">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur border border-[#9ec367]/50 text-[#5a4a3a] text-xs font-semibold uppercase tracking-wider mb-6">
            Free to Attend
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
            <span className="text-[#1A2B3C]">404Day 2026</span>
            <br />
            <span className="gradient-text">Piedmont Park</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5a4a3a] leading-relaxed max-w-2xl mx-auto mb-10">
            April 4th, 2026. Music, food, and the vibrant community spirit that makes Atlanta special. RSVP free. We can&apos;t wait to celebrate with you.
          </p>
          <Link href="/tickets" className="btn-primary text-base px-10 py-4 inline-block">
            RSVP FREE
          </Link>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">What to Expect</h2>
          <p className="section-subtitle mx-auto">From the music to the food to the vibrant community spirit, it&apos;s a day you won&apos;t forget.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {schedule.map((item) => (
            <div
              key={item.title}
              className="card overflow-hidden !p-0"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={`${basePath}/gallery/${item.image}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <div className="text-[#fac355] font-mono text-sm font-bold mb-2">{item.time}</div>
                <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">{item.title}</h3>
                <p className="text-[#5a5a5a] text-sm">{item.stage}</p>
                <span
                  className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ color: typeColors[item.type], background: `${typeColors[item.type]}20` }}
                >
                  {item.type === "general" ? "Community" : item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Venue Info */}
      <section className="py-20 bg-[#e8f0e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden mb-12 aspect-[21/9] max-h-64">
            <Image
              src={`${basePath}/gallery/404day-music-festival-crowd-dj-dance-floor.jpg`}
              alt="404Day crowd on the dance floor"
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "📍",
                title: "Venue",
                content: "Piedmont Park\nAtlanta, Georgia",
                color: "#e87851",
              },
              {
                icon: "🆓",
                title: "Admission",
                content: "Free to attend\nThanks to our sponsors for keeping 404Day in the park free every year",
                color: "#9ec367",
              },
            ].map((info) => (
              <div key={info.title} className="card flex items-start gap-4">
                <span className="text-3xl">{info.icon}</span>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: info.color }}>
                    {info.title}
                  </h3>
                  {info.content.split("\n").map((line) => (
                    <p key={line} className="text-[#5a5a5a] text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-[#2d2d2d] mb-4">Ready to Join Us?</h2>
        <p className="text-[#5a5a5a] mb-8 max-w-xl mx-auto">
          RSVP free and we&apos;ll see you April 4th in Piedmont Park. Music, food, community. Let&apos;s celebrate Atlanta together.
        </p>
        <Link href="/tickets" className="btn-primary inline-block">
          RSVP FREE
        </Link>
      </section>
    </>
  );
}
