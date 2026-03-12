"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function FlyerModal({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "404 Day 2026 — April 4th, Piedmont Park",
        text: "Join us for 404 Day 2026! Free to attend. April 4th in Piedmont Park, Atlanta.",
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Flyer image */}
        <Image
          src={src}
          alt="404 Day 2026 Event Flyer"
          width={800}
          height={1100}
          className="w-full h-auto max-h-[75vh] object-contain rounded-xl shadow-2xl"
          priority
        />

        {/* Actions */}
        <div className="flex gap-4 mt-5">
          <a
            href={src}
            download="404day-2026-flyer.jpg"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF8A3D] text-white font-bold text-sm shadow hover:brightness-110 transition-all"
            style={{ boxShadow: "3px 3px 0px #1A2B3C" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Flyer
          </a>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#00AEEF] text-[#00AEEF] font-bold text-sm hover:bg-[#00AEEF] hover:text-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
