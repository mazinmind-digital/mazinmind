import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { GraffitiIcon } from "@/components/ui/GraffitiIcon";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  NotebookPen,
  Search,
  Tag,
} from "lucide-react";
import heroGraffiti from "@/assets/hero-graffiti.jpg";
import aiMask from "@/assets/ai-mask.png";
import aiFace from "@/assets/ai-face.png";
import worldPeace from "@/assets/world-peace.png";
import bostonColorful from "@/assets/boston-colorful.png";
import bostonRain from "@/assets/boston-rain.png";
import bostonCorridor from "@/assets/boston-corridor.png";
import brainGreen from "@/assets/brain-green.png";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  readingTimeMinutes: number;
  image: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: "how-ai-automation-cuts-ops-costs",
    title:
      "How AI Automation Can Cut Operating Costs Without Sacrificing Quality",
    excerpt:
      "A practical framework for identifying repetitive workflows, selecting the right automation stack, and measuring savings in the first 90 days.",
    category: "Automation",
    tags: ["AI Automation", "Operations", "ROI"],
    author: "MazinMind Editorial",
    publishedAt: "2026-02-02",
    readingTimeMinutes: 7,
    image: heroGraffiti,
  },
  {
    slug: "seo-in-the-age-of-ai-search",
    title: "SEO in the Age of AI Search: What Businesses Need to Change Now",
    excerpt:
      "Search behavior is shifting quickly. Learn how to optimize site structure, authority signals, and content strategy for AI-assisted search results.",
    category: "SEO",
    tags: ["SEO", "Content Strategy", "AI"],
    author: "MazinMind Editorial",
    publishedAt: "2026-01-22",
    readingTimeMinutes: 9,
    image: bostonColorful,
  },
  {
    slug: "from-idea-to-mvp-using-ai",
    title: "From Idea to MVP Faster: Using AI in Product Discovery",
    excerpt:
      "Use AI to accelerate customer research, requirement mapping, and feature prioritization while avoiding common MVP launch traps.",
    category: "Product",
    tags: ["MVP", "Product Strategy", "Startups"],
    author: "MazinMind Editorial",
    publishedAt: "2026-01-18",
    readingTimeMinutes: 6,
    image: aiMask,
  },
  {
    slug: "predictive-analytics-for-marketing",
    title:
      "Predictive Analytics for Marketing Teams: A Practical Starter Guide",
    excerpt:
      "A step-by-step breakdown of how marketing teams can use predictive models to improve campaign timing, segmentation, and spend allocation.",
    category: "Marketing",
    tags: ["Predictive Analytics", "Digital Marketing", "Attribution"],
    author: "MazinMind Editorial",
    publishedAt: "2026-01-10",
    readingTimeMinutes: 8,
    image: aiFace,
  },
  {
    slug: "building-trust-in-ai-adoption",
    title: "Building Trust in AI Adoption Across Your Team",
    excerpt:
      "Change management matters as much as technology. This article covers governance, enablement, and communication patterns that reduce resistance.",
    category: "Leadership",
    tags: ["AI Adoption", "Change Management", "Leadership"],
    author: "MazinMind Editorial",
    publishedAt: "2025-12-28",
    readingTimeMinutes: 5,
    image: worldPeace,
  },
  {
    slug: "devops-foundations-for-ai-products",
    title: "DevOps Foundations for AI Products That Need to Scale",
    excerpt:
      "Set up reliable release pipelines, monitoring, and infrastructure standards that support continuous AI model improvements in production.",
    category: "Engineering",
    tags: ["DevOps", "MLOps", "Cloud"],
    author: "MazinMind Editorial",
    publishedAt: "2025-12-15",
    readingTimeMinutes: 10,
    image: bostonCorridor,
  },
  {
    slug: "content-systems-that-rank-and-convert",
    title: "Content Systems That Rank and Convert",
    excerpt:
      "How to build topic clusters, internal linking, and editorial workflows that increase qualified traffic while supporting conversion goals.",
    category: "SEO",
    tags: ["Content Marketing", "SEO", "Conversion"],
    author: "MazinMind Editorial",
    publishedAt: "2025-11-30",
    readingTimeMinutes: 7,
    image: bostonRain,
  },
  {
    slug: "ai-readiness-checklist-for-smbs",
    title: "AI Readiness Checklist for Small and Mid-Sized Businesses",
    excerpt:
      "Before purchasing tools, assess data quality, process maturity, and team capability with this readiness checklist for SMB leaders.",
    category: "Strategy",
    tags: ["AI Strategy", "SMB", "Digital Transformation"],
    author: "MazinMind Editorial",
    publishedAt: "2025-11-18",
    readingTimeMinutes: 6,
    image: brainGreen,
  },
];

