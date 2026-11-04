import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Headphones, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import ScheduleButton from "@/components/ui/ScheduleButton";

const features = [
  "Map common questions and approved answers for routine inquiries",
  "Capture the details a team needs to qualify and route each request",
  "Design appointment-request handoffs around the customer’s actual calendar",
  "Route urgent or complex requests to a named human contact",
];

export default function AiReceptionist() {
  return (
    <Layout>
      <Helmet>
        <title>AI Receptionist | MazinMind Digital</title>
        <meta
          name="description"
          content="Plan an AI-assisted intake workflow for calls and web inquiries, with clear qualification rules and human escalation."
        />
        <meta
          name="keywords"
          content="AI receptionist workflow design, AI-assisted intake, missed-call recovery, lead qualification, human handoff, CRM automation"
        />
        <link rel="canonical" href="https://mazinmind.digital/ai-receptionist" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Receptionist | MazinMind Digital" />
        <meta property="og:description" content="Plan an AI receptionist workflow for your business: qualify inquiries, route requests, and reduce missed opportunities with clear human handoffs." />
        <meta property="og:url" content="https://mazinmind.digital/ai-receptionist" />
        <meta property="og:site_name" content="MazinMind Digital" />
        <meta property="og:image" content="https://mazinmind.digital/images/blog/lead-automation-graffiti.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Receptionist | MazinMind Digital" />
        <meta name="twitter:description" content="Plan an AI receptionist workflow for your business: qualify inquiries, route requests, and reduce missed opportunities with clear human handoffs." />
        <meta name="twitter:image" content="https://mazinmind.digital/images/blog/lead-automation-graffiti.webp" />
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 py-20">
        <section className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              AI receptionist
            </p>
            <h1 className="text-4xl font-display font-bold tracking-wider md:text-6xl">
              Build a better first response for every inquiry.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We design AI-assisted intake workflows that organize routine questions, capture useful details, and route exceptions to your team. Phone, SMS, calendar, and CRM actions are enabled only after the required integrations are configured and tested.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ScheduleButton
                analyticsEvent="landing_page_cta_click"
                className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-primary px-8 text-base font-bold text-primary-foreground"
              >
                Request a Free AI Audit
              </ScheduleButton>
              <Link
                to="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full border border-primary/40 px-8 text-base font-bold text-primary"
              >
                Talk to MazinMind
              </Link>
              <a
                href="https://mazinmind-digital.github.io/Mazinmind-ai-receptionist-demo/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-full border border-border px-8 text-base font-bold text-foreground"
              >
                Explore the Demo
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-secondary/20 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Headphones className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">What it does</p>
                <h2 className="text-2xl font-display font-bold">Answer, qualify, and route</h2>
              </div>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-6">
            <Headphones className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">Build a Better Intake Path</h2>
            <p className="mt-3 text-muted-foreground">
              Design a clear after-hours intake and callback process so inquiries have an owner instead of disappearing into an unattended inbox.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">Appointment Requests With Human Control</h2>
            <p className="mt-3 text-muted-foreground">
              Connect appointment requests to a real calendar only after the provider, availability rules, and confirmation flow are configured and tested. Until then, requests remain requests, not confirmed bookings.
            </p>
          </article>
        </section>

        <section className="mt-16 rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-display font-bold tracking-wider md:text-5xl">
            Make Your Lead-Handling Process More Reliable
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A properly configured intake system can help capture after-hours inquiries and route them to the right person. Actual coverage, response time, and booking capability depend on the integrations and support model selected for your business.
          </p>
          <div className="mt-8 flex justify-center">
            <ScheduleButton
              analyticsEvent="request_audit"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 text-base font-bold text-primary-foreground"
            >
              Request a Free AI Audit <ArrowRight className="h-4 w-4" />
            </ScheduleButton>
          </div>
        </section>
      </div>
    </Layout>
  );
}
