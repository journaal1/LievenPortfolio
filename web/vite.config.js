import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: [
      { find: "three/addons/", replacement: path.resolve(__dirname, "node_modules/three/examples/jsm/") },
      { find: "three", replacement: path.resolve(__dirname, "node_modules/three") },
      { find: "three.meshline", replacement: path.resolve(__dirname, "node_modules/three.meshline") },
    ]
  }
});