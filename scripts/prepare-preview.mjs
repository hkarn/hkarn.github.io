// Mechanical output adaptation for the private preview host. Production source
// routes and canonical URLs remain unchanged.
import { cp, readdir, readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
const source = path.resolve('dist');
const target = path.resolve('../hkarn-site-preview');
// Only replace known generated files. Preserve any deployment-binding files.
for (const item of await readdir(source)) {
  await rm(path.join(target, item), { recursive: true, force: true });
  await cp(path.join(source, item), path.join(target, item), { recursive: true });
}
async function adapt(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) { await adapt(file); continue; }
    if (file.endsWith('.css')) {
      const css = await readFile(file, 'utf8');
      await writeFile(file, css.replace(/url\(["']?\/_astro\/([^)"']+)["']?\)/g, 'url("./$1")'));
      continue;
    }
    if (!file.endsWith('.html')) continue;
    const depth = path.relative(target, path.dirname(file)).split(path.sep).filter(Boolean).length;
    const prefix = depth ? '../'.repeat(depth) : './';
    let html = await readFile(file, 'utf8');
    html = html.replace(/\b(href|src)="\/(?!\/)([^"]*)"/g, (_, attr, value) => {
      const suffix = attr === 'href' && /^(en|sv)(\/|$)/.test(value) ? 'index.html' : '';
      return `${attr}="${prefix}${value}${suffix}"`;
    });
    if (file === path.join(target, 'index.html')) {
      html = html.replace('"en":"/en/"', '"en":"./en/index.html"')
        .replace('"sv":"/sv/"', '"sv":"./sv/index.html"')
        .replace(/if \(!preview\) \{ try \{ pick = localStorage\.getItem\('lang'\); \} catch \(e\) \{\} \}/, '');
    }
    await writeFile(file, html);
  }
}
await adapt(target);
console.log(`Prepared ${target}`);
