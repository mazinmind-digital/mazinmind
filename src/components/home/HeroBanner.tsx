import { Link } from "react-router-dom";
import mazinmindWordmark from "@/assets/mazinmind-wordmark.png";
import heroGraffiti from "@/assets/hero-graffiti.jpg";
import ScheduleButton from "@/components/ui/ScheduleButton";

const trustBullets = [
  "Boston-Based",
  "Engineer-Built",
  "Production-Ready",
  "Built Around Your Existing Tools",
];

export default function HeroBanner() {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-black md:-mt-12">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `url(${heroGraffiti})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-transparent to-black/80" />

      <div className="relative z-30 flex w-full max-w-6xl flex-col items-center px-4 text-center">
        <img
          src={mazinmindWordmark}
          alt="MazinMind"
          className="pointer-events-none relative z-40 mb-5 h-auto w-full max-w-[min(92vw,980px)] select-none transform-gpu md:-translate-y-6 md:scale-[1.2]"
        />

        <h1 className="mb-4 max-w-5xl text-4xl font-extrabold text-white drop-shadow-lg graffiti-text md:text-6xl">
          Stop Losing Customers When You Miss the Phone.
        </h1>

        <p className="mb-7 max-w-4xl text-lg text-white/90 md:text-2xl">
          MazinMind builds AI receptionist and speed-to-lead systems for Greater Boston service businesses. Capture missed opportunities, respond to leads faster, handle routine customer interactions, and keep your team focused on the work that requires a human.
        </p>

        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#how-it-works"
            className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-primary px-8 text-base font-bold tracking-wide text-primary-foreground glow-primary hover:opacity-90"
            aria-label="See How It Works"
          >
            See How It Works
          </a>
          <ScheduleButton
            provider="hubspot"
            analyticsEvent="audit_cta_click"
            className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary/70 bg-black/30 px-8 text-base font-bold tracking-wide text-primary hover:bg-primary/10"
            aria-label="Get a Revenue Leak Audit"
          >
            Get a Revenue Leak Audit
          </ScheduleButton>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-semibold">
          {trustBullets.map((bullet, idx) => (
            <span key={idx} className="text-primary/90">
              {idx > 0 && <span className="mr-5 text-primary/40">•</span>}
              {bullet}
            </span>
          ))}
       </div>
     </div>
   </section>
  );
}
