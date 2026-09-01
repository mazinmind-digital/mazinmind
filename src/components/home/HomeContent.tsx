import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScheduleButton from "@/components/ui/ScheduleButton";

const problems = [
  "Calls go missed",
  "Web inquiries sit unanswered",
  "Leads are followed up too slowly",
  "Employees forget follow-up tasks",
  "Appointments require endless back-and-forth",
  "Repetitive tasks consume staff time",
];

const solutions = [
  {
    title: "Missed Lead Recovery",
    description:
      "Automatically follow up when a customer calls, fills out a form, or sends an inquiry and nobody responds right away.",
    benefits: [
      "Immediate SMS or email response",
      "Lead capture and qualification",
      "Appointment booking",
      "Staff notification",
    ],
    link: "/ai-receptionist",
    cta: "See How It Works",
  },
  {
    title: "Automated Lead Follow-Up",
    description:
      "Keep prospects moving without relying on someone to remember every email, text, or callback.",
    benefits: [
      "Automated follow-up sequences",
      "Lead nurturing and reminders",
      "CRM updates",
      "Appointment links",
    ],
    link: "/lead-follow-up-automation",
    cta: "See How It Works",
  },
  {
    title: "Business Workflow Automation",
    description:
      "Connect the tools you already use and eliminate repetitive manual work.",
    benefits: [
      "Data movement between systems",
      "Customer notifications",
      "Internal alerts",
      "Form processing",
    ],
    link: "/ai-automation-contractors",
    cta: "See How It Works",
  },
];

const trustBullets = [
  "Practical systems, not AI demos",
  "Built around your existing tools",
  "Start small and scale what works",
];

export default function HomeContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-foreground md:py-20">
      {/* Problem Section */}
      <section className="mb-16" aria-labelledby="problem-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            The problem
          </p>
          <h2 id="problem-heading" className="text-3xl font-display font-bold tracking-wider md:text-5xl">
            You're Already Paying for Leads. Stop Letting Them Disappear.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Small businesses often lose revenue because:
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-lg border border-primary/20 bg-secondary/10 px-4 py-3"
            >
              <p className="text-sm text-muted-foreground">• {problem}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Solutions Section */}
      <section id="ai-systems-we-install" className="mb-16" aria-labelledby="solutions-heading">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            The solution
          </p>
          <h2 id="solutions-heading" className="text-3xl font-display font-bold tracking-wider md:text-5xl">
            What MazinMind Can Automate
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="flex h-full flex-col rounded-2xl border border-primary/20 bg-secondary/20 p-6"
            >
              <h3 className="mb-3 text-2xl font-display font-bold tracking-wide text-foreground">
                {solution.title}
              </h3>
              <p className="mb-6 text-muted-foreground">{solution.description}</p>
              
              <div className="mb-6 flex-1">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Benefits
                </p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="text-sm text-muted-foreground">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={solution.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
              >
                {solution.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Authority Section */}
      <section className="mb-16" aria-labelledby="authority-heading">
        <div className="rounded-[2rem] border border-primary/20 bg-gradient-to-br from-secondary/20 via-card to-primary/5 p-8 md:p-12">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Why teams choose MazinMind
            </p>
            <h2 id="authority-heading" className="text-3xl font-display font-bold tracking-wider md:text-5xl">
              Why service businesses choose MazinMind
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background/70 p-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">Built for urgency</p>
              <p className="text-muted-foreground">
                We focus on the revenue leak that actually hurts service businesses: missed calls, slow responses, and inconsistent follow-up.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/70 p-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">Practical workflow design</p>
              <p className="text-muted-foreground">
                Every system is designed to fit the way your team already works, without adding confusion or unnecessary complexity.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/70 p-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">Human oversight stays intact</p>
              <p className="text-muted-foreground">
                We automate the repetitive, time-sensitive parts of the workflow while preserving escalation for exceptions and premium service calls.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/ai-receptionist-boston"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-primary px-6 text-sm font-bold text-primary-foreground"
            >
              See Boston AI Receptionist
            </Link>
            <Link
              to="/home-services-automation"
              className="inline-flex h-12 items-center justify-center rounded-full border border-primary/40 px-6 text-sm font-bold text-primary"
            >
              See Home Services Automation
            </Link>
          </div>
        </div>
      </section>

      {/* Audience Fit Section */}
      <section className="mb-16" aria-labelledby="audience-fit-heading">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Built for service businesses
          </p>
          <h2 id="audience-fit-heading" className="text-3xl font-display font-bold tracking-wider md:text-5xl">
            Built for service businesses that live or die by the next call
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-primary/20 bg-secondary/10 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">Plumbing and HVAC teams</p>
            <p className="text-muted-foreground">
              When a customer calls after hours, a missed repair request is revenue that disappears before the next shift begins.
            </p>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-secondary/10 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">Electrical and roofing businesses</p>
            <p className="text-muted-foreground">
              Emergency and high-value jobs usually need a fast response, smart qualification, and follow-up without a bottleneck.
            </p>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-secondary/10 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">Home-services teams</p>
            <p className="text-muted-foreground">
              Strong automation should help your team answer faster, book more jobs, and keep the experience consistent from the first call.
            </p>
          </div>
        </div>
      </section>

      {/* Blueprint Section */}
      <section className="mb-16" aria-labelledby="blueprint-heading">
        <div className="rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-secondary/30 to-accent/10 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Low-risk entry
              </p>
              <h2 id="blueprint-heading" className="text-3xl font-display font-bold tracking-wider md:text-5xl">
                Not Ready for a Full Project? Start With an Automation Blueprint.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                We review your business, identify the best automation opportunities,
                and give you a practical implementation roadmap.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-background/60 p-6 shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-warning">
                AI Automation Blueprint
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-black text-foreground">$49</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li>• Highest-value opportunities</li>
                <li>• Recommended priorities</li>
                <li>• Suggested tools</li>
                <li>• Integration ideas</li>
                <li>• Implementation roadmap</li>
              </ul>
              <ScheduleButton
                provider="hubspot"
                analyticsEvent="blueprint_cta_click"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-primary px-6 text-sm font-bold text-primary-foreground"
              >
                Get My Automation Blueprint
              </ScheduleButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="mx-auto max-w-3xl" aria-labelledby="trust-heading">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Trust
          </p>
          <h2 id="trust-heading" className="text-3xl font-display font-bold tracking-wider md:text-5xl">
            Built by an Engineer, Not a Hype Machine.
          </h2>
        </div>

        <p className="mb-6 text-center text-lg text-muted-foreground">
          MazinMind Digital brings deep experience in software engineering, DevOps, cloud infrastructure, automation, APIs, and enterprise systems.
        </p>

        <p className="mb-10 text-center text-lg text-muted-foreground">
          The goal isn't to sell you more software. It's to identify where automation can actually improve the way your business operates.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {trustBullets.map((bullet) => (
            <div
              key={bullet}
              className="rounded-lg border border-primary/20 bg-secondary/10 p-4 text-center"
            >
              <p className="text-muted-foreground">{bullet}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
