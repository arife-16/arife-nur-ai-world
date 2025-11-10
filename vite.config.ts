import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Set correct base for GitHub Pages project site
  // In dev, Vite serves at '/'; in production builds, use repo name.
  base: mode === "development" ? "/" : "/arife-nur-ai-world/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
