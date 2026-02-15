import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import mazinmindLogo from "@/assets/mazinmind-logo.png";
import { useSiteOverlay } from "./site-overlays";

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
  const location = useLocation();
  const { openScheduleModal } = useSiteOverlay();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-4 lg:px-8">
        <div
          className={`relative flex items-center justify-end transition-all duration-300 ${
            isScrolled ? "h-16 md:h-20" : "h-16 md:h-24"
          }`}
        >
          {/* Left logo that overhangs below the header */}
          <Link
            to="/"
            className={`group absolute left-0 top-1/2 z-[70] -translate-y-1/2 transition-all duration-300 md:-mt-[3px] md:pt-[2px] ${
              isScrolled ? "" : "md:-translate-y-[20%]"
            }`}
          >
            <span
              className={`flex items-center overflow-hidden transition-all duration-300 ${
                isScrolled ? "h-[50px] md:h-[88px]" : "h-[50px] md:h-[122px]"
              }`}
            >
              <img
                src={mazinmindLogo}
                alt="Mazinmind.Digital"
                className={`w-auto max-w-none drop-shadow-xl transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? "h-[46px] md:h-[92px]" : "h-[46px] md:h-[125px]"
                }`}
              />
            </span>
          </Link>

          <div className="relative z-[90] flex items-center gap-3">
            <a
              href="tel:+16174538776"
              className="hidden xl:flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>+1 (617) 453-8776</span>
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-primary/40 bg-background/70 text-foreground hover:bg-primary/10 hover:text-primary"
                >
                  <Menu className="mr-2 h-4 w-4" />
                  MENU
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                sideOffset={10}
                className="w-60 border-primary/30"
              >
                <DropdownMenuLabel>NAVIGATE</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {navigation.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className={`font-medium ${
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/privacy">Privacy Policy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/terms">Terms of Service</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              type="button"
              onClick={openScheduleModal}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold tracking-wider glow-primary"
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
