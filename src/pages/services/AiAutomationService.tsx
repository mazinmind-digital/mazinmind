import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

const canonicalUrl = "https://mazinmind.digital/services/ai-automation";
const ogImage = "https://mazinmind.digital/apple-touch-icon.png";

const HUBSPOT_PORTAL_ID = "243856745";
const HUBSPOT_CONTACT_FORM_ID =
  import.meta.env.VITE_HUBSPOT_CONTACT_FORM_ID ??
  "8d1ae045-5353-4e44-97e8-17b3c597d5e1";
const CONTACT_INBOX_EMAIL = "rmazin@mazinmind.digital";

type AuditFormData = {
  name: string;
  email: string;
  company: string;
  bottleneck: string;
};

const plainEnglishExamples = [
  "automatic follow-ups to new leads",
  "auto-responders for FAQs",
  "task routing and reminders",
  "CRM updates and pipeline automation",
  "reporting and dashboards",
  "calendar booking and scheduling handoff",
];

const systems = [
  {
    title: "Lead Capture + Instant Response System",
    description:
      "Capture inbound leads and respond in minutes with qualification built in.",
    features: [
      "form-to-CRM lead capture",
      "instant AI lead response",
      "auto-qualification and routing",
    ],
    outcome: "Outcome: faster lead response and reduced lead drop-off.",
    cta: "/contact?interest=lead-capture-instant-response",
  },
  {
    title: "AI Follow-Up + Nurture System",
    description:
      "Automate follow-up sequences so leads do not go cold between touchpoints.",
    features: [
      "multistep follow-up workflows",
      "AI-generated response variations",
      "engagement-triggered nurture paths",
    ],
    outcome: "Outcome: better follow-through and more booked conversations.",
    cta: "/contact?interest=ai-follow-up-nurture",
  },
  {
    title: "CRM Automation + Pipeline Hygiene",
    description:
      "Keep your CRM clean and current without manual data entry overhead.",
    features: [
      "automatic contact/property updates",
      "pipeline stage progression logic",
      "duplicate and stale record controls",
    ],
    outcome: "Outcome: cleaner pipeline visibility and fewer missed deals.",
    cta: "/contact?interest=crm-automation-pipeline",
  },
  {
    title: "Workflow Automation (intake, scheduling, paperwork)",
    description:
      "Automate repetitive operations across intake, scheduling, and admin handoffs.",
    features: [
      "intake form automation",
      "scheduling and reminder workflows",
      "document and approval routing",
    ],
    outcome: "Outcome: less admin drag and faster operations execution.",
    cta: "/contact?interest=workflow-automation",
  },
  {
    title: "AI Customer Support Agent (chat + email + KB)",
    description:
      "Deploy AI support across chat and email using your knowledge base.",
    features: [
      "website chat assistant",
      "email response drafts and triage",
      "knowledge base answer retrieval",
    ],
    outcome: "Outcome: quicker support response with lower staffing pressure.",
    cta: "/contact?interest=ai-customer-support-agent",
  },
  {
    title: "Reporting + Ops Dashboards (weekly insights)",
    description:
      "Get simple weekly insight dashboards tied to leads, ops, and team output.",
    features: [
      "automated KPI rollups",
      "weekly summary reports",
      "owner-ready operations snapshots",
    ],
    outcome: "Outcome: clearer weekly decisions without manual reporting work.",
    cta: "/contact?interest=reporting-ops-dashboards",
  },
];

const installSteps = [
  {
    title: "1) Audit (15-30 min)",
    timeline: "Timeline: Day 1",
    description:
      "We identify high-impact bottlenecks and map where automation will produce the fastest ROI.",
    clientNeeds: "Client provides: current process notes, tools used, and main bottlenecks.",
  },
  {
    title: "2) Design (what to automate + tools)",
    timeline: "Timeline: Days 2-4",
    description:
      "We design the workflow architecture, choose tool paths, and confirm success metrics.",
    clientNeeds: "Client provides: system access details and approval of automation scope.",
  },
  {
    title: "3) Install (build + integrate)",
    timeline: "Timeline: Week 1-3",
    description:
      "We build, connect, and test workflows across CRM, email, forms, and scheduling layers.",
    clientNeeds: "Client provides: staging/live access and feedback on business rules.",
  },
  {
    title: "4) Train + Tune (handoff + improvements)",
    timeline: "Timeline: Week 2-5",
    description:
      "We hand off SOPs, train your team, and tune automations based on real usage.",
    clientNeeds: "Client provides: team training attendees and rollout ownership.",
  },
];

