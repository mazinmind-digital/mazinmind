import { BarChart3 } from "lucide-react";
import { GraffitiIcon } from "@/components/ui/GraffitiIcon";

const outcomes = [
  {
    title: "Local Services Business",
    problem:
      "Leads were inconsistent and follow-up was manual, so opportunities stalled in inboxes.",
    solution:
      "Installed an AI lead generation system with outreach sequencing, qualification prompts, and CRM automation.",
    result:
      "Typical results include more booked calls per month and faster first-response times within days, not weeks.",
  },
  {
    title: "B2B Team With Small Marketing Staff",
    problem:
      "Content and SEO execution depended on one person, causing missed publishing windows.",
    solution:
      "Implemented AI marketing automation for keyword planning, content briefs, drafting, and publishing workflow.",
    result:
      "Typical results include more pages shipped per month, stronger organic traffic trends, and better lead quality.",
  },
  {
    title: "Operations-Heavy SMB",
    problem:
      "Daily operations relied on copy-paste work across forms, spreadsheets, and CRM records.",
    solution:
      "Built custom AI workflows for business process automation and error-checked handoffs between tools.",
    result:
      "Typical results include reclaimed team hours each week, fewer manual errors, and improved visibility into pipeline health.",
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
            PROOF: <span className="text-gradient-accent">EXAMPLE OUTCOMES</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Each engagement is different, but these scenarios reflect common
            outcomes when AI systems are installed correctly.
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
