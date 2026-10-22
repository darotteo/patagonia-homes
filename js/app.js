/* Patagonia Homes · comportamiento del sitio */
(() => {
  "use strict";
  document.documentElement.classList.add("js");

  const { SITE, PROPERTIES, POIS, POI_CATEGORIES, SEASONS, GALLERY, CREDITS, FAQ, MAP_FEATURES } = window;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  // En la versión de un solo archivo las imágenes viajan embebidas en window.ASSETS.
  const asset = (path) => (window.ASSETS && window.ASSETS[path]) || path;
  const icon = (name, extra = "") => `<svg class="i ${extra}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(key) { try { return JSON.parse(sessionStorage.getItem(key)); } catch { return null; } },
    set(key, value) { try { sessionStorage.setItem(key, JSON.stringify(value)); } catch { /* sin almacenamiento */ } },
  };

  /* ---------- Contacto ---------- */
  const waLink = (place) =>
    `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
      `Hola, vengo de la web de Patagonia Homes y quiero consultar por una estadía en ${place || "Caviahue"}.`
    )}`;
  $$("[data-whatsapp]").forEach((a) => (a.href = waLink()));
  $$("[data-whatsapp-label]").forEach((el) => (el.textContent = SITE.whatsappLabel));
  $$("[data-instagram]").forEach((a) => {
    if (SITE.instagram) { a.href = SITE.instagram; a.hidden = false; }
  });
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Cabecera ---------- */
  const header = $("[data-header]");
  const menuButton = $(".menu-toggle");
  const nav = $("#main-nav");
  const setMenu = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    nav.classList.toggle("open", open);
    updateHeader();
  };
  function updateHeader() {
    header.classList.toggle("is-solid", scrollY > 40 || nav.classList.contains("open"));
  }
  addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
  menuButton.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); menuButton.focus(); } });
  document.addEventListener("click", (e) => { if (nav.classList.contains("open") && !e.target.closest(".site-header")) setMenu(false); });

  if ("IntersectionObserver" in window) {
    const links = new Map($$("a", nav).map((a) => [a.hash.slice(1), a]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.removeAttribute("aria-current"));
        links.get(entry.target.id)?.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------- Alojamientos ---------- */
  const PHOTO_PREFIX = { trawen: "trawen", "los-basaltos": "basaltos", ekamai: "ekamai", "la-maison": "maison" };
  PROPERTIES.forEach((p) => {
    p.images = Array.from({ length: p.photos }, (_, i) => asset(`assets/img/alojamientos/${PHOTO_PREFIX[p.id]}-${String(i + 1).padStart(2, "0")}.webp`));
    // La foto de portada de la tarjeta va primero.
    p.cardImages = [...p.images.slice(p.cover - 1), ...p.images.slice(0, p.cover - 1)];
  });

  const grid = $("#property-grid");
  grid.innerHTML = PROPERTIES.map((p, i) => `
    <article class="property-card" data-property="${p.id}">
      <div class="card-photo">
        <button type="button" data-open-property="${p.id}" aria-label="Ver fotos y detalles de ${esc(p.fullName)}">
          <img src="${p.cardImages[0]}" alt="${esc(p.fullName)} en Caviahue" width="1100" height="825" ${i < 2 ? 'fetchpriority="high"' : 'loading="lazy"'}>
        </button>
        <span class="photo-count">${icon("camera")}<span data-count>${p.images.length} fotos</span></span>
        <button class="card-nav" type="button" data-step="-1" aria-label="Foto anterior de ${esc(p.name)}">${icon("chevron-left")}</button>
        <button class="card-nav" type="button" data-step="1" aria-label="Foto siguiente de ${esc(p.name)}">${icon("chevron-right")}</button>
      </div>
      <div class="card-body">
        <h3>${esc(p.fullName)}</h3>
        <p class="card-location">${icon("pin")}${esc(p.location)}</p>
        <div class="card-actions">
          <button class="button detail-button" type="button" data-open-property="${p.id}">Ver detalles</button>
          <a class="button" href="${p.book}" target="_blank" rel="noopener">Reservar</a>
        </div>
      </div>
    </article>`).join("");

  // Fotos en la tarjeta: flechas y deslizar con el dedo.
  const cardIndex = new Map();
  function stepCard(card, step) {
    const p = PROPERTIES.find((x) => x.id === card.dataset.property);
    const index = ((cardIndex.get(p.id) || 0) + step + p.cardImages.length) % p.cardImages.length;
    cardIndex.set(p.id, index);
    const img = $(".card-photo img", card);
    img.src = p.cardImages[index];
    $("[data-open-property]", card).dataset.start = String(index);
    $("[data-count]", card).textContent = `${index + 1} / ${p.cardImages.length}`;
    if (!reduceMotion() && img.animate) img.animate([{ opacity: 0.4 }, { opacity: 1 }], { duration: 260, easing: "ease-out" });
  }
  $$(".property-card").forEach((card) => {
    $$(".card-nav", card).forEach((b) => b.addEventListener("click", () => stepCard(card, Number(b.dataset.step))));
    swipe($(".card-photo", card), (step) => stepCard(card, step));
    // Precarga la siguiente foto cuando el usuario se acerca a la tarjeta.
    card.addEventListener("pointerenter", () => {
      const p = PROPERTIES.find((x) => x.id === card.dataset.property);
      new Image().src = p.cardImages[1];
    }, { once: true });
  });

  function swipe(el, onStep) {
    let start = null;
    el.addEventListener("touchstart", (e) => { start = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY }; }, { passive: true });
    el.addEventListener("touchend", (e) => {
      if (!start) return;
      const dx = e.changedTouches[0].clientX - start.x, dy = e.changedTouches[0].clientY - start.y;
      start = null;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) {
        onStep(dx < 0 ? 1 : -1);
        el.dataset.swiped = String(performance.now());
      }
    }, { passive: true });
    el.addEventListener("click", (e) => {
      if (performance.now() - Number(el.dataset.swiped || -1000) < 400) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  }

  /* ---------- Ficha del alojamiento ---------- */
  const dialog = $("#property-dialog");
  let current = null, photoIndex = 0;

  function openProperty(id, start = 0) {
    const p = PROPERTIES.find((x) => x.id === id);
    if (!p) return;
    current = p;
    const images = p.cardImages;
    $("#detail-content").innerHTML = `
      <div class="detail-layout">
        <div class="detail-gallery">
          <div class="detail-stage">
            <img id="detail-photo" src="${images[start]}" alt="">
            <button class="card-nav" type="button" data-detail-step="-1" aria-label="Foto anterior">${icon("chevron-left")}</button>
            <button class="card-nav" type="button" data-detail-step="1" aria-label="Foto siguiente">${icon("chevron-right")}</button>
            <span class="detail-count" aria-live="polite"></span>
          </div>
          <div class="detail-thumbs" aria-label="Fotos de ${esc(p.name)}">
            ${images.map((src, i) => `<button type="button" data-photo="${i}" aria-label="Ver foto ${i + 1}"><img src="${src}" alt="" loading="lazy" width="84" height="62"></button>`).join("")}
          </div>
        </div>
        <div class="detail-body">
          <p class="detail-type">${esc(p.type)}</p>
          <h2 id="detail-title">${esc(p.fullName)}</h2>
          <div class="detail-facts">
            <span>${icon("pin")}${esc(p.locationLong)}</span>
            <span>${icon("users")}${esc(p.capacity)}</span>
          </div>
          <p>${esc(p.intro)}</p>
          <p>${esc(p.more)}</p>
          <h3>Unidades y huéspedes</h3>
          <ul class="unit-list">
            ${p.units.map((u) => `<li><strong>${esc(u.name)}</strong><span class="guests">${icon("users")}${esc(u.guests)}</span><p>${esc(u.detail)}</p></li>`).join("")}
          </ul>
          <h3>Comodidades</h3>
          <ul class="amenity-grid">
            ${p.amenities.map(([ic, label]) => `<li>${icon(ic)}${esc(label)}</li>`).join("")}
          </ul>
          <h3>Bueno saber</h3>
          <div class="detail-rules">
            <span>${icon("clock")}Check-in ${p.checkin} · Check-out ${p.checkout}</span>
            <span>${icon("paw")}${p.pets ? "Acepta mascotas" : "Sin mascotas"}</span>
          </div>
          <div class="detail-actions">
            <a class="button" href="${p.book}" target="_blank" rel="noopener">Reservar ${esc(p.name)}</a>
            <a class="button outline" href="${waLink(p.fullName)}" target="_blank" rel="noopener">${icon("whatsapp")}Consultar</a>
            <button class="button outline" type="button" data-detail-map>${icon("pin")}Ver en el mapa</button>
          </div>
        </div>
      </div>`;
    setPhoto(start, false);
    $$("[data-detail-step]", dialog).forEach((b) => b.addEventListener("click", () => setPhoto(photoIndex + Number(b.dataset.detailStep))));
    $$("[data-photo]", dialog).forEach((b) => b.addEventListener("click", () => setPhoto(Number(b.dataset.photo))));
    swipe($(".detail-stage", dialog), (step) => setPhoto(photoIndex + step));
    $("[data-detail-map]", dialog).addEventListener("click", () => {
      dialog.close();
      showOnMap({ kind: "lodging", id: p.id });
    });
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    $(".detail-body", dialog).scrollTop = 0;
    $(".detail-layout", dialog).scrollTop = 0;
  }

  function setPhoto(index, animate = true) {
    const images = current.cardImages;
    photoIndex = (index + images.length) % images.length;
    const img = $("#detail-photo");
    img.src = images[photoIndex];
    img.alt = `${current.fullName}, foto ${photoIndex + 1} de ${images.length}`;
    $(".detail-count", dialog).textContent = `${photoIndex + 1} / ${images.length}`;
    $$("[data-photo]", dialog).forEach((b) => b.setAttribute("aria-current", String(Number(b.dataset.photo) === photoIndex)));
    const thumb = $(`[data-photo="${photoIndex}"]`, dialog), strip = $(".detail-thumbs", dialog);
    strip.scrollTo({ left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2, behavior: reduceMotion() ? "auto" : "smooth" });
    new Image().src = images[(photoIndex + 1) % images.length];
    if (animate && !reduceMotion() && img.animate) img.animate([{ opacity: 0.5, transform: "scale(1.02)" }, { opacity: 1, transform: "none" }], { duration: 320, easing: "cubic-bezier(.23,1,.32,1)" });
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-open-property]");
    if (b) openProperty(b.dataset.openProperty, Number(b.dataset.start || 0));
  });
  $(".dialog-close", dialog).addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => { document.body.style.overflow = ""; });
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); setPhoto(photoIndex + (e.key === "ArrowRight" ? 1 : -1), false); }
  });

  /* ---------- Mapa ---------- */
  const map = (() => {
    const canvas = $("#map"), svg = $("#map-svg"), overlay = $("#map-overlay");
    const R = 6378137;
    const project = ([lat, lon]) => [R * lon * Math.PI / 180, -R * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))];
    const origin = project(SITE.coordinates);
    const local = (ll) => { const [x, y] = project(ll); return [x - origin[0], y - origin[1]]; };

    const LABEL_SIDE = { trawen: "right", "los-basaltos": "left", "la-maison": "right", ekamai: "top" };
    const CAT_ICON = { alojamientos: "house", comer: "utensils", compras: "bag", naturaleza: "tree", servicios: "health" };
    const places = [
      ...PROPERTIES.map((p) => ({ kind: "lodging", id: p.id, cat: "alojamientos", name: p.name, sub: p.location, p, xy: local(p.coordinates) })),
      ...POIS.map((poi, i) => ({ kind: "poi", id: `poi-${i}`, cat: poi.cat, name: poi.name, sub: POI_CATEGORIES[poi.cat].label, poi, xy: local(poi.coords) })),
    ];
    const active = new Set(Object.keys(POI_CATEGORIES));
    let view = { x: 0, y: 0, s: 0.5 }, size = { w: 0, h: 0 }, selected = null, flight = 0;

    // Capas del mapa en metros, dibujadas una sola vez. Mover y acercar sólo cambia el viewBox.
    const layers = { u: [], f: [], g: [], w: [], b: [], R: [], S: [], cM: [], cr: [], s: [], r: [], M: [], t: [], p: [] };
    const named = [];
    for (const [kind, name, flat] of MAP_FEATURES) {
      const pts = [];
      for (let i = 0; i < flat.length; i += 2) pts.push(local([flat[i], flat[i + 1]]));
      const closed = ["u", "f", "g", "w", "b"].includes(kind);
      const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join("") + (closed ? "Z" : "");
      layers[kind]?.push(d);
      if (kind === "M") layers.cM.push(d);
      if (kind === "r") layers.cr.push(d);
      if (name && (kind === "M" || kind === "r")) named.push({ name, pts });
    }
    const layerOrder = ["u", "f", "g", "w", "b", "R", "S", "t", "p", "cM", "cr", "s", "r", "M"];
    svg.innerHTML = layerOrder.map((k) => `<path class="L-${k}" d="${layers[k].join("")}"/>`).join("");

    // Nombres de calles: un rótulo por calle, en el tramo más largo.
    const LABELS = ["Avenida Costanera Quimey-Co", "Ruta Provincial 26", "Los Arreos", "Piñoneros", "Volcán Copahue", "Del Lago", "Los Ñires"];
    const roadLabels = LABELS.map((n) => {
      const segs = named.filter((f) => f.name === n);
      if (!segs.length) return null;
      const f = segs.sort((a, b) => b.pts.length - a.pts.length)[0];
      const i = Math.floor((f.pts.length - 1) / 2), a = f.pts[i], b = f.pts[i + 1] || a;
      let angle = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
      if (angle > 90) angle -= 180; if (angle < -90) angle += 180;
      const el = document.createElement("span");
      el.className = "map-road-label";
      el.textContent = n === "Avenida Costanera Quimey-Co" ? "Av. Quimey Co" : n === "Ruta Provincial 26" ? "Ruta 26" : n;
      overlay.append(el);
      return { el, xy: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], angle };
    }).filter(Boolean);
    const lake = document.createElement("span");
    lake.className = "map-lake-label";
    lake.textContent = "Lago Caviahue";
    overlay.append(lake);
    const lakeXY = local([-37.8775, -71.0405]);

    // Marcadores
    places.forEach((pl) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = `pin ${pl.kind === "lodging" ? "pin-lodging" : "pin-poi"}`;
      b.style.setProperty("--c", POI_CATEGORIES[pl.cat].color);
      b.setAttribute("aria-label", `${pl.name}, ${pl.sub}`);
      b.innerHTML = pl.kind === "lodging"
        ? `<span class="pin-dot">${icon("house")}</span><span class="pin-name">${esc(pl.name)}</span>`
        : `<span class="pin-body">${icon(CAT_ICON[pl.cat])}</span><span class="pin-label">${esc(pl.name)}</span>`;
      if (pl.kind === "lodging") b.dataset.side = LABEL_SIDE[pl.id] || "right";
      b.addEventListener("click", (e) => { e.stopPropagation(); select(pl, { fly: false }); });
      overlay.append(b);
      pl.el = b;
    });

    const popup = document.createElement("div");
    popup.className = "map-popup";
    popup.hidden = true;
    overlay.append(popup);

    // Filtros y lista
    $("#map-filters").innerHTML = Object.entries(POI_CATEGORIES).map(([key, c]) =>
      `<button type="button" class="map-filter" data-cat="${key}" aria-pressed="true" style="--c:${c.color}"><span class="dot">${icon(CAT_ICON[key])}</span>${esc(c.label)}</button>`).join("");
    $$("#map-filters .map-filter").forEach((b) => b.addEventListener("click", () => {
      const cat = b.dataset.cat, on = !active.has(cat);
      if (on) active.add(cat); else active.delete(cat);
      b.setAttribute("aria-pressed", String(on));
      if (!on && selected?.cat === cat) closePopup();
      refreshVisibility(cat);
    }));
    const list = $("#map-list");
    function renderList() {
      list.innerHTML = places.filter((pl) => active.has(pl.cat)).map((pl) =>
        `<li><button type="button" data-place="${pl.id}" aria-pressed="${selected === pl}" style="--c:${POI_CATEGORIES[pl.cat].color}"><span class="dot">${icon(CAT_ICON[pl.cat])}</span><span><strong>${esc(pl.name)}</strong><small>${esc(pl.sub)}</small></span></button></li>`).join("");
    }
    list.addEventListener("click", (e) => {
      const b = e.target.closest("[data-place]");
      if (b) select(places.find((pl) => pl.id === b.dataset.place), { fly: true });
    });
    function refreshVisibility(changedCat) {
      places.forEach((pl) => {
        const show = active.has(pl.cat);
        const wasHidden = pl.el.hidden;
        pl.el.hidden = !show;
        if (show && wasHidden && pl.cat === changedCat && !reduceMotion()) {
          pl.el.classList.remove("pin-enter");
          void pl.el.offsetWidth;
          pl.el.style.animationDelay = `${Math.random() * 120}ms`;
          pl.el.classList.add("pin-enter");
        }
      });
      renderList();
    }

    // Vista
    function bounds(list) {
      const xs = list.map((p) => p.xy[0]), ys = list.map((p) => p.xy[1]);
      return { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) };
    }
    const townPlaces = places.filter((pl) => Math.hypot(pl.xy[0], pl.xy[1]) < 1300);
    const presets = { town: () => fitView(bounds(townPlaces), 70), region: () => fitView(bounds(places), 60) };
    function fitView(b, pad) {
      const w = size.w || 800, h = size.h || 600;
      const top = 70, bottom = 40;
      const s = Math.min((w - pad * 2) / Math.max(b.maxX - b.minX, 50), (h - top - bottom - pad) / Math.max(b.maxY - b.minY, 50));
      return { x: (b.minX + b.maxX) / 2, y: (b.minY + b.maxY) / 2 + (top - bottom) / 2 / s, s: clampScale(s) };
    }
    const clampScale = (s) => Math.min(6, Math.max(0.018, s));

    function render() {
      const { w, h } = size;
      if (!w) return;
      const { x, y, s } = view;
      svg.setAttribute("viewBox", `${(x - w / 2 / s).toFixed(2)} ${(y - h / 2 / s).toFixed(2)} ${(w / s).toFixed(2)} ${(h / s).toFixed(2)}`);
      svg.dataset.z = overlay.dataset.z = s < 0.12 ? "far" : s < 0.6 ? "mid" : "near";
      const toScreen = ([px, py]) => [(px - x) * s + w / 2, (py - y) * s + h / 2];
      places.forEach((pl) => {
        const [sx, sy] = toScreen(pl.xy);
        pl.el.style.transform = `translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px)`;
      });
      const showRoads = s > 0.45;
      roadLabels.forEach((l) => {
        const [sx, sy] = toScreen(l.xy);
        const inView = sx > 40 && sx < w - 40 && sy > 60 && sy < h - 30;
        l.el.style.display = showRoads && inView ? "" : "none";
        l.el.style.transform = `translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px) translate(-50%, -50%) rotate(${l.angle.toFixed(1)}deg)`;
      });
      const [lx, ly] = toScreen(lakeXY);
      lake.style.transform = `translate(${lx.toFixed(1)}px, ${ly.toFixed(1)}px) translate(-50%, -50%)`;
      lake.style.display = lx > 80 && lx < w - 80 && ly > 70 && ly < h - 30 ? "" : "none";
      if (selected && !popup.hidden) {
        const [px, py] = toScreen(selected.xy);
        const lift = selected.kind === "lodging" ? 18 : 6;
        popup.style.left = `${px.toFixed(1)}px`;
        popup.style.top = `${(py - lift).toFixed(1)}px`;
      }
    }

    let frame = 0;
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(render); };

    function flyTo(target, duration = 750) {
      cancelAnimationFrame(flight);
      if (reduceMotion() || !size.w) { view = target; render(); return; }
      const from = { ...view }, t0 = performance.now();
      const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      const step = (now) => {
        const t = Math.min(1, (now - t0) / duration), k = ease(t);
        view = {
          x: from.x + (target.x - from.x) * k,
          y: from.y + (target.y - from.y) * k,
          s: Math.exp(Math.log(from.s) + (Math.log(target.s) - Math.log(from.s)) * k),
        };
        render();
        if (t < 1) flight = requestAnimationFrame(step);
      };
      flight = requestAnimationFrame(step);
    }

    function select(pl, { fly }) {
      if (!pl) return;
      if (!active.has(pl.cat)) { active.add(pl.cat); $(`.map-filter[data-cat="${pl.cat}"]`).setAttribute("aria-pressed", "true"); refreshVisibility(); }
      selected = pl;
      places.forEach((x) => x.el.classList.toggle("selected", x === pl));
      $$("[data-place]", list).forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.place === pl.id)));
      const directions = pl.kind === "lodging" ? pl.p.maps : pl.poi.link;
      popup.innerHTML = pl.kind === "lodging"
        ? `<button class="map-popup-close" type="button" aria-label="Cerrar">${icon("close")}</button>
           <img src="${pl.p.cardImages[0]}" alt="">
           <div class="map-popup-body"><h3>${esc(pl.p.fullName)}</h3><p>${esc(pl.p.locationLong)}</p>
           <div class="map-popup-actions"><button type="button" class="primary" data-open-property="${pl.id}">Ver alojamiento</button><a href="${directions}" target="_blank" rel="noopener">${icon("route")}Cómo llegar</a></div></div>`
        : `<button class="map-popup-close" type="button" aria-label="Cerrar">${icon("close")}</button>
           <div class="map-popup-body"><h3>${esc(pl.name)}</h3><p>${esc(pl.sub)}</p>
           <div class="map-popup-actions"><a class="primary" href="${directions}" target="_blank" rel="noopener">${icon("route")}Cómo llegar</a></div></div>`;
      popup.hidden = false;
      popup.style.animation = "none"; void popup.offsetWidth; popup.style.animation = "";
      $(".map-popup-close", popup).addEventListener("click", closePopup);
      if (fly) {
        const s = Math.max(view.s, pl.kind === "poi" && Math.hypot(...pl.xy) > 2600 ? 0.09 : 0.42);
        flyTo({ x: pl.xy[0], y: pl.xy[1] - 90 / s, s });
      } else render();
    }
    function closePopup() {
      popup.hidden = true; selected = null;
      places.forEach((x) => x.el.classList.remove("selected"));
      $$("[data-place]", list).forEach((b) => b.setAttribute("aria-pressed", "false"));
    }

    // Vistas predefinidas y zoom
    $$("[data-map-view]").forEach((b) => b.addEventListener("click", () => {
      $$("[data-map-view]").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      closePopup();
      flyTo(presets[b.dataset.mapView]());
    }));
    const zoomBy = (f, cx = size.w / 2, cy = size.h / 2) => {
      const s = clampScale(view.s * f);
      const wx = view.x + (cx - size.w / 2) / view.s, wy = view.y + (cy - size.h / 2) / view.s;
      return { x: wx - (cx - size.w / 2) / s, y: wy - (cy - size.h / 2) / s, s };
    };
    $$("[data-zoom]").forEach((b) => b.addEventListener("click", () => flyTo(zoomBy(b.dataset.zoom === "in" ? 1.7 : 1 / 1.7), 320)));

    // Arrastrar (mouse) y dos dedos (pantallas táctiles)
    const hint = $("#map-hint");
    const isTouch = matchMedia("(pointer: coarse)").matches;
    if (isTouch) hint.textContent = "Usá dos dedos para mover y acercar el mapa";
    let hintTimer = setTimeout(() => hint.classList.add("hidden"), 4000);
    const flashHint = () => { hint.classList.remove("hidden"); clearTimeout(hintTimer); hintTimer = setTimeout(() => hint.classList.add("hidden"), 1800); };
    const pointers = new Map();
    let gesture = null;
    canvas.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button, a, .map-popup")) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (e.pointerType === "touch" && pointers.size < 2) return;
      cancelAnimationFrame(flight);
      canvas.setPointerCapture(e.pointerId);
      startGesture();
    });
    function startGesture() {
      const pts = [...pointers.values()];
      const cx = pts.reduce((a, p) => a + p.x, 0) / pts.length, cy = pts.reduce((a, p) => a + p.y, 0) / pts.length;
      const dist = pts.length > 1 ? Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) : 0;
      gesture = { cx, cy, dist, view: { ...view }, moved: false };
      canvas.classList.add("dragging");
    }
    canvas.addEventListener("pointermove", (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (!gesture) { if (e.pointerType === "touch") flashHint(); return; }
      const pts = [...pointers.values()];
      const cx = pts.reduce((a, p) => a + p.x, 0) / pts.length, cy = pts.reduce((a, p) => a + p.y, 0) / pts.length;
      let s = gesture.view.s;
      if (pts.length > 1 && gesture.dist) s = clampScale(gesture.view.s * Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) / gesture.dist);
      const rect = canvas.getBoundingClientRect();
      const ax = gesture.cx - rect.left - size.w / 2, ay = gesture.cy - rect.top - size.h / 2;
      const wx = gesture.view.x + ax / gesture.view.s, wy = gesture.view.y + ay / gesture.view.s;
      const bx = cx - rect.left - size.w / 2, by = cy - rect.top - size.h / 2;
      view = { x: wx - bx / s, y: wy - by / s, s };
      if (Math.abs(cx - gesture.cx) + Math.abs(cy - gesture.cy) > 4) gesture.moved = true;
      schedule();
    });
    const endPointer = (e) => {
      pointers.delete(e.pointerId);
      if (pointers.size >= (e.pointerType === "touch" ? 2 : 1)) startGesture();
      else { gesture = null; canvas.classList.remove("dragging"); }
    };
    canvas.addEventListener("pointerup", endPointer);
    canvas.addEventListener("pointercancel", endPointer);
    canvas.addEventListener("wheel", (e) => {
      if (!(e.ctrlKey || e.metaKey)) { flashHint(); return; }
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      view = zoomBy(Math.exp(-e.deltaY * 0.0022), e.clientX - rect.left, e.clientY - rect.top);
      schedule();
    }, { passive: false });
    canvas.addEventListener("click", (e) => { if (!e.target.closest(".pin, .map-popup") && selected) closePopup(); });
    canvas.addEventListener("keydown", (e) => {
      const step = 60 / view.s;
      const moves = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
      if (moves[e.key] && e.target === canvas) { e.preventDefault(); view = { ...view, x: view.x + moves[e.key][0], y: view.y + moves[e.key][1] }; schedule(); }
      if ((e.key === "+" || e.key === "=") && e.target === canvas) { view = zoomBy(1.4); schedule(); }
      if (e.key === "-" && e.target === canvas) { view = zoomBy(1 / 1.4); schedule(); }
    });

    let first = true;
    const measure = () => {
      const r = canvas.getBoundingClientRect();
      if (!r.width) return;
      size = { w: r.width, h: r.height };
      if (first) { view = presets.town(); first = false; }
      render();
    };
    if ("ResizeObserver" in window) new ResizeObserver(measure).observe(canvas); else addEventListener("resize", measure);
    measure();
    renderList();

    return {
      showLodging(id) { select(places.find((pl) => pl.kind === "lodging" && pl.id === id), { fly: true }); },
      showPoi(name) { select(places.find((pl) => pl.kind === "poi" && pl.name === name), { fly: true }); },
    };
  })();

  function showOnMap(target) {
    $("#mapa").scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
    // Espera a que termine el desplazamiento para que el vuelo del mapa se vea.
    setTimeout(() => (target.kind === "lodging" ? map.showLodging(target.id) : map.showPoi(target.name)), reduceMotion() ? 0 : 650);
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-goto-poi]");
    if (b) showOnMap({ kind: "poi", name: b.dataset.gotoPoi });
  });

  /* ---------- Qué hacer: invierno y verano ---------- */
  const panel = $("#panel-season");
  const tabs = $$(".season-tabs [role=tab]");
  const indicator = $(".season-tabs-indicator");
  const month = new Date().getMonth() + 1;
  let season = month >= 5 && month <= 9 ? "invierno" : "verano";

  const mapBtn = (it) => (it.poi ? `<button class="map-link" type="button" data-goto-poi="${esc(it.poi)}">${icon("pin")}Ver en el mapa</button>` : "");
  const featureBody = (it) => `<h3>${esc(it.title)}</h3><p>${esc(it.text)}</p>${mapBtn(it)}`;
  function seasonHTML(key) {
    const s = SEASONS[key], feature = s.items[0];
    return `
      <div class="season-intro"><p>${esc(s.lead)}</p><span>${icon(key === "invierno" ? "snow" : "sun")}${esc(s.months)}</span></div>
      <div class="season-grid">
        <article class="activity-feature" data-index="0" aria-live="polite">
          <button type="button" class="activity-photo reveal-img" aria-label="Ampliar foto"><img src="${asset("assets/img/" + feature.img)}" alt="${esc(feature.alt)}" loading="lazy" width="1200" height="900"></button>
          <div class="activity-feature-body">${featureBody(feature)}</div>
        </article>
        <div class="activity-list">
          ${s.items.map((it, i) => `
            <article class="activity-item" ${i === 0 ? 'aria-current="true"' : ""}>
              <div class="activity-photo"><img src="${asset("assets/img/" + it.img)}" alt="" loading="lazy" width="400" height="300"></div>
              <div><h3><button type="button" class="activity-pick" data-activity="${i}">${esc(it.title)}</button></h3><p>${esc(it.text)}</p></div>
            </article>`).join("")}
        </div>
      </div>`;
  }
  // Elegir una actividad de la lista la muestra en grande, con un fundido entre fotos.
  async function selectActivity(index) {
    const item = SEASONS[season].items[index];
    const feature = $(".activity-feature", panel), photo = $(".activity-photo", feature), body = $(".activity-feature-body", feature);
    $$(".activity-item", panel).forEach((el, i) => el.toggleAttribute("aria-current", i === index));
    if (feature.dataset.index === String(index)) return;
    feature.dataset.index = String(index);
    const next = new Image();
    next.src = asset("assets/img/" + item.img);
    next.alt = item.alt;
    next.width = 1200; next.height = 900;
    try { await next.decode(); } catch { /* se muestra igual */ }
    if (feature.dataset.index !== String(index)) return; // llegó otro clic mientras cargaba
    body.innerHTML = featureBody(item);
    if (reduceMotion() || !next.animate) {
      photo.replaceChildren(next);
    } else {
      next.className = "activity-next";
      photo.append(next);
      next.animate([{ opacity: 0, transform: "scale(1.04)" }, { opacity: 1, transform: "none" }], { duration: 420, easing: "cubic-bezier(.23,1,.32,1)" })
        .finished.then(() => { if (photo.lastElementChild === next) { next.className = ""; photo.replaceChildren(next); } }).catch(() => {});
      body.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], { duration: 320, easing: "cubic-bezier(.23,1,.32,1)" });
    }
    // En pantallas angostas la foto grande queda arriba: la acercamos para que se vea el cambio.
    const top = feature.getBoundingClientRect().top;
    if (top < 60 || top > innerHeight * 0.5) feature.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
  }
  panel.addEventListener("click", (e) => {
    if (e.target.closest("[data-goto-poi]")) return;
    const item = e.target.closest(".activity-item");
    if (item) { selectActivity($$(".activity-item", panel).indexOf(item)); return; }
    const photo = e.target.closest(".activity-feature .activity-photo");
    if (photo) {
      const items = SEASONS[season].items.map((it) => ({ src: asset("assets/img/" + it.img), alt: it.alt }));
      openLightbox(items, Number($(".activity-feature", panel).dataset.index || 0));
    }
  });
  function moveIndicator() {
    const t = tabs.find((x) => x.dataset.season === season);
    indicator.style.width = `${t.offsetWidth}px`;
    indicator.style.transform = `translateX(${t.offsetLeft}px)`;
  }
  function setSeason(key, animate = true) {
    season = key;
    tabs.forEach((t) => {
      const on = t.dataset.season === key;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", `tab-${key}`);
    moveIndicator();
    if (!animate || reduceMotion()) { panel.innerHTML = seasonHTML(key); return; }
    panel.classList.add("is-switching");
    setTimeout(() => {
      panel.innerHTML = seasonHTML(key);
      requestAnimationFrame(() => panel.classList.remove("is-switching"));
    }, 200);
  }
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => { if (t.dataset.season !== season) setSeason(t.dataset.season); });
    t.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const next = tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
      next.focus(); setSeason(next.dataset.season);
    });
  });
  setSeason(season, false);
  addEventListener("resize", moveIndicator);
  document.fonts?.ready.then(moveIndicator);

  /* ---------- Clima ---------- */
  const WMO = (code) => {
    if (code === 0) return ["sun", "Despejado"];
    if (code === 1) return ["partly", "Mayormente despejado"];
    if (code === 2) return ["partly", "Parcialmente nublado"];
    if (code === 3) return ["cloud", "Nublado"];
    if (code === 45 || code === 48) return ["fog", "Niebla"];
    if (code >= 51 && code <= 57) return ["rain", "Llovizna"];
    if (code >= 61 && code <= 67) return ["rain", "Lluvia"];
    if (code >= 71 && code <= 77) return ["snowcloud", "Nieve"];
    if (code >= 80 && code <= 82) return ["rain", "Chaparrones"];
    if (code === 85 || code === 86) return ["snowcloud", "Nevadas"];
    if (code >= 95) return ["storm", "Tormenta"];
    return ["cloud", "Variable"];
  };
  async function loadWeather() {
    const cached = store.get("ph-weather");
    if (cached && Date.now() - cached.t < 30 * 60 * 1000) return cached.data;
    const url = "https://api.open-meteo.com/v1/forecast?latitude=-37.869&longitude=-71.053&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,snowfall_sum,precipitation_probability_max&timezone=America%2FArgentina%2FBuenos_Aires&forecast_days=7";
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Clima: ${res.status}`);
    const data = await res.json();
    store.set("ph-weather", { t: Date.now(), data });
    return data;
  }
  // Pronóstico: botón con la temperatura en la barra superior que despliega la semana.
  const pill = $("[data-weather-pill]");
  const pop = $("#weather-pop");
  const snowDetails = $(".weather-snow", pop);
  const snowFrame = $("iframe", snowDetails);
  let popTimer = 0;
  function setWeather(open) {
    clearTimeout(popTimer);
    pill.setAttribute("aria-expanded", String(open));
    if (open) {
      pop.hidden = false;
      requestAnimationFrame(() => pop.classList.add("open"));
      if (nav.classList.contains("open")) setMenu(false);
    } else {
      pop.classList.remove("open");
      popTimer = setTimeout(() => { pop.hidden = true; }, reduceMotion() ? 0 : 160);
    }
  }
  pill.addEventListener("click", (e) => { e.stopPropagation(); setWeather(pop.hidden || !pop.classList.contains("open")); });
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-open-weather]")) { e.preventDefault(); e.stopPropagation(); setWeather(true); pill.focus({ preventScroll: true }); return; }
    if (!pop.hidden && !e.target.closest(".weather-anchor")) setWeather(false);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !pop.hidden) { setWeather(false); pill.focus(); } });
  snowDetails.addEventListener("toggle", () => { if (snowDetails.open && !snowFrame.src) snowFrame.src = snowFrame.dataset.src; });

  loadWeather().then((d) => {
    const [ic, label] = WMO(d.current.weather_code);
    const temp = Math.round(d.current.temperature_2m);
    $$("[data-weather-icon]").forEach((el) => (el.innerHTML = icon(ic)));
    $("[data-weather-temp]").textContent = `${temp}°`;
    $("[data-weather-big]").textContent = `${temp}°`;
    pill.setAttribute("aria-label", `Clima en Caviahue: ${temp} grados, ${label.toLowerCase()}. Ver el pronóstico de la semana`);
    $("[data-weather-now]").textContent = `Ahora en Caviahue: ${temp}° · ${label}`;
    $("[data-weather-sub]").textContent = `${label} · sensación ${Math.round(d.current.apparent_temperature)}° · viento ${Math.round(d.current.wind_speed_10m)} km/h`;
    // Barras de rango: cada día ocupa su tramo dentro del mínimo y máximo de la semana.
    const lo = Math.min(...d.daily.temperature_2m_min), hi = Math.max(...d.daily.temperature_2m_max), span = Math.max(hi - lo, 1);
    $("#weather-rows").innerHTML = d.daily.time.map((date, i) => {
      const [dic, dlabel] = WMO(d.daily.weather_code[i]);
      const name = i === 0 ? "Hoy" : new Date(`${date}T12:00:00`).toLocaleDateString("es-AR", { weekday: "long" });
      const min = Math.round(d.daily.temperature_2m_min[i]), max = Math.round(d.daily.temperature_2m_max[i]);
      const snow = d.daily.snowfall_sum[i], rain = d.daily.precipitation_probability_max[i];
      const extra = snow >= 0.5 ? `${Math.round(snow)} cm` : rain >= 30 ? `${rain}%` : "";
      const extraLabel = snow >= 0.5 ? `, ${Math.round(snow)} centímetros de nieve` : rain >= 30 ? `, ${rain}% de probabilidad de precipitación` : "";
      const left = ((d.daily.temperature_2m_min[i] - lo) / span) * 100, width = ((d.daily.temperature_2m_max[i] - d.daily.temperature_2m_min[i]) / span) * 100;
      return `<li aria-label="${name}: ${dlabel}, mínima ${min}°, máxima ${max}°${extraLabel}">
        <span class="w-day" aria-hidden="true">${name}</span>
        <span class="w-icon" aria-hidden="true" title="${dlabel}">${icon(dic)}</span>
        <span class="w-extra ${snow >= 0.5 ? "snow" : ""}" aria-hidden="true">${extra}</span>
        <span class="w-min" aria-hidden="true">${min}°</span>
        <span class="w-range" aria-hidden="true"><span style="left:${left.toFixed(1)}%;width:${Math.max(width, 6).toFixed(1)}%"></span></span>
        <span class="w-max" aria-hidden="true">${max}°</span>
      </li>`;
    }).join("");
  }).catch(() => {
    $("[data-weather-temp]").textContent = "Clima";
    $("[data-weather-sub]").innerHTML = `No pudimos cargar el pronóstico. Probá el de <a href="https://es.snow-forecast.com/resorts/Caviahue/6day/mid" target="_blank" rel="noopener">snow-forecast.com</a>.`;
  });

  /* ---------- Galería y visor ---------- */
  const lightbox = $("#lightbox");
  let lbItems = [], lbIndex = 0;
  function openLightbox(items, index) {
    lbItems = items; showLight(index);
    if (!lightbox.open) lightbox.showModal();
    document.body.style.overflow = "hidden";
  }
  function showLight(index) {
    lbIndex = (index + lbItems.length) % lbItems.length;
    const img = $("img", lightbox), it = lbItems[lbIndex];
    img.src = it.src; img.alt = it.alt;
    $("figcaption", lightbox).textContent = it.alt;
    $(".lightbox-count", lightbox).textContent = `${lbIndex + 1} / ${lbItems.length}`;
    if (!reduceMotion() && img.animate) img.animate([{ opacity: 0.4, filter: "blur(3px)" }, { opacity: 1, filter: "blur(0)" }], { duration: 280, easing: "ease-out" });
  }
  $$("[data-lightbox-step]", lightbox).forEach((b) => b.addEventListener("click", () => showLight(lbIndex + Number(b.dataset.lightboxStep))));
  $(".dialog-close", lightbox).addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("close", () => { document.body.style.overflow = ""; });
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.close(); });
  lightbox.addEventListener("keydown", (e) => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); showLight(lbIndex + (e.key === "ArrowRight" ? 1 : -1)); } });
  swipe($(".lightbox-stage", lightbox), (step) => showLight(lbIndex + step));

  const galleryItems = GALLERY.map((g) => ({ src: asset("assets/img/" + g.img), alt: g.alt, w: g.w }));
  $("#gallery-grid").innerHTML = galleryItems.map((g, i) =>
    `<button type="button" class="${g.w || ""} reveal-img" data-gallery="${i}" aria-label="Ampliar: ${esc(g.alt)}"><img src="${g.src}" alt="${esc(g.alt)}" loading="lazy" width="1200" height="900"><figcaption>${esc(g.alt)}</figcaption></button>`).join("");
  $("#gallery-grid").addEventListener("click", (e) => {
    const b = e.target.closest("[data-gallery]");
    if (b) openLightbox(galleryItems, Number(b.dataset.gallery));
  });

  /* ---------- Reseñas ---------- */
  const stars = `<span class="stars" aria-hidden="true">${icon("star").repeat(5)}</span>`;
  $("#reviews-list").innerHTML = PROPERTIES.map((p) => `
    <li><a class="review-link" href="${p.reviews}" target="_blank" rel="noopener">
      <img src="${p.cardImages[0]}" alt="" loading="lazy" width="64" height="64">
      <div><strong>${esc(p.name)}</strong><span>${stars}Opinar en Google</span></div>
    </a></li>`).join("");

  /* ---------- Preguntas frecuentes ---------- */
  $("#faq-list").innerHTML = FAQ.map((f) => `
    <details class="faq-item">
      <summary>${esc(f.q)}${icon("chevron-down")}</summary>
      <div class="faq-answer"><p>${esc(f.a)}</p>${f.link ? (f.link[0] === "#clima" ? `<button type="button" data-open-weather>${esc(f.link[1])}${icon("arrow")}</button>` : `<a href="${f.link[0]}">${esc(f.link[1])}${icon("arrow")}</a>`) : ""}</div>
    </details>`).join("");

  /* ---------- Pie de página ---------- */
  $("#footer-lodgings").innerHTML = PROPERTIES.map((p) => `<li><button type="button" data-open-property="${p.id}">${esc(p.fullName)}</button></li>`).join("");

  /* ---------- Créditos ---------- */
  $("#credits-list").innerHTML = CREDITS.map(([who, license, url]) => `<li><a href="${url}" target="_blank" rel="noopener">${esc(who)}</a> · ${esc(license)}</li>`).join("");

  /* ---------- Datos para Google (alojamientos y preguntas) ---------- */
  const amenityNames = (p) => p.amenities.map(([, name]) => ({ "@type": "LocationFeatureSpecification", name, value: true }));
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      ...PROPERTIES.map((p) => ({
        "@type": p.id === "trawen" ? "Hostel" : "LodgingBusiness",
        name: p.fullName,
        description: `${p.intro} ${p.more}`,
        image: new URL(p.cardImages[0], location.href).href,
        address: { "@type": "PostalAddress", addressLocality: "Caviahue", addressRegion: "Neuquén", postalCode: "8349", addressCountry: "AR" },
        geo: { "@type": "GeoCoordinates", latitude: p.coordinates[0], longitude: p.coordinates[1] },
        telephone: `+${SITE.whatsapp}`,
        checkinTime: p.checkin, checkoutTime: p.checkout,
        petsAllowed: p.pets,
        amenityFeature: amenityNames(p),
        hasMap: p.maps,
        url: p.book,
      })),
      { "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  const ldScript = document.createElement("script");
  ldScript.type = "application/ld+json";
  ldScript.textContent = JSON.stringify(ld);
  document.head.append(ldScript);

  /* ---------- Fotos que se revelan al entrar en pantalla ---------- */
  if ("IntersectionObserver" in window && !reduceMotion()) {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("shown");
        entry.target.classList.remove("pending");
        reveal.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    const watch = () => $$(".reveal-img:not(.shown)").forEach((el, i) => {
      if (el.getBoundingClientRect().top < innerHeight) return;
      el.classList.add("pending");
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      reveal.observe(el);
    });
    watch();
    new MutationObserver(watch).observe(panel, { childList: true });
  }

  /* ---------- WhatsApp flotante ---------- */
  const wa = $("[data-wa-float]");
  const compact = () => wa.classList.add("compact");
  setTimeout(compact, 7000);
  addEventListener("scroll", () => { if (scrollY > innerHeight * 0.6) compact(); }, { passive: true });
})();
