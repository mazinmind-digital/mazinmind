import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  await page.goto('http://127.0.0.1:4173/');
  // wait for hydration or a heading to appear
  try {
    await page.waitForSelector('h1', { timeout: 10000 });
  } catch (e) {
    console.log('h1 not found within timeout');
  }

  await page.waitForTimeout(2000);
  const buttons = await page.$$eval('button', els => els.map(e => e.textContent && e.textContent.trim()));
  console.log('Buttons on page:', buttons.filter(Boolean));
  await browser.close();
})();
