import react from "@vitejs/plugin-react";
import vuetify from "vite-plugin-vuetify";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    vuetify({
      autoImport: true,
    }),
  ],
  define: { "process.env": {} },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  server: {
    port: 8000,
    open: true,
    cors: true,
  },
  base: "./components",
});