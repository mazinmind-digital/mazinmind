import { expect, test } from "@playwright/test";

test("CTAs open HubSpot scheduler modal", async ({ page }) => {
  await page.goto("/");

  // Close cookie banner if present
  const decline = page.getByRole("button", { name: /Decline Optional/i });
  if (await decline.isVisible()) await decline.click();

  // Helper to click a button by text and assert modal
  const clickAndAssertModal = async (text: RegExp | string) => {
    const btn = page.getByRole("button", { name: text });
    await expect(btn).toBeVisible();
    await btn.click();
    await expect(page.getByRole("heading", { name: /Schedule a Free Consultation/i })).toBeVisible();
    // close modal
    await page.keyboard.press("Escape");
  };

  // Hero CTA
  await clickAndAssertModal(/Get a Revenue Leak Audit/i);

  // Revenue Leak Audit section CTA
  await clickAndAssertModal(/Request Your Revenue Leak Audit/i);
});
