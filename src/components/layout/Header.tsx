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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="relative flex h-24 items-center justify-end">
          {/* Left logo that overhangs below the header */}
          <Link to="/" className="group absolute left-0 top-1/2 z-[70] -translate-y-[20%] pt-[5px]">
            <img
              src={mazinmindLogo}
              alt="MazinMind Digital"
              className="h-[114px] w-auto max-w-none transition-transform group-hover:scale-105 drop-shadow-xl"
            />
          </Link>

          <div className="relative z-[90] flex items-center gap-3">
            <a 
              href="tel:+16173831220" 
              className="hidden xl:flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>+1 (617) 383-1220</span>
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

              <DropdownMenuContent align="end" sideOffset={10} className="w-60 border-primary/30">
                <DropdownMenuLabel>NAVIGATE</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {navigation.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className={`font-medium ${
                        location.pathname === item.href ? "text-primary" : "text-foreground"
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
