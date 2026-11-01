// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { submitZohoLead } from "./zohoForms";

describe("submitZohoLead", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    document.body.innerHTML = "";
  });

  it("posts required lead fields and resolves only after the same-origin success redirect", async () => {
    let submittedFields: Record<string, string> = {};

    vi.spyOn(HTMLFormElement.prototype, "submit").mockImplementation(function () {
      submittedFields = Object.fromEntries(new FormData(this).entries()) as Record<string, string>;
      const frame = document.querySelector<HTMLIFrameElement>(`iframe[name="${this.target}"]`);
      if (!frame) throw new Error("Expected Zoho target iframe");
      frame.src = `${window.location.origin}/zoho-form-success.html`;
    });

    await expect(submitZohoLead({
      firstName: "MazinMind",
      lastName: "Test Lead",
      email: "zoho-form-test@example.com",
      company: "MazinMind QA",
      description: "Automated test submission",
    })).resolves.toBeUndefined();

    expect(submittedFields["Last Name"]).toBe("Test Lead");
    expect(submittedFields.Email).toBe("zoho-form-test@example.com");
    expect(submittedFields.Company).toBe("MazinMind QA");
    expect(submittedFields.Description).toContain("Automated test submission");
    expect(submittedFields.actionType).toBe("TGVhZHM=");
    expect(submittedFields.returnURL).toBe(`${window.location.origin}/zoho-form-success.html`);
    expect(document.querySelector("iframe")).toBeNull();
  });
});
