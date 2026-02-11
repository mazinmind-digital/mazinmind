// HeroBanner.tsx
import React from "react";
import graffitiBg from "../../assets/hero-graffiti.jpg";
import { useSiteOverlay } from "@/components/layout/site-overlays";

export default function HeroBanner() {
  const { openScheduleModal } = useSiteOverlay();

  return (
    <section
      className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-black"
      style={{ background: `url(${graffitiBg}) center/cover no-repeat` }}
    >
      {/* Overlay for graffiti effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80 z-10" />

      {/* Text & CTA */}
      <div className="relative z-30 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg graffiti-text mb-4">
          Unlock AI Potential
        </h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-xl mb-6">
          Mazinmind.Digital: AI solutions, automation, and creative tech for the next generation of digital business.
        </p>
        <button
          type="button"
          onClick={openScheduleModal}
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
