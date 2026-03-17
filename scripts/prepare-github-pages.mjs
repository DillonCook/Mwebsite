import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY;

if (!isGitHubActions || !repository) {
  console.log("prepare-github-pages: not running in GitHub Actions, skipping rewrite.");
  process.exit(0);
}

const rawBasePath = repository.split("/")[1];
const normalizedBasePath = `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`;
const distDir = "dist";
const htmlFiles = [];
const baseSegment = normalizedBasePath.slice(1);

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const fullPath = join(directory, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (fullPath.endsWith(".html")) {
      htmlFiles.push(fullPath);
    }
  }
}

function prefixRootRelativePaths(html) {
  const prefixedRootPath = new RegExp(
    `(href|src)=("|')\\/(?!\\/|${escapeRegExp(baseSegment)}\\/)([^"']*)\\2`,
    "gi",
  );

  return html.replace(
    prefixedRootPath,
    (_, attr, quote, path) => `${attr}=${quote}${normalizedBasePath}/${path}${quote}`,
  );
}

walk(distDir);

for (const filePath of htmlFiles) {
  const original = readFileSync(filePath, "utf8");
  const updated = prefixRootRelativePaths(original);

  if (updated !== original) {
    writeFileSync(filePath, updated, "utf8");
  }
}

console.log(
  `prepare-github-pages: prefixed root-relative paths with ${normalizedBasePath} in ${htmlFiles.length} HTML files.`,
);
