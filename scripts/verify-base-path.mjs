#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const expectedBasePath = process.argv[2] ?? "/";

if (!expectedBasePath.startsWith("/")) {
  console.error(`Expected base path must start with '/'. Received '${expectedBasePath}'.`);
  process.exit(1);
}

const normalizedBase = expectedBasePath.endsWith("/") ? expectedBasePath : `${expectedBasePath}/`;

const indexPath = resolve("dist", "index.html");
let html;
try {
  html = readFileSync(indexPath, "utf8");
} catch (error) {
  console.error(`Could not read '${indexPath}':`, error);
  process.exit(1);
}

const attributePattern = /(src|href)="([^"]+)"/g;
const assetUrls = [];
for (const match of html.matchAll(attributePattern)) {
  const url = match[2];
  if (url.includes("assets/")) {
    assetUrls.push(url);
  }
}

if (assetUrls.length === 0) {
  console.error("No asset URLs were found in dist/index.html to validate.");
  process.exit(1);
}

const mismatched = assetUrls.filter((url) => !url.startsWith(normalizedBase));
if (mismatched.length > 0) {
  console.error(`Found asset URLs that do not start with '${normalizedBase}':`);
  for (const url of mismatched) {
    console.error(`  - ${url}`);
  }
  process.exit(1);
}

console.log(`Verified ${assetUrls.length} asset URLs start with '${normalizedBase}'.`);