const packages = [
  {
    name: "Starter AI Automation",
    price: "$1500",
    idealFor: "Ideal for: teams starting automation with one high-impact workflow.",
    includes: [
      "one automation system",
      "CRM integration",
      "workflow automation",
      "setup + training",
    ],
    delivery: "Delivery: 1-2 weeks",
    ctaText: "Start Automation",
    ctaLink: "/contact?interest=starter-ai-automation",
  },
  {
    name: "AI Marketing Engine",
    price: "$3000",
    idealFor: "Ideal for: teams needing consistent AI-powered demand generation.",
    includes: [
      "AI content generation",
      "SEO automation",
      "social media automation",
      "marketing workflow automation",
    ],
    delivery: "Delivery: 2-3 weeks",
    ctaText: "Launch My AI Marketing",
    ctaLink: "/services/ai-marketing",
  },
  {
    name: "AI Business System",
    price: "$7500",
    idealFor: "Ideal for: sales + marketing + operations automation in one system.",
    includes: [
      "AI lead generation system",
      "AI marketing automation",
      "workflow automation",
      "analytics dashboards",
    ],
    delivery: "Delivery: 3-5 weeks",
    ctaText: "Install My AI System",
    ctaLink: "/contact?interest=ai-business-system",
  },
  {
    name: "Enterprise / Custom",
    price: "Book a Call",
    idealFor: "Ideal for: advanced architecture and custom automation requirements.",
    includes: [
      "AI infrastructure",
      "custom automation tools",
      "cloud architecture",
      "DevOps automation",
    ],
    delivery: "Delivery: scoped after discovery",
    ctaText: "Book a Strategy Call",
    ctaLink: "/contact?interest=enterprise-custom",
  },
];

const tools = [
  "Google Workspace / Microsoft 365",
  "HubSpot / Salesforce",
  "Calendly",
  "Zapier/Make",
  "Website forms",
  "Slack",
  "Notion/Airtable",
  "CRMs",
];

const faqs = [
  {
    question: "What is AI automation for small businesses?",
    answer:
      "AI automation connects your tools so repetitive tasks run automatically, such as lead follow-up, CRM updates, support replies, and reporting.",
  },
  {
    question: "How much does AI automation cost?",
    answer:
      "Most projects start at $1500 and scale based on scope. Starter and packaged options reduce time-to-value for common use cases.",
  },
  {
    question: "How fast can you install an automation system?",
    answer:
      "Simple systems can launch in 1-2 weeks. Larger cross-functional automations usually take 3-5 weeks.",
  },
  {
    question: "Will this work with my current CRM/tools?",
    answer:
      "In most cases, yes. We design around your current stack first and only recommend changes when there is a clear ROI reason.",
  },
  {
    question: "Do I need a lot of data for AI automation?",
    answer:
      "No. Many automations start with your current forms, CRM records, and SOPs, then improve as new data comes in.",
  },
  {
    question: "Is this a chatbot or real automation?",
    answer:
      "This is real automation. Chatbots can be one component, but the core value is workflow execution across your business systems.",
  },
  {
    question: "What businesses benefit most?",
    answer:
      "Service businesses, agencies, B2B teams, and operations-heavy SMBs benefit quickly because manual follow-up and admin work are common bottlenecks.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "We need your top bottlenecks, tool stack access details, and one decision-maker for implementation approvals.",
  },
];

function splitName(name: string) {
  const normalized = name.trim().replace(/\s+/g, " ");
  if (!normalized) {
    return { firstName: "", lastName: "" };
  }

  const [firstName, ...rest] = normalized.split(" ");
  return {
    firstName,
    lastName: rest.join(" "),
  };
}

