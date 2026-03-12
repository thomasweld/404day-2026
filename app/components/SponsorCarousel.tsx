"use client";

import Image from "next/image";

type Sponsor = {
  _id: string;
  name: string;
  logoUrl: string;
  url?: string;
};

export default function SponsorCarousel({ sponsors }: { sponsors: Sponsor[] }) {
  const items = [...sponsors, ...sponsors];

  return (
    <div className="w-full bg-white border-y border-[#E0E0E0] overflow-hidden" style={{ height: "110px" }}>
      <div className="flex items-center h-full animate-scroll">
        {items.map((sponsor, i) => (
          <div
            key={`${sponsor._id}-${i}`}
            className="flex-shrink-0 flex items-center justify-center px-8"
            style={{ height: "90px", minWidth: "120px" }}
          >
            <Image
              src={sponsor.logoUrl}
              alt={sponsor.name}
              width={100}
              height={70}
              className="object-contain max-h-[70px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
