import { Link } from "react-router-dom";
import { ArrowRight, Bot, Megaphone, Workflow, Wrench, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GraffitiIcon } from "@/components/ui/GraffitiIcon";
import brainGreen from "@/assets/brain-green.png";

const offerCards = [
  {
    id: "ai-lead-generation-system",
    icon: Megaphone,
    tone: "accent" as const,
    title: "AI Lead Generation System",
    description:
      "Automatically find prospects, send outreach, and book meetings.",
    features: [
      "automated prospect discovery",
      "AI outreach messaging",
      "CRM integration",
    ],
    outcome: "Businesses typically see 5-15 new qualified leads per week.",
    ctaLink: "/contact?interest=ai-lead-generation-system",
    detailsLink: "/services/ai-marketing",
    ctaText: "Get This Installed",
  },
  {
    id: "ai-marketing-engine",
    icon: Bot,
    tone: "primary" as const,
    title: "AI Marketing Engine",
    description:
      "Automate SEO, content, ads, and social media marketing.",
    features: [
      "AI blog writing",
      "automated SEO optimization",
      "social media automation",
    ],
    outcome: "Consistent marketing without hiring a full team.",
    ctaLink: "/contact?interest=ai-marketing-engine",
    detailsLink: "/services/ai-marketing",
    ctaText: "Launch My AI Marketing Engine",
  },
  {
    id: "ai-operations-automation",
    icon: Workflow,
    tone: "electric" as const,
    title: "AI Operations Automation",
    description:
      "Remove repetitive manual tasks from your business workflows.",
    features: [
      "CRM automation",
      "workflow automation",
      "software integrations",
    ],
    outcome: "Save 20-40 hours per month of manual work.",
    ctaLink: "/contact?interest=ai-operations-automation",
    detailsLink: "/services/ai-automation",
    ctaText: "Automate My Operations",
  },
  {
    id: "ai-support-agent",
    icon: Wrench,
    tone: "warning" as const,
    title: "AI Customer Support Agent",
    description:
      "AI chatbot and email assistant trained on your business.",
    features: [
      "website chatbot",
      "email automation",
      "knowledge base AI",
    ],
    outcome: "Handle support questions without hiring more staff.",
    ctaLink: "/contact?interest=ai-support-agent",
    detailsLink: "/services/ai-automation",
    ctaText: "Install AI Support",
  },
];

export function ServicesSection() {
  return (
    <section id="ai-systems-install" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute right-0 top-0 h-full w-1/2 opacity-20"
        style={{
          backgroundImage: `url(${brainGreen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }}
      />
      <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 h-[300px] w-[300px] rounded-full bg-electric/20 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-5 text-5xl font-display font-bold tracking-wider md:text-6xl">
            AI Systems That Recover Leads and Remove Busywork
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            We install practical automation that responds faster, follows up consistently, and gives your team time back.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 lg:grid-cols-2">
          {offerCards.map((offer) => (
            <article
              key={offer.id}
              className="glass-vibrant rounded-2xl border border-primary/30 p-7 shadow-card"
            >
              <div className="mb-4 flex items-start gap-4">
                <GraffitiIcon icon={offer.icon} tone={offer.tone} size="lg" className="flex-shrink-0" />
                <div>
                  <h3 className="mb-2 text-2xl font-display font-bold text-foreground tracking-wide">
                    {offer.title}
                  </h3>
                  <p className="text-muted-foreground">{offer.description}</p>
                </div>
              </div>

              <ul className="mb-4 space-y-2">
                {offer.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-6 text-sm text-foreground/90">{offer.outcome}</p>

              <div className="flex flex-wrap items-center gap-3 border-t border-border/60 pt-4">
                <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                  <Link to={offer.ctaLink} aria-label={`Get ${offer.title} installed`}>
                    {offer.ctaText}
                  </Link>
                </Button>
                <Link
                  to={offer.detailsLink}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
                >
                  View details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
