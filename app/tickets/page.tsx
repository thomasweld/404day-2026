"use client";

import Script from "next/script";

const EVENT_ID = "1978977029568";
const CONTAINER_ID = `eventbrite-widget-container-${EVENT_ID}`;

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
      <style>{`#${CONTAINER_ID} iframe { min-height: 1400px !important; height: 1400px !important; }`}</style>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#9ec367]">
        <div className="max-w-2xl mx-auto">
          <div id={CONTAINER_ID} style={{ minHeight: "1400px" }} />
        </div>
      </section>

      <Script
        src="https://www.eventbrite.com/static/widgets/eb_widgets.js"
        strategy="afterInteractive"
        onLoad={() => {
          (window as any).EBWidgets.createWidget({
            widgetType: "checkout",
            eventId: EVENT_ID,
            iframeContainerId: CONTAINER_ID,
            iframeContainerHeight: 1800,
            onOrderComplete: () => {
              console.log("Order complete!");
            },
          });
        }}
      />
    </>
  );
}
