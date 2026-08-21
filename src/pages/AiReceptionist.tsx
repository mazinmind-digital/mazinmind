import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Headphones, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import ScheduleButton from "@/components/ui/ScheduleButton";

const features = [
  "Handle common questions and inquiries automatically",
  "Collect customer details and qualify the request",
  "Book appointments and reschedule with no back-and-forth",
  "Alert your team to urgent issues or new opportunities",
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

      <div className="mx-auto max-w-6xl px-4 py-20">
        <section className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              AI receptionist
            </p>
            <h1 className="text-4xl font-display font-bold tracking-wider md:text-6xl">
              Never miss a call or inquiry again.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Handle routine inquiries, collect customer details, route requests, and help customers book appointments. Your team handles the conversations that need human judgment.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ScheduleButton
                provider="hubspot"
                analyticsEvent="landing_page_cta_click"
                className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-primary px-8 text-base font-bold text-primary-foreground"
              >
                Get a Free 15-Minute Automation Audit
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
            <h2 className="text-xl font-display font-bold">Never Miss a Call or Inquiry</h2>
            <p className="mt-3 text-muted-foreground">
              After-hours calls and web inquiries are answered immediately with a professional response, not a voicemail or silence.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-xl font-display font-bold">Faster Appointments, Less Back-and-Forth</h2>
            <p className="mt-3 text-muted-foreground">
              Customers book appointments directly without waiting for someone to call them back. Your calendar and team stay informed.
            </p>
          </article>
        </section>

        <section className="mt-16 rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-display font-bold tracking-wider md:text-5xl">
            Stop Missing Calls and Inquiries
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            An AI receptionist works around the clock so you never miss an opportunity, appointment request, or customer question.
          </p>
          <div className="mt-8 flex justify-center">
            <ScheduleButton
              provider="hubspot"
              analyticsEvent="scheduling_cta_click"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 text-base font-bold text-primary-foreground"
            >
              Schedule a Free Consultation <ArrowRight className="h-4 w-4" />
            </ScheduleButton>
          </div>
        </section>
      </div>
    </Layout>
  );
}
