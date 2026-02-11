import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useSiteOverlay } from "@/components/layout/site-overlays";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

function PrivacyContent() {
  const { openLegalModal } = useSiteOverlay();

  useEffect(() => {
    openLegalModal("privacy");
  }, [openLegalModal]);

  return (
    <section className="py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-primary/30 bg-secondary/30 p-8 text-center">
          <h1 className="mb-4 text-4xl font-display font-bold tracking-wider">
            PRIVACY <span className="text-gradient-primary">POLICY</span>
          </h1>
          <p className="mb-8 text-muted-foreground">
            The Privacy Policy modal opens automatically on this route for direct sharing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button type="button" onClick={() => openLegalModal("privacy")} className="bg-gradient-primary">
              Open Privacy Policy
            </Button>
            <Button asChild variant="outline">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Privacy() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | MazinMind Digital</title>
        <meta
          name="description"
          content="Read the MazinMind Digital Privacy Policy, including information collection, cookie usage, and your privacy rights."
        />
        <meta property="og:title" content="Privacy Policy | MazinMind Digital" />
        <meta
          property="og:description"
          content="Read the MazinMind Digital Privacy Policy, including information collection, cookie usage, and your privacy rights."
        />
        <meta property="og:url" content="https://mazinmind.digital/privacy" />
        <link rel="canonical" href="https://mazinmind.digital/privacy" />
      </Helmet>
      <PrivacyContent />
    </Layout>
  );
}
