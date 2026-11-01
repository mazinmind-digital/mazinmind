type ZohoLeadInput = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  description: string;
  phone?: string;
};

const ZOHO_WEBFORM_ACTION = "https://crm.zoho.com/crm/WebToLeadForm";
const ZOHO_FORM_SUCCESS_PATH = "/zoho-form-success.html";

/**
 * Submit through Zoho's official Web-to-Lead endpoint using a hidden iframe.
 * The browser cannot read Zoho's cross-origin response; success is only returned
 * after Zoho redirects to our same-origin confirmation page.
 */
export function submitZohoLead(lead: ZohoLeadInput): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof document === "undefined") {
      reject(new Error("Zoho forms can only be submitted in a browser."));
      return;
    }

    const frameName = `zoho-lead-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const iframe = document.createElement("iframe");
    iframe.name = frameName;
    iframe.title = "Zoho form submission";
    iframe.setAttribute("aria-hidden", "true");
    iframe.tabIndex = -1;
    iframe.style.cssText = "position:absolute;width:1px;height:1px;left:-9999px;border:0";
    const form = document.createElement("form");
    form.method = "POST";
    form.action = ZOHO_WEBFORM_ACTION;
    form.target = frameName;
    form.acceptCharset = "UTF-8";
    form.style.display = "none";

    const fields: Record<string, string> = {
      xnQsjsdp: "080e64ba51d87a085344c4ca61ff56e00927090e986dc7036e2a9d3c6a1d0fae",
      zc_gad: "",
      xmIwtLD: "eb7cbf9aa1a51eec0d07153265d70fa3de7796cb665e2fd0c5bcda5bb402dd446cc48a85114a18e4ca7adbef9668ba75",
      actionType: "TGVhZHM=",
      returnURL: `${window.location.origin}${ZOHO_FORM_SUCCESS_PATH}`,
      "First Name": lead.firstName,
      "Last Name": lead.lastName,
      Email: lead.email,
      Company: lead.company.trim() || "Not provided",
      Phone: lead.phone ?? "",
      Description: lead.description,
      "Lead Source": "Website",
      aG9uZXlwb3Q: "",
    };

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    let settled = false;
    const cleanup = () => {
      window.clearTimeout(timeout);
      iframe.remove();
      form.remove();
    };
    const timeout = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error("Zoho did not confirm the submission before the timeout."));
    }, 20000);

    let submitted = false;
    iframe.onload = () => {
      try {
        const currentUrl = iframe.contentWindow?.location.href;
        if (currentUrl && new URL(currentUrl).pathname === ZOHO_FORM_SUCCESS_PATH) {
          if (settled) return;
          settled = true;
          cleanup();
          resolve();
          return;
        }
      } catch {
        // Expected while the iframe is on Zoho's cross-origin response page.
      }

      if (!submitted && !settled) {
        submitted = true;
        form.submit();
      }
    };

    // The iframe's initial about:blank load starts the POST; Zoho then redirects
    // it to the same-origin success page only after accepting the lead.
    document.body.append(iframe, form);
  });
}
