let myMap = L.map("map").setView([32.790,130.6773], 11);   // Kumamoto
//let myMap = L.map("map").setView([38.737, 137.0000], 6);   // Japan

/*
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(myMap);
*/

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(myMap);



// Marker code downloaded from: https://github.com/pointhi/leaflet-color-markers
var blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

var greyIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [18.75, 30.75],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [30.75, 30.75]
  });

let mark_mtkinpu = L.marker([32.8138785, 130.6388716], {icon: blueIcon}).addTo(myMap);
let mark_kumamotocastle = L.marker([32.8031538, 130.7046536], {icon: blueIcon}).addTo(myMap);
let mark_unganzenji = L.marker([32.81956,130.62282], {icon: blueIcon}).addTo(myMap);
let mark_mifunedino = L.marker([32.71397446004195, 130.80187082727846], {icon: blueIcon}).addTo(myMap);
let mark_kumamotozoo = L.marker([32.77482287871508, 130.74770088309984], {icon: blueIcon}).addTo(myMap);


/*
let golden_gate = L.circle([37.819, -122.478], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: "0.5",
    radius: 1500
}).addTo(myMap);

let diablo = L.polygon([
    [37.941, -121.959],
    [37.877, -122.016],
    [37.804, -121.826],
    [37.897, -121.825]],
    {
        color: "green",
        fillColor: "#36ba40",
        fillOpacity: "0.5",
    }
).addTo(myMap);
*/

mark_mtkinpu.bindPopup("<b>Mt. Kinpu</b>");
mark_kumamotocastle.bindPopup("<b>Kumamoto Castle</b>");
mark_unganzenji.bindPopup("<b>Unganzenji Temple <br> Reigando Cave</b>");
mark_mifunedino.bindPopup("<b>Mifune Dinosaur Museum</b>");
mark_kumamotozoo.bindPopup("<b>Kumamoto City Zoo</b>");