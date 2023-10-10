import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/20-react-hw/",
  base: "./",
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
