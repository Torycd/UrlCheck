import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://www.virustotal.com", // Target VirusTotal API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api/v3"), // Rewrite the path correctly
      },
    },
  },
});
