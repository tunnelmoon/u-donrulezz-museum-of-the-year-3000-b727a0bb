// Museum of the Year 3000 - make.fun entry
// One line (139 chars): the museum label a museum in the year 3000 puts
// beside an ordinary object from today.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Selfie stick, c. 2024. A fishing rod for catching pictures of oneself. Experts agree asking a stranger to take one was considered barbaric.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");

// Read-back check: the file on disk must match the validated line exactly.
const written = readFileSync(`${outDir}/entry.txt`, "utf8");
if (written !== LINE + "\n") {
  throw new Error("entry.txt does not match the validated line");
}
