import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SiteOverlaysProvider } from "./site-overlays";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SiteOverlaysProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </div>
    </SiteOverlaysProvider>
  );
}
