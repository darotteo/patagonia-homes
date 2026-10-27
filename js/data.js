/* Contenido del sitio. Para cambiar textos, fotos, puntos del mapa o preguntas, editá este archivo. */

window.SITE = {
  whatsapp: "5492942487227",
  whatsappLabel: "+54 9 2942 487227",
  // Pegá acá el link de Instagram (por ejemplo "https://www.instagram.com/patagoniahomes"). Vacío = el botón no se muestra.
  instagram: "",
  coordinates: [-37.8689, -71.0528],
};

window.PROPERTIES = [
  {
    id: "trawen",
    name: "Trawen",
    fullName: "Trawen Hostal Boutique",
    type: "Hostal boutique",
    location: "Cerca del lago",
    locationLong: "A 20 metros de la avenida Quimey Co, con vista al lago",
    zone: "lago",
    capacity: "Hasta 13 huéspedes · 5 habitaciones",
    pets: false,
    photos: 14,
    cover: 2,
    intro:
      "Un hostal boutique con espíritu de gran casa de montaña, cálido y lleno de detalles decorativos inspirados en la Patagonia. Ubicado en pleno centro de Caviahue, a solo 20 metros de la avenida principal y la costanera, ofrece vistas al lago y un entorno ideal para disfrutar de la naturaleza.",
    more:
      "Cuenta con habitaciones privadas que pueden alquilarse por separado o con la opción de reservar el hostal completo, ideal para familias grandes y grupos de amigos. Dispone de cocina equipada, amplios livings, patio y parrillas, con espacios pensados para compartir, relajarse y sentirse como en casa.",
    units: [
      { name: "Habitación 1 · baño privado", guests: "2 a 4", detail: "Queen (o dos camas) y cama simple con marinera. Hidromasaje y vista al lago." },
      { name: "Habitación 2", guests: "2", detail: "Dos camas de 1½ plaza. Baño compartido." },
      { name: "Habitación 3", guests: "2", detail: "Queen o camas separadas. Baño compartido." },
      { name: "Habitación 4", guests: "3", detail: "King y cama simple, con vista al lago. Baño compartido." },
      { name: "Habitación 5", guests: "2", detail: "Queen o camas separadas. Baño compartido." },
      { name: "Hostal completo", guests: "hasta 13", detail: "Toda la casa para tu grupo." },
    ],
    amenities: [
      ["wifi", "WiFi Starlink"],
      ["fire", "Chimenea hogar en el living"],
      ["kitchen", "Cocina común equipada"],
      ["sofa", "Dos livings para compartir"],
      ["grill", "Parrilla interior y exterior"],
      ["cup", "Infusiones para desayuno y merienda"],
      ["bath", "Hidromasaje"],
      ["heat", "Calefacción individual a gas"],
      ["tv", "TV con DirecTV"],
      ["linen", "Sábanas, toallas y amenities"],
      ["dryer", "Secador de pelo"],
      ["car", "Estacionamiento"],
    ],
    checkin: "14:00",
    checkout: "10:00",
    book: "https://soybamo.com/trawen",
    maps: "https://goo.gl/maps/Lt7eb1YJnuofyjaZ8",
    reviews: "https://maps.google.com/?cid=187037889703593959",
    coordinates: [-37.8700998, -71.0516844],
  },
  {
    id: "los-basaltos",
    name: "Los Basaltos",
    fullName: "Los Basaltos Departamentos",
    type: "Departamentos",
    location: "Cerca del lago",
    locationLong: "En el centro del pueblo, a dos cuadras del lago y a 1,5 km del centro de ski",
    zone: "lago",
    capacity: "Departamentos para 4 y 5 huéspedes",
    pets: true,
    photos: 16,
    cover: 1,
    intro:
      "Departamentos decorados con mucha dedicación, a dos cuadras del lago y a 1,5 km del centro de ski. Las dos unidades de planta baja, para hasta 4 personas cada una, se comunican por una puerta corrediza: ideales para grupos que quieren estar cerca y tener su propio espacio.",
    more:
      "En planta alta, un dúplex para hasta 5 personas con un loft abierto. Todos tienen dormitorio con cama queen (o dos camas), cocina completa y acceso con cerradura digital, con atención personalizada las 24 horas.",
    units: [
      { name: "Los Basaltos 1", guests: "hasta 4", detail: "Dos ambientes en planta baja. Queen o camas separadas y sillón cama en el living." },
      { name: "Los Basaltos 2", guests: "hasta 4", detail: "Igual al 1 y comunicado con él: juntos suman hasta 8 personas." },
      { name: "Los Basaltos 4", guests: "hasta 5", detail: "Dúplex en planta alta con loft abierto: queen (o dos camas) y dos camas individuales." },
      { name: "Casa 8 de Abril", guests: "hasta 12", detail: "Casa de dos plantas con 4 dormitorios en suite, chimenea hogar, lavarropas y losa radiante." },
    ],
    amenities: [
      ["wifi", "WiFi Starlink"],
      ["tv", "Smart TV con cable"],
      ["heat", "Calefacción por tiro balanceado"],
      ["kitchen", "Cocina completa: horno, microondas, cafetera y tostadora"],
      ["lock", "Cerradura digital"],
      ["support", "Atención personalizada 24 h"],
      ["linen", "Sábanas, toallas y amenities"],
      ["dryer", "Secador de pelo"],
      ["crib", "Practicuna sin costo, a pedido"],
      ["car", "Estacionamiento"],
    ],
    checkin: "14:00",
    checkout: "10:00",
    book: "https://soybamo.com/los-basaltos-departamentos",
    maps: "https://maps.app.goo.gl/1WJw7jjpwK3TBMKU8",
    reviews: "https://maps.google.com/?cid=6381619044953162615",
    coordinates: [-37.8704235, -71.0535159],
  },
  {
    id: "ekamai",
    name: "Ekamai",
    fullName: "Ekamai Departamentos",
    type: "Departamentos y cabañas",
    location: "Cerca del centro de ski",
    locationLong: "Junto al camino al centro de ski, con vista al volcán Copahue",
    zone: "ski",
    capacity: "Departamentos para 4 y cabaña para 6",
    pets: true,
    photos: 14,
    cover: 2,
    intro:
      "Departamentos con vista al volcán Copahue, cerca del centro de ski. La cabaña Ekamai Top, en dos plantas, tiene 3 dormitorios, 2 baños, un gran living con chimenea hogar y un deck con camastro frente a la montaña.",
    more:
      "Los departamentos White y Black, para hasta 4 personas, tienen un dormitorio con cama matrimonial y dos camas en el living. Todas las unidades tienen WiFi Starlink y cocina equipada con cafetera Nespresso.",
    units: [
      { name: "Ekamai Top · cabaña", guests: "hasta 6", detail: "3 dormitorios, 2 baños, chimenea hogar, parrilla y deck con vista a la montaña." },
      { name: "Ekamai White", guests: "hasta 4", detail: "Dormitorio con cama matrimonial y dos camas simples en el living." },
      { name: "Ekamai Black", guests: "hasta 4", detail: "Dormitorio con cama matrimonial y dos camas en el living." },
    ],
    amenities: [
      ["mountain", "Vista al volcán Copahue"],
      ["wifi", "WiFi Starlink"],
      ["coffee", "Cafetera Nespresso"],
      ["kitchen", "Cocina equipada: horno, microondas y pava eléctrica"],
      ["fire", "Chimenea hogar (cabaña)"],
      ["grill", "Parrilla (cabaña)"],
      ["tv", "TV con cable"],
      ["heat", "Calefacción"],
      ["linen", "Sábanas y toallas"],
      ["dryer", "Secador de pelo"],
      ["car", "Estacionamiento"],
    ],
    checkin: "14:00",
    checkout: "10:00",
    book: "https://soybamo.com/ekamai-departamentos",
    maps: "https://maps.app.goo.gl/y8Pv1RbMPJMMZ9BM9",
    reviews: "https://maps.google.com/?cid=9493871571194904547",
    coordinates: [-37.8644125, -71.0591104],
  },
  {
    id: "la-maison",
    name: "La Maison",
    fullName: "La Maison Departamentos",
    type: "Departamentos",
    location: "En el centro de Caviahue",
    locationLong: "En pleno centro del pueblo, cerca de comercios y restaurantes",
    zone: "centro",
    capacity: "Departamentos para 3, 4 y 5 huéspedes",
    pets: true,
    photos: 15,
    cover: 2,
    intro:
      "Cuatro departamentos en planta baja, cómodos y de fácil acceso, en pleno centro del pueblo. Cada uno tiene un dormitorio con cama matrimonial y está equipado para una estadía práctica: cocina completa, WiFi y TV con DirecTV.",
    more:
      "Según la unidad, el living suma un sofá cama con cama marinera o un entrepiso con dos camas individuales, ideal para familias. Es pet friendly: tu mascota también es bienvenida.",
    units: [
      { name: "Departamento 1", guests: "hasta 3", detail: "Ideal para pareja con un niño: dormitorio con baño en suite y sofá cama." },
      { name: "Departamento 2", guests: "hasta 4", detail: "Dormitorio matrimonial; sofá cama y catre en el living." },
      { name: "Departamento 3", guests: "hasta 4", detail: "Dormitorio matrimonial; sofá cama y catre en el living." },
      { name: "Departamento 4", guests: "hasta 5", detail: "Dos ambientes con entrepiso de dos camas individuales y sofá cama." },
    ],
    amenities: [
      ["pin", "En pleno centro"],
      ["kitchen", "Cocina equipada: horno, microondas, cafetera y tostadora"],
      ["tv", "Smart TV con DirecTV"],
      ["wifi", "WiFi"],
      ["heat", "Calefacción"],
      ["snow", "Aire acondicionado (deptos. 1 y 4)"],
      ["linen", "Sábanas, toallas, shampoo y acondicionador"],
      ["dryer", "Secador de pelo"],
      ["car", "Estacionamiento"],
    ],
    checkin: "14:00",
    checkout: "10:00",
    book: "https://soybamo.com/la-maison-departamentos",
    maps: "https://maps.app.goo.gl/p5LDfMXWKVia5kzD7",
    reviews: "https://maps.google.com/?cid=12913501301301006833",
    coordinates: [-37.8675968, -71.0520776],
  },
];

