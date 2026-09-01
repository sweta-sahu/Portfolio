// Local preview for the static export.
//
// `next build` writes out/ with _next/ and assets/ at its root, but basePath
// makes the HTML request them under /Portfolio/. GitHub Pages supplies that
// prefix by serving the repo at /Portfolio/; a plain static server rooted at
// out/ does not, so every asset 404s. This server strips the prefix.

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize, sep } from 'node:path';

const BASE_PATH = '/Portfolio';
const ROOT = new URL('../out/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT) || 3000;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.pdf': 'application/pdf',
};

async function resolveFile(urlPath) {
  // Strip the base path so /Portfolio/_next/x.js maps to out/_next/x.js.
  let rel = decodeURIComponent(urlPath.split('?')[0]);
  if (rel === BASE_PATH) rel = '/';
  else if (rel.startsWith(BASE_PATH + '/')) rel = rel.slice(BASE_PATH.length);

  // Contain the path within out/ — no traversal above the export root.
  const safe = normalize(join(ROOT, rel));
  if (!safe.startsWith(normalize(ROOT).replace(new RegExp(`\\${sep}$`), ''))) return null;

  try {
    const info = await stat(safe);
    if (info.isDirectory()) return resolveFile(join(rel, 'index.html').split(sep).join('/'));
    return safe;
  } catch {
    // Extensionless route: try the .html Next emitted for it.
    if (!extname(safe)) {
      try {
        await stat(safe + '.html');
        return safe + '.html';
      } catch {}
    }
    return null;
  }
}

createServer(async (req, res) => {
  // Send bare / to the real entry point rather than a confusing 404.
  if (req.url === '/' || req.url === '') {
    res.writeHead(302, { Location: BASE_PATH + '/' });
    return res.end();
  }

  const file = await resolveFile(req.url);
  if (!file) {
    const notFound = join(ROOT, '404.html');
    try {
      const body = await readFile(notFound);
      res.writeHead(404, { 'Content-Type': TYPES['.html'] });
      return res.end(body);
    } catch {
      res.writeHead(404, { 'Content-Type': TYPES['.txt'] });
      return res.end(`404 ${req.url}`);
    }
  }

  const body = await readFile(file);
  res.writeHead(200, {
    'Content-Type': TYPES[extname(file).toLowerCase()] ?? 'application/octet-stream',
    'Cache-Control': 'no-store',
  });
  res.end(body);
}).listen(PORT, () => {
  console.log(`Preview of out/ ready at http://localhost:${PORT}${BASE_PATH}/`);
});
