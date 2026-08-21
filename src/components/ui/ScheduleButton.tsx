import React from "react";
import { useSiteOverlay } from "@/components/layout/site-overlays";

type Props = {
  className?: string;
  children?: React.ReactNode;
  provider?: "hubspot" | "link";
  url?: string;
  analyticsEvent?: string;
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
    if (analyticsEvent && typeof window !== "undefined") {
      const dataLayer = (window as typeof window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer;
      dataLayer?.push({ event: analyticsEvent });
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
