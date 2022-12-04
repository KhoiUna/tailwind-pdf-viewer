import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const config = {
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/PDFViewer.tsx"),
      name: "Tailwind PDF Viewer",
      fileName: "index.js",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
};

export default defineConfig(config);
