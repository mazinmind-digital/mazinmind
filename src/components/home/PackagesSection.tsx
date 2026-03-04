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
    price: "$1500",
    includes: [
      "one automation system",
      "CRM integration",
      "workflow automation",
      "setup + training",
    ],
    idealFor: "Perfect for businesses just getting started with AI.",
    timeframe: "Delivery: 1-2 weeks",
    ctaLink: "/contact?interest=starter-ai-automation",
    ctaLabel: "Start Automation",
  },
  {
    name: "AI Marketing Engine",
    price: "$3000",
    includes: [
      "AI content generation",
      "SEO automation",
      "social media automation",
      "marketing workflow automation",
    ],
    idealFor: "Automated marketing system powered by AI.",
    timeframe: "Delivery: 2-3 weeks",
    ctaLink: "/contact?interest=ai-marketing-engine-package",
    ctaLabel: "Launch My AI Marketing",
    highlighted: true,
  },
  {
    name: "AI Business System",
    price: "$7500",
    includes: [
      "AI lead generation system",
      "AI marketing automation",
      "workflow automation",
      "analytics dashboards",
    ],
    idealFor:
      "Full AI automation system for sales, marketing, and operations.",
    timeframe: "Delivery: 3-5 weeks",
    ctaLink: "/contact?interest=ai-business-system",
    ctaLabel: "Install My AI System",
  },
  {
    name: "Enterprise AI Architecture",
    price: "Custom",
    includes: [
      "AI infrastructure",
      "custom automation tools",
      "cloud architecture",
      "DevOps automation",
    ],
    idealFor: "Designed for advanced teams with multi-system requirements.",
    timeframe: "Delivery: scoped after strategy call",
    ctaLink: "/contact?interest=enterprise-custom",
    ctaLabel: "Book a Strategy Call",
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
            AI Automation Packages
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
