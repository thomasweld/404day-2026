"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { basePath } from "../lib/constants";

// ─── Timeline Data ────────────────────────────────────────────────────────────

const timeline = [
  {
    year: "2011",
    title: "Jaegervizion at the Clermont Lounge",
    summary: "Mighty High Coup becomes a regular at the legendary Clermont Lounge Wednesday night series.",
    body: `Me and my rap group Mighty High Coup were blessed enough to consistently be asked to be part of an event series at the Clermont Lounge called Jaegervizion, which took place on Wednesday nights. That residency planted the seed for everything that followed.`,
    image: "/timeline/jaegervizion-clermont-lounge-atlanta-live-music-2011.webp",
    imagePosition: "top",
  },
  {
    year: "2012 (March)",
    title: "Opening for Backbone & Shooting \"Boom\"",
    summary: "A handshake deal to open for Dungeon Family's Backbone leads to a music video shot inside the Clermont Lounge.",
    body: `We were asked to open for the legendary Backbone of Dungeon Family, 1st Generation. They said there was no money left after paying Backbone but they'd love us to open. I counter-offered: permission to shoot a music video inside the Clermont Lounge in exchange for a free performance. That video is online: search Mighty High Coup "Boom." It led to some incredible things.\n\nAround this same time, me, my girlfriend, and her parents were talking about a song we had with the lyrics "this is 404 over 808s." Her mom mentioned that 4/04 and 8/08 always fall on the same day of the week. I took that in, mixed it with the inspiration from opening for Backbone, and it hit me: April 4 would be 404 Day, an event focused on ATL culture in every possible way.`,
    image: "/timeline/backbone-mayhem-mighty-high-coup-2012.webp",
  },
  {
    year: "Apr 4, 2012",
    title: "The First 404 Day at the Clermont Lounge",
    summary: "404 Day is born at the Clermont Lounge with $0 budget and a network of friends.",
    body: `I approached the Jaegervizion team and asked if we could secure the Clermont Lounge for April 4, 2012. They hadn't booked anything yet, and we were on.\n\nWe booked rap, hip hop, and dubstep out of my direct network. Frankie D opened with hip hop and turntablist skills, followed by The Wheeler Boys, then Mighty High Coup, closing with DJ Mayhem.\n\nI started this with literally $0. In hindsight I should have booked Cool Breeze the Creator Of The Dirty South since he was already in my personal network, and I wish I had booked some women on that first event. I've learned a great deal about Atlanta history, culture, and the art of being inclusive over the last 15 years.\n\nAt the time, I was almost certain that by 2013 Coca-Cola, Delta, and Home Depot would all be throwing bags of money at me. That foolish childlike optimism has proven to be my biggest asset and my largest liability at the same time.`,
    image: "/timeline/404DAY-2012.png",
  },
  {
    year: "2013",
    title: "Year Two at the Union EAV",
    summary: "Building toward the BIG year of 2014, 404 Day moves to the Union EAV.",
    body: `Year 2 was a Thursday night. I told myself I needed to give it one more year and when we hit that Friday in 2014, we were going big.\n\nWe booked with our good friends at the Union EAV, formerly known as The East Side Lounge, where we had a decent track record and they offered a fair deal. I have always enjoyed supporting my closest friends.\n\n2013 Line Up: Mighty High Coup · BAMN! · Big Face Paper Gang · HydraBadd · Double Nil · McBeezy`,
    image: "/timeline/404DAY-2013-FLYER.jpg",
  },
  {
    year: "2014",
    title: "Killer Mike, Multiple Venues & the Emotional Rollercoaster",
    summary: "A Killer Mike booking, a sponsorship deck, and paying every last dollar, followed by a wild pivot.",
    body: `2014 was extremely influential. I sat down with my good friend Alex Morgan to create a sponsorship deck and truly deliver an experience to make Atlanta proud.\n\nI got Killer Mike's manager's contact, made an offer, and paid him down to 5s and 1-dollar bills, smiling ear to ear. About 10 days before the show, they pulled out. Whatever the reason, I simply appreciate they returned my deposit in crispy $100 bills at Lenox Mall.\n\nMy homey Scramn had linked me with Bonecrusher & Sean Paul of the Youngbloodz, so we had a respectable lineup. We also locked in Ruby Velle & The Soulphonics, The Difference Machine, and a million dance music artists. We got a couple sponsors and threw a truly multi-genre event.\n\nOf all the sponsorships, I worked a great deal with Uber and signed up over 200 new customers in 2014. Between that diversity and 4.04.14, I was certain I was on my way and Delta was ready to get behind us full throttle.`,
    image: "/timeline/404DAY-2014.jpg",
  },
  {
    year: "2015",
    title: "Edgewood Takeover with Keiran Neely",
    summary: "The most fun 404 Day yet: four venues on Edgewood, ATL legends, and a small local film festival.",
    body: `In 2015 I aligned with my biggest supporter and event mentor, Keiran Neely, who was running the Music Room at the time. We could lean heavily into the house music community, potentially land a sponsor to cover some expenses, and get 404 Day to generate income.\n\nWe took over at least 4 venues on Edgewood and booked some ATL legends, including a small local film festival element. It was the most fun 404 Day to date. Everyone was dancing, we got great media, and our sponsors were satisfied and open to work again.`,
    image: "/timeline/404DAY-2015.jpg",
  },
  {
    year: "2016",
    title: "Terminal West: Young Dro, Black Lips & a Mural Auction",
    summary: "The most ambitious lineup yet, with a hard lesson about ticket sales vs. show quality.",
    body: `We aimed high: Terminal West, Young Dro (We Be In Da City on every radio), The Black Lips, The Difference Machine, Sofaking Evil, Ployd, and Dr. Dax painting a huge mural auctioned off to benefit a young boys' home. Six Feathers handled merch. We contracted a $1k photo booth for sponsor-branded media.\n\nDespite more sponsorship than ever, we sold about half the expected tickets. The show was incredible, rich with diversity, the best Monday night party of 2016 in my very biased opinion. But we accomplished our creative goals at a financial loss.\n\nFunniest part: Dro was ready to beat me up when I handed him a check expecting cash. Luckily my girlfriend worked some ATM magic and came back with cash. It felt like an eternity.`,
    image: "/timeline/404day-atlanta-music-festival-2016-sofa-king-the-black-lips-the-difference-machine.jpg",
  },
  {
    year: "2017",
    title: "Back to Edgewood: The Treasury, Jay Envy & Lessons in Staff",
    summary: "Three Edgewood venues, the official DJ of the Falcons, and a hard lesson about one bad review.",
    body: `Back to Edgewood: Music Room, Edgewood Speakeasy, and Bonelick BBQ. None of our 2016 sponsors returned, so we reached back into the direct network.\n\nI was proud to present The Treasury, a hip hop/experimental offshoot of DJ Treasure Fingers' work, along with Jay Envy, who had recently become the official DJ of the Atlanta Falcons. We filled three spaces with a diverse lineup and had a pretty great Tuesday night.\n\nWe got some great photos but learned a valuable lesson: your entire event can be damaged if your staff is less than polite. We got a bad review online because someone on staff was rude. That one hurt. To put in this much work and get negative feedback is a tough pill to swallow.`,
    image: "/timeline/404-day-atl-music-fest-treasury-dj-jay-envy-edgewood-sweet-water.jpg",
  },
  {
    year: "2018",
    title: "Production Heavy: Custom Stage & DJ Mayhem Returns",
    summary: "Investing in production: a custom stage set, high-end animations, and a multi-genre headliner.",
    body: `We decided to invest in production: a custom stage set and very high-end hand-drawn animations for promo. I brought back DJ Mayhem, who had been producing dance music forever but also some solid hip hop and rap by this time. He understood the importance of selling tickets and delivered a dope show that included multiple genres.\n\nWe got some great pictures and it was a pretty easy W that year.`,
    image: "/timeline/404day-atlanta-music-festival-april-mayhem-cobra-corps-aisle-5.jpg",
  },
  {
    year: "2019",
    title: "Smith's Old Bar, ATL Skyline, 404 Awards & Zaytoven",
    summary: "Video-mapped skyline, the first 404 Awards, a special Zaytoven appearance. We also heard radio ads for a different \"404 Day.\"",
    body: `We went to Smith's Old Bar and built an ATL skyline on stage, video-mapped it, and set it on fire (via projection) at midnight. Ben Palmer, the comedian behind the City Of Atlanta page, hosted. Book Club, Controllerise, and a monumental dance music tag team anchored the main stage.\n\nWe introduced the 404 Awards, a fun way to honor people and invite your heroes to your party. The Atlanta Room featured straight hip hop and rap curated by DJ Roots Queen, with a special guest appearance by Zaytoven. That was the first time an artist of that caliber attended our event just because they wanted to support the show.\n\nSometime in March, I started hearing radio ads for "404 Day at some other place." I believe by AT&T, with Killer Mike and 2 Chainz on a panel. I did my best not to pay attention. When I saw our packed event that sold hundreds of tickets and saw literally one photo from their event, I assumed my local budget out-performed theirs. My mission stayed the same: create the best 404 Day you can with the resources you have.`,
    image: "/timeline/404day-atl-music-fest-ben-palmer-midnite-panda-babey-drew.jpg",
  },
  {
    year: "2020",
    title: "COVID Cancels the Dream: 5 Acres in Chosewood Park",
    summary: "A free 5-acre park event was fully planned. Then the world shut down.",
    body: `I had rented out a 5-acre parking lot in Chosewood Park, booked Ramon Rawsoul & Kai Alce from House in the Park, Treasure Fingers, Ree De La Vega, DJ Keiran, and DJ Sofaking Evil to open with ATL rap classics. I was going to do a free event and monetize over 1,000 expected attendees.\n\nThen COVID hit.\n\nI ended up hosting DJ streams and presenting awards into the ether, live streaming "best basketball team in Atlanta: THE HAWKS" type awards to maybe one viewer. I felt like the guy on Midnight Gospel. I was crushed. I had the biggest dreams for that year, but I had to just get online and do something.`,
    image: "/timeline/404day-atlanta-music-festival-treasure-fingers-2020.jpg",
  },
  {
    year: "2021",
    title: "Parking Lot Party, Drone Footage & MC Shy D",
    summary: "A surprise post-pandemic party, a drone over the ATL skyline, and a discovery about Atlanta's rap history.",
    body: `Same parking lot concept, but most of the world still wasn't gathering freely and I wasn't comfortable promoting. I rented some sound, got Sofaking Evil, Treasure Fingers, Ramon Rawsoul, and Kai Alce, and posted the day before: free party.\n\nA drone captured one incredible shot: the Atlanta skyline dropping down into Treasure Fingers DJing with two Chris Veal original paintings behind him labeled "404 Day 2021." One was a MARTA train, the other was a chicken wing bone. I still have those.\n\nSofaking Evil opened with "In Atlanta" by MC Shy D, and I left that event believing MC Shy D was the first rapper out of ATL. I had heard some of his songs but never understood the significance of his contributions. (I'd later learn in 2025 that MOJO was actually the first, but MC Shy D did set real records.)\n\nI also put out a public statement on Instagram addressing "other 404 Days," broadly, without naming anyone, trying to send the message that I was open to collaboration.`,
    image: "/timeline/404day-atlanta-music-festival-treasure-fingers-blue-martini-2021.jpg",
  },
  {
    year: "2022",
    title: "The Bank Vault Venue & Kilo Ali",
    summary: "Two years without a job, a desperate outreach email, and still throwing the coolest party we could.",
    body: `By 2022, I'd been without a job since 2020. I sent emails desperately trying to team up with the largest entity I saw doing a 404 Day event. I felt that without alignment, I'd be steamrolled. My stepdad said the email sounded really desperate, and it was. I wanted a truce and to be one member on a team, not the only member. No response came.\n\nSo I committed to doing the coolest party I could with the resources I had.\n\nBack on a Monday: I rented a small, very cool venue that used to be a bank, with a cool balcony and special bank vault. We booked Kilo Ali and DJ Klever along with Leonce, Miss Evaded & London Re. I bought a couple bottles from Old 4th Distillery and pretended they sponsored.\n\nThe event was dope and almost sold enough to call it a sellout. The music was great but the vibe was medium, to be 100% honest.`,
    image: "/timeline/404day-atlanta-music-festival-2022.jpg",
  },
  {
    year: "2023",
    title: "First Piedmont Park Event with Babey Drew & Vitillaz",
    summary: "The big leap: permits, a new partnership, free tacos, a video wall, and doubling the bar goal.",
    body: `I knew I needed partners and a big park. I aligned with Vitillaz and Babey Drew. I would sit down and compare their resumes to ANYONE in ATL, and they're both amazingly diverse DJs with proven track records.\n\nThis was a Tuesday. Vitillaz leaned into his network with Perreo404, and Babey Drew opened his entire rolodex. I agreed to do the majority of the work and pay the expenses, and they took creative control.\n\nWe got a food truck and put $1k down for free tacos at 6pm. We rented a video wall, landed one sponsor who absorbed about 33% of overhead, and partnered with the bar company that runs One Music Fest & Music Midtown (Premier Events). Our goal: sell $10k at the bar and get great media to land big sponsors next year.\n\nDespite many people telling me you can't throw a big party in the park on a Tuesday, and we doubled our bar goal, got incredible media, organized a drone meetup for extra coverage, and had all the tools to land meaningful partnerships in 2024.`,
    image: "/timeline/404day-atlanta-music-festival-babey-drew-piedmont-park-2023.jpg",
  },
  {
    year: "2024",
    title: "Bigger, More Vendors, Multiple Evening Events",
    summary: "RSVPs and sales nearly double. Multiple evening events across the city all meet or beat expectations.",
    body: `Same model: lock in as many vendors as possible, lock in sponsors with the intention of lasting relationships. Babey Drew and Vitillaz called on all their DJ friends who were making moves. We added the Captains of Revely and welcomed back DJ Keiran and friends.\n\nOur RSVPs nearly doubled as did all sales and metrics.\n\nWe successfully ran multiple evening events after the park that all met or beat expectations. Some evening events made concessions for sponsors, meaning sponsors were growing not just in the park but in other venues across town.\n\nBy this time many other entities were building 404 Day events. Most focused on rap royalty, which makes sense, it's the center of Atlanta's musical identity. We realized our strength was being as inclusive as possible and focusing on what wasn't already being delivered. We developed a vendor-first model: 100 vendors committed to the event means 100 small businesses cheerleading for us. We've consistently kept vendor prices low, focused on volume and sustainability. We want all these vendors to make money and come back every year.`,
    image: "/timeline/404day-atlanta-music-festival-dj-keiran-piedmont-park-2024.jpg",
  },
  {
    year: "2025",
    title: "Legacy Sponsors, MC Shy D & the Greystone VIP",
    summary: "Sponsors call us first. A pioneer rapper is honored. 404 Day gets its first dedicated VIP space.",
    body: `We started 2025 with a proven model and legacy sponsors on board without even pitching. They just called at the start of the year to say how they wanted to support. A whole different ball game.\n\nI convinced the team we needed to allocate budget back toward ATL rap royalty. I booked MC Shy D for a DJ set, thinking I was booking Atlanta's first rapper. Instead I learned a valuable lesson about Mojo, MC Shy D, Raheem the Dream, Kilo Ali, Hit Man Sammy Sam, and others. To educate myself and anyone paying attention, I began interviewing these rappers for the podcast "Where It All Went Wrong" on the 404 Day ATL YouTube page.\n\nWe kicked off 404 Week with an Awards Ceremony on Wednesday, April 2nd honoring Mojo, MC Shy D, Raheem the Dream, and Kilo Ali. I was proud of the show but felt it deserved heavier attendance, so we learned and adjusted.\n\nThe 2025 Piedmont Park party went crazy, similar vibes to the two years prior, but we brought on more sponsors and rented the Greystone Building to introduce 404 Day VIP: ~200 people in a beautiful space with private bathrooms, discounted drinks, photo moments, and gift bags for the platinum VIP crowd.`,
    image: "/timeline/404day-atlanta-music-festival-freako-freakorico-piedmont-park-2025.jpg",
  },
  {
    year: "2026",
    title: "The Biggest 404 Day Yet",
    summary: "Multiple stages, expanded VIP, women-led programming, bass music, and a sound healing ceremony.",
    body: `We are putting a LOT of diverse focus on Piedmont Park.\n\nA Hip Hop / Rap / R&B focused stage featuring DJ Princess Cut + special guests, Shyran Showcase and her curated lineup, DJ Kizzy Rock with Yeekers, with opening duties by Sed The Saint & DJ Pheonix Star. This stage is included with the free ticket.\n\nExpanded VIP experience with panel discussions hosted by WIFTA & WIM (Women In Film & Television of Atlanta + Women In Music). Multiple meet & greets with announced and unannounced special guest appearances.\n\nA new bass music satellite stage, with rumors of opening the main pavilion with a sound healing ceremony on a big Bass Boss sound system.\n\nOur signature dance music stage, curated by DJ Babey Drew & Vitillaz, closes the day with a b2b set by the two of them.\n\nFree events in the park end at 9pm. VIP areas in Greystone and Magnolia Hall go until 11 (21+).\n\nThank you to our sponsors: Coca-Cola, Xfinity, Patron, Grey Goose, Bacardi, Red Bull, and Continuum Productions.\n\nTo all other curators of 404 Day events, Delta, Home Depot: let's get cooking on 404 Week for 2028. The best week to visit ATL.\n\nCheers! Ricky`,
    image: "/timeline/404day-atlanta-music-festival-piedmont-park-2026.jpg",
  },
];

