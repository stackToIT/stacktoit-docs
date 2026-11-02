// Checks every page: title and description, relative links, heading anchors out of scope.
// Node standard library only. Exit code 1 on any failure.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'docs');
const files = fs.readdirSync(root, { recursive: true }).filter((f) => f.endsWith('.md')).map((f) => path.join(root, f));
const failures = [];
for (const file of files) {
  const rel = path.relative(root, file);
  const text = fs.readFileSync(file, 'utf8');
  const head = text.startsWith('---\n') ? text.split('---', 3)[1] : '';
  if (!/^title:\s*\S/m.test(head)) failures.push(`${rel}: no title`);
  if (!/^description:\s*\S/m.test(head)) failures.push(`${rel}: no description`);
  const prose = text.replace(/```[\s\S]*?```/g, '');
  for (const m of prose.matchAll(/\]\(([^)\s]+)\)/g)) {
    const link = m[1].split('#')[0];
    if (!link || /^(https?:|mailto:)/.test(link)) continue;
    if (!link.endsWith('.md') || !fs.existsSync(path.resolve(path.dirname(file), link))) failures.push(`${rel}: broken link ${m[1]}`);
  }
}
for (const f of failures) console.error(`FAIL  ${f}`);
console.log(`${files.length} pages, ${failures.length} failures`);
process.exit(failures.length ? 1 : 0);
