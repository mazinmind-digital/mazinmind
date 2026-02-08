import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScheduleButton from "@/components/ui/ScheduleButton";
import neonCity from "@/assets/neon-city.png";
import brainCircuit from "@/assets/brain-circuit.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Neon City Background Image */}
      <div 
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `url(${neonCity})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen',
        }}
      />

      {/* Brain Circuit Accent Image */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 opacity-25"
        style={{
          backgroundImage: `url(${brainCircuit})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen',
        }}
      />
      
      {/* Electric Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/20 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-vibrant text-sm font-medium mb-8 animate-spray neon-border">
            <Sparkles className="w-5 h-5 text-primary animate-neon-flicker" />
            <span className="text-gradient-primary">AI-Powered Digital Revolution</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 tracking-wider animate-spray" style={{ animationDelay: '0.1s' }}>
            <span className="block text-foreground">EMPOWER YOUR</span>
            <span className="block text-gradient-neon text-shadow-neon">COMPANY</span>
            <span className="block text-foreground">WITH <span className="text-gradient-accent">AI</span></span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-spray font-light" style={{ animationDelay: '0.2s' }}>
            Let us guide you to <span className="text-primary font-medium">smarter</span>, <span className="text-accent font-medium">faster</span>, and more <span className="text-warning font-medium">effective</span> solutions using cutting-edge AI technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-spray" style={{ animationDelay: '0.3s' }}>
            <ScheduleButton className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold px-10 h-16 text-lg glow-primary group tracking-wide inline-flex items-center justify-center gap-3">
              GET STARTED
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </ScheduleButton>
            <a 
              href="tel:+16173831220"
              className="flex items-center gap-3 px-8 h-16 rounded-xl glass-vibrant text-foreground hover:glow-accent transition-all font-semibold tracking-wide"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span>+1 (617) 383-1220</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-spray" style={{ animationDelay: '0.4s' }}>
            <div className="glass-vibrant rounded-2xl p-8 text-center hover:glow-primary transition-all group">
              <Zap className="w-10 h-10 text-primary mx-auto mb-4 group-hover:animate-neon-flicker" />
              <div className="text-5xl font-bold text-gradient-primary mb-2">50%</div>
              <p className="text-muted-foreground font-medium tracking-wide">COST REDUCTION</p>
            </div>
            <div className="glass-vibrant rounded-2xl p-8 text-center hover:glow-accent transition-all group">
              <BarChart3 className="w-10 h-10 text-accent mx-auto mb-4 group-hover:animate-neon-flicker" />
              <div className="text-5xl font-bold text-gradient-accent mb-2">2X</div>
              <p className="text-muted-foreground font-medium tracking-wide">MARKET IMPACT</p>
            </div>
            <div className="glass-vibrant rounded-2xl p-8 text-center hover:glow-electric transition-all group">
              <Sparkles className="w-10 h-10 text-electric mx-auto mb-4 group-hover:animate-neon-flicker" />
              <div className="text-5xl font-bold text-gradient-electric mb-2">20+</div>
              <p className="text-muted-foreground font-medium tracking-wide">YEARS EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
