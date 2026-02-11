import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ImageIcon, Search } from "lucide-react";

type ArtworkOrientation = "Portrait" | "Landscape" | "Square";

type Artwork = {
  id: string;
  title: string;
  description: string;
  collection: string;
  orientation: ArtworkOrientation;
  size: string;
  finish: string;
  price: number;
  image: string;
  addedAt: string;
  filename: string;
};

type SortMode = "newest" | "price-low" | "price-high" | "title";

type ArtworkSeed = Omit<Artwork, "image" | "filename">;

const PAGE_SIZE = 25;

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const titleFromFilename = (filename: string) =>
  filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const slugFromFilename = (filename: string) =>
  filename
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const inferCollection = (filename: string) => {
  if (/(city|boston|corridor|rain|neon)/i.test(filename)) {
    return "City Futures";
  }
  if (/(face|mask|portrait)/i.test(filename)) {
    return "AI Portraits";
  }
  return "AI Dreams";
};

const inferOrientation = (filename: string): ArtworkOrientation => {
  if (/(portrait|face|mask)/i.test(filename)) {
    return "Portrait";
  }
  if (/(square|brain)/i.test(filename)) {
    return "Square";
  }
  return "Landscape";
};

const inferSize = (orientation: ArtworkOrientation) => {
  if (orientation === "Portrait") {
    return "18 x 24 in";
  }
  if (orientation === "Square") {
    return "20 x 20 in";
  }
  return "30 x 20 in";
};

const inferPrice = (index: number) => 140 + index * 15;

const seedsByFilename: Record<string, ArtworkSeed> = {
  "boston-colorful.png": {
    id: "signal-over-boston",
    title: "Signal Over Boston",
    description: "Neon skyline interpretation designed for modern office and studio walls.",
    collection: "City Futures",
    orientation: "Landscape",
    size: "24 x 16 in",
    finish: "Gallery-wrapped canvas",
    price: 165,
    addedAt: "2026-02-04",
  },
  "boston-rain.png": {
    id: "rainline-memory",
    title: "Rainline Memory",
    description: "Atmospheric city composition with deep contrast and reflective tones.",
    collection: "City Futures",
    orientation: "Portrait",
    size: "16 x 24 in",
    finish: "Matte canvas",
    price: 155,
    addedAt: "2026-01-31",
  },
  "boston-corridor.png": {
    id: "corridor-of-light",
    title: "Corridor of Light",
    description: "Architectural depth piece with layered gradients and cinematic texture.",
    collection: "City Futures",
    orientation: "Landscape",
    size: "30 x 20 in",
    finish: "Gallery-wrapped canvas",
    price: 210,
    addedAt: "2026-01-26",
  },
  "brain-circuit.png": {
    id: "electric-neural-grid",
    title: "Electric Neural Grid",
    description: "High-energy abstract inspired by machine learning neural pathways.",
    collection: "AI Dreams",
    orientation: "Square",
    size: "20 x 20 in",
    finish: "Satin canvas",
    price: 180,
    addedAt: "2026-01-19",
  },
  "brain-green.png": {
    id: "green-pulse",
    title: "Green Pulse",
    description: "Organic digital gradient artwork blending natural and synthetic motifs.",
    collection: "AI Dreams",
    orientation: "Square",
    size: "16 x 16 in",
    finish: "Matte canvas",
    price: 135,
    addedAt: "2026-01-13",
  },
  "ai-mask.png": {
    id: "mask-of-intelligence",
    title: "Mask of Intelligence",
    description: "Conceptual portrait balancing mystery, identity, and machine aesthetics.",
    collection: "AI Portraits",
    orientation: "Portrait",
    size: "18 x 24 in",
    finish: "Gallery-wrapped canvas",
    price: 195,
    addedAt: "2026-01-08",
  },
  "ai-face.png": {
    id: "echo-face",
    title: "Echo Face",
    description: "Cyber-inspired portrait composition suited for creative and tech interiors.",
    collection: "AI Portraits",
    orientation: "Portrait",
    size: "24 x 36 in",
    finish: "Premium canvas",
    price: 240,
    addedAt: "2025-12-29",
  },
  "neon-city.png": {
    id: "nightline-velocity",
    title: "Nightline Velocity",
    description: "Vibrant city-motion scene with an electric palette and layered depth.",
    collection: "City Futures",
    orientation: "Landscape",
    size: "36 x 24 in",
    finish: "Premium canvas",
    price: 260,
    addedAt: "2025-12-20",
  },
  "world-peace.png": {
    id: "peace-in-circuits",
    title: "Peace in Circuits",
    description: "Symbolic statement piece blending digital futurism with social themes.",
    collection: "AI Dreams",
    orientation: "Square",
    size: "30 x 30 in",
    finish: "Gallery-wrapped canvas",
    price: 275,
    addedAt: "2025-12-14",
  },
};

