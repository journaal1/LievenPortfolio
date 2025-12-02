import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "three": path.resolve(__dirname, "node_modules/three"),
      "three/addons/": path.resolve(__dirname, "node_modules/three/examples/jsm/"),
      "three.meshline": path.resolve(__dirname, "node_modules/three.meshline"),
    }
  }
});