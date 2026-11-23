/* Contenido del sitio. Para cambiar textos, fotos, puntos del mapa o preguntas, editá este archivo. */

window.SITE = {
  whatsapp: "5492942487227",
  whatsappLabel: "+54 9 2942 487227",
  // Pegá acá el link de Instagram (por ejemplo "https://www.instagram.com/patagoniahomes"). Vacío = el botón no se muestra.
  instagram: "",
  coordinates: [-37.8689, -71.0528],
  // WhatsApp del Parque Náutico (no es de los alojamientos): lo usa el bloque del parque en la guía del lago.
  parkWhatsapp: "5491141564004",
  parkWhatsappLabel: "+54 9 11 4156-4004",
  parkMessage: "Hola, vengo de la web de Patagonia Homes y quiero consultar por las actividades del Parque Náutico.",
};

const cabinBookingUrl = "https://soybamo.com/cabanas-6-a-12-personas";

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
    photos: 13,
    cover: 3,
    intro:
      "Departamentos decorados con mucha dedicación, a dos cuadras del lago y a 1,5 km del centro de ski. Las dos unidades de planta baja, para hasta 4 personas cada una, se comunican por una puerta corrediza: ideales para grupos que quieren estar cerca y tener su propio espacio.",
    more:
      "En planta alta, un dúplex para hasta 5 personas con un loft abierto. Todos tienen dormitorio con cama queen (o dos camas), cocina completa y acceso con cerradura digital, con atención personalizada las 24 horas.",
    units: [
      { name: "Los Basaltos 1", guests: "hasta 4", detail: "Dos ambientes en planta baja. Queen o camas separadas y sillón cama en el living." },
      { name: "Los Basaltos 2", guests: "hasta 4", detail: "Igual al 1 y comunicado con él: juntos suman hasta 8 personas." },
      { name: "Los Basaltos 4", guests: "hasta 5", detail: "Dúplex en planta alta con loft abierto: queen (o dos camas) y dos camas individuales." },
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
    id: "casa-8-de-abril",
    name: "Cabaña 8 de Abril",
    fullName: "Cabaña 8 de Abril",
    type: "Cabaña para grupos",
    location: "Sobre la avenida 8 de Abril",
    locationLong: "Sobre la avenida 8 de Abril, en el pueblo de Caviahue",
    zone: "lago",
    capacity: "Hasta 12 huéspedes · 4 dormitorios en suite",
    pets: false,
    photos: 10,
    cover: 1,
    intro:
      "Una cabaña amplia y confortable de dos plantas, ideal para familias numerosas o grupos de amigos. Tiene 4 dormitorios en suite y capacidad para hasta 12 personas.",
    more:
      "Cuenta con un gran living con chimenea hogar, amplio comedor y una cocina totalmente equipada con lavavajillas, microondas, cafetera Nespresso y pava eléctrica. Suma lavadero con lavarropas y calefacción por losa radiante: solo tenés que llegar y disfrutar.",
    units: [
      { name: "Cabaña completa", guests: "hasta 12", detail: "Dos plantas y 4 dormitorios en suite, con 4 camas matrimoniales y 4 camas simples." },
    ],
    amenities: [
      ["fire", "Chimenea hogar en el living"],
      ["heat", "Calefacción por losa radiante"],
      ["kitchen", "Cocina equipada con lavavajillas y microondas"],
      ["coffee", "Cafetera Nespresso"],
      ["washer", "Lavadero con lavarropas"],
      ["wifi", "WiFi"],
      ["tv", "Smart TV con cable"],
      ["grill", "Parrilla"],
      ["bath", "Bañera"],
      ["linen", "Ropa de cama y toallas"],
      ["car", "Estacionamiento"],
    ],
    checkin: "14:00",
    checkout: "10:00",
    book: cabinBookingUrl,
    maps: "https://maps.app.goo.gl/fR3qrdmq4oR9h2i98",
    coordinates: [-37.8733737, -71.0552637],
  },
  {
    id: "cabana-antu",
    name: "Cabaña Antú",
    fullName: "Cabaña Antú",
    type: "Cabaña para familias y grupos",
    location: "Caviahue",
    locationLong: "Caviahue, Neuquén",
    capacity: "Hasta 6 huéspedes · 2 dormitorios · 2 baños",
    pets: true,
    photos: 8,
    cover: 1,
    intro:
      "Disfrutá de una estadía cómoda y acogedora en Antú, una cabaña de dos plantas, totalmente equipada y con capacidad para hasta 6 personas, ideal para familias o grupos de amigos.",
    more:
      "En la planta baja cuenta con un dormitorio matrimonial, un baño completo con ducha, cocina equipada con horno, heladera, microondas, cafetera y pava eléctrica, y un cálido living comedor con parrilla interior y chimenea. Además, ofrece estacionamiento y un pequeño patio parquizado para disfrutar de Caviahue con comodidad e independencia.",
    units: [
      { name: "Cabaña completa", guests: "hasta 6", detail: "En la planta alta hay cuatro camas individuales tipo sommier y un segundo baño completo." },
    ],
    amenities: [
      ["kitchen", "Cocina equipada"],
      ["fire", "Chimenea en el living"],
      ["grill", "Parrilla interior"],
      ["bath", "Dos baños completos"],
      ["tree", "Patio parquizado"],
      ["car", "Estacionamiento"],
      ["wifi", "WiFi"],
      ["heat", "Calefacción"],
      ["linen", "Sábanas y toallas"],
    ],
    checkin: "14:00",
    checkout: "10:00",
    book: cabinBookingUrl,
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
    photos: 16,
    cover: 1,
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
  { name: "Cascadas del Agrio", cat: "naturaleza", coords: [-37.881232, -71.0612608], link: "https://maps.app.goo.gl/1B4onTek7i22C8n9A", activity: "cascadas" },
  { name: "Puente de Piedra", cat: "naturaleza", coords: [-37.8849963, -71.0130383], link: "https://maps.app.goo.gl/VC7a7XEgCUd3phtUA", activity: "puente" },
  { name: "Salto del Agrio", cat: "naturaleza", coords: [-37.8095395, -70.9260174], link: "https://maps.app.goo.gl/SGHn6LkQX6zZXeTm8", activity: "agrio" },
  { name: "Copahue y sus termas", cat: "naturaleza", coords: [-37.8189661, -71.0987509], link: "https://maps.app.goo.gl/soRboLUd7xqh9pfm6", activity: "copahue" },
  { name: "Costanera del lago", cat: "naturaleza", coords: [-37.8691252, -71.0492], link: "https://www.google.com/maps/search/?api=1&query=-37.8691252,-71.0492", activity: "lago" },

  { name: "Volcán Copahue", cat: "naturaleza", coords: [-37.856, -71.183], link: "https://www.caviahue-copahue.gob.ar/volcan-copahue/", activity: "volcan" },

  // Oficina de informes turísticos en el acceso al pueblo (8 de Abril y Av. Quimey Co).
  { name: "Turismo Caviahue-Copahue · informes", cat: "servicios", coords: [-37.8769371, -71.0549695], link: "https://maps.google.com/?cid=7312778874540123516" },
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
      { title: "Esquí y snowboard", text: "El centro de ski Caviahue tiene pistas para todos los niveles entre bosques de araucarias, con escuela y alquiler de equipos. Ekamai queda a pocos minutos de los medios.", img: "caviahue/ski-dsc04723.webp", alt: "Snowboarder saltando entre araucarias nevadas en el centro de ski Caviahue", poi: "Centro de Ski Caviahue", links: [["https://www.caviahue.com/", "Sitio oficial del centro de ski"]] },
      { title: "Excursiones en nieve", text: "Motos de nieve, caminatas con raquetas y culipatín para los chicos: el bosque de araucarias y el pueblo cubiertos de blanco se recorren de otra manera.", img: "caviahue/nieve-moto.webp", alt: "Paseo en moto de nieve por un valle nevado rodeado de bosque" },
      { title: "Salto del Agrio congelado", text: "Una excursión a una de las postales más conocidas de Neuquén: en invierno la cascada se rodea de hielo y columnas congeladas.", img: "caviahue/agrio-congelado-5.webp", alt: "El Salto del Agrio congelado, con columnas de hielo sobre el basalto", poi: "Salto del Agrio" },
      { title: "Termas en Caviahue", text: "En el pueblo funciona una pequeña sede de las Termas de Copahue: fangos, algas y vapores para terminar un día de nieve.", img: "caviahue/termas-invierno-portada.webp", alt: "Complejo termal con su laguna rodeado de nieve, bajo un cielo despejado", poi: "Termas Caviahue" },
    ],
  },
  verano: {
    label: "Verano",
    months: "Diciembre a marzo",
    lead: "Días largos, cascadas, lagunas y termas. El verano en Caviahue es para caminar, nadar y mirar lejos.",
    items: [
      { title: "Lago Caviahue", text: "Lancha, wakeboard, kayak y paddle en el Parque Náutico, o una caminata por la costanera. La orilla está a pasos de Trawen y Los Basaltos.", img: "caviahue/lago-wakeboard-pueblo.webp", alt: "Lancha y wakeboard en el lago, con el pueblo y el volcán Copahue de fondo", poi: "Costanera del lago" },
      { title: "Salto del Agrio", text: "Una cascada que cae sobre paredes de basalto y piedras teñidas de ocre. Con sol, el arcoíris es casi seguro.", img: "caviahue/agrio-frente.webp", alt: "Salto del Agrio de frente, con la olla turquesa y las piedras naranjas", poi: "Salto del Agrio" },
      { title: "Cascadas del Agrio", text: "Un sendero junto al río Agrio que une varias cascadas entre araucarias, con ollas de agua turquesa.", img: "caviahue/cascadas-araucarias.webp", alt: "Cascada del río Agrio con araucarias en lo alto", poi: "Cascadas del Agrio" },
      { title: "Termas de Copahue", text: "A unos 18 km del pueblo, la villa termal de Copahue con sus piletas, lagunas de barro y fumarolas.", img: "caviahue/copahue-laguna-barro.webp", alt: "Visitantes en la laguna de barro termal de Copahue", poi: "Copahue y sus termas", links: [["https://www.copahue.com.ar/", "Sitio oficial de las Termas de Copahue"]] },
      { title: "Volcán Copahue", text: "Una excursión a la cumbre de un volcán activo: fumarolas, nieve todo el año y una laguna ácida en el cráter.", img: "caviahue/volcan-fumarola.webp", alt: "Fumarola en la ladera del volcán Copahue", poi: "Volcán Copahue", links: [["https://www.caviahue-copahue.gob.ar/volcan-copahue/", "Información oficial de Turismo y agencias habilitadas"]] },
      { title: "Cascada Escondida", text: "Un sendero corto que sale del pueblo entre araucarias y termina al pie de una cascada.", img: "caviahue/escondida-cartel.webp", alt: "La Cascada Escondida vista entre araucarias, con el cartel del sendero", poi: "Sendero Cascada Escondida" },
      { title: "Cascada de la Usina", text: "Una caminata corta desde el pueblo hasta una cascada que cae sobre una pared de basalto.", img: "caviahue/usina-otono.webp", alt: "Vista aérea de la Cascada de la Usina en otoño", poi: "Cascada de la Usina Vieja" },
      { title: "Laguna Escondida", text: "Una laguna rodeada de araucarias a pocos minutos del centro, ideal para una tarde tranquila.", img: "caviahue/laguna-reflejo.webp", alt: "Laguna Escondida con araucarias reflejadas en el agua", poi: "Laguna Escondida" },
      { title: "Puente de Piedra", text: "Un arco natural de roca volcánica sobre aguas turquesas, cerca del pueblo. Se llega por sendero o en lancha con el Parque Náutico.", img: "caviahue/puente-arriba.webp", alt: "El Puente de Piedra visto desde arriba, con el agua turquesa debajo", poi: "Puente de Piedra" },
    ],
  },
};

