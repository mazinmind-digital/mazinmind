import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "script-src 'self' 'unsafe-inline' 'sha256-92gQq1QEZkGyuW83c3+JEh+ZCbnYlC45vf3wZs92sZ0=' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://www.google-analytics.com https://*.google-analytics.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' ws: wss: https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com",
  "frame-src 'self'",
  "form-action 'self' mailto: https://*.hubspot.com https://*.hubspot.net",
].join("; ");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  build: {
    modulePreload: { polyfill: false },
    polyfillModulePreload: false,
  },
  server: {
    host: "::",
    port: 8080,
    headers: {
      "Content-Security-Policy": contentSecurityPolicy,
    },
    hmr: {
      overlay: false,
    },
  },
  preview: {
    headers: {
      "Content-Security-Policy": contentSecurityPolicy,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