/* Puntos de interés del mapa. "cat": comer | compras | naturaleza | servicios */
window.POIS = [
  { name: "Supermercado El Pehuén", cat: "compras", coords: [-37.8687414, -71.0524226], link: "https://maps.app.goo.gl/XbhRqe5THE6P18TJ8" },
  { name: "Minimercado El Volcán", cat: "compras", coords: [-37.8679668, -71.0516839], link: "https://maps.app.goo.gl/bJKN9qoE6wYC5ac7A" },
  { name: "Amira Indumentaria", cat: "compras", coords: [-37.8637517, -71.0501539], link: "https://maps.app.goo.gl/wKP3HxpcerHd2oeJ9" },

  { name: "Kraken Restó", cat: "comer", coords: [-37.8687029, -71.052894], link: "https://maps.app.goo.gl/R9SdJpg2jCaDtxiVA" },
  { name: "Rústica Restaurante", cat: "comer", coords: [-37.8689271, -71.0514553], link: "https://maps.app.goo.gl/qFx7QGFsZdkWA8Zd7" },
  { name: "Hamburguesería Invernalia", cat: "comer", coords: [-37.863541, -71.0577862], link: "https://maps.app.goo.gl/HVHQBZofhBf1NC8i7" },
  { name: "Monte Blanco · pastelería y trattoría", cat: "comer", coords: [-37.8661382, -71.0542673], link: "https://maps.app.goo.gl/CPpQNGzXBY7rkdbT7" },
  { name: "Lo de Naty · pizzería", cat: "comer", coords: [-37.8643057, -71.0493209], link: "https://maps.app.goo.gl/2bcX6dQfeTsmD4HEA" },
  { name: "Matilde · casa de té", cat: "comer", coords: [-37.8696212, -71.0521621], link: "https://maps.app.goo.gl/SowXieGNnmQPS7SSA" },
  { name: "MORT", cat: "comer", coords: [-37.8719197, -71.0522422], link: "https://maps.app.goo.gl/S69G4g6J3TpDLHzc6" },

  { name: "Centro de Ski Caviahue", cat: "naturaleza", coords: [-37.8623995, -71.0753981], link: "https://maps.app.goo.gl/5hh2fPSCHWFYS2Kv7", activity: "ski" },
  { name: "Termas Caviahue", cat: "naturaleza", coords: [-37.8691687, -71.0551262], link: "https://maps.app.goo.gl/4K9NVL8nbLXvfizYA", activity: "termas" },
  { name: "Laguna Escondida", cat: "naturaleza", coords: [-37.8695358, -71.0623042], link: "https://maps.app.goo.gl/QJxV8eErfQ6g7fGb8", activity: "laguna" },
  { name: "Sendero Cascada Escondida", cat: "naturaleza", coords: [-37.8610796, -71.0697168], link: "https://maps.app.goo.gl/a18EHamJphAW6nNUA", activity: "escondida" },
  { name: "Cascada de la Usina Vieja", cat: "naturaleza", coords: [-37.857495, -71.0577945], link: "https://maps.app.goo.gl/tRzXaHsfUyDZTgYf9", activity: "usina" },
  { name: "Circuito de las Cuatro Cascadas", cat: "naturaleza", coords: [-37.881232, -71.0612608], link: "https://maps.app.goo.gl/1B4onTek7i22C8n9A", activity: "cascadas" },
  { name: "Puente de Piedra", cat: "naturaleza", coords: [-37.8849963, -71.0130383], link: "https://maps.app.goo.gl/VC7a7XEgCUd3phtUA", activity: "puente" },
  { name: "Salto del Agrio", cat: "naturaleza", coords: [-37.8095395, -70.9260174], link: "https://maps.app.goo.gl/SGHn6LkQX6zZXeTm8", activity: "agrio" },
  { name: "Copahue y sus termas", cat: "naturaleza", coords: [-37.8189661, -71.0987509], link: "https://maps.app.goo.gl/soRboLUd7xqh9pfm6", activity: "copahue" },
  { name: "Costanera del lago", cat: "naturaleza", coords: [-37.8691252, -71.0492], link: "https://www.google.com/maps/search/?api=1&query=-37.8691252,-71.0492", activity: "lago" },

  { name: "Centro de Salud Caviahue", cat: "servicios", coords: [-37.8655222, -71.0553882], link: "https://maps.app.goo.gl/1sEudg3o5wVcwpqM6" },
  { name: "Hotel Caviahue · ISSN (obra social)", cat: "servicios", coords: [-37.8688924, -71.054736], link: "https://maps.app.goo.gl/9J833DJ9uVER7Chd8" },
];

