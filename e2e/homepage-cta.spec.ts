import { expect, test } from "@playwright/test";

test("consultation CTAs route to contact form without scheduling", async ({ page }) => {
  await page.goto("/");

  // Close cookie banner if present
  const decline = page.getByRole("button", { name: /Decline Optional/i });
  if (await decline.isVisible()) await decline.click();

  const heroCta = page.getByRole("button", { name: /Get a Revenue Leak Audit/i });
  await expect(heroCta).toBeVisible();
  await heroCta.click();
  await expect(page).toHaveURL(/\/contact\?interest=consultation/);
});
