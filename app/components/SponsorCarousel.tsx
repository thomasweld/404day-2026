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
            style={{ height: "90px", width: "220px" }}
          >
            <div className="relative" style={{ width: "180px", height: "70px" }}>
              <Image
                src={sponsor.logoUrl}
                alt={sponsor.name}
                fill
                style={{ objectFit: "contain" }}
                className="sponsor-logo"
              />
            </div>
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
        :global(.sponsor-logo) {
          opacity: 0.7;
          filter: grayscale(100%);
          transition: opacity 0.3s, filter 0.3s;
        }
        @media (hover: hover) {
          .animate-scroll:hover {
            animation-play-state: paused;
          }
          :global(.sponsor-logo):hover {
            opacity: 1;
            filter: grayscale(0%);
          }
        }
      `}</style>
    </div>
  );
}
