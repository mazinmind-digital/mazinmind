# MazinMind Digital SEO URL Matrix

Audit date: 2026-11-12  
Scope: every URL emitted by `scripts/generate-sitemap.mjs`.

## Before / after

Before the change, the SPA routes inherited a static homepage canonical, description, and social block from `index.html`. Route-level Helmet tags were appended after those static tags, so a crawler or validator reading the first matching tag could see the homepage URL and generic description on interior pages. The route-specific title/H1 was present on most pages, but Open Graph fields were inconsistent. The homepage also emitted a SearchAction pointing to an unimplemented `blog?search=` URL.

After the change, `index.html` contains no managed canonical/description/Open Graph/schema tags. Each page owns its title, description, canonical, and social tags through Helmet; the shared layout emits one BreadcrumbList for interior routes; the homepage emits no SearchAction; and `/revenue-leak-report` is explicitly noindex and intentionally excluded from the sitemap because it is a prototype flow.

| URL | Before (live observation) | After (source target) |
|---|---|---|
| https://mazinmind.digital/ | Static homepage tags plus dynamic tags; one H1 | Self canonical, unique title/description/OG image, one H1, Organization/ProfessionalService/WebSite + FAQ schema, no SearchAction |
| https://mazinmind.digital/ai-receptionist | Homepage canonical/description appeared first; page title/H1 existed | Self canonical, unique AI receptionist metadata/OG image, one H1, BreadcrumbList |
| https://mazinmind.digital/ai-receptionist-boston | Homepage canonical/description appeared first; OG type was missing | Self canonical, Boston-specific metadata/OG image, one H1, BreadcrumbList |
| https://mazinmind.digital/home-services-automation | Homepage canonical/description appeared first; OG type was missing | Self canonical, home-services metadata/OG image, one H1, BreadcrumbList |
| https://mazinmind.digital/ai-automation-contractors | Homepage canonical/description appeared first | Self canonical, contractor-specific metadata/OG image, one H1, BreadcrumbList |
| https://mazinmind.digital/lead-follow-up-automation | Homepage canonical/description appeared first | Self canonical, follow-up automation metadata/OG image, one H1, BreadcrumbList |
| https://mazinmind.digital/services | Homepage canonical/description appeared first; OG type was missing | Self canonical, unique services metadata/OG image, one H1, BreadcrumbList |
| https://mazinmind.digital/services/ai-automation | Homepage canonical/description appeared first | Self canonical, unique automation metadata/OG image, one H1, ProfessionalService + FAQ + BreadcrumbList |
| https://mazinmind.digital/services/ai-marketing | Homepage canonical/description appeared first | Self canonical, unique marketing metadata/OG image, one H1, BreadcrumbList |
| https://mazinmind.digital/services/devops-cloud | Homepage canonical/description appeared first | Self canonical, unique DevOps/cloud metadata/OG image, one H1, BreadcrumbList |
| https://mazinmind.digital/about | Homepage canonical/description appeared first; OG type was missing | Self canonical, unique About metadata/OG image, one H1, BreadcrumbList |
| https://mazinmind.digital/contact | Homepage canonical/description appeared first; social image/Twitter tags were missing | Self canonical, unique contact metadata/OG image/Twitter card, one H1, BreadcrumbList |
| https://mazinmind.digital/faq | Homepage canonical/description appeared first; OG type was missing | Self canonical, unique FAQ metadata/OG image, one H1, FAQ + BreadcrumbList |
| https://mazinmind.digital/art-gallery | Homepage canonical/description appeared first; social image/Twitter tags were missing | Self canonical, unique gallery metadata/OG image/Twitter card, one H1, gallery + BreadcrumbList |
| https://mazinmind.digital/privacy | Homepage canonical/description appeared first; social fields were incomplete | Self canonical, unique legal-page metadata/OG image/Twitter card, one H1, BreadcrumbList |
| https://mazinmind.digital/terms | Homepage canonical/description appeared first; social fields were incomplete | Self canonical, unique legal-page metadata/OG image/Twitter card, one H1, BreadcrumbList |
| https://mazinmind.digital/blog | Homepage canonical/description appeared first; OG image/Twitter card were missing | Self canonical, unique blog metadata/OG image/Twitter card, one H1, Blog + ItemList + BlogPosting graph + BreadcrumbList |
| https://mazinmind.digital/blog/how-ai-is-used-during-severe-weather-events-and-blizzards | Homepage canonical/description appeared first in SPA shell | Self canonical, post-derived unique title/description/OG image, one H1, Article + BreadcrumbList |
| https://mazinmind.digital/blog/ai-automation-small-business-missed-leads | Static page had self canonical but incomplete social fields; SPA route also inherited shell tags | Self canonical, unique post metadata/OG image/Twitter card, one H1, Article + BreadcrumbList (static fallback updated too) |
| https://mazinmind.digital/blog/ai-voice-support-reduce-costs-improve-csat | Homepage canonical/description appeared first in SPA shell | Self canonical, post-derived unique title/description/OG image, one H1, Article + BreadcrumbList |
| https://mazinmind.digital/blog/ai-implementation-benefits-roi-overhead-consulting | Homepage canonical/description appeared first in SPA shell | Self canonical, post-derived unique title/description/OG image, one H1, Article + BreadcrumbList |
| https://mazinmind.digital/blog/how-ai-automation-cuts-ops-costs | Homepage canonical/description appeared first in SPA shell | Self canonical, post-derived unique title/description/OG image, one H1, Article + BreadcrumbList |
| https://mazinmind.digital/blog/seo-in-the-age-of-ai-search | Homepage canonical/description appeared first in SPA shell | Self canonical, post-derived unique title/description/OG image, one H1, Article + BreadcrumbList |
| https://mazinmind.digital/blog/from-idea-to-mvp-using-ai | Homepage canonical/description appeared first in SPA shell | Self canonical, post-derived unique title/description/OG image, one H1, Article + BreadcrumbList |
| https://mazinmind.digital/blog/predictive-analytics-for-marketing | Homepage canonical/description appeared first in SPA shell | Self canonical, post-derived unique title/description/OG image, one H1, Article + BreadcrumbList |
| https://mazinmind.digital/blog/building-trust-in-ai-adoption | Homepage canonical/description appeared first in SPA shell | Self canonical, post-derived unique title/description/OG image, one H1, Article + BreadcrumbList |
| https://mazinmind.digital/blog/devops-foundations-for-ai-products | Homepage canonical/description appeared first in SPA shell | Self canonical, post-derived unique title/description/OG image, one H1, Article + BreadcrumbList |
| https://mazinmind.digital/blog/content-systems-that-rank-and-convert | Homepage canonical/description appeared first in SPA shell | Self canonical, post-derived unique title/description/OG image, one H1, Article + BreadcrumbList |
| https://mazinmind.digital/blog/ai-readiness-checklist-for-smbs | Homepage canonical/description appeared first in SPA shell | Self canonical, post-derived unique title/description/OG image, one H1, Article + BreadcrumbList |
| https://mazinmind.digital/blog/ai-receptionist-boston-missed-calls | Homepage canonical/description appeared first in SPA shell | Self canonical, post-derived unique title/description/OG image, one H1, Article + BreadcrumbList |
| https://mazinmind.digital/blog/ai-earthquake-prediction-disaster-recovery | Homepage canonical/description appeared first in SPA shell | Self canonical, post-derived unique title/description/OG image, one H1, Article + BreadcrumbList |

## Sitemap verification

- `dist/sitemap.xml`: 31 URLs, 0 duplicate `<loc>` values.
- All `<loc>` values use `https://mazinmind.digital`.
- `/revenue-leak-report` is absent by design because its page is a noindex prototype.
- `dist/robots.txt` points to `https://mazinmind.digital/sitemap.xml`.
