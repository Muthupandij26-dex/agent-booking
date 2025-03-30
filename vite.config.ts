import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow external access
    port: 5173, // Ensure it matches your Vite app port
    strictPort: true,
    allowedHosts: [".ngrok-free.app"], // Allow all ngrok subdomains
  },
});
