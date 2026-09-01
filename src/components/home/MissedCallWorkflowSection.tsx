import { ArrowRight, Phone, MessageSquare, CheckCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";

const workflowSteps = [
  {
    icon: Phone,
    title: "Customer Calls",
    description: "Incoming call arrives",
  },
  {
    icon: MessageSquare,
    title: "AI Responds",
    description: "Answers or routes via SMS/email",
  },
  {
    icon: CheckCircle,
    title: "Lead Qualifies",
    description: "Information captured and qualified",
  },
  {
    icon: Users,
    title: "Human Handoff",
    description: "Appointment or team notification",
  },
];

const capabilities = [
  "After-hours call handling",
  "Missed-call SMS recovery",
  "Lead qualification",
  "Approved FAQ handling",
  "Appointment requests",
  "Human escalation",
  "Owner notifications",
  "CRM integration",
  "Conversation summaries",
  "Automated lead follow-up",
];

export function MissedCallWorkflowSection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/0 via-primary/5 to-secondary/0" />
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-display font-bold tracking-wider md:text-5xl">
            MazinMind Missed-Call Revenue Rescue
          </h2>
          <p className="text-lg text-muted-foreground">
            Automatically capture and respond to every missed opportunity before your competitors do.
          </p>
        </div>

        {/* Workflow Flow */}
        <div className="mx-auto mb-20 max-w-5xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex flex-col items-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-1 text-center font-semibold">{step.title}</h3>
                  <p className="mb-4 text-center text-sm text-muted-foreground">
                    {step.description}
                  </p>
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden md:block">
                      <ArrowRight className="h-5 w-5 text-primary/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Capabilities */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur sm:p-12">
            <h3 className="mb-8 text-center text-2xl font-display font-bold">
              Core Capabilities
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-3"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">{capability}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/ai-receptionist-boston"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-primary px-6 text-sm font-bold text-primary-foreground"
              >
                Boston AI Receptionist
              </Link>
              <Link
                to="/home-services-automation"
                className="inline-flex h-12 items-center justify-center rounded-full border border-primary/40 px-6 text-sm font-bold text-primary"
              >
                Home Services Automation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
