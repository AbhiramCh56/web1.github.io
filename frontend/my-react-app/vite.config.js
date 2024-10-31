import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Web/",
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
    build: {
      outDir: "dist",
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },
});
