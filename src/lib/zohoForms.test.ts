import { describe, expect, it } from "vitest";
import { buildZohoLeadFields } from "./zohoForms";

describe("buildZohoLeadFields", () => {
  it("maps audit details to required Zoho Web-to-Lead fields", () => {
    const fields = buildZohoLeadFields({
      firstName: "Randy",
      lastName: "Test Lead",
      email: "zoho-form-test@example.com",
      company: "MazinMind QA",
      description: "Automated audit form test",
      phone: "6175550100",
    }, "https://mazinmind.digital/zoho-form-success.html");

    expect(fields["First Name"]).toBe("Randy");
    expect(fields["Last Name"]).toBe("Test Lead");
    expect(fields.Email).toBe("zoho-form-test@example.com");
    expect(fields.Company).toBe("MazinMind QA");
    expect(fields.Description).toBe("Automated audit form test");
    expect(fields.Phone).toBe("6175550100");
    expect(fields["Lead Source"]).toBe("Website");
    expect(fields.actionType).toBe("TGVhZHM=");
    expect(fields.returnURL).toBe("https://mazinmind.digital/zoho-form-success.html");
  });

  it("supplies a company fallback because the Zoho webform requires it", () => {
    const fields = buildZohoLeadFields({
      firstName: "",
      lastName: "Website Lead",
      email: "lead@example.com",
      company: "   ",
      description: "Website inquiry",
    }, "https://mazinmind.digital/zoho-form-success.html");

    expect(fields.Company).toBe("Not provided");
    expect(fields["Last Name"]).toBeTruthy();
    expect(fields.Email).toBeTruthy();
    expect(fields.Description).toBeTruthy();
  });
});
