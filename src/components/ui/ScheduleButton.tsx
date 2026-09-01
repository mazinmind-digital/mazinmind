import React from "react";
import { useSiteOverlay } from "@/components/layout/site-overlays";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";

type Props = {
  className?: string;
  children?: React.ReactNode;
  provider?: "hubspot" | "link";
  url?: string;
  analyticsEvent?: AnalyticsEventName;
  onClick?: () => void;
};

export function ScheduleButton({
  className,
  children,
  provider = "hubspot",
  url,
  analyticsEvent,
  onClick,
}: Props) {
  const { openScheduleModal } = useSiteOverlay();

  const handleClick = () => {
    if (analyticsEvent) {
      trackEvent(analyticsEvent, { cta_text: typeof children === "string" ? children : undefined });
    }

    onClick?.();

    if (provider === "hubspot") {
      openScheduleModal();
      return;
    }

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children ?? "Schedule a Call"}
    </button>
  );
}

export default ScheduleButton;
