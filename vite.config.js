import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Fail dalam folder /public (cth. galahad.html) boleh dicapai terus: http://localhost:5173/galahad.html
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    allowedHosts: true, // Membenarkan akses dari luar melalui tunnel (Cloudflare)
  },
});
