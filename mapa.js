<!-- mapa.js -->
const map = L.map('map').setView([-34.6, -58.4], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const lugares = [
  {
    nombre: "Camping El Refugio",
    coordenadas: [-27.4698, -58.8341],
    tipo: "permitido",
    descripcion: "Camping habilitado en Corrientes con servicios completos."
  },
  {
    nombre: "Estacionamiento Costanera Bs As",
    coordenadas: [-34.6037, -58.3816],
    tipo: "restringido",
    descripcion: "Zona urbana donde no se permite pernoctar en motorhome."
  },
  {
    nombre: "Parque Nacional Los Glaciares",
    coordenadas: [-50.3379, -72.2648],
    tipo: "interes",
    descripcion: "Lugar turístico espectacular con áreas designadas para motorhomes."
  }
];

lugares.forEach(lugar => {
  const color = lugar.tipo === "permitido" ? 'green' : lugar.tipo === "restringido" ? 'red' : 'blue';

  L.circleMarker(lugar.coordenadas, {
    radius: 8,
    color: color,
    fillColor: color,
    fillOpacity: 0.6
  })
    .addTo(map)
    .bindPopup(`<strong>${lugar.nombre}</strong><br>${lugar.descripcion}`);
});
