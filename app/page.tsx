import Link from "next/link";
import Image from "next/image";
import { basePath } from "./lib/constants";
import FlyerThumbnail from "./components/FlyerThumbnail";
import SponsorCarousel from "./components/SponsorCarousel";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "groq";
import { urlFor } from "@/sanity/lib/image";

const SPONSORS_QUERY = defineQuery(
  `*[_type == "sponsor"] | order(order asc) { _id, name, logo, url }`
);

const HOME_QUERY = defineQuery(
  `*[_type == "homePage"][0]{
    hero,
    premierSponsors {
      heading,
      subtitle,
      sponsors[]-> { _id, name, logo }
    },
    about,
    features { heading, subtitle, items[] { ..., image } },
    ctaBanner
  }`
);

const upcomingEvents = [
  {
    id: 1,
    date: "APR 4",
    year: "2026",
    title: "404Day 2026",
    location: "Piedmont Park, Atlanta GA",
    tags: ["Music", "Food", "Community"],
    color: "#e87851",
  },
];

const features = [
  {
    icon: "🎵",
    title: "Live Music",
    description: "Local artists and performers bringing the sounds of Atlanta to the park.",
    image: "404day-atlanta-music-festival-live-music-guitar-rock-and-roll.jpg",
  },
  {
    icon: "🍑",
    title: "Food & Vendors",
    description: "Tasty bites and local vendors celebrating the flavors of the Peach State.",
    image: "404day-music-festival-vendors-sponsors-bang-energy-drink.jpg",
  },
  {
    icon: "🤝",
    title: "Community Spirit",
    description: "A highlight of our city's cultural calendar. Come celebrate with your neighbors.",
    image: "404day-music-festival-crowd-dance-party-1.JPG",
  },
  {
    icon: "🌳",
    title: "In the Park",
    description: "Free to attend. A day of music, food, and good vibes in beautiful Piedmont Park.",
    image: "404day-music-festival-crowd-tents.JPG",
  },
];

