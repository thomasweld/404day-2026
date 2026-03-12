"use client";

import Script from "next/script";
import { basePath } from "../lib/constants";

const EVENT_ID = "1978977029568";
const TRIGGER_ID = `eventbrite-widget-modal-trigger-${EVENT_ID}`;

export default function TicketsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 overflow-hidden hero-landscape">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white drop-shadow-lg">
            Join Us
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mt-4 max-w-2xl mx-auto">
            RSVP free for 404Day 2026 in Piedmont Park
          </p>
        </div>
      </section>

      {/* Eventbrite Widget */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#9ec367] min-h-[40vh] flex items-center justify-center">
        <div className="text-center">
          <noscript>
            <a
              href={`https://404Day.eventbrite.com`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Buy Tickets on Eventbrite
            </a>
          </noscript>

          <button
            id={TRIGGER_ID}
            type="button"
            className="btn-primary text-lg px-10 py-4"
          >
            RSVP FREE
          </button>

          <p className="text-[#1A2B3C]/70 text-sm mt-4">
            April 4, 2026 · Piedmont Park · Atlanta, GA
          </p>
        </div>
      </section>

      <Script
        src="https://www.eventbrite.com/static/widgets/eb_widgets.js"
        strategy="afterInteractive"
        onLoad={() => {
          (window as any).EBWidgets.createWidget({
            widgetType: "checkout",
            eventId: EVENT_ID,
            modal: true,
            modalTriggerElementId: TRIGGER_ID,
            onOrderComplete: () => {
              console.log("Order complete!");
            },
          });
        }}
      />
    </>
  );
}
