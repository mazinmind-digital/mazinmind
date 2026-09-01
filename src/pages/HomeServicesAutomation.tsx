import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Home, MessageSquareText, PhoneCall, ShieldCheck } from "lucide-react";
import ScheduleButton from "@/components/ui/ScheduleButton";

const painPoints = [
  "Missed calls from emergency requests and appointment inquiries",
  "Slow replies that let homeowners and property managers move to a competitor",
  "Repeated admin work for quote requests, callbacks, and scheduling",
  "A team that needs a better system without adding more staff",
];

const workflows = [
  "Call intake with triage and urgency detection",
  "Response and qualification for quote requests",
  "Appointment scheduling and reminder workflows",
  "Human escalation for high-priority or sensitive issues",
];

export default function HomeServicesAutomation() {
  return (
    <Layout>
      <Helmet>
        <title>Home Services Automation | AI Receptionist & Lead Capture for Contractors | MazinMind Digital</title>
        <meta
          name="description"
          content="AI automation for home services businesses captures missed calls, qualifies leads, books appointments, and keeps your customers moving with a monitored human escalation path."
        />
        <meta
          name="keywords"
          content="home services automation, contractor lead capture, missed call recovery, service appointment booking, AI receptionist for HVAC, plumbing, electrical, roofing"
        />
        <link rel="canonical" href="https://mazinmind.digital/home-services-automation" />
        <meta property="og:title" content="Home Services Automation | AI Receptionist & Lead Capture for Contractors" />
        <meta property="og:description" content="Capture missed calls, book more jobs, and keep your home services team focused on the work that needs humans." />
        <meta property="og:url" content="https://mazinmind.digital/home-services-automation" />
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 py-20">
        <section className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Home services automation</p>
            <h1 className="text-4xl font-display font-bold tracking-wider md:text-6xl">
              Turn missed calls into booked work without adding chaos.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              For HVAC, plumbing, electrical, roofing, and similar businesses, the cost of missed calls is immediate: quote requests stall, urgent jobs go unanswered, and the team loses time chasing leads that never convert.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ScheduleButton
                provider="hubspot"
                analyticsEvent="generate_lead"
                className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-primary px-8 text-base font-bold text-primary-foreground"
              >
                See How It Works
              </ScheduleButton>
              <ScheduleButton
                provider="hubspot"
                analyticsEvent="request_audit"
                className="inline-flex h-14 items-center justify-center rounded-full border border-primary/40 px-8 text-base font-bold text-primary"
              >
                Request a Revenue Leak Audit
              </ScheduleButton>
            </div>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-secondary/20 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Home className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Operational fit</p>
                <h2 className="text-2xl font-display font-bold">Built for residential service teams</h2>
              </div>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              {painPoints.map((item) => (
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
            <h2 className="text-xl font-display font-bold">Capture more jobs</h2>
            <p className="mt-3 text-muted-foreground">
              New inquiries are answered immediately, even when your crew is in the field or the office is closed.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <MessageSquareText className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">Qualify faster</h2>
            <p className="mt-3 text-muted-foreground">
              Gather the key details before your team gets involved so follow-up starts with the right context.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <ShieldCheck className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">Keep control</h2>
            <p className="mt-3 text-muted-foreground">
              Filters, rules, and human escalation keep the experience professional and manageable.
            </p>
          </article>
        </section>

        <section className="rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 md:p-12">
          <h2 className="text-3xl font-display font-bold tracking-wider md:text-5xl">The flow that keeps jobs moving</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {workflows.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-background/50 p-4 text-sm font-medium text-foreground">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <ScheduleButton
              provider="hubspot"
              analyticsEvent="book_consultation"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 text-base font-bold text-primary-foreground"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </ScheduleButton>
          </div>
        </section>
      </div>
    </Layout>
  );
}
