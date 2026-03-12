"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export type EventPostData = {
  _id: string;
  title: string;
  date: string;
  image?: any;
  description?: string;
  videoUrl?: string;
  ticketUrl?: string;
};

function getEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    // YouTube
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    // Vimeo
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {}
  return null;
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function EventModal({
  post,
  onClose,
}: {
  post: EventPostData;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 pt-20 sm:pt-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full sm:max-h-[92vh] sm:overflow-y-auto shadow-2xl my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#1A2B3C]/10 hover:bg-[#1A2B3C]/20 flex items-center justify-center text-[#1A2B3C] transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {post.image && (
          <div className="rounded-t-2xl overflow-hidden">
            <Image
              src={urlFor(post.image).width(800).url()}
              alt={post.title}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="p-6 sm:p-8">
          <div className="text-[#FF8A3D] text-xs font-bold uppercase tracking-widest mb-2">
            {formatDate(post.date)}
          </div>
          <h2 className="text-2xl font-black text-[#1A2B3C] mb-4">{post.title}</h2>
          {post.videoUrl && getEmbedUrl(post.videoUrl) && (
            <div className="aspect-video rounded-xl overflow-hidden mb-4">
              <iframe
                src={getEmbedUrl(post.videoUrl)!}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          {post.description && (
            <div className="text-[#5a5a5a] text-sm leading-relaxed space-y-3 mb-6">
              {post.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
          {post.ticketUrl && (
            <a
              href={post.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-center"
            >
              Get Tickets / RSVP
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EventPosts({ posts, columns = 2 }: { posts: EventPostData[]; columns?: 1 | 2 }) {
  const [selected, setSelected] = useState<EventPostData | null>(null);

  if (!posts.length) return null;

  return (
    <>
      {selected && <EventModal post={selected} onClose={() => setSelected(null)} />}
      <div className={columns === 1 ? "flex flex-col gap-6" : "grid grid-cols-1 sm:grid-cols-2 gap-6"}>
        {posts.map((post) => (
          <button
            key={post._id}
            onClick={() => setSelected(post)}
            className="card overflow-hidden !p-0 text-left group cursor-pointer w-full"
          >
            {post.image && (
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={urlFor(post.image).width(600).url()}
                  alt={post.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-4">
              <div className="text-[#FF8A3D] text-xs font-bold uppercase tracking-widest mb-1">
                {formatDate(post.date)}
              </div>
              <h3 className="text-[#1A2B3C] font-bold text-sm mb-1 group-hover:text-[#FF8A3D] transition-colors">
                {post.title}
              </h3>
              {post.description && (
                <p className="text-[#5a5a5a] text-xs leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              )}
              {post.ticketUrl && (
                <span className="inline-block mt-2 text-xs font-semibold text-[#FF8A3D]">
                  RSVP / Tickets →
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
