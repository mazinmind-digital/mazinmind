import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:4173/');
  await page.waitForTimeout(2000);
  const buttons = await page.$$eval('button', els => els.map(e => e.textContent?.trim()));
  console.log('Buttons on page:', buttons.filter(Boolean));
  await browser.close();
})();
