import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GraffitiIcon } from "@/components/ui/GraffitiIcon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

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
      `Biggest bottleneck: ${data.bottleneck}`,
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
      // Some HubSpot forms use this generated "name" key instead of first/last fields.
      { name: "0-2/name", value: data.name },
      { name: "firstname", value: firstName },
      { name: "lastname", value: lastName },
      { name: "email", value: data.email },
      { name: "company", value: data.company },
      {
        name: "message",
        value: `Free AI Automation Audit request. Biggest bottleneck: ${data.bottleneck}`,
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
    const message = await response.text();
    throw new Error(message || `HubSpot request failed: ${response.status}`);
  }
}

const deliverables = [
  "10 automation opportunities prioritized by impact",
  "Recommended tool stack for your current systems",
  "A practical 30-day rollout plan for implementation",
];

export function NewsletterSection() {
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
      toast.success("Audit request submitted. We reply within 1 business day.");
    } catch (error) {
      console.error("Audit form submission failed", error);
      window.location.href = mailtoLink;
      toast.error("Could not reach HubSpot. Opened your email client as fallback.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="free-ai-audit" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-card" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute right-1/4 top-0 h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 h-[250px] w-[250px] rounded-full bg-accent/20 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-primary/30 p-8 glass-vibrant md:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <GraffitiIcon icon={Sparkles} tone="primary" size="lg" className="mb-6" />
              <h2 className="mb-4 text-4xl font-display font-bold tracking-wider md:text-5xl">
                FREE AI AUTOMATION <span className="text-gradient-accent">AUDIT</span>
              </h2>
              <p className="mb-6 text-muted-foreground">
                Get a focused plan for AI automation for small business growth
                and operations.
              </p>

              <ul className="space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {isSubmitted ? (
                <div className="rounded-2xl border border-primary/40 bg-background/60 p-6">
                  <h3 className="mb-2 text-2xl font-display font-bold tracking-wide text-foreground">
                    Request received
                  </h3>
                  <p className="mb-2 text-muted-foreground">
                    Thanks for requesting your Free AI Automation Audit.
                  </p>
                  <p className="text-sm text-primary">
                    Next steps: We reply within 1 business day with questions and
                    scheduling options.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <Label htmlFor="audit-name" className="mb-2 inline-block">
                      Name
                    </Label>
                    <Input
                      id="audit-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      placeholder="Your name"
                      className="h-11 bg-background/70"
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
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="h-11 bg-background/70"
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
                      autoComplete="organization"
                      placeholder="Company name"
                      className="h-11 bg-background/70"
                    />
                  </div>

                  <div>
                    <Label htmlFor="audit-bottleneck" className="mb-2 inline-block">
                      Biggest bottleneck
                    </Label>
                    <Textarea
                      id="audit-bottleneck"
                      name="bottleneck"
                      value={formData.bottleneck}
                      onChange={handleChange}
                      placeholder="What is slowing down leads, marketing, or operations today?"
                      className="min-h-[110px] bg-background/70"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-12 w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
                    disabled={isLoading}
                    aria-label="Submit free AI automation audit request"
                  >
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Submit Audit Request
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    If the form is blocked, email us directly at{" "}
                    <a className="text-primary hover:underline" href={mailtoLink}>
                      {CONTACT_INBOX_EMAIL}
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
