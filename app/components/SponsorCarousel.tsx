"use client";

import Image from "next/image";
import { basePath } from "../lib/constants";

const sponsors = [
  "ATLTONIGHT LOGO.png",
  "Captains Of Revelry COR Logo 5x10.png",
  "IMG_1196.png",
  "Layer 10.png",
  "Layer 24.png",
  "Layer 25.png",
  "Layer 29.png",
  "Layer 6.png",
  "Layer 8.png",
  "Layer 9.png",
  "atl edm.png",
  "bacardi.png",
  "cloud9.png",
  "drew foundation.png",
  "goose.png",
  "jp.png",
  "partyfuture.png",
  "patron.png",
  "smart.png",
];

export default function SponsorCarousel() {
  // Duplicate for seamless loop
  const items = [...sponsors, ...sponsors];

  return (
    <div className="w-full bg-white border-y border-[#E0E0E0] overflow-hidden" style={{ height: "110px" }}>
      <div className="flex items-center h-full animate-scroll">
        {items.map((filename, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center px-8"
            style={{ height: "90px", minWidth: "120px" }}
          >
            <Image
              src={`${basePath}/sponsors/${encodeURIComponent(filename)}`}
              alt={filename.replace(/\.[^.]+$/, "")}
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
