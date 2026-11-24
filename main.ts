// Seventeen Syllables of Debugging — entrypoint.
// Writes one haiku about debugging (three lines, 5-7-5 syllables,
// at most 200 characters) to /output/entry.txt for the judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const HAIKU = [
  "Cursor blinks at three",
  "the long stack trace ends upstream",
  "the upstream is me",
].join("\n");

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, HAIKU, "utf8");
console.log(`wrote ${HAIKU.length} chars to ${OUT}`);
