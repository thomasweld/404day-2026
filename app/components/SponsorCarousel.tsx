"use client";

import Image from "next/image";

type Sponsor = {
  _id: string;
  name: string;
  logoUrl: string;
  url?: string;
};

export default function SponsorCarousel({ sponsors }: { sponsors: Sponsor[] }) {
  const minCopies = Math.max(2, Math.ceil(12 / sponsors.length));
  const repeated = Array.from({ length: minCopies }, () => sponsors).flat();
  const items = [...repeated, ...repeated];
  // ~2s per item in the scrolling half keeps a consistent speed regardless of count
  const duration = `${Math.max(20, repeated.length * 2)}s`;

  return (
    <div className="w-full bg-white border-y border-[#E0E0E0] overflow-hidden" style={{ height: "110px" }}>
      <div className="flex items-center h-full animate-scroll" style={{ animationDuration: duration }}>
        {items.map((sponsor, i) => (
          <div
            key={`${sponsor._id}-${i}`}
            className="flex-shrink-0 flex items-center justify-center px-6"
            style={{ height: "90px", width: "200px" }}
          >
            <Image
              src={sponsor.logoUrl}
              alt={sponsor.name}
              width={160}
              height={50}
              style={{ maxWidth: "160px", maxHeight: "50px", width: "auto", height: "auto" }}
              className="opacity-70 transition-opacity duration-300 grayscale"
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
        @media (hover: hover) {
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
}
