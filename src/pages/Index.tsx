import { Layout } from "@/components/layout/Layout";
import HeroBanner from "@/components/home/HeroBanner";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ValueProposition } from "@/components/home/ValueProposition";
import { CTASection } from "@/components/home/CTASection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>
          MazinMind Digital | AI Consulting & Digital Transformation
        </title>
        <meta
          name="description"
          content="Transform your business with AI-powered digital solutions. MazinMind Digital offers AI consulting, digital marketing, automation, and custom software development. Cut costs by 50% while doubling market impact."
        />
        <meta
          name="keywords"
          content="AI consulting, digital transformation, AI marketing, automation, custom software, SEO, digital marketing, machine learning"
        />
        <meta
          property="og:title"
          content="MazinMind Digital | AI Consulting & Digital Transformation"
        />
        <meta
          property="og:description"
          content="Transform your business with AI-powered digital solutions. Expert AI consulting, digital marketing, and custom software development."
        />
        <meta property="og:url" content="https://mazinmind.digital" />
        <meta property="og:site_name" content="MazinMind Digital" />
        <meta
          name="twitter:title"
          content="MazinMind Digital | AI Consulting"
        />
        <meta
          name="twitter:description"
          content="Transform your business with AI-powered digital solutions."
        />
        <link rel="canonical" href="https://mazinmind.digital" />
      </Helmet>
      <HeroBanner />
      <ServicesSection />
      <ValueProposition />
      <CTASection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
