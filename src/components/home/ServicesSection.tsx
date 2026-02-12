import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  TrendingUp,
  Cog,
  FileText,
  Code,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GraffitiIcon } from "@/components/ui/GraffitiIcon";
import brainGreen from "@/assets/brain-green.png";

const services = [
  {
    id: "ai-consulting",
    icon: Brain,
    title: "AI CONSULTING",
    color: "primary",
    shortDesc: "Transform Your Business with AI-Powered Digital Solutions",
    fullDesc: `Experience intelligent marketing and cutting-edge technology that delivers measurable results. At MazinMind Digital, we architect your success through innovative AI solutions that drive growth and engagement.

🚀 Revolutionize Your Digital Presence:
• Cut operational costs by 50% while doubling market impact
• Deploy AI-powered SEO strategies that boost visibility
• Implement data-driven marketing solutions for higher ROI
• Create compelling content that converts

🔮 Our AI-Driven Services:
1. AI Business Creation Suite - Launch ventures with unprecedented speed
2. AI Content Creation Engine - Generate conversion-focused content
3. AI-Powered Training Solutions - Transform your team through personalized learning`,
    link: "/services#ai-consulting",
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "AI-DRIVEN MARKETING",
    color: "accent",
    shortDesc: "Predictive Analytics & SEO Strategies for Maximum ROI",
    fullDesc: `Harness the power of AI to supercharge your marketing efforts. Our data-driven approach ensures every campaign delivers maximum impact.

📊 Marketing Excellence:
• Predictive analytics for smarter decision-making
• AI-powered SEO optimization
• Automated campaign management
• Real-time performance tracking
• Customer behavior analysis

💡 Strategy Development:
• Market research and competitive analysis
• Content strategy optimization
• Social media automation
• Email marketing intelligence`,
    link: "/services#digital-marketing",
  },
  {
    id: "automation",
    icon: Cog,
    title: "AGILE & DEVOPS",
    color: "electric",
    shortDesc: "Enterprise Software Solutions & Cloud Optimization",
    fullDesc: `Streamline your operations with our enterprise-grade automation solutions. We specialize in AWS, cloud optimization, and agile methodologies.

⚙️ Automation Capabilities:
• Workflow automation and optimization
• CI/CD pipeline implementation
• Infrastructure as code
• Container orchestration
• Microservices architecture

☁️ Cloud Excellence:
• AWS optimization and cost management
• Multi-cloud strategies
• Security and compliance automation
• Performance monitoring and scaling`,
    link: "/services#automation",
  },
  {
    id: "content",
    icon: FileText,
    title: "AI CONTENT CREATION",
    color: "warning",
    shortDesc: "Bulk & Bespoke Content Generation at Scale",
    fullDesc: `Create compelling content at unprecedented speed without sacrificing quality. Our AI-powered content solutions drive engagement and conversions.

✍️ Content Services:
• Blog posts and articles
• Social media content
• Marketing copy
• Product descriptions
• Email sequences

🎯 Content Strategy:
• Brand voice development
• SEO-optimized content
• Multi-channel distribution
• Performance analytics
• A/B testing and optimization`,
    link: "/services#content",
  },
  {
    id: "software",
    icon: Code,
    title: "CUSTOM SOFTWARE",
    color: "neon",
    shortDesc: "Mobile & Web Solutions Tailored to Your Needs",
    fullDesc: `Build powerful, scalable applications that drive your business forward. Our experienced team delivers custom solutions that exceed expectations.

💻 Development Services:
• Web application development
• Mobile app development (iOS & Android)
• API design and integration
• Database architecture
• Legacy system modernization

🔧 Technologies:
• React, Next.js, TypeScript
• Node.js, Python, Java
• AWS, Azure, GCP
• PostgreSQL, MongoDB
• Docker, Kubernetes`,
    link: "/services#software",
  },
];

const colorMap = {
  primary: {
    gradient: "bg-gradient-primary",
    text: "text-primary",
    glow: "hover:glow-primary",
    border: "border-primary/30",
  },
  accent: {
    gradient: "bg-gradient-accent",
    text: "text-accent",
    glow: "hover:glow-accent",
    border: "border-accent/30",
  },
  electric: {
    gradient: "bg-gradient-electric",
    text: "text-electric",
    glow: "hover:glow-electric",
    border: "border-electric/30",
  },
  warning: {
    gradient: "bg-gradient-accent",
    text: "text-warning",
    glow: "hover:glow-accent",
    border: "border-warning/30",
  },
  neon: {
    gradient: "bg-gradient-neon",
    text: "text-neon",
    glow: "hover:glow-neon",
    border: "border-neon/30",
  },
};

export function ServicesSection() {
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setExpandedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Graffiti Background */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-20"
        style={{
          backgroundImage: `url(${brainGreen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-electric/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-wider">
            OUR{" "}
            <span className="text-gradient-primary text-shadow-neon">
              SERVICES
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive AI and digital solutions to transform your business
            operations and drive sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            return (
              <div
                key={service.id}
                className={`glass-vibrant rounded-2xl p-8 shadow-card transition-all duration-300 animate-spray ${colors.glow} ${colors.border} border`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Header */}
                <div className="flex items-start gap-4 mb-4">
                  <GraffitiIcon
                    icon={service.icon}
                    tone={
                      service.color as
                        | "primary"
                        | "accent"
                        | "electric"
                        | "warning"
                        | "neon"
                    }
                    size="lg"
                    className="flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-display font-bold ${colors.text} mb-2 tracking-wider`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.shortDesc}</p>
                  </div>
                </div>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedServices.includes(service.id)
                      ? "max-h-[800px]"
                      : "max-h-0"
                  }`}
                >
                  <div className="pt-4 border-t border-border/50 mt-4">
                    <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans leading-relaxed">
                      {service.fullDesc}
                    </pre>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                  <button
                    onClick={() => toggleService(service.id)}
                    className={`flex items-center gap-2 text-sm ${colors.text} hover:opacity-80 transition-colors font-semibold tracking-wide`}
                  >
                    {expandedServices.includes(service.id) ? (
                      <>
                        SHOW LESS <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        SHOW MORE <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <Link
                    to={service.link}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold px-10 h-14 text-lg tracking-wider glow-primary"
          >
            <Link to="/services" className="flex items-center gap-3">
              VIEW ALL SERVICES
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
