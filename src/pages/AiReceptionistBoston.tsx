import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Clock3, Headphones, ShieldCheck } from "lucide-react";
import ScheduleButton from "@/components/ui/ScheduleButton";

const highlights = [
  "Answer missed calls 24/7 without sacrificing the experience",
  "Capture service details, urgency, and callback preferences",
  "Book new jobs and route urgent issues to the right team member",
  "Escalate exceptions to a human instead of leaving customers stuck",
];

const useCases = [
  "HVAC and emergency service calls",
  "Plumbing and electrical emergencies",
  "Roofing estimates and storm response",
  "General contractor intake and quote requests",
  "Auto repair scheduling requests",
  "Salons, spas, and appointment-based service businesses",
];

export default function AiReceptionistBoston() {
  return (
    <Layout>
      <Helmet>
        <title>AI Receptionist Boston | Missed-Call Recovery for Service Businesses | MazinMind Digital</title>
        <meta
          name="description"
          content="AI receptionist for Boston service businesses. Capture missed calls, answer after-hours questions, qualify leads, and hand off urgent requests to the right person."
        />
        <meta
          name="keywords"
          content="AI receptionist Boston, missed call recovery, service business automation, after-hours call answering, appointment booking, contractor lead capture"
        />
        <link rel="canonical" href="https://mazinmind.digital/ai-receptionist-boston" />
        <meta property="og:title" content="AI Receptionist Boston | Missed-Call Recovery for Service Businesses" />
        <meta property="og:description" content="Answer after-hours calls, qualify opportunities, and keep humans in control with a monitored AI receptionist built for Boston service businesses." />
        <meta property="og:url" content="https://mazinmind.digital/ai-receptionist-boston" />
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 py-20">
        <section className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">AI receptionist Boston</p>
            <h1 className="text-4xl font-display font-bold tracking-wider md:text-6xl">
              Stop losing customers when the phone rings after hours.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              MazinMind builds AI receptionist systems for Greater Boston service businesses that need fast responses, simple qualification, and clean human escalation. We help you capture missed leads without letting routine inquiries overwhelm your team.
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
                <Headphones className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Live workflow</p>
                <h2 className="text-2xl font-display font-bold">Call → qualify → route → follow-up</h2>
              </div>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              {highlights.map((item) => (
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
            <Clock3 className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">After-hours coverage</h2>
            <p className="mt-3 text-muted-foreground">
              A missed call becomes a structured response instead of a silent opportunity.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">Smart qualification</h2>
            <p className="mt-3 text-muted-foreground">
              Capture urgency, reason for service, and preferred contact time before a human is brought in.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <ShieldCheck className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">Human escalation on the edge cases</h2>
            <p className="mt-3 text-muted-foreground">
              Complex or sensitive conversations still route to a real person when they need judgment.
            </p>
          </article>
        </section>

        <section className="rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 md:p-12">
          <h2 className="text-3xl font-display font-bold tracking-wider md:text-5xl">Built for the service businesses that live on fast response.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
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
