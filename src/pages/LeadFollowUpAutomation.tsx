import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import ScheduleButton from "@/components/ui/ScheduleButton";
import { ArrowRight, CheckCircle2, MessageSquareText, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  "Capture new inquiries from web forms, calls, and DMs",
  "Respond instantly with a personalized message or qualification flow",
  "Route hot leads to the right sales rep or booking step",
  "Nurture cold leads with timed reminders and follow-up sequences",
];

const problems = [
  "Leads disappear because no one replies fast enough",
  "Calls and forms are missed during busy periods",
  "Your team forgets to send the right follow-up at the right time",
];

export default function LeadFollowUpAutomation() {
  return (
    <Layout>
      <Helmet>
        <title>Lead Follow-Up Automation | MazinMind Digital</title>
        <meta
          name="description"
          content="Automate lead responses, reminder texts, and follow-up sequences so more prospects move forward without manual effort."
        />
        <meta
          name="keywords"
          content="lead follow-up automation, missed leads automation, AI follow-up system, CRM follow-up automation, sales follow-up automation"
        />
        <link rel="canonical" href="https://mazinmind.digital/lead-follow-up-automation" />
      </Helmet>

      <main className="mx-auto max-w-6xl px-4 py-20">
        <section className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Lead follow-up automation
            </p>
            <h1 className="text-4xl font-display font-bold tracking-wider md:text-6xl">
              Convert more leads by responding before they go cold.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We build follow-up systems that reply instantly, qualify inquiries,
              and keep leads moving with timely reminders and personalized next steps.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ScheduleButton
                provider="hubspot"
                analyticsEvent="landing_page_cta_click"
                className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-primary px-8 text-base font-bold text-primary-foreground"
              >
                Get a Lead Follow-Up Audit
              </ScheduleButton>
              <Link
                to="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full border border-primary/40 px-8 text-base font-bold text-primary"
              >
                Talk to a Strategist
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-secondary/20 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <MessageSquareText className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Flow</p>
                <h2 className="text-2xl font-display font-bold">Lead response engine</h2>
              </div>
            </div>
            <ul className="space-y-4">
              {steps.map((step) => (
                <li key={step} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16 grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <article key={problem} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-warning">Problem</p>
              <h3 className="mt-4 text-xl font-display font-bold text-foreground">{problem}</h3>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 md:p-12">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Workflow design
            </p>
            <h2 className="text-3xl font-display font-bold tracking-wider md:text-5xl">
              Simple systems that keep the pipeline moving.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background/60 p-6">
              <Workflow className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-2xl font-display font-bold">Automation built around your sales cycle</h3>
              <p className="mt-3 text-muted-foreground">
                We map each step between inquiry, qualification, and appointment so the process feels fast and consistent for every lead.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 p-6">
              <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-2xl font-display font-bold">High-value follow-up without extra labor</h3>
              <p className="mt-3 text-muted-foreground">
                Messages, task reminders, and scheduling prompts happen automatically so your team stays focused on the conversation that matters.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-display font-bold tracking-wider md:text-5xl">
            Ready to stop losing leads to slow follow-up?
          </h2>
          <div className="mt-8 flex justify-center">
            <ScheduleButton
              provider="hubspot"
              analyticsEvent="scheduling_cta_click"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 text-base font-bold text-primary-foreground"
            >
              Schedule a Strategy Call <ArrowRight className="h-4 w-4" />
            </ScheduleButton>
          </div>
        </section>
      </main>
    </Layout>
  );
}
