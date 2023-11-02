import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { EsLinter, linterPlugin } from "vite-plugin-linter";
import svgrPlugin from "vite-plugin-svgr";
import Terminal from "vite-plugin-terminal";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    Terminal({
      console: "terminal",
    }),
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })],
    }),
    svgrPlugin(),
  ],
}));
