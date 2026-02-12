import { expect, test } from "@playwright/test";

test("homepage renders hero and opens chat modal", async ({ page }) => {
  await page.goto("/");

  await expect(
    page
      .getByRole("navigation")
      .getByRole("img", { name: /MazinMind Digital/i }),
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

  await page.getByRole("button", { name: /Open chat now modal/i }).click();

  await expect(page.getByRole("heading", { name: /Chat Now/i })).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Chat Now via Google Voice/i }),
  ).toHaveAttribute("href", /sms:/);
  await expect(
    page.getByRole("button", { name: /Open HubSpot AI Sales Chat/i }),
  ).toBeVisible();
});
