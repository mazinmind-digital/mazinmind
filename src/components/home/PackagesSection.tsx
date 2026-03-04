import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Package = {
  name: string;
  price: string;
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
    price: "$1,500",
    includes: [
      "One system installed (lead follow-up, CRM automation, or intake workflow)",
      "Discovery call + implementation setup + handoff SOP",
      "One revision cycle and deployment support",
    ],
    idealFor: "Ideal for SMBs starting AI automation for small business operations.",
    timeframe: "Delivery timeframe: 7-10 business days",
    ctaLink: "/contact?interest=starter-ai-automation",
    ctaLabel: "Get Started",
  },
  {
    name: "AI Marketing Engine",
    price: "$3,000",
    includes: [
      "AI marketing automation setup for SEO/content workflows",
      "Publishing cadence, optimization checklist, and analytics dashboard",
      "Light ad creative/testing workflow integration",
    ],
    idealFor: "Ideal for teams that need consistent demand generation from content and search.",
    timeframe: "Delivery timeframe: 14-21 business days",
    ctaLink: "/contact?interest=ai-marketing-engine-package",
    ctaLabel: "Get Started",
    highlighted: true,
  },
  {
    name: "AI Business System",
    price: "$7,500",
    includes: [
      "AI lead generation system + business process automation rollout",
      "CRM automation, custom AI workflows, and integration architecture",
      "Team training, monitoring, and optimization handoff",
    ],
    idealFor: "Ideal for SMBs that want one connected growth and operations system.",
    timeframe: "Delivery timeframe: 30-45 business days",
    ctaLink: "/contact?interest=ai-business-system",
    ctaLabel: "Get Started",
  },
  {
    name: "Enterprise / Custom",
    price: "Book a Call",
    includes: [
      "Advanced architecture for multi-team environments",
      "DevOps automation consulting, cloud architecture, and secure deployments",
      "Phased implementation roadmap with SLAs and governance",
    ],
    idealFor: "Ideal for advanced teams with complex systems and compliance requirements.",
    timeframe: "Delivery timeframe: scoped after discovery",
    ctaLink: "/contact?interest=enterprise-custom",
    ctaLabel: "Book a Call",
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
            AI AUTOMATION <span className="text-gradient-accent">PACKAGES</span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Fixed-scope packages for faster decisions. Pick a tier and we install
            the system.
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
              <div className="mb-5 flex items-start justify-between gap-4">
                <h3 className="text-3xl font-display font-bold tracking-wide text-foreground">
                  {item.name}
                </h3>
                <p className="text-2xl font-bold text-primary">{item.price}</p>
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
      </div>
    </section>
  );
}
