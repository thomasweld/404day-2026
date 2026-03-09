"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { basePath } from "../lib/constants";

const galleryImages = [
  "404day-atlanta-music-festival-live-music-guitar-rock-and-roll.jpg",
  "404day-music-festival-crowd-dj-stage-backstage.JPG",
  "404day-music-festival-atlanta-falcons.jpg",
  "404day-music-festival-dj-booth.jpg",
  "404day-music-festival-crowd-dj-dance-floor.jpg",
  "404day-music-festival-sponsors-xfinity-360-3d-pictures.jpg",
  "404day-music-festival-break-dancer-3.jpg",
  "404day-music-festival-vendors-sponsors-bang-energy-drink.jpg",
  "404day-music-festival-break-dancer-2.jpg",
  "404day-music-festival-dj-atlanta-braves.jpg",
  "404day-music-festival-crowd-tents.JPG",
  "404day-music-festival-crowd-dance-party-1.JPG",
  "404day-music-festival-sponsors-patron.JPG",
  "404day-music-festival-sponsors-sprite.jpg",
  "404day-music-festival-sponsors-xfinity.jpg",
  "404day-music-festival-crowd-wide-piedmont-park-atlanta-ga.JPG",
  "404day-music-festival-vitamin-water-vendor.jpg",
  "404day-music-festival-break-dancer.jpg",
];

function GalleryModal({
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
  const filename = galleryImages[index];
  const alt = filename.replace(/\.[^.]+$/, "").replace(/-/g, " ");
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onPrev, onNext, onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? onNext() : onPrev();
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Prev arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        disabled={index === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white text-xl transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
        aria-label="Previous"
      >
        ←
      </button>

      {/* Next arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        disabled={index === galleryImages.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white text-xl transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
        aria-label="Next"
      >
        →
      </button>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Image */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={`${basePath}/gallery/${filename}`}
          alt={alt}
          width={1200}
          height={900}
          className="object-contain max-h-[80vh] w-auto rounded-xl shadow-2xl"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 text-center pb-2">
          <span className="text-white/50 text-xs">{index + 1} / {galleryImages.length}</span>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = (i: number) => setModalIndex(i);
  const closeModal = () => setModalIndex(null);
  const prevImage = () => setModalIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const nextImage = () => setModalIndex((i) => (i !== null && i < galleryImages.length - 1 ? i + 1 : i));

  return (
    <>
      {modalIndex !== null && (
        <GalleryModal
          index={modalIndex}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      {/* Hero */}
      <section className="relative py-20 overflow-hidden hero-landscape">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur border border-[#f4b59e]/50 text-[#5a4a3a] text-xs font-semibold uppercase tracking-wider mb-6">
            Gallery
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
            <span className="text-[#1A2B3C]">Moments</span>
            <br />
            <span className="gradient-text">Worth Keeping</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5a4a3a] leading-relaxed max-w-2xl mx-auto">
            Music, food, and the vibrant community spirit. This is what 404Day looks like.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((filename, i) => (
            <div
              key={filename}
              onClick={() => openModal(i)}
              className="break-inside-avoid rounded-2xl overflow-hidden relative group cursor-pointer"
            >
              <Image
                src={`${basePath}/gallery/${filename}`}
                alt={filename.replace(/\.[^.]+$/, "").replace(/-/g, " ")}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1A2B3C]/0 group-hover:bg-[#1A2B3C]/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A2B3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#5a5a5a] text-sm mt-12">
          Moments from 404Day in Piedmont Park.
        </p>
      </section>

      {/* By the Numbers */}
      <section className="py-12 bg-[#e8f0e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">By the Numbers</h2>
            <p className="section-subtitle mx-auto">Years of 404Day captured in photos and memories.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { year: "2023", attendees: "5,000", photos: "1,200+", highlight: "First outdoor main stage", color: "#9ec367" },
              { year: "2024", attendees: "7,500", photos: "2,400+", highlight: "Added workshop tracks & hackathon", color: "#fac355" },
              { year: "2025", attendees: "10,000", photos: "4,800+", highlight: "Moved to Centennial Olympic Park", color: "#FF8A3D" },
            ].map((yr) => (
              <div key={yr.year} className="card">
                <div className="text-2xl font-black mb-4" style={{ color: yr.color }}>{yr.year}</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[#5a5a5a] text-sm">Attendees</span>
                    <span className="text-[#1A2B3C] font-bold">{yr.attendees}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#5a5a5a] text-sm">Photos Taken</span>
                    <span className="text-[#1A2B3C] font-bold">{yr.photos}</span>
                  </div>
                  <div className="pt-3 border-t border-[#E0E0E0]">
                    <p className="text-xs text-[#5a5a5a]">Highlight</p>
                    <p className="text-sm text-[#FF8A3D] mt-1">{yr.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Photos CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto rounded-3xl p-12 bg-white/80 border border-[#E0E0E0]">
          <div className="text-4xl mb-4">📸</div>
          <h2 className="text-3xl font-black text-[#1A2B3C] mb-4">Were You There?</h2>
          <p className="text-[#5a5a5a] mb-8">
            We&apos;d love to feature your photos from past 404Day events. Submit your best shots and you might
            end up in the official gallery!
          </p>
          <a href="mailto:info@404day.com?subject=Gallery Submission" className="btn-primary">
            Submit Your Photos
          </a>
        </div>
      </section>
    </>
  );
}
