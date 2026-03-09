"use client";

import { useState } from "react";
import Image from "next/image";
import FlyerModal from "./FlyerModal";

const handleShare = async () => {
  if (navigator.share) {
    await navigator.share({
      title: "404Day 2026 — April 4th, Piedmont Park",
      text: "Join us for 404Day 2026! Free to attend. April 4th in Piedmont Park, Atlanta.",
      url: window.location.href,
    });
  } else {
    await navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  }
};

export default function FlyerThumbnail({ src }: { src: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <FlyerModal src={src} onClose={() => setOpen(false)} />}

      <div className="flex flex-col gap-4">
        <button
          onClick={() => setOpen(true)}
          className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-full"
          aria-label="View 404Day 2026 flyer"
        >
          <Image
            src={src}
            alt="404Day 2026 Event Flyer"
            width={500}
            height={700}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-[#1A2B3C]/0 group-hover:bg-[#1A2B3C]/30 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-[#1A2B3C] text-xs font-bold px-4 py-2 rounded-full shadow">
              View Flyer
            </span>
          </div>
        </button>

        {/* Actions below flyer */}
        <div className="flex gap-3">
          <a
            href={src}
            download="404day-2026-flyer.jpg"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FF8A3D] text-white font-bold text-sm transition-all hover:brightness-110"
            style={{ boxShadow: "3px 3px 0px #1A2B3C" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Flyer
          </a>
          <button
            onClick={handleShare}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-[#00AEEF] text-[#00AEEF] font-bold text-sm hover:bg-[#00AEEF] hover:text-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
            Share
          </button>
        </div>
      </div>
    </>
  );
}
