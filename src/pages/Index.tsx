import { Layout } from "@/components/layout/Layout";
import HeroBanner from "@/components/home/HeroBanner";
import { MissedCallWorkflowSection } from "@/components/home/MissedCallWorkflowSection";
import { RevenueLeakAuditSection } from "@/components/home/RevenueLeakAuditSection";
import { EngineeredReliabilitySection } from "@/components/home/EngineeredReliabilitySection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HomeFaqSection } from "@/components/home/HomeFaqSection";
import { homeFaqs } from "@/data/homeFaqs";
import { Helmet } from "react-helmet-async";

const homepageTitle =
  "AI Automation & Consulting in Boston | MazinMind Digital";
const homepageDescription =
  "Boston AI consulting for small businesses: lead capture, CRM automation, AI reception, workflow integration, and cloud engineering. Practical systems with clear scope and pricing.";
const canonicalUrl = "https://mazinmind.digital";
const ogImage = "https://mazinmind.digital/images/blog/lead-automation-graffiti.webp";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mazinmind.digital/#organization",
      name: "MazinMind Digital",
      url: "https://mazinmind.digital",
      logo: "https://mazinmind.digital/apple-touch-icon.png",
      email: "info@mazinmind.digital",
      telephone: "+1-617-453-8776",
      description:
        "AI receptionist and missed-call recovery systems for Greater Boston service businesses",
      areaServed: [
        "Boston",
        "Chelsea",
        "Revere",
        "Everett",
        "Cambridge",
        "Somerville",
        "Quincy",
        "Lynn",
        "Salem",
      ],
      sameAs: [
        "https://www.linkedin.com/company/mazinmind-digital",
        "https://x.com/MazinmindD",
        "https://github.com/mazinmind-digital/mazinmind",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://mazinmind.digital/#professional-service",
      name: "MazinMind Digital",
      url: "https://mazinmind.digital",
      image: "https://mazinmind.digital/apple-touch-icon.png",
      description: homepageDescription,
      areaServed: "Greater Boston, MA",
      telephone: "+1-617-453-8776",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boston",
        addressRegion: "MA",
        addressCountry: "US",
      },
      parentOrganization: {
        "@id": "https://mazinmind.digital/#organization",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://mazinmind.digital/#website",
      url: "https://mazinmind.digital",
      name: "MazinMind Digital",
      description: homepageDescription,
      publisher: {
        "@id": "https://mazinmind.digital/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://mazinmind.digital/blog?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>{homepageTitle}</title>
        <meta name="description" content={homepageDescription} />
        <meta
          name="keywords"
          content="AI consulting Boston, AI automation for small business, CRM automation, lead nurturing, AI receptionist, workflow automation, cloud engineering, DevOps consulting"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={homepageTitle} />
        <meta property="og:description" content={homepageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="MazinMind Digital" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={homepageTitle} />
        <meta name="twitter:description" content={homepageDescription} />
        <meta name="twitter:image" content={ogImage} />

        <link rel="canonical" href={canonicalUrl} />

        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <HeroBanner />
      <MissedCallWorkflowSection />
      <RevenueLeakAuditSection />
      <EngineeredReliabilitySection />
      <TestimonialsSection />
      <HomeFaqSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
