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

  // No legacy CRM tracking script is loaded; analytics uses Google Analytics when configured.
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


test("Zoho success page records a lead conversion only with analytics consent", async ({ page }) => {
  await page.route(/https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-[A-Z0-9]+/, async (route) => {
    await route.fulfill({ status: 200, contentType: "application/javascript", body: "" });
  });

  await page.goto("/zoho-form-success.html");
  await page.evaluate(() => {
    localStorage.setItem("mazinmind_cookie_preferences_v1", JSON.stringify({ analytics: true }));
  });
  await page.reload();
  await expect(page.getByRole("heading", { name: /Message received/i })).toBeVisible();
  await expect(page.locator("#google-analytics-script")).toHaveAttribute("src", /gtag\/js\?id=G-[A-Z0-9]+/);

  const conversionEvents = await page.evaluate(() => {
    const dataLayer = (window as unknown as { dataLayer?: IArguments[] }).dataLayer ?? [];
    return dataLayer.filter((entry) => Array.from(entry).includes("generate_lead")).length;
  });
  expect(conversionEvents).toBe(1);
});

test("Zoho success page does not load analytics without consent", async ({ page }) => {
  await page.goto("/zoho-form-success.html");
  await page.evaluate(() => {
    localStorage.setItem("mazinmind_cookie_preferences_v1", JSON.stringify({ analytics: false }));
  });
  await page.reload();
  await expect(page.getByRole("heading", { name: /Message received/i })).toBeVisible();
  await expect(page.locator("#google-analytics-script")).toHaveCount(0);
  const dataLayerExists = await page.evaluate(() => typeof (window as unknown as { dataLayer?: unknown }).dataLayer !== "undefined");
  expect(dataLayerExists).toBe(false);
});

test("AI receptionist landing pages remain keyboard accessible on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/ai-receptionist-boston");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const demoButton = page.getByRole("button", { name: "Explore the Demo" });
  const auditButton = page.getByRole("button", { name: "Request a Revenue Leak Audit" });
  await expect(demoButton).toBeVisible();
  await expect(auditButton).toBeVisible();

  await demoButton.focus();
  await expect(demoButton).toBeFocused();
  await auditButton.focus();
  await expect(auditButton).toBeFocused();

  const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(mobileOverflow).toBe(false);

  await page.goto("/ai-receptionist");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("button", { name: "Request a Free AI Audit" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Talk to MazinMind" })).toBeVisible();
});
