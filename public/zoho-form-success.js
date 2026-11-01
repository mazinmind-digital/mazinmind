// Consent-aware conversion tracking for the standalone Zoho Web-to-Lead success page.
(function () {
  var analyticsConsent = false;
  try {
    var preferences = JSON.parse(localStorage.getItem("mazinmind_cookie_preferences_v1") || "{}");
    analyticsConsent = preferences.analytics === true;
  } catch (error) {
    analyticsConsent = false;
  }
  if (!analyticsConsent) return;

  // The deploy pipeline replaces this placeholder with the configured ID.
  // Keep local preview/tests functional if the build-time substitution is skipped.
  var measurementId = "__GA_MEASUREMENT_ID__";
  if (measurementId === "__GA_MEASUREMENT_ID__") measurementId = "G-ZQQDFCCDXP";
  if (!/^G-[A-Z0-9]+$/i.test(measurementId)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });

  var analyticsScript = document.createElement("script");
  analyticsScript.id = "google-analytics-script";
  analyticsScript.async = true;
  analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=" + measurementId;
  document.head.appendChild(analyticsScript);

  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_title: document.title,
    page_path: window.location.pathname
  });
  window.gtag("event", "generate_lead", {
    form_name: "zoho_contact_webform",
    form_provider: "zoho"
  });
})();
