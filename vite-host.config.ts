import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import Terminal from "vite-plugin-terminal";
import vpl from "vite-plugin-linter";

const { EsLinter, linterPlugin } = vpl;

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
