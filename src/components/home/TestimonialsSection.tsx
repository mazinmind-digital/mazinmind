import { BarChart3 } from "lucide-react";
import { GraffitiIcon } from "@/components/ui/GraffitiIcon";

const outcomes = [
  {
    title: "Lead handling gets faster",
    problem: "Missed or slow responses",
    solution: "AI intake and routing",
    result: "New inquiries get acknowledged and triaged quickly without manual delay.",
  },
  {
    title: "Follow-up becomes consistent",
    problem: "Leads go cold between touchpoints",
    solution: "Automated nurturing and reminders",
    result: "Prospects receive timely next steps without extra admin work.",
  },
  {
    title: "Operations get less manual",
    problem: "Repetitive admin tasks",
    solution: "Workflow automation and scheduling",
    result: "The team spends more time on customer service and revenue-generating work.",
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
            How businesses benefit from smarter follow-up
          </h2>
          <p className="text-lg text-muted-foreground">
            Common bottlenecks we solve across lead capture, service scheduling,
            and day-to-day operations.
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
          Outcomes vary by business, workflow, and implementation scope.
        </p>
      </div>
    </section>
  );
}