window.POI_CATEGORIES = {
  alojamientos: { label: "Nuestros alojamientos", color: "#a7783f" },
  comer: { label: "Para comer", color: "#b4553d" },
  compras: { label: "Almacenes y compras", color: "#3f6f78" },
  naturaleza: { label: "Paseos y naturaleza", color: "#4e7144" },
  servicios: { label: "Salud y servicios", color: "#5b5f8a" },
};

/* Qué hacer. "poi" conecta la actividad con su punto en el mapa. */
window.SEASONS = {
  invierno: {
    label: "Invierno",
    months: "Junio a septiembre",
    lead: "Nieve, araucarias y el lago entre montañas blancas. Caviahue se vuelve un pueblo de montaña de postal.",
    items: [
      { title: "Esquí y snowboard", text: "El centro de ski Caviahue tiene pistas para todos los niveles entre bosques de araucarias, escuela y alquiler de equipos. Ekamai queda a pocos minutos de los medios.", img: "caviahue/caviahue-argentina-panoramio.webp", alt: "Ladera nevada entre araucarias, con el lago y la cordillera al fondo", poi: "Centro de Ski Caviahue" },
      { title: "Paseos por la nieve", text: "Caminatas con raquetas, culipatín para los chicos y el pueblo entero cubierto de blanco para recorrer a pie.", img: "caviahue/invierno.webp", alt: "El pueblo de Caviahue cubierto de nieve" },
      { title: "Salto del Agrio nevado", text: "Una de las postales más conocidas de Neuquén. En invierno la cascada se rodea de hielo y nieve.", img: "caviahue/salto-agrio.webp", alt: "Salto del Agrio cayendo sobre la roca", poi: "Salto del Agrio" },
      { title: "Termas y tardes en el pueblo", text: "Después de un día en la montaña: las aguas termales del pueblo, una casa de té y la chimenea encendida.", img: "caviahue/reflexo-panoramio-1-.webp", alt: "El pueblo de Caviahue reflejado en el lago en invierno", poi: "Termas Caviahue" },
    ],
  },
  verano: {
    label: "Verano",
    months: "Diciembre a marzo",
    lead: "Días largos, cascadas, lagunas y termas. El verano en Caviahue es para caminar, nadar y mirar lejos.",
    items: [
      { title: "Circuito de las Cuatro Cascadas", text: "Un sendero junto al río Agrio que une cascadas como la Cabellera de la Virgen, la Culebra y el Gigante.", img: "caviahue/cabellera-de-la-virgen.webp", alt: "Cascada Cabellera de la Virgen", poi: "Circuito de las Cuatro Cascadas" },
      { title: "Salto del Agrio", text: "Una cascada que cae sobre paredes de basalto y piedras teñidas de ocre. Con sol, el arcoíris es casi seguro.", img: "caviahue/arco-iris-en-salto-del-agrio.webp", alt: "Arcoíris en el Salto del Agrio", poi: "Salto del Agrio" },
      { title: "Lago Caviahue", text: "Kayak, paddle y caminatas por la costanera. La orilla está a pasos de Trawen y Los Basaltos.", img: "caviahue/hermoso-lago-caviahue.webp", alt: "Lago Caviahue en un día de verano", poi: "Costanera del lago" },
      { title: "Termas de Caviahue y Copahue", text: "Las termas del pueblo y, a unos 18 km, la villa termal de Copahue con sus lagunas y fumarolas.", img: "caviahue/termas-de-copahue-neuquen.webp", alt: "Termas de Copahue con la villa al fondo", poi: "Copahue y sus termas" },
      { title: "Cascada Escondida y Usina Vieja", text: "Dos senderos cortos que salen del pueblo entre araucarias y terminan en cascadas.", img: "caviahue/imagen-pehuen.webp", alt: "Pasarela de madera entre araucarias", poi: "Sendero Cascada Escondida" },
      { title: "Laguna Escondida y Puente de Piedra", text: "Una laguna a pocos minutos del centro y un puente natural de roca sobre el río, ideales para una tarde.", img: "caviahue/tierra-de-pehuenes.webp", alt: "Araucarias junto al lago con montañas al fondo", poi: "Laguna Escondida" },
    ],
  },
};

