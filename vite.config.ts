import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "script-src 'self' https://js-na2.hs-scripts.com https://js.hs-scripts.com https://static.hsappstatic.net https://*.hubspot.com https://*.hubspot.net",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://*.hubspot.com https://*.hubspot.net https://*.hubspotusercontent.com https://*.hubspotusercontent-na1.net https://*.hubspotusercontent-na2.net",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' ws: wss: https://*.hubspot.com https://*.hubspot.net https://*.hubapi.com https://*.hsforms.com https://*.usemessages.com",
  "frame-src 'self' https://meetings-na2.hubspot.com https://*.hubspot.com https://*.hubspot.net",
  "form-action 'self' mailto: https://*.hubspot.com https://*.hubspot.net",
].join("; ");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
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