// Las guías usan fotos del lugar correspondiente: las de verano son propias; las de Wikimedia conservan sus créditos.
// "park" agrega el bloque del Parque Náutico (logo, texto y actividades) a la guía del lago.
const ACTIVITY_EXTRAS = {
  "Esquí y snowboard": {
    details: ["El centro de ski está a pocos minutos del pueblo y tiene pistas para principiantes, intermedios y avanzados que bajan entre bosques de araucarias, con vista al lago y al volcán Copahue. Hay escuela de esquí y snowboard, alquiler de equipos y confiterías en la base.", "Antes de ir, revisá en el sitio oficial los medios habilitados, las tarifas y el estado de las pistas."],
    extraPhotos: [
      ["caviahue/ski-dsc04731.webp", "Snowboard entre araucarias nevadas"],
      ["caviahue/ski-dji_0115.webp", "Vista aérea de la base del centro de ski Caviahue"],
      ["caviahue/ski-dsc04288.webp", "Clase de esquí para chicos en la pista"],
      ["caviahue/ski-dsc04506.webp", "Esquiadores frente a los refugios de la base"],
      ["caviahue/ski-dji_0125.webp", "Pista de principiantes entre araucarias, vista desde el aire"],
    ],
  },
  "Excursiones en nieve": {
    details: ["Con la nieve, el bosque de araucarias que rodea al pueblo se convierte en otro paisaje. Las motos de nieve llevan a miradores y lugares que en invierno no se alcanzan a pie; con raquetas se camina sobre la nieve profunda en silencio, y el culipatín es la diversión asegurada para los chicos (y no tan chicos).", "Las excursiones salen con prestadores habilitados del pueblo. Consultanos y te ayudamos a organizarlas durante tu estadía."],
    // Fotos de referencia de las actividades (Wikimedia Commons, con créditos): no hay fotos propias de Caviahue de motos, raquetas y culipatín.
    extraPhotos: [
      ["caviahue/nieve-raquetas.webp", "Caminata con raquetas por un bosque nevado"],
      ["caviahue/nieve-culipatin.webp", "Una mamá y sus hijas bajando en culipatín"],
      ["caviahue/nieve-culipatin-2.webp", "Chicos deslizándose en culipatín por una ladera nevada"],
      ["caviahue/ski-dji_0208.webp", "Bosque de araucarias cubierto de nieve, visto desde el aire"],
      ["caviahue/invierno.webp", "El pueblo de Caviahue cubierto de nieve"],
    ],
  },
  "Salto del Agrio congelado": {
    details: ["En los inviernos más fríos, el Salto del Agrio se cubre de columnas de hielo que cuelgan de las paredes de basalto y la olla queda en parte congelada: un paisaje que muy pocos llegan a ver.", "En invierno el acceso es intransitable para vehículos comunes: la visita se hace como excursión, con prestadores y vehículos preparados para la nieve. Consultá el estado del camino y las condiciones del día antes de planificarla."],
    extraPhotos: [
      ["caviahue/agrio-congelado-1.webp", "El Salto del Agrio congelado a contraluz"],
      ["caviahue/agrio-congelado-2.webp", "La caída del Salto del Agrio entre columnas de hielo"],
      ["caviahue/agrio-congelado-6.webp", "Cortinas de hielo en el Salto del Agrio"],
      ["caviahue/agrio-congelado-4.webp", "El cañadón del río Agrio con nieve y hielo"],
    ],
  },
  "Termas en Caviahue": {
    details: ["Además de la villa termal de Copahue, en el pueblo de Caviahue funciona una pequeña sede de las Termas de Copahue, abierta también en invierno. Ofrece tratamientos con los fangos, las algas y los vapores de la zona: un plan ideal después de un día de nieve.", "Consultá los servicios y horarios habilitados para la fecha de tu viaje."],
    extraPhotos: [
      ["caviahue/termas-invierno-caviahue.webp", "Las termas de Caviahue rodeadas de nieve"],
      ["caviahue/termas-invierno-pileta.webp", "Pileta termal rodeada de nieve en Caviahue"],
      ["caviahue/termas-invierno-nieve.webp", "Las termas de Caviahue un día de nieve"],
      ["caviahue/termas-invierno-vapor.webp", "Vapor saliendo de las termas en invierno"],
      ["caviahue/termas-fango.webp", "Tratamiento con fango termal"],
      ["caviahue/termas-algas.webp", "Aplicación de algas termales"],
      ["caviahue/termas-vapor.webp", "Baño de vapor termal al aire libre"],
    ],
    links: [["https://www.copahue.com.ar/", "Sitio oficial de las Termas de Copahue"]],
  },
  "Volcán Copahue": {
    details: ["El Copahue es un volcán activo de casi 3.000 metros en el límite con Chile. En su cumbre hay un cráter con una laguna ácida y fumarolas que se ven desde el pueblo los días despejados.", "El ascenso es una excursión de alta montaña: tiene registro obligatorio y se hace con agencias y prestadores habilitados por la Secretaría de Turismo, que informa además el estado de actividad del volcán."],
    extraPhotos: [
      ["caviahue/volcan-crater.webp", "Vapor saliendo del cráter del volcán Copahue"],
      ["caviahue/volcan-laguna-crater.webp", "La laguna del cráter del volcán Copahue"],
    ],
  },
  "Lago Caviahue": {
    park: {
      logo: "caviahue/parque-nautico-logo.webp",
      title: "Parque Náutico Caviahue",
      text: "Nuestro parque náutico en el lago, con equipos y salidas para disfrutar del agua en familia o con amigos. También hace paseos en lancha hasta el Puente de Piedra.",
      discount: "Todos los huéspedes de Patagonia Homes tienen un 20% de descuento en el Parque Náutico.",
      activities: ["Paseos en lancha", "Wakeboard", "Kayak", "Paddle"],
    },
    details: ["El lago rodea al pueblo y es el corazón del verano en Caviahue: aguas turquesas, costas de araucarias y el volcán Copahue de fondo. Se puede recorrer a pie por la costanera, tomar sol en la playa del pueblo o salir al agua."],
    extraPhotos: [
      ["caviahue/lago-wakeboard-arriba.webp", "Wakeboard detrás de la lancha, visto desde arriba"],
      ["caviahue/nautico-kayak.webp", "Kayak frente al pueblo de Caviahue"],
      ["caviahue/lago-paddle.webp", "Paddle en el lago, con araucarias en la costa"],
      ["caviahue/nautico-lancha-araucarias.webp", "Paseo en lancha junto a una costa de araucarias"],
      ["caviahue/lago-wakeboard-costanera.webp", "Wakeboard frente a la costanera del pueblo"],
      ["caviahue/nautico-muelle.webp", "El muelle del Parque Náutico con kayaks y lancha, visto desde el aire"],
    ],
  },
  "Salto del Agrio": {
    details: ["El río Agrio cae en un anfiteatro de columnas de basalto y forma una olla de agua turquesa. Las piedras naranjas y ocres, teñidas por los minerales del río, hacen que sea una de las postales más fotografiadas de Neuquén. Hay estacionamiento y miradores junto al borde, y un sendero baja hasta la orilla."],
    extraPhotos: [
      ["caviahue/agrio-arcoiris.webp", "Arcoíris en la caída del Salto del Agrio"],
      ["caviahue/agrio-rio.webp", "El río Agrio sobre lajas de colores, con el salto al fondo"],
      ["caviahue/agrio-arbustos.webp", "El Salto del Agrio entre la vegetación"],
      ["caviahue/agrio-arriba.webp", "Vista aérea del Salto del Agrio y el estacionamiento"],
    ],
  },
  "Cascadas del Agrio": {
    details: ["Saliendo de Caviahue, el río Agrio baja en una serie de cascadas rodeadas de araucarias y rocas de colores. El sendero se puede hacer completo o hasta la primera cascada; en otoño los ñires se ponen rojos y naranjas.", "Consultanos antes de salir por el acceso y el estado del sendero durante tu estadía."],
    extraPhotos: [
      ["caviahue/cascadas-ollita.webp", "Cascada sobre una olla de agua turquesa entre rocas ocres"],
      ["caviahue/cascadas-perro.webp", "Una de las cascadas del Agrio vista de cerca"],
      ["caviahue/cascadas-otono.webp", "Cascada a contraluz en otoño, con araucarias y montañas nevadas"],
      ["caviahue/cascadas-agrio-sendero.webp", "Una de las cascadas del Agrio vista desde el sendero, entre araucarias"],
    ],
  },
  "Termas de Copahue": {
    details: ["Copahue es una villa termal en la ladera del volcán, famosa por sus aguas, barros y vapores. Se puede pasar el día en las piletas al aire libre, recorrer las lagunas termales y ver las fumarolas que salen de la montaña.", "Antes de organizar la visita, verificá los servicios habilitados y sus horarios para la fecha de tu viaje."],
    extraPhotos: [
      ["caviahue/copahue-batas.webp", "Dos visitantes en bata recorriendo el complejo termal"],
      ["caviahue/copahue-villa.webp", "Vista aérea de la villa termal de Copahue"],
      ["caviahue/copahue-termas-aerea.webp", "El complejo termal de Copahue y sus piletas, desde lo alto"],
      ["caviahue/copahue-bata.webp", "Visitantes en bata junto a una pileta termal"],
      ["caviahue/copahue-noche.webp", "La villa de Copahue iluminada al anochecer, con la luna"],
    ],
  },
  "Cascada Escondida": {
    details: ["La entrada al sendero está a pocos minutos del centro, marcada con un portal de madera. El camino sube por un bosque de araucarias y ñires siguiendo el arroyo hasta la cascada, que cae en varios saltos por un cañadón."],
    extraPhotos: [
      ["caviahue/escondida-araucarias.webp", "La Cascada Escondida al fondo del cañadón, entre araucarias"],
      ["caviahue/escondida-pie.webp", "La Cascada Escondida vista desde su base"],
      ["caviahue/escondida-entrada.webp", "Portal de madera en la entrada del sendero"],
    ],
  },
  "Cascada de la Usina": {
    details: ["Cerca del pueblo, el arroyo cae desde un borde de columnas de basalto a una olla rodeada de verde. Es un paseo ideal para hacer en familia, y en otoño la ladera se tiñe de rojos y amarillos."],
    extraPhotos: [
      ["caviahue/usina-frente.webp", "La Cascada de la Usina de frente"],
      ["caviahue/usina-vertical.webp", "La Cascada de la Usina con una persona al pie"],
      ["caviahue/usina-detras.webp", "La Cascada de la Usina vista desde atrás del salto"],
      ["caviahue/usina-pared.webp", "La pared de basalto de la Cascada de la Usina"],
    ],
  },
  "Laguna Escondida": {
    details: ["Una caminata corta lleva a esta laguna de montaña, donde las araucarias se reflejan en el agua quieta. Es un buen lugar para hacer un picnic, mirar aves o simplemente descansar."],
    extraPhotos: [
      ["caviahue/laguna-perro.webp", "La orilla de la Laguna Escondida entre araucarias"],
      ["caviahue/laguna-volcan.webp", "La Laguna Escondida con el volcán Copahue de fondo"],
    ],
  },
  "Puente de Piedra": {
    details: ["Una formación de roca volcánica que el agua y el viento fueron tallando hasta abrir un arco. Desde arriba se ve el agua turquesa a través del puente; desde abajo, el arco se recorta contra el cielo.", "Se puede conocer por sendero o en lancha con el Parque Náutico, que hace la salida por el lago hasta el puente."],
    extraPhotos: [
      ["caviahue/puente-perro.webp", "El Puente de Piedra con la laguna y la meseta de fondo"],
      ["caviahue/puente-contraluz.webp", "El arco del Puente de Piedra a contraluz"],
    ],
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
  { img: "caviahue/araucarias-volcan-nevado.webp", alt: "Araucarias nevadas con el volcán Copahue de fondo" },
  { img: "caviahue/copahue-laguna-termal.webp", alt: "Laguna termal con vapor al pie de la montaña, en Copahue" },
  { img: "caviahue/lago-atardecer.webp", alt: "Atardecer rojo reflejado en el lago Caviahue" },
  { img: "caviahue/invierno.webp", alt: "Caviahue en invierno" },
  { img: "caviahue/agrio-congelado-1.webp", alt: "El Salto del Agrio congelado a contraluz" },
  { img: "caviahue/rio-otono.webp", alt: "Un río entre arbustos rojos y naranjas en otoño" },
  { img: "caviahue/mirador-pueblo-lago.webp", alt: "El pueblo de Caviahue y el lago desde el mirador, entre araucarias" },
  { img: "caviahue/lago-otono.webp", alt: "Un ñire rojo en otoño frente al lago, con el volcán nevado" },
  { img: "caviahue/cascada-basalto.webp", alt: "Cascada entre araucarias y paredes de basalto" },
  { img: "caviahue/caviahue-noche.webp", alt: "Caviahue de noche, con la nieve y las luces del pueblo" },
];

// Sin link = fotos cedidas para el sitio.
window.CREDITS = [
  ["Volcán Copahue y lago · rodoluca", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Caviahue,_Neuqu%C3%A9n,_Argentina_-_panoramio.jpg"],
  ["Araucaria frente al lago · Balon Greyjoy", "CC0", "https://commons.wikimedia.org/wiki/File:Lago_Caviahue_from_Caviahue.jpg"],
  ["Caviahue en invierno · Elvis Boaventura", "CC BY 3.0", "https://commons.wikimedia.org/wiki/File:Caviahue_II_-_panoramio_(1).jpg"],
  ["Salto del Agrio · Juancruzcipo", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Salto_del_Agrio_-_Neuqu%C3%A9n.jpg"],
  ["Caviahue y Copahue de noche · Leo Becari", "cortesía", ""],
  ["Lago en otoño · A. Huglich", "cortesía", ""],
  ["Moto de nieve (foto de referencia) · U.S. Air Force, Idali Beltre Acevedo", "Dominio público", "https://commons.wikimedia.org/wiki/File:Airmen_ride_snowmobiles_at_Monarch_mountain_(5938574).jpg"],
  ["Raquetas (foto de referencia) · Jacob W. Frank, NPS", "Dominio público", "https://commons.wikimedia.org/wiki/File:Yellowstone_Forever_Cougar_Course_-_Snowshoeing_at_Hellroaring_(37a95f28-79c1-43d1-959f-82f1a3929c2a).jpg"],
  ["Culipatín (foto de referencia) · Lorie Shaull", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Woman_and_kids_ice_sliding_in_Palo,_Minnesota.jpg"],
  ["Culipatín (foto de referencia) · Alex Maldonado", "CC BY 3.0", "https://commons.wikimedia.org/wiki/File:Fun_In_The_Snow_(24118767).jpeg"],
];

/* Preguntas frecuentes: se muestran en la página y también se publican para Google (datos estructurados). */
window.FAQ = [
  {
    q: "¿Cómo llego a Caviahue?",
    a: "Caviahue está en el norte de Neuquén, a unos 360 km de la ciudad de Neuquén, todo por asfalto. El camino más usado es la ruta nacional 22 hasta Zapala, la provincial 21 hasta Loncopué y la provincial 26 hasta el pueblo: son entre 4 y 5 horas de viaje. El aeropuerto con vuelos regulares más cercano es el de la ciudad de Neuquén.",
  },
  {
    q: "¿Cómo llego a cada alojamiento?",
    a: "Trawen está a 20 metros de la avenida Quimey Co, frente al lago. Los Basaltos queda a dos cuadras del lago, en el centro, y la Cabaña 8 de Abril está sobre la avenida del mismo nombre. La Maison está en pleno centro del pueblo y Ekamai, cerca del camino al centro de ski. Para llegar a Cabaña Antú, consultanos por WhatsApp. En el mapa de esta página, el botón «Cómo llegar» abre la ruta en Google Maps.",
    link: ["#mapa", "Abrir el mapa"],
  },
  {
    q: "¿Qué hacer en Caviahue?",
    a: "En invierno: esquí y snowboard en el centro de ski, excursiones en nieve (motos, raquetas y culipatín), el Salto del Agrio congelado y las termas del pueblo. En verano: el lago y su Parque Náutico, el Salto del Agrio, las Cascadas del Agrio, las termas de Copahue, la excursión al volcán Copahue y senderos como los de la Cascada Escondida, la Cascada de la Usina, la Laguna Escondida y el Puente de Piedra.",
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
    a: "Sí, en Los Basaltos, La Maison, Ekamai y Cabaña Antú. Trawen y la Cabaña 8 de Abril no admiten mascotas.",
  },
  {
    q: "¿Cuál es el horario de ingreso y salida?",
    a: "El check-in es desde las 14:00 y el check-out hasta las 10:00 en todos los alojamientos.",
  },
  {
    q: "¿Qué incluye la estadía?",
    a: "Todos los alojamientos incluyen sábanas, toallas, calefacción, WiFi y cocina equipada (en Trawen la cocina es de uso común). Trawen, Los Basaltos y Ekamai tienen WiFi Starlink, y la Cabaña 8 de Abril suma lavarropas y lavavajillas. Las comodidades de cada uno están en su ficha.",
  },
  {
    q: "¿Para cuántas personas son?",
    a: "Hay opciones para parejas, familias y grupos: departamentos para 3, 4 y 5 personas en La Maison y Los Basaltos, departamentos para 4 y una cabaña para 6 en Ekamai, habitaciones de 2 a 4 personas o el hostal completo para hasta 13 en Trawen, Cabaña Antú para hasta 6 y Cabaña 8 de Abril para hasta 12.",
  },
  {
    q: "¿Cómo reservo?",
    a: "De dos maneras: online, con el botón Reservar de cada alojamiento, elegís fechas y ves la disponibilidad al instante; o por WhatsApp, donde te ayudamos a elegir el alojamiento ideal para tu grupo. Cada alojamiento informa su política de cancelación al momento de reservar.",
  },
  {
    q: "¿Hay supermercados y servicios en el pueblo?",
    a: "Sí. Caviahue tiene supermercado, almacenes, restaurantes, casas de té, estación de servicio y Centro de Salud. Los marcamos en el mapa para que los encuentres rápido.",
    link: ["#mapa", "Ver en el mapa"],
  },
];
