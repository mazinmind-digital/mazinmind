import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useSiteOverlay } from "@/components/layout/site-overlays";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

function TermsContent() {
  const { openLegalModal } = useSiteOverlay();

  useEffect(() => {
    openLegalModal("terms");
  }, [openLegalModal]);

  return (
    <section className="py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-primary/30 bg-secondary/30 p-8 text-center">
          <h1 className="mb-4 text-4xl font-display font-bold tracking-wider">
            TERMS OF <span className="text-gradient-primary">SERVICE</span>
          </h1>
          <p className="mb-8 text-muted-foreground">
            The Terms modal opens automatically on this route for direct
            sharing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              type="button"
              onClick={() => openLegalModal("terms")}
              className="bg-gradient-primary"
            >
              Open Terms of Service
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

export default function Terms() {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service | MazinMind Digital</title>
        <meta
          name="description"
          content="Review MazinMind Digital Terms of Service covering website use, intellectual property, purchases, and liability limits."
        />
        <meta
          property="og:title"
          content="Terms of Service | MazinMind Digital"
        />
        <meta
          property="og:description"
          content="Review MazinMind Digital Terms of Service covering website use, intellectual property, purchases, and liability limits."
        />
        <meta property="og:url" content="https://mazinmind.digital/terms" />
        <link rel="canonical" href="https://mazinmind.digital/terms" />
      </Helmet>
      <TermsContent />
    </Layout>
  );
}