// Las guías usan fotos del lugar correspondiente, conservando los créditos originales.
// Las fotos del Parque Náutico y su logo se incorporan cuando estén disponibles.
const ACTIVITY_EXTRAS = {
  "Circuito de las Cuatro Cascadas": {
    details: ["El recorrido acompaña al río Agrio entre araucarias. Podés combinar las distintas cascadas en un paseo y detenerte a disfrutar del paisaje.", "Consultanos antes de salir por el acceso y el estado del sendero durante tu estadía."],
    extraPhotos: [["caviahue/cascada-del-agrio-neuquen-argentina-panoramio.webp", "Cascada del río Agrio"]],
  },
  "Salto del Agrio": {
    details: ["El salto, las paredes de basalto y los colores de la roca forman una de las postales de los alrededores de Caviahue. La ubicación de Google Maps te permite organizar la visita desde tu alojamiento."],
    extraPhotos: [["caviahue/salto-del-agrio-neuquen.webp", "Salto del Agrio y su olla turquesa"], ["caviahue/salto-agrio.webp", "Vista del Salto del Agrio"]],
  },
  "Salto del Agrio nevado": {
    details: ["El paisaje del Salto del Agrio cambia con las estaciones. Para planificar una visita en invierno, consultá previamente el estado del acceso y las condiciones del día."],
    extraPhotos: [["caviahue/salto-del-agrio-neuquen.webp", "El Salto del Agrio, otra vista del lugar"]],
  },
  "Lago Caviahue": {
    park: true,
    details: ["La costanera permite conocer el paisaje del lago y recorrer el pueblo a pie. Trawen y Los Basaltos son dos de nuestras opciones de alojamiento cerca de la orilla."],
    extraPhotos: [["caviahue/costanera.webp", "La costa del lago Caviahue"], ["caviahue/lago-caviahue-from-caviahue.webp", "Araucaria sobre las rocas frente al lago Caviahue"], ["caviahue/pueblo-lago.webp", "El pueblo de Caviahue junto al lago"]],
  },
  "Termas de Caviahue y Copahue": {
    additionalPois: ["Termas Caviahue"],
    details: ["Podés consultar las ubicaciones de las termas del pueblo y de Copahue por separado. Antes de organizar la visita, verificá los servicios habilitados y sus horarios para la fecha de tu viaje."],
    extraPhotos: [["caviahue/caviahue-from-copahue.webp", "El lago Caviahue visto desde Copahue"]],
  },
  "Cascada Escondida y Usina Vieja": {
    additionalPois: ["Cascada de la Usina Vieja"],
    details: ["Son dos paseos diferentes en los alrededores del pueblo. Abajo tenés la ubicación de cada uno para elegir tu recorrido y organizar la salida."],
  },
  "Laguna Escondida y Puente de Piedra": {
    additionalPois: ["Puente de Piedra"],
    details: ["La laguna y el puente natural son dos lugares distintos. Consultá cada ubicación en Google Maps para planificar los traslados desde Caviahue."],
  },
};
Object.values(window.SEASONS).forEach(season => season.items.forEach(item => {
  const extra = ACTIVITY_EXTRAS[item.title] || {};
  Object.assign(item, extra);
  item.slug = item.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  item.details = extra.details || [];
  item.photos = [{img:item.img,alt:item.alt}, ...(extra.extraPhotos || []).map(([img,alt])=>({img,alt}))];
}));

