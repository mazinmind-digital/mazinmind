import { ShieldCheck, ServerCog, Workflow, Bot } from "lucide-react";
import { GraffitiIcon } from "@/components/ui/GraffitiIcon";
import aiFace from "@/assets/ai-face.png";

const credibilityPoints = [
  {
    icon: ServerCog,
    title: "Senior Engineering Depth",
    description:
      "Founder-led delivery with deep DevOps automation consulting and cloud architecture experience.",
    tone: "primary" as const,
  },
  {
    icon: Workflow,
    title: "Custom AI Workflows",
    description:
      "We map your real process, then build production workflows across CRM, marketing, and operations tools.",
    tone: "accent" as const,
  },
  {
    icon: Bot,
    title: "Real-World Reliability",
    description:
      "We build production-grade systems, not toy chatbots, with monitoring, handoff rules, and documentation.",
    tone: "electric" as const,
  },
  {
    icon: ShieldCheck,
    title: "Secure, Scalable Delivery",
    description:
      "Solutions are implemented with clear guardrails, auditability, and a roadmap for scaling safely.",
    tone: "warning" as const,
  },
];

export function ValueProposition() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div
        className="absolute right-0 top-0 h-full w-1/2 opacity-20"
        style={{
          backgroundImage: `url(${aiFace})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }}
      />
      <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-accent/15 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-5xl font-display font-bold tracking-wider md:text-6xl">
            FOUNDER-LED <span className="text-gradient-primary">CREDIBILITY</span>
          </h2>
          <p className="mx-auto mb-4 max-w-3xl text-xl text-foreground">
            We install AI systems that save time and generate revenue.
          </p>
          <p className="mx-auto mb-14 max-w-3xl text-lg text-muted-foreground">
            MazinMind is led by a senior engineer and automation consultant with
            hands-on experience shipping reliable systems for growth, operations,
            and cloud infrastructure.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {credibilityPoints.map((point) => (
              <article
                key={point.title}
                className="glass-vibrant rounded-2xl border border-primary/25 p-6 text-left"
              >
                <GraffitiIcon icon={point.icon} tone={point.tone} size="sm" className="mb-4" />
                <h3 className="mb-2 text-2xl font-display font-bold tracking-wide text-foreground">
                  {point.title}
                </h3>
                <p className="text-muted-foreground">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
