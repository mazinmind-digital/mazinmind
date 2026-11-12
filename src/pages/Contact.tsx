import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { GraffitiIcon } from "@/components/ui/GraffitiIcon";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import heroGraffiti from "@/assets/hero-graffiti.jpg";

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
  const interest = new URLSearchParams(location.search).get("interest");
  const formUrl = interest
    ? `/zoho-contact-form.html?interest=${encodeURIComponent(interest)}`
    : "/zoho-contact-form.html";

  return (
    <Layout>
      <Helmet>
        <title>Contact MazinMind Digital | AI Consulting & Support</title>
        <meta name="description" content="Contact MazinMind Digital for AI consulting, automation, CRM integration, and cloud engineering. Tell us about your project and receive a practical next-step recommendation." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact MazinMind Digital | AI Consulting & Support" />
        <meta property="og:description" content="Contact MazinMind Digital for AI consulting, automation, CRM integration, and cloud engineering." />
        <meta property="og:url" content="https://mazinmind.digital/contact" />
        <meta property="og:site_name" content="MazinMind Digital" />
        <meta property="og:image" content="https://mazinmind.digital/images/blog/lead-automation-graffiti.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact MazinMind Digital | AI Consulting & Support" />
        <meta name="twitter:description" content="Contact MazinMind Digital for AI consulting, automation, CRM integration, and cloud engineering." />
        <meta name="twitter:image" content="https://mazinmind.digital/images/blog/lead-automation-graffiti.webp" />
        <link rel="canonical" href="https://mazinmind.digital/contact" />
      </Helmet>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30" style={{ backgroundImage: `url(${heroGraffiti})`, backgroundSize: "cover", backgroundPosition: "center", mixBlendMode: "screen" }} />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-vibrant text-sm font-medium mb-8">
              <Sparkles className="w-5 h-5 text-primary animate-neon-flicker" />
              <span className="text-gradient-primary tracking-wide">LET'S TALK ABOUT YOUR PROJECT</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-wider">
              <span className="text-gradient-primary text-shadow-neon">CONTACT</span> US
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us what you want to improve with AI, automation, or cloud engineering. We’ll follow up by email.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-wider">GET IN <span className="text-gradient-accent">TOUCH</span></h2>
              <p className="text-lg text-muted-foreground mb-10">Have a question or ready to start your AI journey? Reach out using any of the methods below or send a project inquiry through our secure CRM form.</p>
              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => {
                  const colors = colorMap[item.color as keyof typeof colorMap];
                  return (
                    <div key={item.title} className={`flex items-start gap-4 glass-vibrant rounded-xl p-6 border ${colors.border} ${colors.glow} transition-all`}>
                      <GraffitiIcon icon={item.icon} size="md" tone={item.color as "primary" | "accent" | "electric" | "warning"} className="flex-shrink-0" />
                      <div>
                        <h4 className={`font-display font-bold ${colors.text} mb-1 tracking-wider`}>{item.title}</h4>
                        {item.href ? <a href={item.href} className="text-muted-foreground hover:text-foreground transition-colors text-lg">{item.value}</a> : <p className="text-muted-foreground text-lg">{item.value}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="rounded-2xl border border-accent/30 p-6 glass-vibrant">
                <h3 className="mb-2 text-xl font-display font-bold">Prefer email?</h3>
                <p className="text-muted-foreground">You can also email rmazin@mazinmind.digital. Meeting scheduling is temporarily unavailable.</p>
              </div>
            </div>
            <div className="glass-vibrant rounded-3xl p-6 md:p-8 shadow-elevated border border-primary/30">
              <h2 className="text-2xl font-display font-bold mb-4 tracking-wider">SEND US A <span className="text-gradient-primary">MESSAGE</span></h2>
              <p className="text-sm text-muted-foreground mb-5">Your inquiry is submitted directly to MazinMind Digital’s Zoho CRM lead form. Please do not include passwords or sensitive personal information.</p>
              <iframe
                title="MazinMind Digital contact form"
                src={formUrl}
                className="w-full border-0 min-h-[760px] bg-transparent"
                loading="eager"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <noscript><a href="/zoho-contact-form.html">Open the contact form</a></noscript>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