window.GALLERY = [
  // El orden importa: arma un mosaico cuadrado (1 ancha, 1 alta, 4 chicas, 1 alta, 1 chica, 1 ancha, 3 chicas).
  { img: "caviahue/caviahue-neuquen-argentina-panoramio.webp", alt: "Volcán Copahue nevado reflejado en el lago" },
  { img: "caviahue/salto-del-agrio-neuquen.webp", alt: "Salto del Agrio y su olla turquesa" },
  { img: "caviahue/lago-caviahue-from-caviahue.webp", alt: "Araucaria sobre las rocas frente al lago Caviahue" },
  { img: "caviahue/invierno.webp", alt: "Caviahue en invierno" },
  { img: "caviahue/pueblo-lago.webp", alt: "El pueblo de Caviahue junto al lago" },
  { img: "caviahue/araucarias-copahue.webp", alt: "Araucarias y el volcán Copahue" },
  { img: "caviahue/cascada-del-agrio-neuquen-argentina-panoramio.webp", alt: "Cascada del río Agrio" },
  { img: "caviahue/chegando-a-caviahue-argentina-panoramio.webp", alt: "La cordillera nevada llegando a Caviahue" },
  { img: "caviahue/simetria-especular-lago-caviahue-neuquen-argentina-panoramio.webp", alt: "Montañas reflejadas en el lago Caviahue" },
  { img: "caviahue/caviahue-from-copahue.webp", alt: "El lago Caviahue visto desde Copahue" },
  { img: "caviahue/costanera.webp", alt: "La costa del lago Caviahue" },
  { img: "caviahue/reflexo-panoramio-1-.webp", alt: "El pueblo reflejado en el lago en invierno" },
];

