import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import mazinmindLogo from "@/assets/mazinmind-logo.png";
import mazinmindWordmark from "@/assets/mazinmind-wordmark.png";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "BLOG", href: "/blog" },
  { name: "ART GALLERY", href: "/art-gallery" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="relative flex h-20 items-center justify-end">
          {/* Left logo that overhangs below the header */}
          <Link to="/" className="group absolute left-0 top-1/2 z-[70] -translate-y-[24%]">
            <img
              src={mazinmindLogo}
              alt="MazinMind Digital"
              className="h-[185px] w-auto max-w-none transition-transform group-hover:scale-105 drop-shadow-xl"
            />
          </Link>

          {/* Centered wordmark */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 z-[60] flex -translate-y-1/2 justify-center px-16">
            <img
              src={mazinmindWordmark}
              alt="MazinMind"
              className="h-8 w-auto max-w-[55vw] lg:h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 mr-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold tracking-wider transition-all hover:text-primary hover:text-shadow-neon ${
                  location.pathname === item.href 
                    ? "text-primary text-shadow-neon" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+16173831220" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>+1 (617) 383-1220</span>
            </a>
            <Button asChild className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold tracking-wider glow-primary">
              <Link to="/contact">GET STARTED</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-primary/30 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-bold tracking-wider py-2 transition-all hover:text-primary ${
                    location.pathname === item.href 
                      ? "text-primary text-shadow-neon" 
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="tel:+16173831220" 
                className="flex items-center gap-2 text-accent py-2 font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>+1 (617) 383-1220</span>
              </a>
              <Button asChild className="bg-gradient-primary text-primary-foreground font-bold tracking-wider mt-2 glow-primary">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>GET STARTED</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
