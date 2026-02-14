import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

type HubSpotQueueCommand = [string, ...unknown[]];

declare global {
  interface Window {
    _hsq?: HubSpotQueueCommand[];
    HubSpotConversations?: {
      widget?: {
        refresh?: () => void;
      };
    };
  }
}

export function HubSpotSpaTracking() {
  const location = useLocation();
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    const path = `${location.pathname}${location.search}${location.hash}`;
    const hsq = (window._hsq = window._hsq ?? []);

    // HubSpot requires manual page view tracking for SPA route changes.
    hsq.push(["setPath", path]);
    hsq.push(["trackPageView"]);

    // Re-check chatflow targeting after route transitions.
    window.HubSpotConversations?.widget?.refresh?.();
  }, [location.pathname, location.search, location.hash]);

  return null;
}

export default HubSpotSpaTracking;
