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
