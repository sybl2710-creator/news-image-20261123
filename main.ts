// news-image-20261123 — copies the finished front page beside this script to
// $MAKEFUN_OUTPUT_DIR/entry.png (default /output). Deterministic: same bytes out.

import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const source = join(here, "entry.png");
const target = join(outputDir, "entry.png");

await mkdir(outputDir, { recursive: true });
await copyFile(source, target);

console.log(`copied ${source} -> ${target}`);
