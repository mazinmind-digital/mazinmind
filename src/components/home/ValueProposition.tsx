import { Quote } from "lucide-react";
import { GraffitiIcon } from "@/components/ui/GraffitiIcon";
import aiFace from "@/assets/ai-face.png";

export function ValueProposition() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* AI Face Background */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-20"
        style={{
          backgroundImage: `url(${aiFace})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }}
      />

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Quote Icon */}
          <GraffitiIcon
            icon={Quote}
            tone="primary"
            size="xl"
            className="mx-auto mb-10 animate-pulse-glow"
          />

          {/* Quote */}
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-10 tracking-wide">
            "AT MAZINMIND.DIGITAL, WE'RE NOT JUST ANOTHER AI COMPANY – WE'RE
            YOUR PARTNERS IN{" "}
            <span className="text-gradient-primary text-shadow-neon">
              DIGITAL TRANSFORMATION
            </span>
            ."
          </blockquote>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We combine{" "}
            <span className="text-primary font-semibold">
              cutting-edge AI solutions
            </span>{" "}
            with human creativity to deliver{" "}
            <span className="text-accent font-semibold">
              exceptional results
            </span>
            .
          </p>

          {/* Attribution */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <GraffitiIcon tone="accent" size="lg">
              <span className="text-2xl font-display font-bold">
                R
              </span>
            </GraffitiIcon>
            <div className="text-left">
              <p className="font-display text-xl font-bold text-foreground tracking-wider">
                RANDY MAZIN
              </p>
              <p className="text-muted-foreground font-medium">
                Founder, Mazinmind.Digital
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-vibrant rounded-2xl p-8 hover:glow-primary transition-all group border border-primary/20">
              <h4 className="font-display text-2xl font-bold text-gradient-primary mb-3 tracking-wider">
                20+ YEARS
              </h4>
              <p className="text-muted-foreground">
                Decades of software development expertise at your service
              </p>
            </div>
            <div className="glass-vibrant rounded-2xl p-8 hover:glow-accent transition-all group border border-accent/20">
              <h4 className="font-display text-2xl font-bold text-gradient-accent mb-3 tracking-wider">
                HYBRID APPROACH
              </h4>
              <p className="text-muted-foreground">
                AI innovation meets human creativity for best results
              </p>
            </div>
            <div className="glass-vibrant rounded-2xl p-8 hover:glow-electric transition-all group border border-electric/20">
              <h4 className="font-display text-2xl font-bold text-gradient-electric mb-3 tracking-wider">
                ROI FOCUSED
              </h4>
              <p className="text-muted-foreground">
                Every solution designed to maximize your return
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
