import { defineConfig, Plugin } from "vite";
import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Plugin to copy tailwind.css as-is to dist
const copyTailwindCss = (): Plugin => ({
  name: "copy-tailwind-css",
  generateBundle() {
    const srcCss = path.resolve(__dirname, "src/tailwind.css");
    const destCss = path.resolve(__dirname, "dist/tailwind.css");
    
    try {
      fs.copyFileSync(srcCss, destCss);
      console.log("✓ Copied tailwind.css to dist/");
    } catch (err) {
      console.warn("Failed to copy tailwind.css:", err);
    }
  },
});

// Plugin to skip CSS processing during build
const skipCss = (): Plugin => ({
  name: "skip-css",
  resolveId(id) {
    // Mark CSS imports as external so they're not processed
    if (id.endsWith(".css") || id.includes("tailwind.css")) {
      return { id, external: true };
    }
    return null;
  },
});

export default defineConfig({
  plugins: [skipCss(), copyTailwindCss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    minify: false,
    emptyOutDir: false,
    sourcemap: true,
    rollupOptions: {
      preserveEntrySignatures: "strict",
      input: path.resolve(__dirname, "src/index.ts"),

      // Mark all dependencies and peers as external
      external: (id: string) => {
        // Externalize CSS imports - consumers will handle them
        if (id.endsWith(".css") || id.includes("tailwind.css")) {
          return true;
        }

        // Externalize node built-ins
        if (id.startsWith("node:") || id === "react" || id === "react-dom") {
          return true;
        }

        try {
          const pkgPath = path.resolve(__dirname, "package.json");
          const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
          const deps = Object.keys(pkg.dependencies || {});
          const peers = Object.keys(pkg.peerDependencies || {});
          const devDeps = Object.keys(pkg.devDependencies || {});

          // Externalize all dependencies, peerDependencies, and devDependencies
          const allDeps = [...deps, ...peers, ...devDeps];

          return allDeps.some((dep) => id === dep || id.startsWith(`${dep}/`));
        } catch (err) {
          console.warn("Could not read package.json:", err);
          // Fallback: externalize common patterns
          return !id.startsWith(".") && !path.isAbsolute(id);
        }
      },

      output: [
        // ESM build
        {
          dir: path.resolve(__dirname, "dist/esm"),
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].js",
          sourcemapExcludeSources: false,
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
        },
      ],
    },
  },
});
