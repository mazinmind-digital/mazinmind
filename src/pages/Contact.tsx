import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import ScheduleButton from "@/components/ui/ScheduleButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle,
  Calendar,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import aiMask from "@/assets/ai-mask.png";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  company: z
    .string()
    .trim()
    .max(100, "Company name must be less than 100 characters")
    .optional(),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number must be less than 20 characters")
    .optional(),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "PHONE",
    value: "+1 (617) 453-8776",
    href: "tel:+16174538776",
    color: "primary",
  },
  {
    icon: Mail,
    title: "EMAIL",
    value: "info@mazinmind.digital",
    href: "mailto:info@mazinmind.digital",
    color: "accent",
  },
  {
    icon: MapPin,
    title: "LOCATION",
    value: "Boston, MA, USA",
    href: null,
    color: "electric",
  },
  {
    icon: Clock,
    title: "BUSINESS HOURS",
    value: "Mon-Fri: 9AM - 6PM EST",
    href: null,
    color: "warning",
  },
];

const colorMap = {
  primary: {
    text: "text-primary",
    border: "border-primary/30",
    glow: "hover:glow-primary",
  },
  accent: {
    text: "text-accent",
    border: "border-accent/30",
    glow: "hover:glow-accent",
  },
  electric: {
    text: "text-electric",
    border: "border-electric/30",
    glow: "hover:glow-electric",
  },
  warning: {
    text: "text-warning",
    border: "border-warning/30",
    glow: "hover:glow-accent",
  },
};

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const interest = params.get("interest");

    if (!interest) {
      return;
    }

    const normalizedInterest = interest.replace(/[-_]+/g, " ").trim();

    setFormData((prev) => {
      if (prev.message.trim().length > 0) {
        return prev;
      }

      return {
        ...prev,
        message: `Hi MazinMind team,\n\nI am interested in ${normalizedInterest}. Please share pricing and next steps.\n`,
      };
    });
  }, [location.search]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    // Open user's mail client with prefilled message to site inbox
    const to = "info@mazinmind.digital";
    const subject = encodeURIComponent(
      `Contact form submission from ${formData.name || "Website"}`,
    );
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company: ${formData.company || ""}`,
      `Phone: ${formData.phone || ""}`,
      "",
      "Message:",
      formData.message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setIsLoading(false);
    toast.success("Opened mail client to send your message.");
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact MazinMind Digital | AI Consulting & Support</title>
        <meta
          name="description"
          content="Contact MazinMind Digital for expert AI consulting, digital transformation, and support. Get in touch for a free consultation or to learn more about our services."
        />
        <meta
          name="keywords"
          content="Contact MazinMind Digital, AI consulting, support, digital transformation, free consultation"
        />
        <meta
          property="og:title"
          content="Contact MazinMind Digital | AI Consulting & Support"
        />
        <meta
          property="og:description"
          content="Contact MazinMind Digital for expert AI consulting, digital transformation, and support."
        />
        <meta property="og:url" content="https://mazinmind.digital/contact" />
        <meta property="og:site_name" content="MazinMind Digital" />
        <meta
          name="twitter:title"
          content="Contact MazinMind Digital | AI Consulting & Support"
        />
        <meta
          name="twitter:description"
          content="Contact MazinMind Digital for expert AI consulting, digital transformation, and support."
        />
        <link rel="canonical" href="https://mazinmind.digital/contact" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Graffiti Background */}
        <div
          className="absolute left-0 top-0 w-1/2 h-full opacity-30"
          style={{
            backgroundImage: `url(${aiMask})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "screen",
          }}
        />

        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-vibrant text-sm font-medium mb-8">
              <Sparkles className="w-5 h-5 text-primary animate-neon-flicker" />
              <span className="text-gradient-primary tracking-wide">
                FREE CONSULTATION
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-wider">
              <span className="text-gradient-primary text-shadow-neon">
                CONTACT
              </span>{" "}
              US
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business with AI? Get in touch with us
              today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-wider">
                GET IN <span className="text-gradient-accent">TOUCH</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Have a question or ready to start your AI journey? We'd love to
                hear from you. Reach out using any of the methods below or fill
                out the contact form.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => {
                  const colors = colorMap[item.color as keyof typeof colorMap];
                  return (
                    <div
                      key={item.title}
                      className={`flex items-start gap-4 glass-vibrant rounded-xl p-6 border ${colors.border} ${colors.glow} transition-all`}
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h4
                          className={`font-display font-bold ${colors.text} mb-1 tracking-wider`}
                        >
                          {item.title}
                        </h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-foreground transition-colors text-lg"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-lg">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Schedule CTA */}
              <div className="glass-vibrant rounded-2xl p-8 border border-accent/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center glow-accent">
                    <Calendar className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-bold tracking-wider">
                    SCHEDULE NOW
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Book a free 30-minute consultation to discuss your needs and
                  explore how we can help transform your business.
                </p>
                <ScheduleButton
                  provider="hubspot"
                  className="w-full bg-gradient-accent hover:opacity-90 text-accent-foreground font-bold h-14 tracking-wider glow-accent"
                >
                  BOOK A CONSULTATION
                </ScheduleButton>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-vibrant rounded-3xl p-10 lg:p-12 shadow-elevated border border-primary/30">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-primary flex items-center justify-center mx-auto mb-8 glow-primary animate-pulse-glow">
                    <CheckCircle className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4 tracking-wider">
                    MESSAGE SENT!
                  </h3>
                  <p className="text-muted-foreground mb-10 text-lg">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        message: "",
                      });
                    }}
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary/10 font-bold tracking-wider"
                  >
                    SEND ANOTHER MESSAGE
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-display font-bold mb-8 tracking-wider">
                    SEND US A{" "}
                    <span className="text-gradient-primary">MESSAGE</span>
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="font-semibold tracking-wide"
                        >
                          NAME *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`h-14 bg-secondary/50 border-border focus:border-primary focus:glow-primary ${errors.name ? "border-destructive" : ""}`}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="font-semibold tracking-wide"
                        >
                          EMAIL *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`h-14 bg-secondary/50 border-border focus:border-primary ${errors.email ? "border-destructive" : ""}`}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="font-semibold tracking-wide"
                        >
                          COMPANY
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="h-14 bg-secondary/50 border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="font-semibold tracking-wide"
                        >
                          PHONE
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className="h-14 bg-secondary/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="font-semibold tracking-wide"
                      >
                        MESSAGE *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or how we can help..."
                        rows={5}
                        className={`bg-secondary/50 border-border resize-none focus:border-primary ${errors.message ? "border-destructive" : ""}`}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold h-14 tracking-wider glow-primary"
                      >
                        {isLoading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            SEND MESSAGE
                          </>
                        )}
                      </Button>

                      <ScheduleButton
                        provider="hubspot"
                        className="w-full bg-gradient-accent hover:opacity-90 text-accent-foreground font-bold h-14 tracking-wider glow-accent"
                      >
                        SCHEDULE A CALL
                      </ScheduleButton>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
