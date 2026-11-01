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

  // The HubSpot embed script should be present, but the "Open chat now modal"
  // button is not expected to be rendered on initial page load.
  await expect(
    page.getByRole("button", { name: /Open chat now modal/i }),
  ).toHaveCount(0);

  await expect(page.locator("script[src*='MeetingsEmbed']")).toHaveCount(0);
  await expect(page.locator(".meetings-iframe-container")).toHaveCount(0);

  const title = await page.title();
  expect(title.length).toBeLessThanOrEqual(65);
  const description = await page.locator('meta[name="description"]').getAttribute("content");
  expect(description).toBeTruthy();
  expect(description!.length).toBeLessThanOrEqual(160);
  const serviceSchema = page.locator('script[type="application/ld+json"]');
  await expect(serviceSchema).toHaveCount(1);
  await expect(serviceSchema).toContainText("ProfessionalService");

  const hubSpotScript = page.locator("script#hs-script-loader");
  await expect(hubSpotScript).toHaveCount(1);

  const hubSpotAccountId = process.env.HUBSPOT_ACCOUNT_ID ?? "243856745";
  const hubSpotSrcPattern = new RegExp(
    `js-na2\\.hs-scripts\\.com/${hubSpotAccountId}\\.js`,
  );

  await expect(hubSpotScript).toHaveAttribute("src", hubSpotSrcPattern);
});
