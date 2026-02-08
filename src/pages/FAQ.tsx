import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, HelpCircle, Sparkles } from "lucide-react";
import bostonRain from "@/assets/boston-rain.png";

const faqs = [
  {
    category: "GENERAL",
    color: "primary",
    questions: [
      {
        question: "What is MazinMind Digital?",
        answer: "MazinMind Digital is an AI consulting and digital transformation company. We help businesses leverage artificial intelligence and cutting-edge technology to improve operations, reduce costs, and drive growth. With over 20 years of experience in software development, we combine AI innovation with human expertise to deliver exceptional results.",
      },
      {
        question: "How is MazinMind Digital different from other AI companies?",
        answer: "We take a hybrid approach that combines AI power with human creativity and strategic thinking. While many companies offer pure automation, we believe the best results come from blending AI efficiency with human insight. We're also highly focused on ROI – every solution we develop is designed to deliver measurable business value.",
      },
      {
        question: "What industries do you work with?",
        answer: "We work with businesses across various industries including technology, e-commerce, healthcare, finance, manufacturing, and professional services. Our solutions are adaptable and can be customized to meet the specific needs of any industry.",
      },
    ],
  },
  {
    category: "SERVICES",
    color: "accent",
    questions: [
      {
        question: "What AI services do you offer?",
        answer: "We offer comprehensive AI services including AI Consulting, AI-Driven Marketing, Agile & DevOps solutions, AI Content Creation, and Custom Software Development. Each service is designed to help businesses automate processes, gain insights from data, and improve efficiency.",
      },
      {
        question: "Can you help with SEO and digital marketing?",
        answer: "Absolutely! Our AI-Driven Marketing services include advanced SEO optimization, predictive analytics, automated campaign management, and real-time performance tracking. We use AI to analyze data and optimize your marketing strategies for maximum ROI.",
      },
      {
        question: "Do you build custom software applications?",
        answer: "Yes, we develop custom web and mobile applications using modern technologies like React, Next.js, TypeScript, Node.js, and cloud platforms (AWS, Azure, GCP). We can build everything from simple MVPs to complex enterprise solutions.",
      },
    ],
  },
  {
    category: "PROCESS & PRICING",
    color: "electric",
    questions: [
      {
        question: "How does your process work?",
        answer: "Our process starts with a free 30-minute consultation to understand your needs. We then conduct an AI readiness assessment and develop a custom solution roadmap. We use Agile Scrum methodology for development, with regular updates and demos. After implementation, we provide training and ongoing support.",
      },
      {
        question: "How much do your services cost?",
        answer: "Our pricing varies based on the scope and complexity of each project. We offer flexible engagement models including project-based pricing, retainer agreements, and hourly consulting. Contact us for a custom quote based on your specific needs.",
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes! We offer a free 30-minute initial consultation where we discuss your business needs, challenges, and goals. This helps us understand how we can best help you and provides you with an opportunity to learn more about our approach.",
      },
    ],
  },
  {
    category: "SUPPORT & PARTNERSHIP",
    color: "warning",
    questions: [
      {
        question: "What kind of support do you provide after project completion?",
        answer: "We provide comprehensive post-project support including training, documentation, and ongoing maintenance. We believe in building long-term partnerships with our clients and are always available to help optimize and scale your solutions as your business grows.",
      },
      {
        question: "How quickly can you start on a new project?",
        answer: "We can typically begin the discovery phase within 1-2 weeks of signing an agreement. Actual development timelines depend on project scope and complexity, but we're known for our rapid delivery without compromising quality.",
      },
      {
        question: "Do you work with startups or only established businesses?",
        answer: "We work with businesses of all sizes, from startups to enterprises. For startups, we often focus on building MVPs and scalable foundations. For established businesses, we typically focus on optimization, automation, and digital transformation initiatives.",
      },
    ],
  },
];

const colorMap = {
  primary: { text: "text-primary", border: "border-primary/30" },
  accent: { text: "text-accent", border: "border-accent/30" },
  electric: { text: "text-electric", border: "border-electric/30" },
  warning: { text: "text-warning", border: "border-warning/30" },
};

export default function FAQ() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Graffiti Background */}
        <div 
          className="absolute right-0 top-0 w-1/3 h-full opacity-25"
          style={{
            backgroundImage: `url(${bostonRain})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'screen',
          }}
        />
        
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-8 glow-primary animate-pulse-glow">
              <HelpCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-vibrant text-sm font-medium mb-8">
              <Sparkles className="w-5 h-5 text-primary animate-neon-flicker" />
              <span className="text-gradient-primary tracking-wide">GOT QUESTIONS?</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-wider">
              FREQUENTLY ASKED <span className="text-gradient-primary text-shadow-neon">QUESTIONS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category) => {
              const colors = colorMap[category.color as keyof typeof colorMap];
              return (
                <div key={category.category} className="mb-16">
                  <h2 className={`text-3xl font-display font-bold mb-8 ${colors.text} tracking-wider`}>
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category.category}-${index}`}
                        className={`glass-vibrant rounded-xl px-6 border ${colors.border}`}
                      >
                        <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6 tracking-wide">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-wider">
              STILL HAVE <span className="text-gradient-accent">QUESTIONS</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help. 
              Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold px-10 h-16 text-lg tracking-wider glow-primary"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  CONTACT US
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary/10 px-10 h-16 text-lg font-bold tracking-wider"
              >
                <Link to="/services">EXPLORE SERVICES</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
