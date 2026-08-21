import {
  Gauge,
  AlertCircle,
  Users,
  Zap,
  Eye,
  Lock,
  Infinity as InfinityIcon,
  Hammer,
  RotateCcw,
} from "lucide-react";

const principles = [
  {
    icon: Gauge,
    title: "Monitoring",
    description:
      "24/7 system health checks and automated alerting when issues arise.",
  },
  {
    icon: AlertCircle,
    title: "Error Handling",
    description:
      "Graceful degradation and recovery from failures without losing data or customer context.",
  },
  {
    icon: Users,
    title: "Human Escalation",
    description:
      "Clear pathways for AI to hand off complex issues to your team with full context.",
  },
  {
    icon: Zap,
    title: "API Integrations",
    description:
      "Proper authentication, rate limiting, and error retry logic with your existing tools.",
  },
  {
    icon: Eye,
    title: "Logging & Observability",
    description:
      "Complete audit trail of every interaction, decision, and result for compliance and debugging.",
  },
  {
    icon: Lock,
    title: "Security",
    description:
      "Encryption, access controls, and data isolation that meet enterprise standards.",
  },
  {
    icon: InfinityIcon,
    title: "Scalability",
    description:
      "Systems built to handle growth from 10 leads to 10,000 without breaking.",
  },
  {
    icon: Hammer,
    title: "Maintainability",
    description:
      "Code patterns, documentation, and architecture designed for long-term support.",
  },
  {
    icon: RotateCcw,
    title: "Failure Recovery",
    description:
      "Automatic rollback, retry logic, and incident response protocols.",
  },
];

export function EngineeredReliabilitySection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-primary/5 to-secondary/10" />
      <div className="absolute inset-0 grid-pattern opacity-5" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-display font-bold tracking-wider md:text-5xl">
            Built by Engineers, Not Prompt Engineers
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise engineering reliability for practical business automation.
          </p>
          <p className="mt-6 text-base text-muted-foreground">
            Most AI automation fails because it skips the engineering fundamentals. We don't. Every system is production-ready from day one.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur transition-all hover:border-primary/50 hover:bg-card/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
