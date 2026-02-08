import React from "react";

const DEFAULT_HUBSPOT_URL = "https://meetings-na2.hubspot.com/randy-mazin";

type Props = {
  className?: string;
  children?: React.ReactNode;
  provider?: "hubspot" | "link";
  url?: string;
};

export function ScheduleButton({ className, children, provider = "hubspot", url }: Props) {
  const handleClick = () => {
    const target = url ?? (provider === "hubspot" ? DEFAULT_HUBSPOT_URL : "");

    // Open HubSpot meetings in a centered popup window (fallback to new tab)
    const w = 960;
    const h = 700;
    const left = Math.max(0, Math.floor((window.screen.width - w) / 2));
    const top = Math.max(0, Math.floor((window.screen.height - h) / 2));
    try {
      window.open(target, "hubspot_schedule", `width=${w},height=${h},left=${left},top=${top}`);
    } catch (e) {
      window.open(target, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children ?? "Schedule a Call"}
    </button>
  );
}

export default ScheduleButton;
