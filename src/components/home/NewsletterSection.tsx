import { useState } from "react";
import { Mail, ArrowRight, Sparkles, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GraffitiIcon } from "@/components/ui/GraffitiIcon";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    // Open user's mail client to send subscription to inbox
    const to = "info@mazinmind.digital";
    const subject = encodeURIComponent("Newsletter subscription");
    const body = encodeURIComponent(
      `Please subscribe ${email} to the newsletter.`,
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail("");
    toast.success("Opened mail client to send subscription request.");
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-card" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Glowing Orbs */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] bg-accent/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto glass-vibrant rounded-3xl p-10 md:p-14 border border-primary/30">
          <div className="text-center mb-8">
            {/* Icon */}
            <GraffitiIcon icon={Mail} tone="primary" size="lg" className="mx-auto mb-6" />

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-neon-flicker" />
              <span className="text-gradient-primary font-semibold tracking-wide">
                JOIN 1,000+ INNOVATORS
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 tracking-wider">
              STAY AHEAD WITH{" "}
              <span className="text-gradient-accent">AI INSIGHTS</span>
            </h3>
            <p className="text-muted-foreground">
              Get the latest AI marketing trends, tips, and exclusive content
              delivered to your inbox.
            </p>
          </div>

          {/* Form */}
          {isSubscribed ? (
            <div className="flex items-center justify-center gap-3 text-primary py-4">
              <GraffitiIcon icon={CheckCircle} tone="primary" size="sm" />
              <span className="text-xl font-display font-bold tracking-wider">
                THANK YOU FOR SUBSCRIBING!
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 bg-secondary/50 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary focus:glow-primary text-base"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold h-14 px-8 glow-primary tracking-wider"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    SUBSCRIBE
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          )}

          {/* Privacy Note */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            No spam, ever. Unsubscribe anytime. 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
