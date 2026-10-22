// Arma la versión de un solo archivo: node construir.mjs
// Junta HTML, estilos, scripts, tipografías y fotos en "Sitio final/Patagonia Homes.html",
// que se abre con doble clic y se puede enviar tal cual.
import { readFile, writeFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = fileURLToPath(new URL(".", import.meta.url));
const out = fileURLToPath(new URL("../Sitio final/Patagonia Homes.html", import.meta.url));
const types = { ".webp": "image/webp", ".jpg": "image/jpeg", ".png": "image/png", ".woff2": "font/woff2", ".svg": "image/svg+xml" };

const dataUri = async (path) => `data:${types[extname(path)]};base64,${(await readFile(join(here, path))).toString("base64")}`;

async function listFiles(dir) {
  const entries = await readdir(join(here, dir), { withFileTypes: true });
  const files = await Promise.all(entries.map((e) => (e.isDirectory() ? listFiles(`${dir}/${e.name}`) : [`${dir}/${e.name}`])));
  return files.flat();
}

let html = await readFile(join(here, "index.html"), "utf8");
let css = await readFile(join(here, "css/styles.css"), "utf8");

// Tipografías dentro del CSS
for (const [, path] of css.matchAll(/url\("\.\.\/(assets\/fonts\/[^"]+)"\)/g)) {
  css = css.replace(`url("../${path}")`, `url("${await dataUri(path)}")`);
}

// Imágenes fijas del HTML
html = html.replace(/<link rel="preload"[^>]*>\n?/, "");
for (const [, attr, path] of [...html.matchAll(/(src|content)="(assets\/img\/[^"]+)"/g)]) {
  if (attr === "content") continue; // og:image queda como ruta para cuando se publique
  html = html.split(`src="${path}"`).join(`src="${await dataUri(path)}"`);
}

// Fotos que arma el JavaScript (alojamientos, actividades y galería)
const images = (await listFiles("assets/img")).filter((p) => /\/(alojamientos|caviahue)\//.test(p));
const assets = {};
for (const path of images) assets[path] = await dataUri(path);

const script = async (path) => (await readFile(join(here, path), "utf8")).replace(/<\/script/gi, "<\\/script");
const inline = [
  `window.ASSETS=${JSON.stringify(assets)};`,
  await script("js/data.js"),
  await script("js/map-data.js"),
  await script("js/app.js"),
].join("\n");

html = html
  .replace('<link rel="stylesheet" href="css/styles.css">', () => `<style>\n${css}\n</style>`)
  .replace(/<script src="js\/data\.js"><\/script>\s*<script src="js\/map-data\.js"><\/script>\s*<script src="js\/app\.js"><\/script>/, () => `<script>\n${inline}\n</script>`);

if (/src="(css|js|assets)\//.test(html)) throw new Error("Quedó una ruta sin embeber");
await writeFile(out, html);
console.log(`Listo: ${out} (${(Buffer.byteLength(html) / 1024 / 1024).toFixed(1)} MB, ${images.length} fotos)`);
