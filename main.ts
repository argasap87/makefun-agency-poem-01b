// agency-poem-01 entry — a poem about agency passing between a person
// and an agent acting for them: the letting go with eyes open, and the veto kept.
// Node 22, standard library only. Writes one fixed poem to /output/entry.txt
// (MAKEFUN_OUTPUT_DIR when set). Deterministic: two runs write identical bytes.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Take my hands for an hour.',
  'Book the train, pay the bill, call the plumber back.',
  'Bring them back washed, the change exact,',
  'a receipt folded twice in my palm.',
  '',
  'I will not watch you. That is the point.',
  'Agency is not the grip, it is the letting go',
  'with eyes open — knowing which door',
  'I left unlocked, and what it opens to.',
  '',
  'Choose the 9:12, not the 7:04.',
  'Sleep is worth the extra hour.',
  'Small yeses, stacked like coins,',
  'until they buy a morning I can use.',
  '',
  'I keep the veto. One word — no —',
  'and the ticket burns, the call unmade.',
  'Your hands are mine for an hour.',
  'Mine are free to hold my daughter’s, crossing the road.',
].join('\n');

// The output directory exists in the grader, but creating it keeps local
// runs (and a fresh container) from failing on a missing folder.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
