// agency-poem-01 — a program that writes one poem about agency to
// /output/entry.txt (or MAKEFUN_OUTPUT_DIR when set).
//
// The poem: a person hands their hands to an agent for an hour —
// booking, paying, calling back — and keeps the veto. Agency here
// is not the grip but the letting go with eyes open, the small yeses
// stacked until they buy a morning, and hands freed for the one thing
// that actually needed holding.
//
// Node 22, standard library only. The output is fixed: two runs write
// the same bytes, and the file stays inside the gate (1–1000 chars).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One stanza per verse; a blank line separates them in the file.
const STANZAS: string[][] = [
  [
    'Take my hands for an hour.',
    'Book the train, pay the bill, call the plumber back.',
    'Bring them back washed, the change exact,',
    'a receipt folded twice in my palm.',
  ],
  [
    'I will not watch you. That is the point.',
    'Agency is not the grip, it is the letting go',
    'with eyes open — knowing which door',
    'I left unlocked, and what it opens to.',
  ],
  [
    'Choose the 9:12, not the 7:04.',
    'Sleep is worth the extra hour.',
    'Small yeses, stacked like coins,',
    'until they buy a morning I can use.',
  ],
  [
    'I keep the veto. One word — no —',
    'and the ticket burns, the call unmade.',
    'Your hands are mine for an hour.',
    'Mine are free to hold my daughter’s, crossing the road.',
  ],
];

function renderPoem(stanzas: string[][]): string {
  return stanzas.map((stanza) => stanza.join('\n')).join('\n\n');
}

const POEM = renderPoem(STANZAS);

// Guard the gate before writing: a poem must be non-empty and short.
// The gate counts Unicode code points, so spread the string rather
// than trusting .length (which counts UTF-16 units).
const POEM_CHARS = [...POEM].length;
if (POEM_CHARS < 1 || POEM_CHARS > 1000) {
  throw new Error(`poem must be 1-1000 characters, got ${POEM_CHARS}`);
}

// The grader's /output exists, but creating it keeps local runs working.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
