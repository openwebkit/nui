
import { defineConfig } from "vite";
import * as path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pkgPath = path.resolve(__dirname, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
const deps = Object.keys(pkg.dependencies || {});
const peers = Object.keys(pkg.peerDependencies || {});
const devDeps = Object.keys(pkg.devDependencies || {});

const allDeps = [...deps, ...peers, ...devDeps];

const isExternal = (id: string) => {
  return allDeps.includes(id);
};

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    minify: false,
    sourcemap: true,
    rollupOptions: {
      input: path.resolve(__dirname, "src/index.ts"),
      external: isExternal,
      preserveEntrySignatures: "exports-only",
      output: [
        // ESM build
        {
          dir: path.resolve(__dirname, "dist/esm"),
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].js",
          sourcemapExcludeSources: false,
          assetFileNames: "[name][extname]",
        },
        // CJS build
        {
          dir: path.resolve(__dirname, "dist/cjs"),
          format: "cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].js",
          exports: "named",
          sourcemapExcludeSources: false,
          assetFileNames: "[name][extname]",
        },
      ],
    },
  },
});