// ─── Modal ────────────────────────────────────────────────────────────────────

function TimelineModal({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = timeline[index];
  const touchStartX = useRef<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onPrev, onNext, onClose]);

  // Swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? onNext() : onPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 pt-20 sm:pt-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full sm:max-h-[92vh] sm:overflow-y-auto shadow-2xl my-4"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#1A2B3C]/10 hover:bg-[#1A2B3C]/20 flex items-center justify-center text-[#1A2B3C] transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image */}
        {item.image ? (
          <div className="rounded-t-2xl overflow-hidden bg-[#1A2B3C]/5">
            <Image
              src={`${basePath}${item.image}`}
              alt={item.title}
              width={900}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        ) : (
          <div className="aspect-video bg-[#1A2B3C]/10 flex items-center justify-center rounded-t-2xl">
            <div className="flex flex-col items-center gap-2 text-[#1A2B3C]/40">
              <span className="text-5xl font-black">{item.year}</span>
              <span className="text-sm uppercase tracking-widest">Photo coming soon</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="text-[#FF8A3D] text-xs font-bold uppercase tracking-widest mb-2">{item.year}</div>
          <h2 className="text-2xl font-black text-[#1A2B3C] mb-4">{item.title}</h2>
          <div className="text-[#5a5a5a] text-sm leading-relaxed space-y-3">
            {item.body.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between px-6 sm:px-8 pb-6 gap-4">
          <button
            onClick={onPrev}
            disabled={index === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-[#1A2B3C] border border-[#E0E0E0] hover:border-[#FF8A3D] hover:text-[#FF8A3D] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>
          <span className="text-xs text-[#1A2B3C]/40 font-medium">
            {index + 1} / {timeline.length}
          </span>
          <button
            onClick={onNext}
            disabled={index === timeline.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-[#1A2B3C] border border-[#E0E0E0] hover:border-[#FF8A3D] hover:text-[#FF8A3D] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const team = [
  { name: "Ricky Raw", role: "Co-Founder", bio: "Bringing Atlanta culture to the park year after year.", color: "#FF8A3D" },
  { name: "BabeyDrew", role: "Co-Founder", bio: "Creative force behind 404 Day's vibrant community spirit.", color: "#fac355" },
  { name: "Vitillaz", role: "Co-Founder", bio: "Keeping the music and vibes flowing every April 4th.", color: "#4CAF50" },
  { name: "Katy", role: "Co-Founder", bio: "Helping 404 Day remain a highlight of Atlanta's cultural calendar.", color: "#00AEEF" },
];

const values = [
  { icon: "🎵", title: "Music & Culture", description: "We celebrate Atlanta's music, food, and the vibrant community spirit that makes our city special." },
  { icon: "🆓", title: "Free for Everyone", description: "Thanks to our sponsors, 404 Day stays free in the park so everyone can join the celebration." },
  { icon: "🌱", title: "Community First", description: "We exist to bring our city together: neighbors, artists, vendors, and friends." },
  { icon: "🍑", title: "Peach State Pride", description: "A highlight of our city's cultural calendar. We're grateful for the amazing community that shows up." },
];

export default function AboutPage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = (i: number) => setModalIndex(i);
  const closeModal = () => setModalIndex(null);
  const prevItem = () => setModalIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const nextItem = () => setModalIndex((i) => (i !== null && i < timeline.length - 1 ? i + 1 : i));

  return (
    <>
      {/* Modal */}
      {modalIndex !== null && (
        <TimelineModal
          index={modalIndex}
          onClose={closeModal}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}

      {/* Hero */}
      <section className="relative py-20 overflow-hidden hero-landscape">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur border border-[#4CAF50]/50 text-[#1A2B3C] text-xs font-semibold uppercase tracking-wider mb-6">
            Our Story
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
            <span className="text-[#1A2B3C]">15 Years</span>
            <br />
            <span className="gradient-text">of 404 Day</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#1A2B3C]/70 leading-relaxed max-w-2xl mx-auto">
            From a FREE show at the Clermont Lounge to thousands in Piedmont Park; check out the full history of 404 Day.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Center spine */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#E0E0E0] -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="relative flex items-center">
                  {/* Left slot — desktop only */}
                  <div className="hidden md:block w-1/2 pr-10">
                    {isLeft && (
                      <TimelineCard item={item} onClick={() => openModal(i)} align="right" />
                    )}
                  </div>

                  {/* Center dot — desktop only */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-[#FF8A3D] items-center justify-center z-10 shadow-md flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#FF8A3D]" />
                  </div>

                  {/* Right slot — desktop only */}
                  <div className="hidden md:block w-1/2 pl-10">
                    {!isLeft && (
                      <TimelineCard item={item} onClick={() => openModal(i)} align="left" />
                    )}
                  </div>

                  {/* Mobile: always full width */}
                  <div className="md:hidden w-full">
                    <TimelineCard item={item} onClick={() => openModal(i)} align="left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Existing content below ─────────────────────────────────────── */}

      {/* Origin Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E0E0E0]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="section-title">Our Story</h2>
            <div className="space-y-4 text-[#5a5a5a] leading-relaxed">
              <p>
                404 Day is a celebration of Atlanta culture, a nod to our city&apos;s 404 area code and a day to
                come together. Every April 4th, we gather in Piedmont Park for music, food, and the vibrant community
                spirit that makes our city special.
              </p>
              <p>
                From the music to the food to the energy in the park, 404 Day has become a highlight of our city&apos;s
                cultural calendar. We&apos;re grateful for the amazing community that shows up year after year.
              </p>
              <p>
                A special thank you to all of our sponsors, especially our headlining sponsor Patron, for their
                generous support in keeping this event in the park free each year. Without them, 404 Day would not
                be possible.
              </p>
              <p className="text-[#FF8A3D] font-medium">
                We can&apos;t wait to party with you all again.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src={`${basePath}/gallery/404day-music-festival-sponsors-patron.JPG`}
                alt="Patron, our headlining sponsor"
                width={500}
                height={375}
                className="w-full h-full object-cover"
              />
            </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#e8f0e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle mx-auto">The values that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-[#1A2B3C] font-bold mb-2">{value.title}</h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle mx-auto">The people who make the magic happen.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="card">
              <div
                className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-2xl font-black text-white"
                style={{ background: `linear-gradient(135deg, ${member.color}40, ${member.color}20)`, border: `2px solid ${member.color}40` }}
              >
                {member.name.charAt(0)}
              </div>
              <h3 className="text-[#1A2B3C] font-bold">{member.name}</h3>
              <p className="text-xs font-semibold mb-3" style={{ color: member.color }}>{member.role}</p>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto rounded-3xl p-12 text-center bg-white/80 border border-[#E0E0E0]">
          <h2 className="text-3xl font-black text-[#1A2B3C] mb-4">Join Us April 4th</h2>
          <p className="text-[#5a5a5a] mb-8">
            Whether you&apos;re coming to enjoy the music and food, or you&apos;re a vendor, performer, or sponsor, there&apos;s a place for you at 404 Day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tickets" className="btn-primary text-center">RSVP FREE</Link>
            <Link href="/contact" className="btn-secondary text-center">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Timeline Card ─────────────────────────────────────────────────────────────

function TimelineCard({
  item,
  onClick,
  align,
}: {
  item: (typeof timeline)[number];
  onClick: () => void;
  align: "left" | "right";
}) {
  return (
    <button
      onClick={onClick}
      className={`group w-full text-${align} cursor-pointer`}
    >
      <div className="card hover:border-t-[#00AEEF] transition-all overflow-hidden !p-0">
        {/* Thumbnail */}
        <div className="aspect-video bg-[#1A2B3C]/8 flex items-center justify-center relative overflow-hidden">
          {item.image ? (
            <Image src={`${basePath}${item.image}`} alt={item.title} fill className={`object-cover group-hover:scale-105 transition-transform duration-300 ${"imagePosition" in item && item.imagePosition === "top" ? "object-top" : "object-center"}`} />
          ) : (
            <div className="flex flex-col items-center gap-1 text-[#1A2B3C]/30 group-hover:text-[#FF8A3D]/60 transition-colors">
              <span className="text-3xl font-black">{item.year}</span>
              <span className="text-xs uppercase tracking-widest">Tap to read</span>
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#FF8A3D]/0 group-hover:bg-[#FF8A3D]/10 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#1A2B3C] text-xs font-bold px-3 py-1 rounded-full shadow">
              Read Story
            </span>
          </div>
        </div>
        {/* Text */}
        <div className="p-4">
          <div className="text-[#FF8A3D] text-xs font-bold uppercase tracking-widest mb-1">{item.year}</div>
          <h3 className="text-[#1A2B3C] font-bold text-sm mb-1 group-hover:text-[#FF8A3D] transition-colors">{item.title}</h3>
          <p className="text-[#5a5a5a] text-xs leading-relaxed line-clamp-2">{item.summary}</p>
        </div>
      </div>
    </button>
  );
}
