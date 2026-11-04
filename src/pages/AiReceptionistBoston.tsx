import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Clock3, Headphones, ShieldCheck } from "lucide-react";
import ScheduleButton from "@/components/ui/ScheduleButton";

const highlights = [
  "Design an after-hours intake and missed-call recovery workflow",
  "Capture approved service details, urgency, and callback preferences",
  "Route appointment requests and urgent issues to the right team member",
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
          content="AI-assisted receptionist workflow design for Boston service businesses. Plan missed-call recovery, after-hours inquiry capture, lead qualification, and human handoff."
        />
        <meta
          name="keywords"
          content="AI receptionist Boston, missed call workflow design, service business automation, after-hours inquiry intake, human handoff, contractor lead capture"
        />
        <link rel="canonical" href="https://mazinmind.digital/ai-receptionist-boston" />
        <meta property="og:title" content="AI Receptionist Boston | Missed-Call Recovery for Service Businesses" />
        <meta property="og:description" content="Design safer inquiry intake and missed-call recovery for Boston service businesses, with clear qualification and human escalation." />
        <meta property="og:url" content="https://mazinmind.digital/ai-receptionist-boston" />
        <meta property="og:image" content="https://mazinmind.digital/images/blog/lead-automation-graffiti.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Receptionist Boston | Missed-Call Recovery for Service Businesses" />
        <meta name="twitter:description" content="Plan after-hours inquiry intake, qualification, and human escalation for Greater Boston service businesses." />
        <meta name="twitter:image" content="https://mazinmind.digital/images/blog/lead-automation-graffiti.webp" />
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 py-20">
        <section className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">AI receptionist Boston</p>
            <h1 className="text-4xl font-display font-bold tracking-wider md:text-6xl">
              Design a better first response when the phone rings after hours.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              MazinMind designs AI-assisted receptionist workflows for Greater Boston service businesses. We map missed-call recovery, inquiry qualification, and human handoff before recommending integrations. The current browser demo is simulated; live phone, SMS, calendar, and CRM actions require separate configuration and testing.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ScheduleButton
                analyticsEvent="generate_lead"
                url="https://mazinmind-digital.github.io/Mazinmind-ai-receptionist-demo/"
                className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-primary px-8 text-base font-bold text-primary-foreground"
              >
                Explore the Demo
              </ScheduleButton>
              <ScheduleButton
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
                <h2 className="text-2xl font-display font-bold">Capture → qualify → route → follow-up</h2>
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
              Design a callback workflow so a missed call becomes an owned task instead of a silent opportunity.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">Smart qualification</h2>
            <p className="mt-3 text-muted-foreground">
              An approved intake flow can capture service details, urgency, and preferred contact time before a human takes over.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <ShieldCheck className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">Human escalation on the edge cases</h2>
            <p className="mt-3 text-muted-foreground">
              Complex, urgent, or sensitive conversations are designed to route to a real person who can use judgment.
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
              analyticsEvent="generate_lead"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 text-base font-bold text-primary-foreground"
            >
              Discuss My Project <ArrowRight className="h-4 w-4" />
            </ScheduleButton>
          </div>
        </section>
      </div>
    </Layout>
  );
}
