import ScheduleButton from "@/components/ui/ScheduleButton";
import { CheckCircle2 } from "lucide-react";

const reviewAreas = [
  "Missed calls",
  "Response times",
  "Manual follow-up",
  "Disconnected tools",
  "Repetitive workflows",
  "Scheduling friction",
  "Customer communication gaps",
];

const deliverables = [
  "Lead-response review",
  "Missed-call analysis",
  "Automation opportunities",
  "Workflow recommendations",
  "Recommended technology approach",
  "Estimated business impact",
  "Prioritized implementation roadmap",
];

export function RevenueLeakAuditSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent opacity-50" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-electric/20 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 p-8 sm:p-12 shadow-card">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-4xl font-display font-bold tracking-wider md:text-5xl">
                Revenue Leak Audit
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover where leads and customer opportunities disappear in your business.
              </p>
            </div>

            <div className="mb-12 grid gap-8 lg:grid-cols-2">
              {/* Left: Review Areas */}
              <div>
                <h3 className="mb-6 text-lg font-semibold">We Analyze:</h3>
                <ul className="space-y-3">
                  {reviewAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-3 rounded-lg border border-border/30 bg-background/40 p-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Deliverables */}
              <div>
                <h3 className="mb-6 text-lg font-semibold">You Receive:</h3>
                <ul className="space-y-3">
                  {deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-lg border border-border/30 bg-background/40 p-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <ScheduleButton
                provider="hubspot"
                analyticsEvent="request_audit"
                className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-primary px-12 text-base font-bold tracking-wide text-primary-foreground glow-primary hover:opacity-90"
                aria-label="Request Your Revenue Leak Audit"
              >
                Request Your Revenue Leak Audit
              </ScheduleButton>
              <p className="mt-4 text-sm text-muted-foreground">
                Qualification-focused. No pricing. Just insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