function buildMailtoLink(data: AuditFormData) {
  const subject = encodeURIComponent(
    `Free AI Automation Audit request from ${data.name || "Website"}`,
  );
  const body = encodeURIComponent(
    [
      "Free AI Automation Audit request",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company}`,
      `Biggest Bottleneck: ${data.bottleneck}`,
    ].join("\n"),
  );

  return `mailto:${CONTACT_INBOX_EMAIL}?subject=${subject}&body=${body}`;
}

async function submitAuditRequest(data: AuditFormData) {
  const { firstName, lastName } = splitName(data.name);

  const context: Record<string, string> = {
    pageUri: window.location.href,
    pageName: document.title,
  };

  const hutkMatch = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/);
  if (hutkMatch?.[1]) {
    context.hutk = decodeURIComponent(hutkMatch[1]);
  }

  const payload = {
    fields: [
      { name: "0-2/name", value: data.name },
      { name: "firstname", value: firstName },
      { name: "lastname", value: lastName },
      { name: "email", value: data.email },
      { name: "company", value: data.company },
      {
        name: "message",
        value: `AI automation audit request. Biggest bottleneck: ${data.bottleneck}`,
      },
    ],
    context,
  };

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_CONTACT_FORM_ID}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(errorBody || `HubSpot request failed: ${response.status}`);
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MazinMind Digital",
  url: "https://mazinmind.digital/services/ai-automation",
  description:
    "AI automation systems for small businesses: workflow automation, lead response automation, CRM automation, and AI support agents.",
  serviceType: "AI Automation",
  areaServed: "United States",
};

export default function AiAutomationService() {
  const [formData, setFormData] = useState<AuditFormData>({
    name: "",
    email: "",
    company: "",
    bottleneck: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mailtoLink = useMemo(() => buildMailtoLink(formData), [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.bottleneck.trim()) {
      toast.error("Please complete name, email, and biggest bottleneck.");
      return;
    }

    setIsLoading(true);

    try {
      await submitAuditRequest(formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", bottleneck: "" });
      toast.success("Audit request submitted.");
    } catch (error) {
      console.error("AI automation audit submission failed", error);
      window.location.href = mailtoLink;
      toast.error("Could not submit to HubSpot. Opened your email client as fallback.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>AI Automation for Small Businesses | MazinMind Digital</title>
        <meta
          name="description"
          content="We install AI automation systems that save time, reduce costs, and generate leads. Workflow automation, CRM automation, AI support agents, and more. Get a Free AI Automation Audit."
        />
        <meta property="og:title" content="AI Automation for Small Businesses | MazinMind Digital" />
        <meta
          property="og:description"
          content="We install AI automation systems that save time, reduce costs, and generate leads. Workflow automation, CRM automation, AI support agents, and more. Get a Free AI Automation Audit."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation for Small Businesses | MazinMind Digital" />
        <meta
          name="twitter:description"
          content="We install AI automation systems that save time, reduce costs, and generate leads. Workflow automation, CRM automation, AI support agents, and more. Get a Free AI Automation Audit."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(professionalServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -right-12 top-12 h-[320px] w-[320px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute -left-10 bottom-4 h-[280px] w-[280px] rounded-full bg-accent/20 blur-[100px]" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-6 text-5xl font-display font-bold tracking-wider md:text-6xl">
              AI Automation for Small Businesses
            </h1>
            <p className="mx-auto mb-8 max-w-4xl text-lg text-muted-foreground md:text-xl">
              We install production-grade AI automation systems that eliminate
              repetitive work, speed up lead response, and keep your business
              running without hiring more staff.
            </p>

            <ul className="mx-auto mb-8 grid max-w-4xl grid-cols-1 gap-3 text-left md:grid-cols-3">
              <li className="glass rounded-xl border border-primary/35 p-3 text-sm text-foreground">
                <span className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  Automate workflows and admin tasks
                </span>
              </li>
              <li className="glass rounded-xl border border-primary/35 p-3 text-sm text-foreground">
                <span className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  Capture and qualify leads automatically
                </span>
              </li>
              <li className="glass rounded-xl border border-primary/35 p-3 text-sm text-foreground">
                <span className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  Integrate AI with your existing tools (CRM, email, calendars,
                  forms)
                </span>
              </li>
            </ul>

            <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#free-ai-automation-audit"
                className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-primary px-8 text-base font-bold tracking-wide text-primary-foreground glow-primary hover:opacity-90"
              >
                Get a Free AI Automation Audit
              </a>
              <a
                href="#packages"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary/70 bg-black/30 px-8 text-base font-bold tracking-wide text-primary hover:bg-primary/10"
              >
                See Packages
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-semibold">
              <Link to="/contact" className="text-primary hover:text-primary/80">
                Contact
              </Link>
              <Link to="/services/ai-marketing" className="text-accent hover:text-accent/80">
                AI Marketing Service
              </Link>
              <Link to="/services/devops-cloud" className="text-electric hover:text-electric/80">
                DevOps + Cloud Service
              </Link>
              <Link to="/#free-ai-audit" className="text-warning hover:text-warning/80">
                Homepage Audit CTA
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-primary/30 p-8 glass-vibrant md:p-10">
            <h2 className="mb-4 text-4xl font-display font-bold tracking-wider text-foreground">
              What AI Automation Means (in plain English)
            </h2>
            <p className="mb-5 text-muted-foreground">
              AI automation means setting up your business tools so routine work
              runs automatically. It is not hype. It is practical workflow
              execution that saves hours and reduces missed follow-up.
            </p>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {plainEnglishExamples.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h2 className="mb-3 text-4xl font-display font-bold tracking-wider md:text-5xl">
              AI Systems We Install
            </h2>
            <p className="text-muted-foreground">
              Production-focused automation systems built around your current
              process, tools, and growth targets.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
            {systems.map((system) => (
              <article
                key={system.title}
                className="glass-vibrant rounded-2xl border border-primary/30 p-6"
              >
                <h3 className="mb-2 text-2xl font-display font-bold tracking-wide text-foreground">
                  {system.title}
                </h3>
                <p className="mb-4 text-muted-foreground">{system.description}</p>

                <ul className="mb-4 space-y-2">
                  {system.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mb-5 text-sm text-foreground/90">{system.outcome}</p>

                <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                  <Link to={system.cta}>Get this installed</Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-2xl border border-primary/30 p-8 glass-vibrant md:p-10">
            <h2 className="mb-6 text-4xl font-display font-bold tracking-wider text-foreground">
              How the Install Works
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {installSteps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-xl border border-primary/20 bg-background/50 p-5"
                >
                  <h3 className="mb-1 text-2xl font-display font-bold tracking-wide text-foreground">
                    {step.title}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-primary">{step.timeline}</p>
                  <p className="mb-2 text-sm text-muted-foreground">{step.description}</p>
                  <p className="text-xs text-accent">{step.clientNeeds}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h2 className="mb-3 text-4xl font-display font-bold tracking-wider md:text-5xl">
              Packages
            </h2>
            <p className="text-muted-foreground">
              Fixed package options for fast decision-making and predictable
              delivery.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
            {packages.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-primary/30 p-6 shadow-card glass"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-3xl font-display font-bold tracking-wide text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-2xl font-bold text-primary">{item.price}</p>
                </div>

                <p className="mb-4 text-sm text-foreground/90">{item.idealFor}</p>

                <ul className="mb-4 space-y-2">
                  {item.includes.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <p className="mb-5 text-sm font-medium text-accent">{item.delivery}</p>

                <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                  <Link to={item.ctaLink}>
                    {item.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-primary/30 p-8 glass-vibrant md:p-10">
            <h2 className="mb-5 text-4xl font-display font-bold tracking-wider text-foreground">
              Typical Results
            </h2>
            <ul className="mb-4 space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                Faster lead response (minutes, not hours)
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                Reduced admin workload (10-40 hours/month)
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                Better follow-through (fewer missed leads)
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                Cleaner CRM + reporting
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Results vary; examples are illustrative.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-primary/30 p-8 glass md:p-10">
            <h2 className="mb-5 text-4xl font-display font-bold tracking-wider text-foreground">
              Tools We Work With
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="rounded-lg border border-primary/20 bg-background/50 px-4 py-3 text-sm text-foreground"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="free-ai-automation-audit" className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl border border-primary/30 p-8 glass-vibrant md:p-12">
            <h2 className="mb-4 text-4xl font-display font-bold tracking-wider md:text-5xl">
              Get a Free AI Automation Audit
            </h2>

            <ul className="mb-7 space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                10 automation opportunities in your business
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                recommended AI tools and systems
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                a 30-day rollout plan
              </li>
            </ul>

            {isSubmitted ? (
              <div className="rounded-2xl border border-primary/40 bg-background/60 p-6">
                <p className="text-foreground">
                  Thanks. We&apos;ll reply within 1 business day with next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2" noValidate>
                <div>
                  <Label htmlFor="audit-name" className="mb-2 inline-block">
                    Name
                  </Label>
                  <Input
                    id="audit-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="audit-email" className="mb-2 inline-block">
                    Email
                  </Label>
                  <Input
                    id="audit-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="audit-company" className="mb-2 inline-block">
                    Company
                  </Label>
                  <Input
                    id="audit-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="audit-bottleneck" className="mb-2 inline-block">
                    Biggest Bottleneck
                  </Label>
                  <Textarea
                    id="audit-bottleneck"
                    name="bottleneck"
                    value={formData.bottleneck}
                    onChange={handleChange}
                    placeholder="What is slowing down your team right now?"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    className="h-12 w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Get a Free AI Automation Audit
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-muted-foreground">
                    If form submission is blocked, use{" "}
                    <a href={mailtoLink} className="text-primary hover:underline">
                      email fallback
                    </a>
                    .
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-primary/30 p-8 glass-vibrant md:p-10">
            <h2 className="mb-6 text-4xl font-display font-bold tracking-wider text-foreground">
              AI Automation FAQ
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`automation-faq-${index}`}
                  className="rounded-xl border border-primary/20 bg-background/50 px-5"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-primary/30 p-8 text-center glass md:p-10">
            <h2 className="mb-4 text-4xl font-display font-bold tracking-wider text-foreground">
              Ready to stop wasting time on repetitive tasks?
            </h2>
            <p className="mb-6 text-muted-foreground">
              We can map the fastest automation wins and install systems that
              produce measurable ROI.
            </p>
            <a
              href="#free-ai-automation-audit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-primary px-7 font-bold text-primary-foreground hover:opacity-90"
            >
              Get My Free AI Automation Audit
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
