import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScheduleButton from "@/components/ui/ScheduleButton";
import bostonColorful from "@/assets/boston-colorful.png";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Boston Colorful Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${bostonColorful})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen',
        }}
      />
      
      {/* Animated Orbs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-float" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="relative inline-block mb-10">
            <div className="w-24 h-24 rounded-3xl bg-gradient-primary flex items-center justify-center glow-primary animate-pulse-glow">
              <Rocket className="w-12 h-12 text-primary-foreground" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-warning animate-neon-flicker" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 tracking-wider">
            READY TO HARNESS THE POWER OF{" "}
            <span className="text-gradient-neon text-shadow-neon">AI MARKETING</span>?
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Partner with MazinMind Digital to <span className="text-primary font-semibold">revolutionize</span> your market position through 
            intelligent marketing practices. <span className="text-accent font-semibold">No Death Star sized budgets required.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <ScheduleButton provider="hubspot" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold px-10 h-16 text-lg glow-primary group tracking-wider inline-flex items-center justify-center gap-3">
              SCHEDULE FREE CONSULTATION
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </ScheduleButton>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary/10 px-10 h-16 text-lg font-bold tracking-wider"
            >
              <Link to="/services">EXPLORE SERVICES</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-semibold tracking-wide">
            <Link to="/blog" className="text-primary hover:text-primary/80 transition-colors">
              READ THE BLOG
            </Link>
            <Link to="/art-gallery" className="text-accent hover:text-accent/80 transition-colors">
              VIEW ART GALLERY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