type SortMode = "newest" | "oldest" | "title";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const formatDate = (isoDate: string) => dateFormatter.format(new Date(isoDate));

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedTag, setSelectedTag] = useState("ALL");
  const [sortMode, setSortMode] = useState<SortMode>("newest");

  const categories = useMemo(
    () => [
      "ALL",
      ...Array.from(new Set(blogPosts.map((post) => post.category))),
    ],
    [],
  );

  const tags = useMemo(
    () => [
      "ALL",
      ...Array.from(new Set(blogPosts.flatMap((post) => post.tags))),
    ],
    [],
  );

  const filteredPosts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const visible = blogPosts.filter((post) => {
      const matchesSearch =
        normalizedQuery.length === 0 ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      const matchesCategory =
        selectedCategory === "ALL" || post.category === selectedCategory;

      const matchesTag =
        selectedTag === "ALL" || post.tags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    });

    visible.sort((a, b) => {
      if (sortMode === "oldest") {
        return (
          new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
        );
      }

      if (sortMode === "title") {
        return a.title.localeCompare(b.title);
      }

      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    });

    return visible;
  }, [searchQuery, selectedCategory, selectedTag, sortMode]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  const archive = useMemo(() => {
    const buckets = new Map<string, number>();

    blogPosts.forEach((post) => {
      const date = new Date(post.publishedAt);
      const monthLabel = date.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      });

      buckets.set(monthLabel, (buckets.get(monthLabel) ?? 0) + 1);
    });

    return Array.from(buckets.entries());
  }, []);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "MazinMind Digital Blog",
    description:
      "Insights on AI consulting, automation, SEO, and digital transformation from the MazinMind Digital team.",
    url: "https://mazinmind.digital/blog",
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "MazinMind Digital",
      url: "https://mazinmind.digital",
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogPosts
      .slice()
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      )
      .map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://mazinmind.digital/blog#${post.slug}`,
        name: post.title,
      })),
  };

  return (
    <Layout>
      <Helmet>
        <title>AI, SEO, and Automation Blog | MazinMind Digital</title>
        <meta
          name="description"
          content="Explore MazinMind Digital's latest blog posts on AI automation, SEO strategy, digital marketing, and product innovation. Find practical insights and implementation guides."
        />
        <meta
          name="keywords"
          content="AI blog, SEO blog, automation insights, digital marketing strategy, AI consulting articles, MazinMind Digital"
        />
        <meta
          property="og:title"
          content="AI, SEO, and Automation Blog | MazinMind Digital"
        />
        <meta
          property="og:description"
          content="Discover the latest MazinMind Digital insights on AI automation, SEO, and growth strategy."
        />
        <meta property="og:url" content="https://mazinmind.digital/blog" />
        <meta property="og:site_name" content="MazinMind Digital" />
        <meta name="twitter:title" content="MazinMind Digital Blog" />
        <meta
          name="twitter:description"
          content="Latest AI, SEO, and automation insights from MazinMind Digital."
        />
        <link rel="canonical" href="https://mazinmind.digital/blog" />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      </Helmet>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-vibrant text-sm font-medium mb-8">
              <GraffitiIcon icon={NotebookPen} size="sm" tone="primary" />
              <span className="text-gradient-primary tracking-wide">
                LATEST INSIGHTS
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-wider">
              MAZINMIND{" "}
              <span className="text-gradient-primary text-shadow-neon">
                BLOG
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical articles on AI implementation, automation systems, SEO
              strategy, and digital growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 border-y border-primary/20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 space-y-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by title, topic, or keyword"
                className="h-12 pl-12 bg-secondary/60 border-border"
                aria-label="Search blog posts"
              />
            </div>

            <label className="flex items-center gap-3 px-4 rounded-xl border border-border bg-secondary/40 text-sm text-muted-foreground">
              <span>Sort</span>
              <select
                value={sortMode}
                onChange={(event) =>
                  setSortMode(event.target.value as SortMode)
                }
                className="h-12 bg-transparent text-foreground focus:outline-none"
                aria-label="Sort blog posts"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="title">Title A-Z</option>
              </select>
            </label>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-muted-foreground mb-3">
              CATEGORIES
            </p>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full border text-sm font-semibold tracking-wide transition-colors ${
                      active
                        ? "border-primary bg-primary/20 text-primary"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                    type="button"
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-muted-foreground mb-3">
              POPULAR TAGS
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => {
                const active = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-colors ${
                      active
                        ? "border-accent bg-accent/20 text-accent"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                    type="button"
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              {featuredPost ? (
                <>
                  <article
                    id={featuredPost.slug}
                    className="glass-vibrant rounded-3xl overflow-hidden border border-primary/30 mb-10"
                  >
                    <div className="grid lg:grid-cols-2">
                      <div className="h-72 lg:h-full">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-8 lg:p-10">
                        <p className="text-xs font-bold tracking-[0.2em] text-primary mb-4">
                          FEATURED POST
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-wider mb-4">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground text-lg mb-6">
                          {featuredPost.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                          <span className="inline-flex items-center gap-2">
                            <CalendarDays className="w-4 h-4 text-primary" />
                            {formatDate(featuredPost.publishedAt)}
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <Clock3 className="w-4 h-4 text-accent" />
                            {featuredPost.readingTimeMinutes} min read
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <Tag className="w-4 h-4 text-electric" />
                            {featuredPost.category}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {featuredPost.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-full bg-secondary/70 border border-border text-xs text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                          Discuss this topic with our team
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>

                  <div className="grid md:grid-cols-2 gap-6">
                    {remainingPosts.map((post) => (
                      <article
                        key={post.slug}
                        id={post.slug}
                        className="glass-vibrant rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors"
                      >
                        <div className="h-52">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="p-6">
                          <div className="flex items-center justify-between gap-4 mb-3">
                            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                              {post.category}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {formatDate(post.publishedAt)}
                            </p>
                          </div>

                          <h3 className="text-2xl font-display font-bold tracking-wide mb-3">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-full bg-secondary/70 border border-border text-xs text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{post.readingTimeMinutes} min read</span>
                            <Link
                              to="/contact"
                              className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors"
                            >
                              Ask about this topic
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              ) : (
                <div className="glass-vibrant rounded-2xl border border-border p-10 text-center">
                  <h2 className="text-3xl font-display font-bold mb-3 tracking-wide">
                    No posts found
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search query or clearing one of the
                    filters.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("ALL");
                      setSelectedTag("ALL");
                      setSortMode("newest");
                    }}
                    className="px-5 py-2.5 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <div className="glass-vibrant rounded-2xl border border-primary/20 p-6">
                <h3 className="text-xl font-display font-bold tracking-wider mb-4">
                  BLOG ARCHIVE
                </h3>
                <ul className="space-y-3">
                  {archive.map(([monthLabel, count]) => (
                    <li
                      key={monthLabel}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-muted-foreground">
                        {monthLabel}
                      </span>
                      <span className="text-primary font-semibold">
                        {count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-vibrant rounded-2xl border border-accent/20 p-6">
                <h3 className="text-xl font-display font-bold tracking-wider mb-4">
                  NEED A CUSTOM PLAN?
                </h3>
                <p className="text-muted-foreground mb-5">
                  Get a practical roadmap for AI adoption, marketing
                  performance, and process automation.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors"
                >
                  Book a consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
