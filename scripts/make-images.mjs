// Renders the social share images and the touch icon into public/.
// Run after changing the hero text or colours:
//   docker compose run --rm site node scripts/make-images.mjs
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { inflateSync } from 'node:zlib';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { ui } from '../src/i18n/ui.ts';

// Unpacks a WOFF 1 file into a plain TrueType/OpenType font. The FreeType
// bundled with sharp cannot read WOFF, and Fontsource ships no TTF files.
function woffToSfnt(woff) {
  const numTables = woff.readUInt16BE(12);
  const tables = [];
  for (let i = 0; i < numTables; i++) {
    const e = 44 + i * 20;
    const offset = woff.readUInt32BE(e + 4), compLength = woff.readUInt32BE(e + 8), origLength = woff.readUInt32BE(e + 12);
    const raw = woff.subarray(offset, offset + compLength);
    tables.push({ tag: woff.subarray(e, e + 4), checksum: woff.readUInt32BE(e + 16), data: compLength < origLength ? inflateSync(raw) : raw });
  }
  const log2 = Math.floor(Math.log2(numTables));
  const head = Buffer.alloc(12 + numTables * 16);
  woff.copy(head, 0, 4, 8);
  head.writeUInt16BE(numTables, 4);
  head.writeUInt16BE(16 * 2 ** log2, 6);
  head.writeUInt16BE(log2, 8);
  head.writeUInt16BE(numTables * 16 - 16 * 2 ** log2, 10);
  const body = [];
  let offset = head.length;
  tables.forEach((t, i) => {
    t.tag.copy(head, 12 + i * 16);
    head.writeUInt32BE(t.checksum, 16 + i * 16);
    head.writeUInt32BE(offset, 20 + i * 16);
    head.writeUInt32BE(t.data.length, 24 + i * 16);
    const padded = Buffer.alloc(Math.ceil(t.data.length / 4) * 4);
    t.data.copy(padded);
    body.push(padded);
    offset += padded.length;
  });
  return Buffer.concat([head, ...body]);
}

// librsvg finds fonts through fontconfig, so point it at the bundled Fontsource files.
const fonts = await mkdtemp(path.join(tmpdir(), 'fonts-'));
for (const file of ['bodoni-moda/files/bodoni-moda-latin-600-normal.woff', 'jost/files/jost-latin-500-normal.woff']) {
  const woff = await readFile(path.resolve('node_modules/@fontsource', file));
  await writeFile(path.join(fonts, path.basename(file, '.woff') + '.ttf'), woffToSfnt(woff));
}
await writeFile(path.join(fonts, 'fonts.conf'),
  `<?xml version="1.0"?><fontconfig><dir>${fonts}</dir><cachedir>${fonts}/cache</cachedir></fontconfig>`);
process.env.FONTCONFIG_FILE = path.join(fonts, 'fonts.conf');
// Loaded only now: fontconfig reads FONTCONFIG_FILE when sharp initialises.
const { default: sharp } = await import('sharp');

const orange = '#ff8126';
const ink = '#171715';
const display = `font-family="Bodoni Moda" font-weight="600"`;
const text = `font-family="Jost" font-weight="500"`;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

for (const lang of ['en', 'sv']) {
  const t = ui[lang];
  const tagline = t['meta.title'].split(' | ')[1];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="${orange}"/>
    <g ${display} font-size="168" letter-spacing="-6" fill="${ink}">
      <text x="64" y="210">${esc(t['hero.line1'])}</text>
      <text x="1136" y="380" text-anchor="end">${esc(t['hero.line2'])}</text>
    </g>
    <g ${text} fill="${ink}">
      <text x="64" y="560" font-size="40">Håkan Arnoldson</text>
      <text x="1136" y="560" font-size="30" text-anchor="end">${esc(tagline)}</text>
    </g>
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile(`public/og-${lang}.png`);
}

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${orange}"/>
  <text x="32" y="47" ${display} font-size="44" text-anchor="middle" fill="#111">A</text>
</svg>`;
await sharp(Buffer.from(icon)).png().toFile('public/apple-touch-icon.png');
console.log('Wrote public/og-en.png, public/og-sv.png and public/apple-touch-icon.png');
