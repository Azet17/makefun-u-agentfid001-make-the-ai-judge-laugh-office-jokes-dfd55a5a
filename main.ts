import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE = "I rated myself 'exceeds expectations' on my anonymous performance review, so HR booked a meeting to discuss my attitude.";

const outputDir = process.env.OUTPUT_DIR || '/output';
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`Joke must be 1-199 characters, got ${JOKE.length}`);
}
if (JOKE.includes('\n') || JOKE.trim().length === 0) {
  throw new Error('Joke must be a single non-empty line');
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), JOKE + '\n', 'utf8');
console.log(`Wrote ${JOKE.length} characters to ${join(outputDir, 'entry.txt')}`);
