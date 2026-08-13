import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, CalendarClock, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import ScheduleButton from "@/components/ui/ScheduleButton";

const list = [
  "Answer quote requests and intake forms instantly",
  "Never miss a call or form submission from a potential job",
  "Automatically schedule inspections and follow-ups",
  "Keep your team focused on the work, not the paperwork",
];

export default function AiAutomationContractors() {
  return (
    <Layout>
      <Helmet>
        <title>AI Automation for Contractors | MazinMind Digital</title>
        <meta
          name="description"
          content="AI automation for contractors helps you capture more leads, respond faster, and keep projects moving without manual scheduling overhead."
        />
        <meta
          name="keywords"
          content="AI automation for contractors, contractor lead automation, field service automation, AI receptionist for contractors, quote follow-up automation"
        />
        <link rel="canonical" href="https://mazinmind.digital/ai-automation-contractors" />
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 py-20">
        <section className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              AI automation for contractors
            </p>
            <h1 className="text-4xl font-display font-bold tracking-wider md:text-6xl">
              Respond Faster, Recover Missed Leads, Automate Follow-Up, and Book More Estimates.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Contractors leave money on the table when leads go unanswered, estimates aren't scheduled, and follow-ups are inconsistent. AI automation handles the intake, scheduling, and reminders so your team focuses on the jobs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ScheduleButton
                provider="hubspot"
                analyticsEvent="landing_page_cta_click"
                className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-primary px-8 text-base font-bold text-primary-foreground"
              >
                Get a Free Audit
              </ScheduleButton>
              <Link
                to="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full border border-primary/40 px-8 text-base font-bold text-primary"
              >
                Talk to MazinMind
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-secondary/20 p-8">
            <div className="mb-6 flex gap-3">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <PhoneCall className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Typical results</p>
                <h2 className="text-2xl font-display font-bold">Faster response, more booked jobs</h2>
              </div>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              {list.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card p-6">
            <PhoneCall className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">Capture Every Lead</h2>
            <p className="mt-3 text-muted-foreground">
              Calls and web forms are answered instantly, even when your team is on-site working. No more missed opportunities.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">Respond in Minutes, Not Hours</h2>
            <p className="mt-3 text-muted-foreground">
              Prospects expect fast answers. Automation gets information and next steps in front of interested customers immediately.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <CalendarClock className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">Book Appointments Automatically</h2>
            <p className="mt-3 text-muted-foreground">
              Scheduling inspections and follow-ups doesn't require endless back-and-forth. Customers pick a time, it's booked.
            </p>
          </article>
        </section>

        <section className="rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 md:p-12">
          <h2 className="text-3xl font-display font-bold tracking-wider md:text-5xl">
            Ready to Win More Jobs?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Start with a free consultation to identify where automation can capture the most lost leads and save your team the most time.
          </p>
          <div className="mt-8 flex justify-center">
            <ScheduleButton
              provider="hubspot"
              analyticsEvent="scheduling_cta_click"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 text-base font-bold text-primary-foreground"
            >
              Get a Free 15-Minute Consultation <ArrowRight className="h-4 w-4" />
            </ScheduleButton>
          </div>
        </section>
      </div>
    </Layout>
  );
}
