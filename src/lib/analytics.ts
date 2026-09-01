export type AnalyticsEventName =
  | "audit_cta_click"
  | "blueprint_cta_click"
  | "book_consultation"
  | "click_phone"
  | "contact_start"
  | "demo_start"
  | "generate_lead"
  | "landing_page_cta_click"
  | "request_audit"
  | "scheduling_cta_click";

type AnalyticsEventProperties = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: "event", eventName: string, parameters?: Record<string, unknown>) => void;
  }
}

function getEnvironmentValue(key: string): string | undefined {
  const value = (import.meta as { env?: Record<string, string | undefined> }).env?.[key];
  return value && value.trim() ? value : undefined;
}

export function initializeAnalytics() {
  if (typeof window === "undefined") {
    return;
  }

  const gtmId = getEnvironmentValue("VITE_GTM_ID");
  const gaId = getEnvironmentValue("VITE_GA_MEASUREMENT_ID");

  window.dataLayer = window.dataLayer ?? [];

  if (!window.gtag) {
    window.gtag = (command: "event", eventName: string, parameters?: Record<string, unknown>) => {
      if (command === "event") {
        window.dataLayer?.push({ event: eventName, ...(parameters ?? {}) });
      }
    };
  }

  const existingScripts = Array.from(document.querySelectorAll("script[data-analytics]"));
  const scriptIds = new Set(existingScripts.map((script) => script.getAttribute("id") ?? ""));

  if (gaId && !scriptIds.has("ga-script")) {
    const script = document.createElement("script");
    script.id = "ga-script";
    script.setAttribute("data-analytics", "true");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    const init = document.createElement("script");
    init.setAttribute("data-analytics", "true");
    init.textContent = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '" + gaId + "');";
    document.head.appendChild(init);
  }

  if (gtmId && !scriptIds.has("gtm-script")) {
    const noscript = document.createElement("noscript");
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);

    const script = document.createElement("script");
    script.id = "gtm-script";
    script.setAttribute("data-analytics", "true");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);
  }
}

function getCampaignContext(): AnalyticsEventProperties {
  const parameters = new URLSearchParams(window.location.search);

  return {
    landing_page: `${window.location.pathname}${window.location.search}`,
    page_location: window.location.href,
    page_title: document.title,
    referrer: document.referrer || undefined,
    campaign: parameters.get("utm_campaign") || undefined,
    source: parameters.get("utm_source") || undefined,
    medium: parameters.get("utm_medium") || undefined,
  };
}

export function trackEvent(
  eventName: AnalyticsEventName,
  properties: AnalyticsEventProperties = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  const event = { event: eventName, ...getCampaignContext(), ...properties };
  window.dataLayer?.push(event);
  if (window.gtag) {
    window.gtag("event", eventName, event);
  }
}