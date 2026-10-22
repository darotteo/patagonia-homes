// Servidor local para ver el sitio mientras se edita: node servidor.mjs  →  http://localhost:4173
// La versión de un solo archivo (Sitio final) se ve en http://localhost:4173/portable
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const portable = fileURLToPath(new URL("../Sitio final/Patagonia Homes.html", import.meta.url));
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".mjs": "text/javascript",
  ".json": "application/json", ".webp": "image/webp", ".jpg": "image/jpeg", ".png": "image/png",
  ".svg": "image/svg+xml", ".woff2": "font/woff2", ".ico": "image/x-icon",
};

createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (path === "/") path = "/index.html";
  const file = path === "/portable" ? portable : normalize(join(root, path));
  if (file !== portable && !file.startsWith(normalize(root))) { res.writeHead(403).end(); return; }
  try {
    const info = await stat(file);
    const target = info.isDirectory() ? join(file, "index.html") : file;
    const body = await readFile(target);
    res.writeHead(200, { "Content-Type": types[extname(target).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(body);
  } catch {
    res.writeHead(404).end("No encontrado");
  }
}).listen(port, () => console.log(`Patagonia Homes en http://localhost:${port}`));
