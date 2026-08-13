import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Headphones, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import ScheduleButton from "@/components/ui/ScheduleButton";

const features = [
  "Answer missed calls and after-hours inquiries",
  "Gather lead information and qualify the request",
  "Provide consistent answers to common customer questions",
  "Route urgent issues or appointment requests to the right person",
];

export default function AiReceptionist() {
  return (
    <Layout>
      <Helmet>
        <title>AI Receptionist | MazinMind Digital</title>
        <meta
          name="description"
          content="An AI receptionist helps your business answer calls, qualify leads, and handle common customer questions without missing opportunities."
        />
        <meta
          name="keywords"
          content="AI receptionist, AI phone answering service, automated answering service, live AI receptionist, inbound call automation"
        />
        <link rel="canonical" href="https://mazinmind.digital/ai-receptionist" />
      </Helmet>

      <main className="mx-auto max-w-6xl px-4 py-20">
        <section className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              AI receptionist
            </p>
            <h1 className="text-4xl font-display font-bold tracking-wider md:text-6xl">
              Never miss a call or inquiry again.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Give customers a professional first response even when your team is busy,
              out in the field, or unavailable after hours.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ScheduleButton
                provider="hubspot"
                analyticsEvent="landing_page_cta_click"
                className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-primary px-8 text-base font-bold text-primary-foreground"
              >
                Book a Demo
              </ScheduleButton>
              <Link
                to="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full border border-primary/40 px-8 text-base font-bold text-primary"
              >
                Ask a Question
              </Link>
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
            <MessageSquare className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">Eleven-hour coverage without extra staff</h2>
            <p className="mt-3 text-muted-foreground">
              Answer common questions and capture details for new prospects even when your office is closed.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">Professional first impression</h2>
            <p className="mt-3 text-muted-foreground">
              Customers hear a clear, branded experience that feels polished instead of rushed or confusing.
            </p>
          </article>
        </section>

        <section className="mt-16 rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-display font-bold tracking-wider md:text-5xl">
            See how an AI receptionist could keep more calls and leads from slipping away.
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
