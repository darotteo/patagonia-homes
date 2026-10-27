# Patagonia Homes

Sitio estático de alojamientos en Caviahue. Publicado en https://homespatagonia.com con GitHub Pages desde la raíz de `main`.

## Edición

- `js/data.js`: alojamientos, capacidades, preguntas, actividades y fotos.
- `index.html`: portada y estructura principal.
- `css/styles.css`: identidad visual y estilos adaptables.
- `js/app.js`: mapa, clima y fichas de la página principal.
- `js/galeria.js`: galerías de las páginas de alojamiento y de las guías.

Después de cambiar el contenido, ejecutar con Node.js:

```sh
node generar-seo.mjs
node servidor.mjs
```

El primer comando actualiza las páginas en `alojamientos/` y `que-hacer/`, el contenido inicial del catálogo y de las preguntas, los datos estructurados, `sitemap.xml` y `robots.txt`. Los archivos generados se incluyen en Git para que GitHub Pages los publique sin instalar dependencias. La vista previa abre en http://localhost:4173.

Las galerías de las guías se configuran en `ACTIVITY_EXTRAS` dentro de `js/data.js`; los textos y las fotos deben corresponder al lugar y conservar sus créditos. Las fotos nuevas de Jeny, el logo y las actividades confirmadas del Parque Náutico están pendientes de entrega. Hasta entonces se utilizan las fotos existentes y la sección del Parque Náutico permite consultar por WhatsApp.

## Dominio y HTTPS

El dominio está registrado en Cloudflare. `CNAME` contiene `homespatagonia.com`. En GitHub → Settings → Pages debe permanecer activado **Enforce HTTPS**. El certificado y la redirección son administrados por GitHub Pages, no por el HTML.

Para solicitar indexación en Google Search Console, usar el dominio canónico y el sitemap https://homespatagonia.com/sitemap.xml una vez publicados los cambios. La verificación de propiedad requiere acceso a la cuenta correspondiente.
