import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "DevOps automation consulting for CI/CD, deployment, and release workflows",
  "Cloud architecture planning for scalability, reliability, and security",
  "Infrastructure automation and environment standardization",
  "Monitoring, alerting, and cost optimization baselines",
];

export default function DevOpsCloudService() {
  return (
    <Layout>
      <Helmet>
        <title>DevOps Automation Consulting & Cloud Architecture | MazinMind Digital</title>
        <meta
          name="description"
          content="DevOps automation consulting and cloud architecture services for SMB and growth-stage teams that need reliable, production-grade systems."
        />
        <link rel="canonical" href="https://mazinmind.digital/services/devops-cloud" />
      </Helmet>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -right-12 top-12 h-[320px] w-[320px] rounded-full bg-electric/20 blur-[100px]" />
        <div className="absolute -left-10 bottom-4 h-[280px] w-[280px] rounded-full bg-primary/20 blur-[100px]" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-display font-bold tracking-wider md:text-6xl">
              DEVOPS AUTOMATION <span className="text-gradient-electric">CONSULTING</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
              Advanced tier support for teams that need production-grade cloud
              systems, automated delivery pipelines, and stable operations.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                <Link to="/contact?interest=devops-cloud-architecture">Book a Call</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                <Link to="/">Back to Homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-primary/30 p-8 glass-vibrant md:p-10">
            <h2 className="mb-5 text-4xl font-display font-bold tracking-wider text-foreground">
              What is included
            </h2>
            <ul className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="mb-3 text-2xl font-display font-bold tracking-wide text-foreground">
              Typical outcomes
            </h3>
            <p className="mb-7 text-muted-foreground">
              Typical outcomes include shorter deployment cycles, fewer production
              incidents, clearer observability, and infrastructure decisions tied
              to long-term cost and growth goals.
            </p>

            <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90">
              <Link to="/contact?interest=devops-cloud-architecture">
                Talk With an Engineer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
