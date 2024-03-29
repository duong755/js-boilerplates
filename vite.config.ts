import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    manifest: true,
  },
  plugins: [
    tsconfigPaths(), //
    react(),
    splitVendorChunkPlugin(),
  ],
  server: {
    watch: {
      ignored: [/\.(test|spec)\.[jt]sx?$/],
    },
  },
});
