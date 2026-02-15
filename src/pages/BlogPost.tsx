import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CalendarDays, Clock3, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { getBlogPostBySlug } from "@/data/blogPosts";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const formatDate = (isoDate: string) => dateFormatter.format(new Date(isoDate));

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <Layout>
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
            <h1 className="text-4xl font-display font-bold tracking-wide mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              This article is unavailable or may have been moved.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const canonicalUrl = `https://mazinmind.digital/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    image: post.image,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Mazinmind.Digital",
      url: "https://mazinmind.digital",
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    inLanguage: "en-US",
  };

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | Mazinmind.Digital`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={post.image} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <section className="py-20 border-b border-primary/20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <p className="text-sm font-semibold tracking-[0.16em] uppercase text-accent mb-4">
            {post.category}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-wide mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground mb-8">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-primary" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="w-4 h-4 text-accent" />
              {post.readingTimeMinutes} min read
            </span>
            <span className="inline-flex items-center gap-2">
              <Tag className="w-4 h-4 text-electric" />
              {post.author}
            </span>
          </div>

          <div className="h-72 md:h-[460px] rounded-3xl overflow-hidden border border-border">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <article className="glass-vibrant rounded-3xl border border-border p-6 md:p-10">
            <div className="space-y-5 mb-10">
              {post.content.intro.map((paragraph) => (
                <p key={paragraph} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-10">
              {post.content.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl md:text-3xl font-display font-bold tracking-wide mb-4">
                    {section.heading}
                  </h2>
                  <div className="space-y-4 mb-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="space-y-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-muted-foreground leading-relaxed flex gap-2"
                        >
                          <span className="text-primary">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mt-10">
              {post.content.conclusion}
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
