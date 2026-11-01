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
  await expect(zohoForm.locator("input[name='Last Name']")).toHaveCount(1);
  await expect(zohoForm.locator("input[name='Email']")).toHaveCount(1);
  await expect(zohoForm.locator("input[name='Company']")).toHaveCount(1);
  await expect(zohoForm.locator("textarea[name='Description']")).toHaveCount(1);
});
