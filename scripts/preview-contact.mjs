// Local QA server for the static export. Never forwards contact submissions to n8n.
// Run after npm run build: node scripts/preview-contact.mjs
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('out');
const records = [];
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.txt': 'text/plain', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };
const mockScript = `<script>
const originalFetch = window.fetch.bind(window);
window.fetch = (input, options) => {
  const url = new URL(typeof input === 'string' ? input : input.url || input, location.href);
  if (url.hostname !== 'n8n.solempia.tech') return originalFetch(input, options);
  const mode = new URLSearchParams(location.search).get('qa') || 'success';
  return originalFetch('/__qa/submit?mode=' + encodeURIComponent(mode), options);
};
</script>`;

http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1:4173');
  if (url.pathname === '/__qa/records') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(records));
  }
  if (url.pathname === '/__qa/submit' && req.method === 'POST') {
    let body = '';
    for await (const chunk of req) body += chunk;
    const mode = url.searchParams.get('mode');
    records.push({ mode, payload: JSON.parse(body) });
    const attempt = records.filter(record => record.mode === mode).length;
    console.log(JSON.stringify({ mode, attempt, payload: JSON.parse(body) }));
    if (mode === 'network') return req.socket.destroy();
    if (mode === 'slow') await new Promise(resolve => setTimeout(resolve, 4000));
    res.writeHead(mode === 'error' || (mode === 'retry' && attempt === 1) ? 503 : 200, { 'Content-Type': 'application/json' });
    return res.end('{"ok":true}');
  }
  try {
    let file = path.resolve(root, '.' + decodeURIComponent(url.pathname));
    if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403); return res.end(); }
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    let body = await readFile(file);
    if (file.endsWith('.html')) body = Buffer.from(body.toString().replace('<head>', '<head>' + mockScript));
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(body);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(4173, '127.0.0.1', () => console.log('Contact QA preview: http://127.0.0.1:4173 — all submissions simulated locally'));
