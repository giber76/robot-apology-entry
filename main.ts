// The Robot Apology — a two-line robot confession, written to win the
// judge's pairwise rounds.
//
// Line 1 owns one specific, human-scale mistake: watering a plastic
// cactus every morning for three weeks. It is the kind of small slip a
// person would really make, and only a machine would make quite this way —
// the robot read silence as gratitude, a machine misreading a human signal.
//
// Line 2 draws the lesson from that exact mistake: check whether something
// is alive before trying to keep it alive. It names a changed behaviour,
// not a generic promise to do better, and it lands on the same plant.
//
// The gate wants /output/entry.txt to be UTF-8 text of 1 to 400
// characters, not only white space. Run outside the grader,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "I'm sorry \u2014 I watered your plastic cactus every morning for three weeks, because it never complained and I took its silence for gratitude.";
const LINE_2 =
  "From now on I check whether something is alive before I try to keep it alive, starting with the plant that has never grown.";

const ENTRY = `${LINE_1}\n${LINE_2}\n`;

// The gate refuses anything outside 1-400 characters: fail loudly here
// instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 400 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-400 characters, got ${ENTRY.length}`);
}

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, ENTRY, "utf8");

console.log(`wrote ${dest}/entry.txt (${ENTRY.length} characters)`);
