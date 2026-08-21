import { ShieldCheck, ServerCog, Workflow, Bot } from "lucide-react";
import { GraffitiIcon } from "@/components/ui/GraffitiIcon";
import heroGraffiti from "@/assets/hero-graffiti.jpg";

const credibilityPoints = [
  {
    icon: ServerCog,
    title: "scalable infrastructure",
    description: "Systems designed to scale with your growth goals.",
    tone: "primary" as const,
  },
  {
    icon: Workflow,
    title: "reliable automation",
    description: "Automation workflows that run cleanly in production.",
    tone: "accent" as const,
  },
  {
    icon: Bot,
    title: "real business impact",
    description: "Every system is tied to measurable business outcomes.",
    tone: "warning" as const,
  },
];

export function ValueProposition() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div
        className="absolute right-0 top-0 h-full w-1/2 opacity-25"
        style={{
          backgroundImage: `url(${heroGraffiti})`,
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
            Built by Engineers, Not Prompt Engineers
          </h2>
          <p className="mx-auto mb-14 max-w-3xl text-lg text-muted-foreground">
            MazinMind Digital was founded by a senior engineer with decades of
            experience building real production systems. Unlike typical AI
            consultants who only write prompts, MazinMind installs
            production-grade automation systems that integrate with your
            existing tools and workflows.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
