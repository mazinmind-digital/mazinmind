import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScheduleButton from "@/components/ui/ScheduleButton";

const painPoints = [
  {
    title: "Missed calls and form submissions",
    description:
      "Your team is busy, but online inquiries still go unanswered and hot leads cool off while they wait for a response.",
  },
  {
    title: "Slow follow-up",
    description:
      "Without a consistent system, potential customers receive generic replies too late or not at all.",
  },
  {
    title: "Repetitive manual work",
    description:
      "Calendar juggling, CRM updates, admin requests, and reminder tasks drain time better spent with customers.",
  },
];

const systems = [
  {
    title: "AI Receptionist",
    description:
      "Answer calls, qualify visitors, and capture lead details even when your team is in the middle of the next job.",
    link: "/ai-receptionist",
  },
  {
    title: "Lead Follow-Up Automation",
    description:
      "Send personalized follow-up text, email, and reminders automatically so prospects keep moving through the funnel.",
    link: "/lead-follow-up-automation",
  },
  {
    title: "AI Automation for Contractors",
    description:
      "Coordinate intake, scheduling, job paperwork, and customer updates without manual patchwork across tools.",
    link: "/ai-automation-contractors",
  },
];

export default function HomeContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-foreground md:py-20">
      <section className="mb-16" aria-labelledby="why-automation-matters">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Why this matters
          </p>
          <h2 id="why-automation-matters" className="text-3xl font-display font-bold tracking-wider md:text-5xl">
            The real problem is usually simple: your follow-up process is inconsistent.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {painPoints.map((point) => (
            <article
              key={point.title}
              className="glass-vibrant rounded-2xl border border-primary/20 p-6"
            >
              <h3 className="mb-3 text-xl font-display font-bold text-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground">{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ai-systems-we-install" className="mb-16" aria-labelledby="systems-heading">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              What we install
            </p>
            <h2 id="systems-heading" className="text-3xl font-display font-bold tracking-wider md:text-5xl">
              Systems that reduce missed opportunities and manual busywork.
            </h2>
          </div>
          <ScheduleButton
            provider="hubspot"
            analyticsEvent="scheduling_cta_click"
            className="inline-flex items-center justify-center rounded-full border border-primary/50 bg-primary/5 px-5 py-3 text-sm font-bold text-primary hover:bg-primary/10"
          >
            Book a Free Audit
          </ScheduleButton>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {systems.map((system) => (
            <article
              key={system.title}
              className="flex h-full flex-col rounded-2xl border border-primary/20 bg-secondary/20 p-6"
            >
              <h3 className="mb-3 text-2xl font-display font-bold tracking-wide text-foreground">
                {system.title}
              </h3>
              <p className="mb-6 flex-1 text-muted-foreground">{system.description}</p>
              <Link
                to={system.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="blueprint-heading">
        <div className="rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-secondary/30 to-accent/10 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Low-risk entry point
              </p>
              <h2 id="blueprint-heading" className="text-3xl font-display font-bold tracking-wider md:text-5xl">
                Start with the workflow that creates the most wasted time and missed revenue.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Our AI Automation Blueprint helps you identify the highest-impact
                opportunity and prioritize the right system before you invest in a
                larger rollout.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-background/60 p-6 shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-warning">
                Blueprint
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-black text-foreground">$49</span>
                <span className="pb-2 text-sm text-muted-foreground">entry offer</span>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li>• Bottleneck review</li>
                <li>• Automation opportunity map</li>
                <li>• Recommended first system</li>
                <li>• Suggested implementation roadmap</li>
              </ul>
              <ScheduleButton
                provider="hubspot"
                analyticsEvent="blueprint_cta_click"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-primary px-6 text-sm font-bold text-primary-foreground"
              >
                Get the Blueprint
              </ScheduleButton>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="trust-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Built for real businesses
          </p>
          <h2 id="trust-heading" className="text-3xl font-display font-bold tracking-wider md:text-5xl">
            We help small businesses run smoother with less friction.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-2 text-xl font-display font-bold text-foreground">Service businesses</h3>
            <p className="text-muted-foreground">
              Contractors, clinics, agencies, and local teams that need faster responses, better follow-up, and less manual admin.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-2 text-xl font-display font-bold text-foreground">Business owners</h3>
            <p className="text-muted-foreground">
              Operators who want consistent lead handling, smoother scheduling, and a system that keeps momentum without extra staff.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-2 text-xl font-display font-bold text-foreground">Operational teams</h3>
            <p className="text-muted-foreground">
              Teams that need fewer repetitive chore tasks, cleaner handoffs, and a simpler way to turn busy work into automation.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
