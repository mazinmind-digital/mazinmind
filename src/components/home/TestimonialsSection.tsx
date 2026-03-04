import { BarChart3 } from "lucide-react";
import { GraffitiIcon } from "@/components/ui/GraffitiIcon";

const outcomes = [
  {
    title: "Example outcome 1",
    problem: "Marketing inconsistency",
    solution: "AI marketing engine",
    result: "Consistent SEO traffic and automated content production.",
  },
  {
    title: "Example outcome 2",
    problem: "Manual lead generation",
    solution: "AI outreach automation",
    result: "Steady weekly pipeline of qualified prospects.",
  },
  {
    title: "Example outcome 3",
    problem: "Operational inefficiencies",
    solution: "workflow automation system",
    result: "20+ hours per month saved.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute left-1/4 top-0 h-[280px] w-[280px] rounded-full bg-primary/15 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 h-[260px] w-[260px] rounded-full bg-accent/15 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <GraffitiIcon icon={BarChart3} tone="accent" size="lg" className="mx-auto mb-6" />
          <h2 className="mb-4 text-4xl font-display font-bold tracking-wider md:text-5xl">
            Typical Results Businesses Achieve
          </h2>
          <p className="text-lg text-muted-foreground">
            Example outcomes based on common implementation patterns across lead
            generation, marketing, and operations automation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {outcomes.map((item) => (
            <article
              key={item.title}
              className="glass-vibrant rounded-2xl border border-primary/20 p-6"
            >
              <h3 className="mb-5 text-2xl font-display font-bold tracking-wide text-foreground">
                {item.title}
              </h3>

              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-warning">
                  Problem
                </p>
                <p className="text-sm text-muted-foreground">{item.problem}</p>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Solution
                </p>
                <p className="text-sm text-muted-foreground">{item.solution}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Result
                </p>
                <p className="text-sm text-muted-foreground">{item.result}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Results vary; examples are illustrative.
        </p>
      </div>
    </section>
  );
}
