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
  const zohoFormHtml = await page.content();
  expect(zohoFormHtml).toContain("https://crm.zoho.com/crm/WebToLeadForm");
  expect(zohoFormHtml).toContain("name='Last Name'");
  expect(zohoFormHtml).toContain("name='Email'");
  expect(zohoFormHtml).toContain("name='Company'");
});
