import { expect, test } from "@playwright/test";

test("homepage renders SEO metadata and current form provider without meeting scheduler", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page
      .getByRole("navigation")
      .getByRole("img", { name: /Mazinmind.Digital/i }),
  ).toBeVisible();
  const heroHeading = page.getByRole("heading", { level: 1 });
  await expect(heroHeading).toBeVisible();
  await expect(heroHeading).toContainText(/Stop Losing Customers/i);

  const cookieBanner = page.getByRole("heading", {
    name: /Cookie Preferences/i,
  });
  if (await cookieBanner.isVisible()) {
    await page.getByRole("button", { name: /Decline Optional/i }).click();
  }

  // HubSpot is no longer loaded; analytics uses Google Analytics when configured.
  await expect(page.locator("script#hs-script-loader")).toHaveCount(0);
  await expect(page.locator("script[src*='hs-scripts.com']")).toHaveCount(0);

  await page.goto("/zoho-contact-form.html");
  await expect(page.locator("#webform7682332000000705001")).toBeVisible();
  const zohoForm = page.locator("form#webform7682332000000705001");
  await expect(zohoForm).toHaveAttribute("action", "https://crm.zoho.com/crm/WebToLeadForm");
  // The form is embedded on /contact, so successful submission must redirect the top-level page.
  await expect(zohoForm).toHaveAttribute("target", "_top");
  await expect(zohoForm.locator("input[name='Last Name']")).toHaveCount(1);
  await expect(zohoForm.locator("input[name='Email']")).toHaveCount(1);
  await expect(zohoForm.locator("input[name='Company']")).toHaveCount(1);
  await expect(zohoForm.locator("textarea[name='Description']")).toHaveCount(1);
  await expect(zohoForm.locator(".zcwf_col_lab label").first()).toHaveCSS("font-family", /Outfit/i);
  await expect(zohoForm.locator(".zcwf_col_lab label").first()).toHaveCSS("color", "rgb(255, 255, 255)");

  let capturedZohoPayload = "";
  await page.route("https://crm.zoho.com/crm/WebToLeadForm", async (route) => {
    capturedZohoPayload = route.request().postData() ?? "";
    await route.fulfill({
      status: 200,
      contentType: "text/html",
      body: "<!doctype html><title>Mock Zoho response</title><p>Mock Zoho accepted the test form.</p>",
    });
  });

  await zohoForm.locator("input[name='Last Name']").fill("Playwright Test Lead");
  await zohoForm.locator("input[name='Email']").fill("playwright-test@example.com");
  await zohoForm.locator("input[name='Company']").fill("MazinMind QA");
  await zohoForm.locator("textarea[name='Description']").fill("Automated form submission test");
  await zohoForm.locator("input[name='Phone']").fill("6175550100");
  await zohoForm.locator("input[type='submit']").click();

  await expect.poll(() => capturedZohoPayload).toContain("Playwright+Test+Lead");
  expect(capturedZohoPayload).toContain("playwright-test%40example.com");
  expect(capturedZohoPayload).toContain("MazinMind+QA");
  expect(capturedZohoPayload).toContain("Automated+form+submission+test");
  expect(capturedZohoPayload).toContain("https%3A%2F%2Fmazinmind.digital%2Fzoho-form-success.html");
});
