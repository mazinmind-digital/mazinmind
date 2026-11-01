import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

/** Sends GA4 page_view events for client-side route changes. */
export function GoogleAnalyticsSpaTracking() {
  const location = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    trackPageView();
  }, [location.pathname, location.search, location.hash]);

  return null;
}

export default GoogleAnalyticsSpaTracking;
