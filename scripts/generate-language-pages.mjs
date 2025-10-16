import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import path from "path";

const DIST_DIR = path.resolve("dist");
const INDEX_FILE = path.join(DIST_DIR, "index.html");
const LANGUAGES = ["en", "nl"];

if (!existsSync(INDEX_FILE)) {
  throw new Error("dist/index.html not found. Run `npm run build` before generating language pages.");
}

LANGUAGES.forEach((lang) => {
  const langDir = path.join(DIST_DIR, lang);
  mkdirSync(langDir, { recursive: true });
  copyFileSync(INDEX_FILE, path.join(langDir, "index.html"));
});

// Provide a 404 fallback for GitHub Pages to support client-side routing
const notFoundPath = path.join(DIST_DIR, "404.html");
copyFileSync(INDEX_FILE, notFoundPath);

// Record the generated languages for debugging purposes
const manifestPath = path.join(DIST_DIR, "i18n-manifest.json");
writeFileSync(manifestPath, JSON.stringify({ languages: LANGUAGES }, null, 2));
