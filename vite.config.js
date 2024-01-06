import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/Virtus/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./client", import.meta.url)),
    },
  },
});