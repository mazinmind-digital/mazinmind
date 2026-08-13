import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import mazinmindWordmark from "@/assets/mazinmind-wordmark.png";
import heroGraffiti from "@/assets/hero-graffiti.jpg";
import ScheduleButton from "@/components/ui/ScheduleButton";

const outcomes = [
  "Answer more calls and web leads faster",
  "Follow up automatically before leads go cold",
  "Reduce admin work and missed opportunities",
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
          Stop losing leads. Automate the follow-up. Book more appointments.
        </h1>

        <p className="mb-7 max-w-4xl text-lg text-white/90 md:text-2xl">
          MazinMind Digital builds AI systems for small businesses that capture
          leads faster, automate follow-up, and eliminate repetitive admin work
          without adding more staff.
        </p>

        <ul className="mb-8 grid w-full max-w-4xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
          {outcomes.map((outcome) => (
            <li
              key={outcome}
              className="glass flex items-start gap-2 rounded-xl border border-primary/35 p-3 text-sm text-foreground"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>

        <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row">
          <ScheduleButton
            provider="hubspot"
            analyticsEvent="primary_audit_cta_click"
            className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-primary px-8 text-base font-bold tracking-wide text-primary-foreground glow-primary hover:opacity-90"
            aria-label="Get a Free AI Automation Audit"
          >
            Get a Free AI Automation Audit
          </ScheduleButton>
          <a
            href="#ai-systems-we-install"
            className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary/70 bg-black/30 px-8 text-base font-bold tracking-wide text-primary hover:bg-primary/10"
            aria-label="See AI Systems We Install"
          >
            See AI Systems We Install
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-semibold">
          <Link to="/ai-automation-contractors" className="text-primary hover:text-primary/80">
            AI Automation for Contractors
          </Link>
          <Link to="/lead-follow-up-automation" className="text-accent hover:text-accent/80">
            Lead Follow-Up Automation
          </Link>
          <Link to="/ai-receptionist" className="text-electric hover:text-electric/80">
            AI Receptionist
          </Link>
          <Link to="/contact" className="text-warning hover:text-warning/80">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
