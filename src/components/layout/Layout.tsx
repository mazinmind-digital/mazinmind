import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SiteOverlaysProvider } from "./site-overlays";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const breadcrumbItems = pathname === "/"
    ? []
    : [
        { name: "Home", item: "https://mazinmind.digital/" },
        ...pathname
          .split("/")
          .filter(Boolean)
          .map((segment, index, segments) => ({
            name:
              segment === "blog"
                ? "Blog"
                : segment
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" "),
            item: `https://mazinmind.digital/${segments.slice(0, index + 1).join("/")}`,
          })),
      ];
  const breadcrumbSchema = breadcrumbItems.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.item,
        })),
      }
    : null;

  return (
    <SiteOverlaysProvider>
      {breadcrumbSchema ? (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        </Helmet>
      ) : null}
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </div>
    </SiteOverlaysProvider>
  );
}
