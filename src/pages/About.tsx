import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { GraffitiIcon } from "@/components/ui/GraffitiIcon";
import {
  ArrowRight,
  Users,
  Lightbulb,
  Target,
  Rocket,
  CheckCircle,
  Clock,
  Shield,
  Zap,
} from "lucide-react";
import worldPeace from "@/assets/world-peace.png";
import bostonCorridor from "@/assets/boston-corridor.png";
import { Helmet } from "react-helmet-async";

const values = [
  {
    icon: Lightbulb,
    title: "INNOVATION FIRST",
    color: "primary",
    description:
      "We leverage cutting-edge AI and emerging technologies to deliver solutions that keep you ahead of the curve.",
  },
  {
    icon: Users,
    title: "HUMAN + AI SYNERGY",
    color: "accent",
    description:
      "We combine AI power with human creativity and expertise to deliver results that pure automation can't achieve.",
  },
  {
    icon: Target,
    title: "ROI FOCUSED",
    color: "electric",
    description:
      "Every solution we develop is designed to maximize your return on investment with measurable outcomes.",
  },
  {
    icon: Shield,
    title: "TRANSPARENCY",
    color: "warning",
    description:
      "We believe in clear communication, honest assessments, and building long-term partnerships based on trust.",
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

const processDetails = [
  {
    step: "1",
    title: "Discovery & Analysis",
    items: [
      "30-minute initial consultation to understand your needs",
      "Comprehensive AI readiness assessment",
      "Custom solution roadmap development",
    ],
  },
  {
    step: "2",
    title: "Transparent Development Process",
    items: [
      "Agile Scrum methodology for flexible adaptation",
      "Regular progress updates and demos",
      "Collaborative approach with your team",
    ],
  },
  {
    step: "3",
    title: "Implementation & Integration",
    items: [
      "Seamless integration with existing systems",
      "Thorough testing and quality assurance",
      "Staged rollout to minimize disruption",
    ],
  },
  {
    step: "4",
    title: "Training & Support",
    items: [
      "Comprehensive team training",
      "Documentation and knowledge transfer",
      "Ongoing support and optimization",
    ],
  },
];

const stats = [
  { value: "20+", label: "YEARS EXPERIENCE", color: "primary" },
  { value: "50%", label: "AVG COST REDUCTION", color: "accent" },
  { value: "100+", label: "PROJECTS DELIVERED", color: "electric" },
  { value: "24/7", label: "SUPPORT AVAILABLE", color: "warning" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Graffiti Background */}
        <div
          className="absolute right-0 bottom-0 w-1/2 h-full opacity-30"
          style={{
            backgroundImage: `url(${worldPeace})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "screen",
          }}
        />

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-wider">
              ABOUT{" "}
              <span className="text-gradient-primary text-shadow-neon">
                MAZINMIND
              </span>
            </h1>
            <p className="text-2xl text-gradient-accent font-medium mb-8 tracking-wide">
              Where AI Innovation Meets Human Expertise 🚀
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl">
              At Mazinmind.Digital, we're not just another AI company – we're
              your partners in digital transformation. Founded by Randy Mazin, a
              software development veteran with 20+ years of experience, we
              combine cutting-edge AI solutions with human creativity to deliver
              exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const colors = colorMap[stat.color as keyof typeof colorMap];
              return (
                <div
                  key={stat.label}
                  className={`text-center glass-vibrant rounded-2xl p-8 border ${colors.border} ${colors.glow} transition-all`}
                >
                  <div
                    className={`text-5xl md:text-6xl font-display font-bold ${colors.text} mb-2`}
                  >
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Helmet>
        <title>About Mazinmind.Digital | AI Experts & Innovators</title>
        <meta
          name="description"
          content="Learn about Mazinmind.Digital, a leader in AI consulting, digital transformation, and innovative technology solutions. Discover our values, mission, and expert team."
        />
        <meta
          name="keywords"
          content="About Mazinmind.Digital, AI experts, digital transformation, technology consulting, company values, innovation"
        />
        <meta
          property="og:title"
          content="About Mazinmind.Digital | AI Experts & Innovators"
        />
        <meta
          property="og:description"
          content="Learn about Mazinmind.Digital, a leader in AI consulting, digital transformation, and innovative technology solutions."
        />
        <meta property="og:url" content="https://mazinmind.digital/about" />
        <meta property="og:site_name" content="Mazinmind.Digital" />
        <meta
          name="twitter:title"
          content="About Mazinmind.Digital | AI Experts & Innovators"
        />
        <meta
          name="twitter:description"
          content="Learn about Mazinmind.Digital, a leader in AI consulting, digital transformation, and innovative technology solutions."
        />
        <link rel="canonical" href="https://mazinmind.digital/about" />
      </Helmet>

      {/* Hybrid Approach Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-wider">
                TRANSFORM YOUR BUSINESS WITH OUR{" "}
                <span className="text-gradient-primary text-shadow-neon">
                  HYBRID APPROACH
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                We believe the best results come from combining AI's
                computational power with human creativity, strategic thinking,
                and emotional intelligence. Our hybrid approach ensures you get
                the efficiency of automation with the nuance that only humans
                can provide.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 glass-vibrant rounded-xl p-6 border border-primary/20 hover:glow-primary transition-all">
                  <GraffitiIcon
                    icon={Zap}
                    size="sm"
                    tone="primary"
                    className="flex-shrink-0"
                    iconClassName="h-6 w-6"
                  />
                  <div>
                    <h4 className="font-display text-lg font-bold text-foreground mb-1 tracking-wide">
                      AI-POWERED EFFICIENCY
                    </h4>
                    <p className="text-muted-foreground">
                      Automate repetitive tasks and process data at scale
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 glass-vibrant rounded-xl p-6 border border-accent/20 hover:glow-accent transition-all">
                  <GraffitiIcon
                    icon={Users}
                    size="sm"
                    tone="accent"
                    className="flex-shrink-0"
                    iconClassName="h-6 w-6"
                  />
                  <div>
                    <h4 className="font-display text-lg font-bold text-foreground mb-1 tracking-wide">
                      HUMAN EXPERTISE
                    </h4>
                    <p className="text-muted-foreground">
                      Strategic oversight and creative direction from
                      experienced professionals
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 glass-vibrant rounded-xl p-6 border border-electric/20 hover:glow-electric transition-all">
                  <GraffitiIcon
                    icon={Clock}
                    size="sm"
                    tone="electric"
                    className="flex-shrink-0"
                    iconClassName="h-6 w-6"
                  />
                  <div>
                    <h4 className="font-display text-lg font-bold text-foreground mb-1 tracking-wide">
                      RAPID DELIVERY
                    </h4>
                    <p className="text-muted-foreground">
                      Fast turnaround without compromising on quality
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-vibrant rounded-3xl p-10 lg:p-14 shadow-elevated border border-primary/30">
              <div className="text-center">
                <GraffitiIcon
                  tone="primary"
                  size="hero"
                  className="mx-auto mb-8 animate-pulse-glow h-28 w-28"
                >
                  <span className="text-5xl font-display font-bold">
                    R
                  </span>
                </GraffitiIcon>
                <h3 className="text-3xl font-display font-bold mb-2 tracking-wider">
                  RANDY MAZIN
                </h3>
                <p className="text-gradient-accent font-semibold mb-6 tracking-wide">
                  Founder & CEO
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With over 20 years of experience in software development and
                  digital transformation, Randy founded Mazinmind.Digital to
                  help businesses harness the power of AI while maintaining the
                  human touch that drives real results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/10 rounded-full blur-[150px]" />
        <div
          className="absolute left-0 bottom-0 w-1/3 h-full opacity-20"
          style={{
            backgroundImage: `url(${bostonCorridor})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "screen",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-wider">
              OUR{" "}
              <span className="text-gradient-primary text-shadow-neon">
                VALUES
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              These core principles guide everything we do at Mazinmind.Digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const colors = colorMap[value.color as keyof typeof colorMap];
              return (
                <div
                  key={value.title}
                  className={`glass-vibrant rounded-2xl p-8 text-center border ${colors.border} ${colors.glow} transition-all`}
                >
                  <GraffitiIcon
                    icon={value.icon}
                    size="lg"
                    tone={value.color as "primary" | "accent" | "electric" | "warning"}
                    className="mx-auto mb-6"
                  />
                  <h3
                    className={`font-display text-xl font-bold ${colors.text} mb-3 tracking-wider`}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-wider">
              HOW WE{" "}
              <span className="text-gradient-primary text-shadow-neon">
                WORK
              </span>{" "}
              🔄
            </h2>
            <p className="text-lg text-muted-foreground">
              Our proven process ensures successful delivery and measurable
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {processDetails.map((process, index) => {
              const colors = Object.values(colorMap)[index % 4];
              return (
                <div
                  key={process.step}
                  className={`glass-vibrant rounded-2xl p-8 border ${colors.border} ${colors.glow} transition-all`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <GraffitiIcon tone="primary" size="md">
                      <span className="text-2xl font-display font-bold">
                        {process.step}
                      </span>
                    </GraffitiIcon>
                    <h3 className="text-xl font-display font-bold text-foreground tracking-wider">
                      {process.title.toUpperCase()}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {process.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <GraffitiIcon
              icon={Rocket}
              tone="primary"
              size="hero"
              className="mx-auto mb-10 animate-pulse-glow"
            />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 tracking-wider">
              READY TO <span className="text-gradient-accent">PARTNER</span>{" "}
              WITH US?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's discuss how Mazinmind.Digital can help transform your
              business with AI-powered solutions.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold px-12 h-16 text-lg tracking-wider glow-primary"
            >
              <Link to="/contact" className="flex items-center gap-3">
                SCHEDULE A CONSULTATION
                <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
