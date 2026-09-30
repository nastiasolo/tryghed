import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { pages } from '../src/content.mjs';
import { document } from '../src/components.mjs';
import { booking, contact, home, standard } from '../src/templates.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));

for (const [key, page] of Object.entries(pages)) {
  let content;

  if (key === 'home') content = home();
  else if (key === 'contact') content = contact();
  else if (key === 'booking') content = booking();
  else content = standard(page);

  const directory = join(root, page.slug);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), document(page, content));
}

console.log(`${Object.keys(pages).length} statiske HTML-sider er bygget.`);
