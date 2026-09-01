import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ArtGallery from "./pages/ArtGallery";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { HubSpotSpaTracking } from "./components/analytics/HubSpotSpaTracking";
import AiAutomationService from "./pages/services/AiAutomationService";
import AiMarketingService from "./pages/services/AiMarketingService";
import DevOpsCloudService from "./pages/services/DevOpsCloudService";
import AiAutomationContractors from "./pages/AiAutomationContractors";
import LeadFollowUpAutomation from "./pages/LeadFollowUpAutomation";
import AiReceptionist from "./pages/AiReceptionist";
import AiReceptionistBoston from "./pages/AiReceptionistBoston";
import HomeServicesAutomation from "./pages/HomeServicesAutomation";
import { initializeAnalytics } from "./lib/analytics";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <HubSpotSpaTracking />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ai-automation" element={<AiAutomationService />} />
          <Route path="/services/ai-marketing" element={<AiMarketingService />} />
          <Route path="/services/devops-cloud" element={<DevOpsCloudService />} />
          <Route path="/ai-automation-contractors" element={<AiAutomationContractors />} />
          <Route path="/lead-follow-up-automation" element={<LeadFollowUpAutomation />} />
          <Route path="/ai-receptionist" element={<AiReceptionist />} />
          <Route path="/ai-receptionist-boston" element={<AiReceptionistBoston />} />
          <Route path="/home-services-automation" element={<HomeServicesAutomation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/art-gallery" element={<ArtGallery />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
