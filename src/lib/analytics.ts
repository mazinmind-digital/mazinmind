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
type GtagCommand = "js" | "config" | "event";
type Gtag = (command: GtagCommand, target: string | Date, parameters?: Record<string, unknown>) => void;

declare global {
  interface Window {
    dataLayer?: Array<IArguments | Record<string, unknown>>;
    gtag?: Gtag;
    __mazinmindAnalyticsInitialized?: boolean;
    __mazinmindGaMeasurementId?: string;
  }
}

function getEnvironmentValue(key: string): string | undefined {
  const value = (import.meta as { env?: Record<string, string | undefined> }).env?.[key];
  return value?.trim() || undefined;
}

function getCampaignContext(): AnalyticsEventProperties {
  const parameters = new URLSearchParams(window.location.search);
  return {
    page_location: window.location.href,
    page_title: document.title,
    page_path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
    page_referrer: document.referrer || undefined,
    campaign: parameters.get("utm_campaign") || undefined,
    source: parameters.get("utm_source") || undefined,
    medium: parameters.get("utm_medium") || undefined,
  };
}

export function initializeAnalytics() {
  if (typeof window === "undefined" || window.__mazinmindAnalyticsInitialized) return;

  const measurementId = getEnvironmentValue("VITE_GA_MEASUREMENT_ID");
  const gtmId = getEnvironmentValue("VITE_GTM_ID");
  window.dataLayer = window.dataLayer ?? [];

  if (measurementId && /^G-[A-Z0-9]+$/i.test(measurementId)) {
    window.__mazinmindGaMeasurementId = measurementId;
    const bootstrap = document.createElement("script");
    bootstrap.id = "google-analytics-bootstrap";
    bootstrap.setAttribute("data-analytics", "google-analytics");
    bootstrap.text = [
      "window.dataLayer = window.dataLayer || [];",
      "window.gtag = function(){window.dataLayer.push(arguments);};",
      "window.gtag('js', new Date());",
      `window.gtag('config', '${measurementId}', { send_page_view: false });`,
    ].join("\n");
    document.head.appendChild(bootstrap);

    const script = document.createElement("script");
    script.id = "google-analytics-script";
    script.setAttribute("data-analytics", "google-analytics");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  if (gtmId && /^GTM-[A-Z0-9]+$/i.test(gtmId)) {
    const script = document.createElement("script");
    script.id = "google-tag-manager-script";
    script.setAttribute("data-analytics", "google-tag-manager");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  }

  window.__mazinmindAnalyticsInitialized = true;
  trackPageView();
}

export function trackPageView() {
  if (typeof window === "undefined") return;
  const context = getCampaignContext();
  if (window.gtag && window.__mazinmindGaMeasurementId) {
    window.gtag("event", "page_view", context);
  } else if (window.dataLayer) {
    window.dataLayer.push({ event: "page_view", ...context });
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  properties: AnalyticsEventProperties = {},
) {
  if (typeof window === "undefined") return;
  const event = { ...getCampaignContext(), ...properties };
  if (window.gtag && window.__mazinmindGaMeasurementId) {
    window.gtag("event", eventName, event);
  } else {
    window.dataLayer?.push({ event: eventName, ...event });
  }
}
