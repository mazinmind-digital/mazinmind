import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import mazinmindLogo from "@/assets/mazinmind-logo.png";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Art Gallery", href: "/art-gallery" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ],
  services: [
    { name: "AI Consulting", href: "/services#ai-consulting" },
    { name: "Digital Marketing", href: "/services#digital-marketing" },
    { name: "AI Automation", href: "/services#automation" },
    { name: "Custom Software", href: "/services#software" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="relative bg-secondary/50 border-t border-primary/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <img
                src={mazinmindLogo}
                alt="MazinMind Digital"
                className="h-[140px] w-auto group-hover:scale-105 transition-transform relative z-20"
                style={{ maxHeight: 140 }}
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Transform your business with AI-powered solutions. We combine cutting-edge technology 
              with human expertise to deliver exceptional results.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-vibrant flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-xl font-bold text-foreground mb-6 tracking-wider">COMPANY</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display text-xl font-bold text-foreground mb-6 tracking-wider">SERVICES</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl font-bold text-foreground mb-6 tracking-wider">CONTACT</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+16173831220"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (617) 383-1220</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mazinmind.digital"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors font-medium"
                >
                    <Mail className="w-5 h-5 text-accent" />
                    <span>info@mazinmind.digital</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground font-medium">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-electric" />
                <span>Boston, MA, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} <span className="text-gradient-primary font-semibold">MazinMind Digital</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
