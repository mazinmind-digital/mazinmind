import { writeFileSync } from "node:fs";

const base = "https://mazinmind.digital";

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

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map((r) => `  <url>\n    <loc>${base}${r}</loc>\n  </url>`)
    .join("\n") +
  `\n</urlset>\n`;

writeFileSync("dist/sitemap.xml", xml, "utf8");

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;
writeFileSync("dist/robots.txt", robots, "utf8");

console.log("Generated dist/sitemap.xml and dist/robots.txt");
