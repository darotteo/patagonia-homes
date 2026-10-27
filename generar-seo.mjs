// Genera páginas estáticas e indexables. Ejecutar después de editar js/data.js.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';

const root = new URL('./', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');
const save = (path, value) => writeFile(new URL(path, root), value);
const context = { window: {} };
runInNewContext(await read('js/data.js'), context);
const { SITE, PROPERTIES, SEASONS, FAQ } = context.window;
const origin = 'https://homespatagonia.com';
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const json = data => JSON.stringify(data).replaceAll('<', '\\u003c');
const wa = `${'https://wa.me/'}${SITE.whatsapp}?text=${encodeURIComponent('Hola, vengo de Patagonia Homes y quiero consultar por una estadía en Caviahue.')}`;
const photoPrefix = { trawen:'trawen', 'los-basaltos':'basaltos', ekamai:'ekamai', 'la-maison':'maison' };
const propertyPhotos = p => Array.from({length:p.photos}, (_,i) => ({src:`assets/img/alojamientos/${photoPrefix[p.id]}-${String((i + p.cover - 1) % p.photos + 1).padStart(2,'0')}.webp`,alt:`${p.fullName} en Caviahue · foto ${i+1}`}));
const paths = ['/'];
const stylesheet = '<link rel="stylesheet" href="../../css/styles.css">';

function gallery(photos) {
  return `<section class="destination-gallery" aria-label="Fotos" tabindex="0"><div class="destination-stage"><img class="destination-main-photo" src="../../${photos[0].src}" alt="${esc(photos[0].alt)}" width="1200" height="900" fetchpriority="high"><div class="destination-gallery-controls"${photos.length < 2 ? ' hidden' : ''}><button type="button" data-gallery-step="-1" aria-label="Foto anterior">←</button><span class="destination-count" aria-live="polite">1 / ${photos.length}</span><button type="button" data-gallery-step="1" aria-label="Foto siguiente">→</button></div></div><div class="destination-thumbs"${photos.length < 2 ? ' hidden' : ''}>${photos.map((p,i)=>`<button type="button" data-destination-photo="${i}" aria-label="Ver foto ${i+1}: ${esc(p.alt)}" aria-pressed="${i===0}"><img src="../../${p.src}" alt="${esc(p.alt)}" loading="lazy" width="120" height="90"></button>`).join('')}</div></section>`;
}
function page({path,title,description,photos,section,sectionId,body,structured}) {
  paths.push(path);
  return `<!doctype html>
<html lang="es-AR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>${esc(title)} · Patagonia Homes</title><meta name="description" content="${esc(description)}"><meta name="robots" content="index,follow,max-image-preview:large"><meta name="theme-color" content="#14212a"><link rel="canonical" href="${origin}${path}"><meta property="og:type" content="website"><meta property="og:locale" content="es_AR"><meta property="og:site_name" content="Patagonia Homes"><meta property="og:title" content="${esc(title)} · Patagonia Homes"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${origin}${path}"><meta property="og:image" content="${origin}/${photos[0].src}"><meta property="og:image:alt" content="${esc(photos[0].alt)}"><meta name="twitter:card" content="summary_large_image">${stylesheet}<script type="application/ld+json">${json({'@context':'https://schema.org','@graph':[structured,{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Patagonia Homes',item:origin+'/'},{'@type':'ListItem',position:2,name:section,item:origin+'/#'+sectionId},{'@type':'ListItem',position:3,name:title,item:origin+path}]}]})}</script></head>
<body class="content-page"><a class="skip-link" href="#contenido">Saltar al contenido</a><header class="content-header"><div class="wrap"><a class="content-brand" href="../../" aria-label="Patagonia Homes, inicio"><img src="../../assets/img/logo-claro.webp" alt="Patagonia Homes" width="720" height="360"></a><a class="content-back" href="../../#${sectionId}">← ${section}</a></div></header><main id="contenido" class="wrap content-main"><nav class="breadcrumbs" aria-label="Ubicación en el sitio"><a href="../../">Inicio</a><span aria-hidden="true">/</span><a href="../../#${sectionId}">${section}</a></nav><h1>${esc(title)}</h1><div class="content-layout">${gallery(photos)}<div class="content-copy">${body}</div></div><section class="content-stay"><h2>Tu lugar en Caviahue</h2><p>Departamentos, cabañas y hostal boutique para disfrutar de la Patagonia con tu familia, amigos o pareja.</p><div class="content-actions"><a class="button" href="../../#alojamientos">Ver alojamientos</a><a class="button outline" href="${wa}" target="_blank" rel="noopener">Consultar por WhatsApp</a></div></section></main><footer class="content-footer wrap"><p>Patagonia Homes · Caviahue, Neuquén, Patagonia Argentina</p><a href="../../#contacto">Contacto</a><a href="../../#galeria">Fotos y créditos</a></footer><script src="../../js/galeria.js" defer></script></body></html>\n`;
}
const lodgingSchema = p => ({
  '@type':p.id==='trawen'?'Hostel':'LodgingBusiness', '@id':`${origin}/alojamientos/${p.id}/#alojamiento`,
  name:p.fullName, description:`${p.intro} ${p.more}`, url:`${origin}/alojamientos/${p.id}/`,
  image:propertyPhotos(p).map(img=>`${origin}/${img.src}`),
  telephone:`+${SITE.whatsapp}`, address:{'@type':'PostalAddress',addressLocality:'Caviahue',addressRegion:'Neuquén',addressCountry:'AR'},
  geo:{'@type':'GeoCoordinates',latitude:p.coordinates[0],longitude:p.coordinates[1]},
  checkinTime:p.checkin,checkoutTime:p.checkout,petsAllowed:p.pets,hasMap:p.maps,
  amenityFeature:p.amenities.map(([,name])=>({'@type':'LocationFeatureSpecification',name,value:true})),
  ...(p.id==='trawen'?{numberOfRooms:5}:{}),
});
for (const p of PROPERTIES) {
  const dir = `alojamientos/${p.id}/`;
  await mkdir(new URL(dir, root), {recursive:true});
  const body = `<p class="content-location">${esc(p.locationLong)}</p><p class="content-capacity">${esc(p.capacity)}</p><p>${esc(p.intro)}</p><p>${esc(p.more)}</p><h2>Unidades y huéspedes</h2><ul class="content-units">${p.units.map(u=>`<li><h3>${esc(u.name)}</h3><p>${esc(u.guests)} huéspedes · ${esc(u.detail)}</p></li>`).join('')}</ul><h2>Comodidades</h2><ul class="content-amenities">${p.amenities.map(([,name])=>`<li>${esc(name)}</li>`).join('')}</ul><p>Check-in desde las ${p.checkin} · Check-out hasta las ${p.checkout}. ${p.pets?'Acepta mascotas.':'Sin mascotas.'}</p><div class="content-actions"><a class="button" href="${p.book}" target="_blank" rel="noopener">Reservar ${esc(p.name)}</a><a class="button outline" href="${p.maps}" target="_blank" rel="noopener">Cómo llegar en Google Maps</a></div>`;
  await save(dir+'index.html', page({path:'/'+dir,title:`${p.fullName} en Caviahue`,description:`${p.fullName} en Caviahue, Neuquén. ${p.capacity}. Conocé las habitaciones, comodidades y fotos. Consultá disponibilidad y reservá tu estadía.`,photos:propertyPhotos(p),section:'Alojamientos',sectionId:'alojamientos',body,structured:lodgingSchema(p)}));
}
for (const [key, season] of Object.entries(SEASONS)) for (const item of season.items) {
  const dir = `que-hacer/${item.slug}/`;
  await mkdir(new URL(dir, root), {recursive:true});
  const photos = item.photos.map(photo=>({src:'assets/img/'+photo.img,alt:photo.alt}));
  const points = [item.poi,...(item.additionalPois||[])].map(name=>context.window.POIS.find(p=>p.name===name)).filter(Boolean);
  const links = points.map(p=>`<p>${esc(p.name)}</p><a class="button outline" href="${p.link}" target="_blank" rel="noopener">${points.length>1?'Ver '+esc(p.name):'Ver ubicación'} en Google Maps</a>`).join('');
  const body = `<p class="content-location">Caviahue y alrededores · ${esc(season.label)}</p><p>${esc(item.text)}</p>${item.details.map(p=>`<p>${esc(p)}</p>`).join('')}${item.park?`<section class="park-note"><h2>Parque Náutico</h2><p>En el lago también está nuestro Parque Náutico. Escribinos para conocer las actividades y la disponibilidad para tu visita.</p><a class="text-link" href="${wa}" target="_blank" rel="noopener">Consultar por el Parque Náutico →</a></section>`:''}<section class="content-location-links"><h2>Ubicación</h2>${links||'<p>Consultanos por los paseos disponibles y su punto de salida.</p>'}</section>`;
  await save(dir+'index.html', page({path:'/'+dir,title:item.title,description:`${item.title}: ${item.text}`.slice(0,185),photos,section:'Qué hacer en Caviahue',sectionId:'que-hacer',body,structured:{'@type':'TouristAttraction',name:item.title,description:[item.text,...item.details].join(' '),url:origin+'/'+dir,image:photos.map(p=>origin+'/'+p.src),...(points[0]?{hasMap:points[0].link,geo:{'@type':'GeoCoordinates',latitude:points[0].coords[0],longitude:points[0].coords[1]}}:{})}}));
}

// La página principal ofrece también contenido y enlaces sin depender de JavaScript.
let index = await read('index.html');
const region = (name,content) => {
  const re = new RegExp(`<!-- seo:${name}:start -->[\\s\\S]*?<!-- seo:${name}:end -->`);
  const block = `<!-- seo:${name}:start -->${content}<!-- seo:${name}:end -->`;
  index = re.test(index) ? index.replace(re,()=>block) : index.replace('</head>',()=>block+'\n</head>');
};
const propertyCards = PROPERTIES.map(p=>`<article class="property-card"><a href="alojamientos/${p.id}/"><div class="card-photo"><img src="${propertyPhotos(p)[0].src}" alt="${esc(p.fullName)} en Caviahue" width="1100" height="825" loading="lazy"></div><div class="card-body"><h3>${esc(p.fullName)}</h3><p>${esc(p.capacity)}</p><span class="button detail-button">Ver detalles</span></div></a></article>`).join('');
index = index.replace(/<div class="property-grid" id="property-grid">[\s\S]*?<\/div>(?=\s*<\/div>\s*<\/section>)/,()=>`<div class="property-grid" id="property-grid">${propertyCards}</div>`);
index = index.replace(/<div class="faq-list" id="faq-list">[\s\S]*?<\/div>(?=\s*<\/div>\s*<\/section>)/,()=>`<div class="faq-list" id="faq-list">${FAQ.map(f=>`<details class="faq-item"><summary>${esc(f.q)}</summary><div class="faq-answer"><p>${esc(f.a)}</p></div></details>`).join('')}</div>`);
const guideLinks = `<details class="guide-links"><summary>Todos los paseos de Caviahue</summary><div>${Object.values(SEASONS).flatMap(s=>s.items).map(it=>`<a href="que-hacer/${it.slug}/">${esc(it.title)} →</a>`).join('')}</div></details>`;
if (index.includes('<!-- seo:guides:start -->')) index = index.replace(/<!-- seo:guides:start -->[\s\S]*?<!-- seo:guides:end -->/,()=>`<!-- seo:guides:start -->${guideLinks}<!-- seo:guides:end -->`);
else index = index.replace('<div class="season-panel" id="panel-season" role="tabpanel" aria-labelledby="tab-invierno"></div>',m=>m+`\n<!-- seo:guides:start -->${guideLinks}<!-- seo:guides:end -->`);
region('structured',`<script type="application/ld+json" id="site-structured-data">${json({'@context':'https://schema.org','@graph':[
  {'@type':'Organization','@id':origin+'/#organizacion',name:'Patagonia Homes',url:origin+'/',logo:origin+'/assets/img/logo.webp',telephone:'+'+SITE.whatsapp},
  {'@type':'WebSite','@id':origin+'/#sitio',name:'Patagonia Homes',url:origin+'/',inLanguage:'es-AR',publisher:{'@id':origin+'/#organizacion'}},
  ...PROPERTIES.map(lodgingSchema),
  {'@type':'FAQPage',mainEntity:FAQ.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))}
]})}</script>`);
index = index.replaceAll('data-whatsapp href="#"',`data-whatsapp href="${wa}"`);
await save('index.html',index);
await save('sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path=>`<url><loc>${origin}${path}</loc></url>`).join('')}</urlset>\n`);
await save('robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
await save('.nojekyll','');
console.log(`Generadas ${paths.length} páginas, sitemap.xml y robots.txt.`);
