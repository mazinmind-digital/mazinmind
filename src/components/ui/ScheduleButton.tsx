import React from "react";

const CALENDLY_URL = "https://calendly.com/YOURNAME/YOURMEETING";

type Props = { className?: string; children?: React.ReactNode };

export function ScheduleButton({ className, children }: Props) {
  const openCalendly = () => {
    // @ts-ignore
    if ((window as any).Calendly) {
      // @ts-ignore
      (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button onClick={openCalendly} className={className}>
      {children ?? "Schedule a Call"}
    </button>
  );
}

export default ScheduleButton;
