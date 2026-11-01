import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/ai-receptionist",
  "/ai-receptionist-boston",
  "/home-services-automation",
  "/ai-automation-contractors",
  "/lead-follow-up-automation",
  "/services",
  "/services/ai-automation",
  "/services/ai-marketing",
  "/services/devops-cloud",
  "/about",
  "/contact",
  "/faq",
  "/art-gallery",
  "/privacy",
  "/terms",
  "/blog",
  "/blog/how-ai-is-used-during-severe-weather-events-and-blizzards",
  "/blog/ai-automation-small-business-missed-leads",
  "/blog/ai-voice-support-reduce-costs-improve-csat",
  "/blog/ai-implementation-benefits-roi-overhead-consulting",
  "/blog/how-ai-automation-cuts-ops-costs",
  "/blog/seo-in-the-age-of-ai-search",
  "/blog/from-idea-to-mvp-using-ai",
  "/blog/predictive-analytics-for-marketing",
  "/blog/building-trust-in-ai-adoption",
  "/blog/devops-foundations-for-ai-products",
  "/blog/content-systems-that-rank-and-convert",
  "/blog/ai-readiness-checklist-for-smbs",
  "/blog/ai-receptionist-boston-missed-calls",
  "/blog/ai-earthquake-prediction-disaster-recovery",
];

test("all published routes render and internal links resolve", async ({ page, request, baseURL }) => {
  test.setTimeout(120_000);
  const origin = new URL(baseURL ?? "http://127.0.0.1:4173").origin;
  const discovered = new Set<string>();

  for (const route of routes) {
    const response = await page.goto(route);
    expect(response, `No response for route ${route}`).not.toBeNull();
    expect(response!.status(), `HTTP error for route ${route}`).toBeLessThan(400);
    await expect(page.locator("h1").first(), `Missing page heading on ${route}`).toBeVisible();
    await expect(page).not.toHaveTitle(/404 Not Found/i);

    const hrefs = await page.locator("a[href]").evaluateAll((anchors) =>
      anchors.map((anchor) => (anchor as HTMLAnchorElement).href),
    );

    for (const href of hrefs) {
      try {
        const url = new URL(href, origin);
        if (url.origin === origin) {
          discovered.add(`${url.pathname}${url.search}`);
        }
      } catch {
        // Ignore malformed or non-navigation values; real hrefs are validated below.
      }
    }
  }

  const failures: string[] = [];
  for (const target of discovered) {
    const url = new URL(target, origin);
    if (/\.(?:png|jpe?g|gif|webp|svg|ico|css|js|woff2?|ttf|pdf|xml|txt|json)$/i.test(url.pathname)) {
      const response = await request.get(url.href, { timeout: 10_000 });
      if (!response.ok()) failures.push(`${target} -> HTTP ${response.status()}`);
      continue;
    }

    const response = await page.goto(`${url.pathname}${url.search}`);
    if (!response || response.status() >= 400) {
      failures.push(`${target} -> HTTP ${response?.status() ?? "no response"}`);
      continue;
    }
    const title = await page.title();
    if (/404 Not Found/i.test(title)) failures.push(`${target} -> rendered 404 page`);
  }

  expect(failures, `Broken internal links:\n${failures.join("\n")}`).toEqual([]);
});
