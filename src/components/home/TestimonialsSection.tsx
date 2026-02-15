import { Quote } from "lucide-react";
import { GraffitiIcon } from "@/components/ui/GraffitiIcon";

const testimonials = [
  {
    quote:
      "Mazinmind.Digital helped us launch an AI-driven lead scoring workflow in under a month, and our close rate improved by 38%.",
    name: "Sarah Chen",
    role: "VP Marketing, Vertex Growth",
  },
  {
    quote:
      "Their team translated complex automation ideas into a practical rollout. We cut manual reporting time by nearly 60%.",
    name: "David Romero",
    role: "Operations Director, Helix Logistics",
  },
  {
    quote:
      "From SEO automation to conversion-focused content, we saw measurable gains in traffic quality and pipeline value.",
    name: "Nina Patel",
    role: "Head of Growth, Northline Health",
  },
  {
    quote:
      "Mazinmind.Digital balanced technical execution with business clarity. The solutions felt custom-built for our goals.",
    name: "Marcus Reid",
    role: "Founder, Atlas Advisory",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-[280px] h-[280px] bg-primary/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[260px] h-[260px] bg-accent/15 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <GraffitiIcon icon={Quote} tone="accent" size="lg" className="mx-auto mb-6" />
          <h3 className="text-4xl md:text-5xl font-display font-bold tracking-wider mb-4">
            CLIENT <span className="text-gradient-accent">TESTIMONIALS</span>
          </h3>
          <p className="text-muted-foreground text-lg">
            Real outcomes from teams that partnered with Mazinmind.Digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="glass-vibrant rounded-2xl p-6 border border-primary/20 hover:glow-primary transition-all"
            >
              <p className="text-muted-foreground leading-relaxed mb-5">
                "{testimonial.quote}"
              </p>
              <p className="font-display text-foreground font-bold tracking-wide">
                {testimonial.name}
              </p>
              <p className="text-sm text-primary/90 mt-1">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
