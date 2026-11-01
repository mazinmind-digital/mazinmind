import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Package = {
  name: string;
  price: string;
  benchmark: string;
  includes: string[];
  idealFor: string;
  timeframe: string;
  ctaLink: string;
  ctaLabel: string;
  highlighted?: boolean;
};

const packages: Package[] = [
  {
    name: "Starter AI Automation",
    price: "$1,500–$3,500",
    benchmark: "Fixed-scope starter implementation",
    includes: [
      "One focused automation workflow",
      "One CRM or business-tool integration",
      "Basic alerts and error handling",
      "Documentation and handoff training",
    ],
    idealFor: "A small business automating one repetitive, measurable task.",
    timeframe: "Typical delivery: 1–2 weeks",
    ctaLink: "/contact?interest=starter-ai-automation",
    ctaLabel: "Discuss Starter Package",
  },
  {
    name: "AI Lead Capture & Nurture",
    price: "$3,500–$7,500",
    benchmark: "Lead intake, CRM routing, and follow-up",
    includes: [
      "Website lead-capture workflow",
      "CRM field mapping and lead-source tracking",
      "Email nurture sequence setup",
      "Consent, opt-out, and failure-path checks",
      "Test plan and reporting basics",
    ],
    idealFor: "Businesses that lose opportunities through slow or inconsistent follow-up.",
    timeframe: "Typical delivery: 2–3 weeks",
    ctaLink: "/contact?interest=ai-lead-capture-nurture",
    ctaLabel: "Discuss Lead Automation",
    highlighted: true,
  },
  {
    name: "AI Business System",
    price: "$7,500–$15,000",
    benchmark: "Multi-step workflow implementation",
    includes: [
      "Up to three connected automation workflows",
      "CRM and approved business-app integrations",
      "Human handoff and exception handling",
      "Operational dashboard and acceptance tests",
      "Documentation and team training",
    ],
    idealFor: "Teams ready to connect lead management, service delivery, and reporting.",
    timeframe: "Typical delivery: 3–5 weeks",
    ctaLink: "/contact?interest=ai-business-system",
    ctaLabel: "Scope My System",
  },
  {
    name: "Custom AI & Cloud Architecture",
    price: "$125–$250/hour",
    benchmark: "Scoped project estimate or time-and-materials",
    includes: [
      "Architecture and technical discovery",
      "Cloud, CI/CD, and deployment automation",
      "Custom integrations and AI-assisted workflows",
      "Security, reliability, and cost review",
    ],
    idealFor: "Complex requirements, existing platforms, and teams needing senior engineering support.",
    timeframe: "Timeline and fixed-price options confirmed after discovery",
    ctaLink: "/contact?interest=custom-ai-cloud-architecture",
    ctaLabel: "Request a Scope",
  },
];

export function PackagesSection() {
  return (
    <section id="packages" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-secondary/25" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute -top-20 right-0 h-[320px] w-[320px] rounded-full bg-primary/20 blur-[100px]" />
      <div className="absolute -bottom-24 left-0 h-[320px] w-[320px] rounded-full bg-accent/20 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-5 text-5xl font-display font-bold tracking-wider md:text-6xl">
            AI Implementation Packages
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Practical implementation, clear deliverables, and an agreed scope before work begins.
            Start with one high-value workflow, then expand when the numbers justify it.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`rounded-2xl border p-7 shadow-card ${
                item.highlighted
                  ? "glass-vibrant border-primary/50 glow-primary"
                  : "glass border-border/70"
              }`}
            >
              <div className="mb-5">
                <h3 className="text-3xl font-display font-bold tracking-wide text-foreground">
                  {item.name}
                </h3>
                <p className="mt-3 text-3xl font-bold text-primary">{item.price}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.benchmark}</p>
              </div>

              <ul className="mb-5 space-y-2">
                {item.includes.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-2 text-sm text-foreground/90">{item.idealFor}</p>
              <p className="mb-6 text-sm font-medium text-accent">{item.timeframe}</p>

              <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                <Link to={item.ctaLink} aria-label={`${item.ctaLabel} for ${item.name}`}>
                  {item.ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-5xl rounded-xl border border-border/70 bg-background/60 p-5 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Pricing notes</p>
          <p className="mt-2">
            These are planning ranges in USD, not binding quotes. Final pricing depends on integrations,
            data quality, security requirements, and acceptance criteria. Third-party subscriptions,
            usage charges, telephony, and paid AI/API costs are separate and require approval before purchase.
            Market reference: independent AI consulting commonly ranges roughly from $75–$400/hour, while
            small-to-mid implementation projects can range from several thousand dollars to $25,000+.
            MazinMind's packages are designed to start with narrower, testable scopes.
          </p>
        </div>
      </div>
    </section>
  );
}
