import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [vike(), react(), tailwindcss()],
  build: {
    target: "es2022",
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate React into its own chunk for better caching
          react: ['react', 'react-dom'],
          // Keep vike separate
          vike: ['vike', 'vike-react']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  // Optimize for production
  esbuild: {
    drop: ['console', 'debugger'],
  },
});