const importedImages = import.meta.glob("../assets/art_gallery/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const artworks: Artwork[] = Object.entries(importedImages)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
  .map(([path, image], index) => {
    const filename = path.split("/").at(-1) ?? `artwork-${index + 1}.png`;
    const seeded = seedsByFilename[filename];

    if (seeded) {
      return {
        ...seeded,
        image,
        filename,
      };
    }

    const orientation = inferOrientation(filename);

    return {
      id: slugFromFilename(filename),
      title: titleFromFilename(filename),
      description:
        "Midjourney canvas artwork available in limited print runs. Contact us to request purchasing details and delivery timeline.",
      collection: inferCollection(filename),
      orientation,
      size: inferSize(orientation),
      finish: "Gallery-wrapped canvas",
      price: inferPrice(index),
      image,
      addedAt: new Date(Date.UTC(2026, 0, Math.max(1, 31 - index))).toISOString().slice(0, 10),
      filename,
    };
  });

const getVisiblePageNumbers = (totalPages: number, currentPage: number) => {
  const pages: number[] = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }

  return pages;
};

export default function ArtGallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("ALL");
  const [selectedOrientation, setSelectedOrientation] = useState("ALL");
  const [sortMode, setSortMode] = useState<SortMode>("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const collections = useMemo(
    () => ["ALL", ...Array.from(new Set(artworks.map((artwork) => artwork.collection)))],
    [],
  );

  const orientations = ["ALL", "Landscape", "Portrait", "Square"];

  const filteredArtworks = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const visible = artworks.filter((artwork) => {
      const matchesSearch =
        normalizedQuery.length === 0 ||
        artwork.title.toLowerCase().includes(normalizedQuery) ||
        artwork.description.toLowerCase().includes(normalizedQuery) ||
        artwork.collection.toLowerCase().includes(normalizedQuery) ||
        artwork.filename.toLowerCase().includes(normalizedQuery);

      const matchesCollection =
        selectedCollection === "ALL" || artwork.collection === selectedCollection;

      const matchesOrientation =
        selectedOrientation === "ALL" || artwork.orientation === selectedOrientation;

      return matchesSearch && matchesCollection && matchesOrientation;
    });

    visible.sort((a, b) => {
      if (sortMode === "price-low") {
        return a.price - b.price;
      }

      if (sortMode === "price-high") {
        return b.price - a.price;
      }

      if (sortMode === "title") {
        return a.title.localeCompare(b.title);
      }

      return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
    });

    return visible;
  }, [searchQuery, selectedCollection, selectedOrientation, sortMode]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCollection, selectedOrientation, sortMode]);

  const totalPages = Math.max(1, Math.ceil(filteredArtworks.length / PAGE_SIZE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedArtworks = useMemo(() => {
    const start = (safeCurrentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return filteredArtworks.slice(start, end);
  }, [filteredArtworks, safeCurrentPage]);

  const pageNumbers = getVisiblePageNumbers(totalPages, safeCurrentPage);

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "MazinMind Art Gallery",
    description:
      "Browse Midjourney art pieces available as premium canvas prints from MazinMind Digital.",
    url: "https://mazinmind.digital/art-gallery",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: artworks.map((artwork, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: artwork.title,
          category: artwork.collection,
          image: artwork.image,
          offers: {
            "@type": "Offer",
            price: artwork.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>Art Gallery | Midjourney Canvas Prints by MazinMind</title>
        <meta
          name="description"
          content="Explore the MazinMind Art Gallery featuring Midjourney-generated artwork available as premium canvas prints. Browse by collection, orientation, and price."
        />
        <meta
          name="keywords"
          content="AI art gallery, Midjourney art prints, canvas prints for sale, digital art Boston, MazinMind art"
        />
        <meta
          property="og:title"
          content="Art Gallery | Midjourney Canvas Prints by MazinMind"
        />
        <meta
          property="og:description"
          content="Browse AI-generated artwork available for purchase as high-quality canvas prints."
        />
        <meta property="og:url" content="https://mazinmind.digital/art-gallery" />
        <meta property="og:site_name" content="MazinMind Digital" />
        <meta name="twitter:title" content="MazinMind Art Gallery" />
        <meta
          name="twitter:description"
          content="Midjourney-inspired artwork available as canvas prints from MazinMind."
        />
        <link rel="canonical" href="https://mazinmind.digital/art-gallery" />
        <script type="application/ld+json">{JSON.stringify(gallerySchema)}</script>
      </Helmet>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-vibrant text-sm font-medium mb-8">
              <ImageIcon className="w-5 h-5 text-primary" />
              <span className="text-gradient-primary tracking-wide">LIMITED RELEASES</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-wider">
              ART <span className="text-gradient-primary text-shadow-neon">GALLERY</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Curated Midjourney artwork available as premium canvas prints.
              Browse current and future uploads from our gallery folder.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 border-y border-primary/20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 space-y-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by title, collection, filename, or style"
                className="h-12 pl-12 bg-secondary/60 border-border"
                aria-label="Search artwork"
              />
            </div>

            <label className="flex items-center gap-3 px-4 rounded-xl border border-border bg-secondary/40 text-sm text-muted-foreground">
              <span>Collection</span>
              <select
                value={selectedCollection}
                onChange={(event) => setSelectedCollection(event.target.value)}
                className="h-12 bg-transparent text-foreground focus:outline-none"
                aria-label="Filter by collection"
              >
                {collections.map((collection) => (
                  <option key={collection} value={collection}>
                    {collection}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-3 px-4 rounded-xl border border-border bg-secondary/40 text-sm text-muted-foreground">
              <span>Orientation</span>
              <select
                value={selectedOrientation}
                onChange={(event) => setSelectedOrientation(event.target.value)}
                className="h-12 bg-transparent text-foreground focus:outline-none"
                aria-label="Filter by orientation"
              >
                {orientations.map((orientation) => (
                  <option key={orientation} value={orientation}>
                    {orientation}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <label className="flex items-center gap-3 px-4 rounded-xl border border-border bg-secondary/40 text-sm text-muted-foreground w-fit">
              <span>Sort</span>
              <select
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value as SortMode)}
                className="h-12 bg-transparent text-foreground focus:outline-none"
                aria-label="Sort artwork"
              >
                <option value="newest">Newest first</option>
                <option value="price-low">Price low to high</option>
                <option value="price-high">Price high to low</option>
                <option value="title">Title A-Z</option>
              </select>
            </label>

            <p className="text-sm text-muted-foreground">
              Showing {paginatedArtworks.length} of {filteredArtworks.length} artwork items
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredArtworks.length === 0 ? (
            <div className="glass-vibrant rounded-2xl border border-border p-10 text-center">
              <h2 className="text-3xl font-display font-bold mb-3 tracking-wide">No artwork found</h2>
              <p className="text-muted-foreground mb-6">
                Adjust your search or filters to see more pieces.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCollection("ALL");
                  setSelectedOrientation("ALL");
                  setSortMode("newest");
                  setCurrentPage(1);
                }}
                className="px-5 py-2.5 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedArtworks.map((artwork) => (
                  <article
                    key={artwork.id}
                    id={artwork.id}
                    className="glass-vibrant rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors"
                  >
                    <div className="h-72">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                          {artwork.collection}
                        </p>
                        <p className="text-sm font-semibold text-primary">
                          {currency.format(artwork.price)}
                        </p>
                      </div>

                      <h2 className="text-2xl font-display font-bold tracking-wide mb-3">
                        {artwork.title}
                      </h2>
                      <p className="text-muted-foreground mb-5">{artwork.description}</p>

                      <div className="grid grid-cols-2 gap-3 text-sm mb-6">
                        <div className="rounded-lg border border-border p-3 bg-secondary/40">
                          <p className="text-muted-foreground mb-1">Size</p>
                          <p className="font-medium text-foreground">{artwork.size}</p>
                        </div>
                        <div className="rounded-lg border border-border p-3 bg-secondary/40">
                          <p className="text-muted-foreground mb-1">Orientation</p>
                          <p className="font-medium text-foreground">{artwork.orientation}</p>
                        </div>
                        <div className="rounded-lg border border-border p-3 bg-secondary/40 col-span-2">
                          <p className="text-muted-foreground mb-1">Canvas Finish</p>
                          <p className="font-medium text-foreground">{artwork.finish}</p>
                        </div>
                      </div>

                      <Link
                        to={`/contact?interest=${artwork.id}`}
                        className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        Request purchase
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                    disabled={safeCurrentPage === 1}
                    className="rounded-lg border border-border px-4 py-2 text-sm disabled:opacity-50"
                  >
                    Previous
                  </button>

                  {pageNumbers[0] > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => setCurrentPage(1)}
                        className="rounded-lg border border-border px-3 py-2 text-sm"
                      >
                        1
                      </button>
                      {pageNumbers[0] > 2 && <span className="px-1 text-muted-foreground">...</span>}
                    </>
                  )}

                  {pageNumbers.map((pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`rounded-lg border px-3 py-2 text-sm ${
                        pageNumber === safeCurrentPage
                          ? "border-primary bg-primary/20 text-primary"
                          : "border-border"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}

                  {pageNumbers[pageNumbers.length - 1] < totalPages && (
                    <>
                      {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                        <span className="px-1 text-muted-foreground">...</span>
                      )}
                      <button
                        type="button"
                        onClick={() => setCurrentPage(totalPages)}
                        className="rounded-lg border border-border px-3 py-2 text-sm"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                    disabled={safeCurrentPage === totalPages}
                    className="rounded-lg border border-border px-4 py-2 text-sm disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wider text-center mb-10">
              HOW <span className="text-gradient-primary text-shadow-neon">ORDERING</span> WORKS
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-vibrant rounded-2xl border border-primary/20 p-6">
                <p className="text-primary text-sm font-bold tracking-[0.18em] mb-3">STEP 1</p>
                <h3 className="text-2xl font-display font-bold tracking-wide mb-2">Choose a Piece</h3>
                <p className="text-muted-foreground">
                  Browse the gallery and select artwork by collection, size, and style.
                </p>
              </div>

              <div className="glass-vibrant rounded-2xl border border-accent/20 p-6">
                <p className="text-accent text-sm font-bold tracking-[0.18em] mb-3">STEP 2</p>
                <h3 className="text-2xl font-display font-bold tracking-wide mb-2">Request Purchase</h3>
                <p className="text-muted-foreground">
                  Send an inquiry and we will confirm print availability and production timeline.
                </p>
              </div>

              <div className="glass-vibrant rounded-2xl border border-electric/20 p-6">
                <p className="text-electric text-sm font-bold tracking-[0.18em] mb-3">STEP 3</p>
                <h3 className="text-2xl font-display font-bold tracking-wide mb-2">Approve and Print</h3>
                <p className="text-muted-foreground">
                  Finalize your order and receive your premium canvas print, ready to hang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