export default async function HomePage() {
  const [{ data: sponsorDocs }, { data: homeData }] = await Promise.all([
    sanityFetch({ query: SPONSORS_QUERY }),
    sanityFetch({ query: HOME_QUERY }),
  ]);
  const hero = homeData?.hero;
  const about = homeData?.about;
  const sponsors = (sponsorDocs ?? [])
    .filter((s: any) => s.logo)
    .map((s: any) => ({
      _id: s._id,
      name: s.name,
      logoUrl: urlFor(s.logo).width(200).url(),
      url: s.url,
    }));
  return (
    <>
      {/* Hero Section — white logo, white text, blue/green buttons */}
      <section className="relative flex items-center justify-center overflow-hidden hero-peaches py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Cloud logo */}
          <div className="flex justify-center mb-8">
            <Image
              src={`${basePath}/404day-cloud-logo.png`}
              alt="404Day"
              width={480}
              height={240}
              className="drop-shadow-2xl object-contain"
              priority
            />
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide">
            {hero?.tagline ?? "Where Atlanta's spirit shines brighter than ever."}
          </p>
          <p className="text-base sm:text-lg font-bold text-white max-w-2xl mx-auto mb-10">
            {hero?.dateLocation ?? "April 4th, 2026 · Piedmont Park · Free to attend"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tickets" className="btn-hero-primary text-base px-8 py-4 text-center">
              {hero?.primaryCtaLabel ?? "RSVP FREE"}
            </Link>
            <Link href="/about" className="btn-hero-secondary text-base px-8 py-4 text-center">
              {hero?.secondaryCtaLabel ?? "Learn More"}
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {(hero?.stats ?? [
              { value: "Free", label: "To Attend" },
              { value: "Apr 4", label: "Every Year" },
              { value: "Piedmont", label: "Park" },
              { value: "ATL", label: "Culture" },
            ]).map((stat: { value: string; label: string }) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white">{stat.value}</div>
                <div className="text-white text-sm font-bold mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Carousel */}
      {sponsors.length > 0 && <SponsorCarousel sponsors={sponsors} />}

      {/* Premier Sponsors */}
      {homeData?.premierSponsors?.sponsors?.filter((s: any) => s.logo)?.length > 0 && (
      <section className="py-16 bg-[#e8f0e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">{homeData.premierSponsors.heading ?? "404Day Premier Sponsors"}</h2>
          <p className="section-subtitle mx-auto">{homeData.premierSponsors.subtitle ?? "Thank you to our 2026 Premier Sponsors!"}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {homeData.premierSponsors.sponsors.filter((s: any) => s.logo).map((s: any) => (
            <div key={s._id} className="flex items-center justify-center bg-white rounded-2xl border border-[#f4b59e]/40 p-6 aspect-square">
              <Image src={urlFor(s.logo).width(400).url()} alt={s.name} width={200} height={200} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
        </div>
      </section>
      )}

      {/* About Teaser */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#9ec367]/20 text-[#9ec367] text-xs font-semibold uppercase tracking-wider mb-6">
              {about?.badge ?? "Our Story"}
            </div>
            <h2 className="section-title">{about?.heading ?? "Celebrating Atlanta"}</h2>
            <p className="text-[#5a5a5a] leading-relaxed mb-6">
              {about?.body1 ?? "404Day is a celebration of Atlanta culture: our music, our food, and the community spirit that makes our city special. Every April 4th, we come together in Piedmont Park for a free day of good vibes."}
            </p>
            <p className="text-[#5a5a5a] leading-relaxed mb-8">
              {about?.body2 ?? "From the music to the food to the vibrant community spirit, 404Day has become a highlight of our city's cultural calendar. We're grateful for the amazing community that shows up year after year. 2026 marks our 15th annual event, and we're just getting started."}
            </p>
            <Link href="/about" className="btn-primary">
              {about?.ctaLabel ?? "Our Full Story →"}
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-[#f4b59e]/50 relative">
              <Image
                src={`${basePath}/gallery/404day-music-festival-crowd-wide-piedmont-park-atlanta-ga.JPG`}
                alt="404Day in Piedmont Park, Atlanta"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-medium text-sm">{about?.caption ?? "Est. 2012 · Atlanta, GA"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-[#e8f0e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 gap-4">
            <div>
              <h2 className="section-title">Upcoming Events</h2>
              <p className="section-subtitle">Mark your calendar. These are the moments that matter.</p>
            </div>
            <Link href="/events" className="btn-secondary text-sm whitespace-nowrap">
              View All Events →
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Flyer thumbnail */}
            <FlyerThumbnail src={`${basePath}/404day-atlanta-music-festival-flyer.jpg`} />

            {/* Event cards */}
            <div className="flex flex-col gap-6">
              {upcomingEvents.map((event) => (
                <Link key={event.id} href="/tickets" className="card group cursor-pointer block no-underline">
                  <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: event.color }}>
                    {event.date} · {event.year}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A2B3C] mb-2 group-hover:text-[#FF8A3D] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-[#5a5a5a] text-sm mb-4">{event.location}</p>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, i) => {
                      const tagColors = ["#FF8A3D", "#9ec367", "#00AEEF", "#fac355"];
                      const c = tagColors[i % tagColors.length];
                      return (
                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: `${c}20`, color: c }}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{homeData?.features?.heading ?? "What Awaits You"}</h2>
          <p className="section-subtitle mx-auto">{homeData?.features?.subtitle ?? "Music, food, and the vibrant community spirit that makes 404Day a highlight of Atlanta's cultural calendar."}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(homeData?.features?.items ?? features).map((feature: any) => (
            <div key={feature.title} className="card overflow-hidden !p-0">
              <div className="aspect-[4/3] relative">
                <Image
                  src={feature.image?.asset ? urlFor(feature.image).width(600).url() : `${basePath}/gallery/${feature.image}`}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[#2d2d2d] mb-2">{feature.title}</h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-7xl mx-auto rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #e87851 0%, #f3a65f 35%, #fac355 70%, #9ec367 100%)",
          }}
        >
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <Image src={`${basePath}/404day-logo-black.png`} alt="404day" width={80} height={80} className="object-contain" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{homeData?.ctaBanner?.heading ?? "RSVP FREE to 404Day 2026"}</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              {homeData?.ctaBanner?.subtext ?? "Join us April 4th in Piedmont Park. Music, food, and community, free to attend. We can't wait to celebrate with you."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tickets"
              className="bg-[#1c1c1e] text-[#fac355] px-8 py-4 rounded-lg font-bold hover:bg-[#2c2c2e] hover:text-[#f4b59e] transition-all text-center"
            >
              {homeData?.ctaBanner?.primaryCtaLabel ?? "RSVP FREE"}
            </Link>
              <Link href="/sponsorship" className="border-2 border-black text-black bg-transparent px-8 py-4 rounded-lg font-bold hover:bg-black/10 transition-colors text-center">
                {homeData?.ctaBanner?.secondaryCtaLabel ?? "Become a Sponsor"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
