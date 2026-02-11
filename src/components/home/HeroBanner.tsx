// HeroBanner.tsx
import React from "react";
import heroFigure from "../../assets/hero1.png";
import graffitiBg from "../../assets/hero-graffiti.jpg";

export default function HeroBanner() {
  return (
    <section
      className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-black"
      style={{ background: `url(${graffitiBg}) center/cover no-repeat` }}
    >
      {/* Overlay for graffiti effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80 z-10" />
      {/* Figure */}
      <img
        src={heroFigure}
        alt="AI Thinker"
        className="relative z-20 max-w-[420px] w-full drop-shadow-2xl animate-fade-in"
        style={{ filter: "brightness(1.1) saturate(1.2)" }}
      />
      {/* Text & CTA */}
      <div className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg graffiti-text mb-4">
          Unlock AI Potential
        </h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-xl mb-6">
          Mazinmind.Digital: AI solutions, automation, and creative tech for the next generation of digital business.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
