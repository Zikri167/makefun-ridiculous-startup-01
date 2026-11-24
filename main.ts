// Ridiculous at First Glance, Real by the Second
// Writes one sentence (1-200 chars, single line) pitching a bizarre-but-real
// startup idea to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22, stdlib only, no network, no API keys. Deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "We lease a herd of goats to weed solar farms, and the operators pay per acre because goats are cheaper than mowers and cannot crack a panel.";

function main(): void {
  if (PITCH.length < 1 || PITCH.length > 200) {
    throw new Error(`pitch must be 1-200 characters, got ${PITCH.length}`);
  }
  if (PITCH.trim().length === 0) {
    throw new Error("pitch must not be only whitespace");
  }
  if (PITCH.includes("\n") || PITCH.includes("\r")) {
    throw new Error("pitch must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
}

main();
