import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // If you're deploying to GitHub Pages as a *project site* (https://<user>.github.io/<repo>/),
  // you must set base to "/<repo>/" so asset URLs resolve correctly.
  // If you use a custom domain, set base to "/".
  base: mode === "production" ? "/theunhurriedbody/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
