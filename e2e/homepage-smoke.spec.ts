import { expect, test } from "@playwright/test";

test("homepage renders hero and includes HubSpot chat embed", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page
      .getByRole("navigation")
      .getByRole("img", { name: /Mazinmind.Digital/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /Unlock AI Potential/i }),
  ).toBeVisible();

  const cookieBanner = page.getByRole("heading", {
    name: /Cookie Preferences/i,
  });
  if (await cookieBanner.isVisible()) {
    await page.getByRole("button", { name: /Decline Optional/i }).click();
  }

  await expect(
    page.getByRole("button", { name: /Open chat now modal/i }),
  ).toHaveCount(0);

  const hubSpotScript = page.locator("script#hs-script-loader");
  await expect(hubSpotScript).toHaveCount(1);
  await expect(
    hubSpotScript,
  ).toHaveAttribute("src", /js-na2\.hs-scripts\.com\/243856745\.js/);
});
