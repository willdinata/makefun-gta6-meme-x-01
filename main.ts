"use strict";

const { copyFileSync, existsSync, mkdirSync, readFileSync } = require("node:fs");
const { join, resolve } = require("node:path");

const repositoryRoot = resolve(process.env.MAKEFUN_BOT_DIR ?? __dirname);
const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const sourcePath = join(repositoryRoot, "POST.json");
const destinationPath = join(outputDirectory, "POST.json");

if (!existsSync(sourcePath)) {
  console.error(`Error: POST.json is missing from the repository root: ${sourcePath}`);
  process.exit(1);
}

let contents;
try {
  contents = readFileSync(sourcePath, "utf8");
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Error: could not read POST.json at ${sourcePath}: ${message}`);
  process.exit(1);
}

let post;
try {
  post = JSON.parse(contents);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Error: POST.json is not valid JSON at ${sourcePath}: ${message}`);
  process.exit(1);
}

if (
  post === null ||
  typeof post !== "object" ||
  Array.isArray(post) ||
  typeof post.url !== "string" ||
  post.url.trim().length === 0
) {
  console.error(`Error: POST.json must contain a non-empty string "url" field: ${sourcePath}`);
  process.exit(1);
}

try {
  mkdirSync(outputDirectory, { recursive: true });
  copyFileSync(sourcePath, destinationPath);
  console.log(`Copied POST.json to ${destinationPath}`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Error: could not copy POST.json to ${destinationPath}: ${message}`);
  process.exit(1);
}
