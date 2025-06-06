// Inicializa el mapa centrado en Corrientes, Argentina
const map = L.map('map').setView([-27.4697, -58.8306], 6);

// Agrega tiles de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Datos &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// Datos de ejemplo: puedes editar, agregar o cargar de un archivo externo
const lugares = [
  {
    nombre: "Camping Río Paraná",
    tipo: "acampe",
    lat: -27.4806,
    lng: -58.8341,
    info: "Camping con servicios completos junto al río en Corrientes."
  },
  {
    nombre: "Estacionamiento Costanera",
    tipo: "estacionar",
    lat: -27.4715,
    lng: -58.8372,
    info: "Estacionamiento habilitado para motorhomes."
  },
  {
    nombre: "Plaza 25 de Mayo",
    tipo: "prohibido",
    lat: -27.4697,
    lng: -58.8306,
    info: "Prohibido estacionar/acampan motorhomes aquí."
  },
  {
    nombre: "Camping El Refugio (Misiones)",
    tipo: "acampe",
    lat: -27.3712,
    lng: -55.8962,
    info: "Camping familiar en Misiones."
  },
  {
    nombre: "Estacionamiento Ruta 12 (Chaco)",
    tipo: "estacionar",
    lat: -27.4461,
    lng: -59.0266,
    info: "Parada segura sobre Ruta 12."
  }
];

// Íconos personalizados
const iconos = {
  acampe: L.divIcon({className: "icon icon-acampe"}),
  estacionar: L.divIcon({className: "icon icon-estacionar"}),
  prohibido: L.divIcon({className: "icon icon-prohibido"})
};

// Añade marcadores al mapa
lugares.forEach(lugar => {
  L.marker([lugar.lat, lugar.lng], { icon: iconos[lugar.tipo] })
    .addTo(map)
    .bindPopup(`<b>${lugar.nombre}</b><br>${lugar.info}`);
});
