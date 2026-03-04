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
      "We install an AI lead generation system that handles prospecting, outreach, and calendar booking for your team.",
    features: [
      "ICP targeting and account list building",
      "Personalized multichannel outreach sequences",
      "Automated meeting qualification and booking",
    ],
    outcome:
      "Typical outcome: a steadier flow of qualified meetings without manual prospecting all day.",
    ctaLink: "/contact?interest=ai-lead-generation-system",
    detailsLink: "/services/ai-marketing",
  },
  {
    id: "ai-marketing-engine",
    icon: Bot,
    tone: "primary" as const,
    title: "AI Marketing Engine",
    description:
      "We install AI marketing automation for SEO, content production, ad testing, and social distribution.",
    features: [
      "SEO brief and content pipeline automation",
      "Ad copy/testing loops based on conversion data",
      "Cross-channel publishing with analytics feedback",
    ],
    outcome:
      "Typical outcome: faster content velocity, improved organic visibility, and lower cost per qualified lead.",
    ctaLink: "/contact?interest=ai-marketing-engine",
    detailsLink: "/services/ai-marketing",
  },
  {
    id: "ai-operations-automation",
    icon: Workflow,
    tone: "electric" as const,
    title: "AI Operations Automation",
    description:
      "We build custom AI workflows for business process automation, CRM automation, and system integrations.",
    features: [
      "SOP-to-workflow mapping and automation design",
      "CRM automation for pipeline updates and follow-up tasks",
      "Integration across forms, CRM, email, and internal tools",
    ],
    outcome:
      "Typical outcome: 10-20+ hours saved per week and fewer handoff errors between teams.",
    ctaLink: "/contact?interest=ai-operations-automation",
    detailsLink: "/services/ai-automation",
  },
  {
    id: "ai-support-agent",
    icon: Wrench,
    tone: "warning" as const,
    title: "AI Support Agent",
    description:
      "We install an AI chatbot for customer support that answers common questions over chat and email from your knowledge base.",
    features: [
      "Knowledge base ingestion and guardrails",
      "Chat and email triage with human handoff",
      "Response templates aligned to your tone and policies",
    ],
    outcome:
      "Typical outcome: faster first-response times and reduced support load on your team.",
    ctaLink: "/contact?interest=ai-support-agent",
    detailsLink: "/services/ai-automation",
  },
];

export function ServicesSection() {
  return (
    <section id="what-we-install" className="relative overflow-hidden py-24">
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
            WHAT WE <span className="text-gradient-primary text-shadow-neon">INSTALL</span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            AI automation for small business teams that want more leads, cleaner
            operations, and predictable execution.
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
                    Get this installed
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
