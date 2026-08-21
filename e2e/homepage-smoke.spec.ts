import { expect, test } from "@playwright/test";

test("homepage renders hero and loads HubSpot chat embed script", async ({
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
  await expect(heroHeading).toContainText(/Follow-Up/i);

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

  const hubSpotScript = page.locator("script#hs-script-loader");
  await expect(hubSpotScript).toHaveCount(1);

  const hubSpotAccountId = process.env.HUBSPOT_ACCOUNT_ID ?? "243856745";
  const hubSpotSrcPattern = new RegExp(
    `js-na2\\.hs-scripts\\.com/${hubSpotAccountId}\\.js`,
  );

  await expect(hubSpotScript).toHaveAttribute("src", hubSpotSrcPattern);
});
