import { expect, test } from "@playwright/test";

test("homepage renders hero without legacy HubSpot embed", async ({
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

  await expect(page.locator("script#hs-script-loader")).toHaveCount(0);
});
