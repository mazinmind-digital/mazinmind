import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ValueProposition } from "@/components/home/ValueProposition";
import { CTASection } from "@/components/home/CTASection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ValueProposition />
      <CTASection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
