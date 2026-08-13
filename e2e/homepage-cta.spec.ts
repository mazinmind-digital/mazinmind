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
  await clickAndAssertModal(/Get a Free AI Automation Audit/i);

  // CTA Section
  await clickAndAssertModal(/SCHEDULE FREE CONSULTATION/i);

  // HomeContent CTAs (there may be multiple with same text) - click first
  const assessmentBtn = page.getByRole("button", { name: /Get Your AI Automation Assessment/i }).first();
  await expect(assessmentBtn).toBeVisible();
  await assessmentBtn.click();
  await expect(page.getByRole("heading", { name: /Schedule a Free Consultation/i })).toBeVisible();
});
