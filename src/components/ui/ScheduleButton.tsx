import React from "react";
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
  url,
  analyticsEvent,
  onClick,
}: Props) {

  const handleClick = () => {
    if (analyticsEvent) {
      trackEvent(analyticsEvent, { cta_text: typeof children === "string" ? children : undefined });
    }

    onClick?.();

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.assign("/contact?interest=consultation");
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children ?? "Contact Us"}
    </button>
  );
}

export default ScheduleButton;
