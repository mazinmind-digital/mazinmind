import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  TrendingUp, 
  Cog, 
  FileText, 
  Code,
  ArrowRight,
  CheckCircle,
  Rocket,
  Target,
  Lightbulb,
  Users
} from "lucide-react";
import brainGreen from "@/assets/brain-green.png";
import bostonCorridor from "@/assets/boston-corridor.png";

const services = [
  {
    id: "ai-consulting",
    icon: Brain,
    title: "AI CONSULTING",
    color: "primary",
    tagline: "Transform Your Business with AI-Powered Digital Solutions",
    description: "Experience intelligent marketing and cutting-edge technology that delivers measurable results. At MazinMind Digital, we architect your success through innovative AI solutions that drive growth and engagement.",
    features: [
      "Cut operational costs by 50% while doubling market impact",
      "Deploy AI-powered SEO strategies that boost visibility",
      "Implement data-driven marketing solutions for higher ROI",
      "Create compelling content that converts",
      "AI Business Creation Suite for rapid venture launch",
      "AI-Powered Training Solutions for team transformation",
    ],
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "AI-DRIVEN MARKETING",
    color: "accent",
    tagline: "Predictive Analytics & SEO Strategies for Maximum ROI",
    description: "Harness the power of AI to supercharge your marketing efforts. Our data-driven approach ensures every campaign delivers maximum impact and measurable results.",
    features: [
      "Predictive analytics for smarter decision-making",
      "AI-powered SEO optimization",
      "Automated campaign management",
      "Real-time performance tracking",
      "Customer behavior analysis",
      "Social media automation",
    ],
  },
  {
    id: "automation",
    icon: Cog,
    title: "AGILE & DEVOPS",
    color: "electric",
    tagline: "Enterprise Software Solutions & Cloud Optimization",
    description: "Streamline your operations with our enterprise-grade automation solutions. We specialize in AWS, cloud optimization, and agile methodologies that scale with your business.",
    features: [
      "Workflow automation and optimization",
      "CI/CD pipeline implementation",
      "Infrastructure as code",
      "Container orchestration with Kubernetes",
      "AWS optimization and cost management",
      "Security and compliance automation",
    ],
  },
  {
    id: "content",
    icon: FileText,
    title: "AI CONTENT CREATION",
    color: "warning",
    tagline: "Bulk & Bespoke Content Generation at Scale",
    description: "Create compelling content at unprecedented speed without sacrificing quality. Our AI-powered content solutions drive engagement and conversions across all channels.",
    features: [
      "Blog posts and articles",
      "Social media content at scale",
      "Marketing copy that converts",
      "Product descriptions",
      "Email sequences and automation",
      "SEO-optimized content strategy",
    ],
  },
  {
    id: "software",
    icon: Code,
    title: "CUSTOM SOFTWARE",
    color: "neon",
    tagline: "Mobile & Web Solutions Tailored to Your Needs",
    description: "Build powerful, scalable applications that drive your business forward. Our experienced team delivers custom solutions using cutting-edge technologies.",
    features: [
      "Web application development (React, Next.js)",
      "Mobile app development (iOS & Android)",
      "API design and integration",
      "Database architecture",
      "Legacy system modernization",
      "Cloud-native solutions (AWS, Azure, GCP)",
    ],
  },
];

const colorMap = {
  primary: "text-primary border-primary/30",
  accent: "text-accent border-accent/30",
  electric: "text-electric border-electric/30",
  warning: "text-warning border-warning/30",
  neon: "text-neon border-neon/30",
};

const processSteps = [
  {
    icon: Target,
    title: "Discovery & Analysis",
    description: "30-minute initial consultation to understand your needs and develop a custom solution roadmap.",
  },
  {
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Comprehensive AI readiness assessment and transparent development process using Agile Scrum.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "Rapid deployment with continuous iteration and optimization based on real-time feedback.",
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description: "Dedicated support and training to ensure your team maximizes the value of our solutions.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Graffiti Background */}
        <div 
          className="absolute right-0 top-0 w-1/2 h-full opacity-30"
          style={{
            backgroundImage: `url(${brainGreen})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'screen',
          }}
        />
        
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-wider">
              OUR <span className="text-gradient-primary text-shadow-neon">SERVICES</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI and digital solutions designed to transform your business operations, 
              drive sustainable growth, and maximize your ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const colors = colorMap[service.color as keyof typeof colorMap];
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon Card */}
                  <div className="lg:w-1/3 flex justify-center">
                    <div className={`w-72 h-72 glass-vibrant rounded-3xl flex items-center justify-center shadow-elevated border ${colors.split(' ')[1]} hover:glow-primary transition-all`}>
                      <service.icon className={`w-36 h-36 ${colors.split(' ')[0]}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3">
                    <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 tracking-wider ${colors.split(' ')[0]}`}>
                      {service.title}
                    </h2>
                    <p className="text-xl text-gradient-accent mb-4 font-medium">{service.tagline}</p>
                    <p className="text-muted-foreground mb-8 text-lg">{service.description}</p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      asChild 
                      className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold tracking-wider glow-primary"
                    >
                      <Link to="/contact" className="flex items-center gap-2">
                        GET STARTED
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        {/* Graffiti Background */}
        <div 
          className="absolute left-0 bottom-0 w-1/3 h-full opacity-20"
          style={{
            backgroundImage: `url(${bostonCorridor})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'screen',
          }}
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-wider">
              HOW WE <span className="text-gradient-primary text-shadow-neon">WORK</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our proven process ensures successful delivery of every project, 
              from initial consultation to ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-1 bg-gradient-primary opacity-30" />
                )}
                <div className="glass-vibrant rounded-2xl p-8 text-center relative z-10 border border-primary/20 hover:glow-primary transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 glow-primary">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-sm text-gradient-accent font-bold mb-2 tracking-wider">STEP {index + 1}</div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 tracking-wide">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 tracking-wider">
              READY TO <span className="text-gradient-neon text-shadow-neon">TRANSFORM</span> YOUR BUSINESS?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Schedule a free 30-minute consultation to discuss your needs and discover 
              how MazinMind Digital can help you achieve your goals.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold px-12 h-16 text-lg tracking-wider glow-primary"
            >
              <Link to="/contact" className="flex items-center gap-3">
                SCHEDULE NOW
                <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