window.CREDITS = [
  ["Volcán Copahue y lago · rodoluca", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Caviahue,_Neuqu%C3%A9n,_Argentina_-_panoramio.jpg"],
  ["Araucaria frente al lago · Balon Greyjoy", "CC0", "https://commons.wikimedia.org/wiki/File:Lago_Caviahue_from_Caviahue.jpg"],
  ["Caviahue en invierno · Elvis Boaventura", "CC BY 3.0", "https://commons.wikimedia.org/wiki/File:Caviahue_II_-_panoramio_(1).jpg"],
  ["El pueblo junto al lago · Andarin2", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Caviahue.JPG"],
  ["Salto del Agrio · Juancruzcipo", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Salto_del_Agrio_-_Neuqu%C3%A9n.jpg"],
  ["Simetría especular · rodoluca", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Simetr%C3%ADa_especular,_Lago_Caviahue,_Neuqu%C3%A9n,_Argentina_-_panoramio.jpg"],
  ["Araucarias y el Copahue · rdjulieta, edición de MPF", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Caviahue,_Neuqu%C3%A9n.jpg"],
  ["Llegando a Caviahue · Elvis Boaventura", "CC BY 3.0", "https://commons.wikimedia.org/wiki/File:Chegando_a_Caviahue,_Argentina_-_panoramio.jpg"],
  ["El lago desde Copahue · Andarin2", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Caviahue_from_Copahue.jpg"],
  ["La costa del lago · Pileta natural", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Caviahue_Provincia_de_Neuquen.jpg"],
  ["Reflejo del pueblo · Elvis Boaventura", "CC BY 3.0", "https://commons.wikimedia.org/wiki/File:Reflexo_-_panoramio_(1).jpg"],
  ["Cascada del Agrio · rodoluca", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Cascada_del_Agrio,_Neuqu%C3%A9n,_Argentina_-_panoramio.jpg"],
  ["Araucarias en la nieve · Elvis Boaventura", "CC BY 3.0", "https://commons.wikimedia.org/wiki/File:Caviahue,_Argentina_-_panoramio.jpg"],
  ["Salto Agrio · Andarin2", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Salto_Agrio.JPG"],
  ["Cabellera de la Virgen · Viajera del alba", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Cabellera_de_la_Virgen.JPG"],
  ["Arcoíris en el Salto del Agrio · Viajera del alba", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Arco_iris_en_Salto_del_Agrio.JPG"],
  ["Hermoso lago Caviahue · Viajera del alba", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Hermoso_Lago_Caviahue.JPG"],
  ["Termas de Copahue · CarlosA.Barrio", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Termas_de_Copahue_Neuquen.jpg"],
  ["Pasarela entre araucarias · Narciro23", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Imagen_pehuen.jpg"],
  ["Tierra de pehuenes · Ayi.funes", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Tierra_de_Pehuenes.JPG"],
];

/* Preguntas frecuentes: se muestran en la página y también se publican para Google (datos estructurados). */
window.FAQ = [
  {
    q: "¿Cómo llego a Caviahue?",
    a: "Caviahue está en el norte de Neuquén, a unos 360 km de la ciudad de Neuquén, todo por asfalto. El camino más usado es la ruta nacional 22 hasta Zapala, la provincial 21 hasta Loncopué y la provincial 26 hasta el pueblo: son entre 4 y 5 horas de viaje. El aeropuerto con vuelos regulares más cercano es el de la ciudad de Neuquén.",
  },
  {
    q: "¿Cómo llego a cada alojamiento?",
    a: "Trawen está a 20 metros de la avenida Quimey Co, frente al lago. Los Basaltos queda a dos cuadras del lago, en el centro. La Maison está en pleno centro del pueblo y Ekamai, cerca del camino al centro de ski. En el mapa de esta página cada alojamiento tiene su botón «Cómo llegar», que abre la ruta en Google Maps.",
    link: ["#mapa", "Abrir el mapa"],
  },
  {
    q: "¿Qué hacer en Caviahue?",
    a: "En invierno: esquí y snowboard en el centro de ski, paseos por la nieve y termas. En verano: el circuito de las Cuatro Cascadas, el Salto del Agrio, el lago, las termas de Caviahue y Copahue, y senderos como el de la Cascada Escondida.",
    link: ["#que-hacer", "Ver qué hacer en invierno y en verano"],
  },
  {
    q: "¿Cuándo conviene ir?",
    a: "Todo el año. La temporada de nieve suele ir de junio a septiembre, según el clima de cada invierno. De diciembre a marzo es la mejor época para cascadas, termas y caminatas. Nuestros alojamientos están abiertos los doce meses.",
  },
  {
    q: "¿Qué tengo que tener en cuenta para viajar en invierno?",
    a: "Llevá cadenas para el auto y revisá el estado de las rutas en Vialidad Provincial de Neuquén antes de salir. Con nevadas, el último tramo de la ruta 26 puede requerirlas. En esta página tenés el pronóstico de la semana.",
    link: ["#clima", "Ver el clima de la semana"],
  },
  {
    q: "¿Aceptan mascotas?",
    a: "Sí, en Los Basaltos, La Maison y Ekamai. Trawen no admite mascotas.",
  },
  {
    q: "¿Cuál es el horario de ingreso y salida?",
    a: "El check-in es desde las 14:00 y el check-out hasta las 10:00 en todos los alojamientos.",
  },
  {
    q: "¿Qué incluye la estadía?",
    a: "Todos los alojamientos incluyen sábanas, toallas, calefacción, WiFi y cocina equipada (en Trawen la cocina es de uso común). Trawen, Los Basaltos y Ekamai tienen WiFi Starlink. Las comodidades de cada uno están en su ficha.",
  },
  {
    q: "¿Para cuántas personas son?",
    a: "Hay opciones para parejas, familias y grupos: departamentos para 3, 4 y 5 personas en La Maison y Los Basaltos, departamentos para 4 y una cabaña para 6 en Ekamai, y en Trawen habitaciones de 2 a 4 personas o el hostal completo para hasta 13.",
  },
  {
    q: "¿Cómo reservo?",
    a: "Con el botón Reservar de cada alojamiento elegís fechas y ves la disponibilidad online. Si preferís, escribinos por WhatsApp y te ayudamos a elegir. Cada alojamiento informa su política de cancelación al momento de reservar.",
  },
  {
    q: "¿Hay supermercados y servicios en el pueblo?",
    a: "Sí. Caviahue tiene supermercado, almacenes, restaurantes, casas de té, estación de servicio y Centro de Salud. Los marcamos en el mapa para que los encuentres rápido.",
    link: ["#mapa", "Ver en el mapa"],
  },
];
