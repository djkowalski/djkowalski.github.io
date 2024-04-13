//let myMap = L.map("map").setView([32.8014, 130.7250], 12);   // Kumamoto
let myMap = L.map("map").setView([38.737, 137.0000], 6);   // Japan

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(myMap);


// Marker code downloaded from: https://github.com/pointhi/leaflet-color-markers
var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [18.75, 30.75],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [30.75, 30.75]
  });

var goldIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [18.75, 30.75],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [30.75, 30.75]
  });

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

let mark_nara = L.marker([34.6845445, 135.8048359], {icon: greyIcon}).addTo(myMap);
let mark_hiroshima = L.marker([34.3917241, 132.4517589], {icon: greyIcon}).addTo(myMap);
let mark_himeji = L.marker([34.8153529, 134.6854793], {icon: greyIcon}).addTo(myMap);
let mark_shikoku = L.marker([33.7317,133.5365], {icon: greenIcon}).addTo(myMap);
let mark_fukuoka = L.marker([33.5898988, 130.4017509], {icon: goldIcon}).addTo(myMap);
let mark_kumamoto = L.marker([32.7833323, 130.7333361], {icon: goldIcon}).addTo(myMap);
let mark_kagoshima = L.marker([31.5967930, 130.5571949], {icon: goldIcon}).addTo(myMap);
let mark_nagasaki = L.marker([32.7501611, 129.8781002], {icon: goldIcon}).addTo(myMap);
let mark_tokyo = L.marker([35.6840574, 139.7744912], {icon: blueIcon}).addTo(myMap);
let mark_osaka = L.marker([34.6937569, 135.5014539], {icon: blueIcon}).addTo(myMap);
let mark_kyoto = L.marker([35.0210410, 135.7556075], {icon: blueIcon}).addTo(myMap);

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

mark_tokyo.bindPopup("<b>Tokyo</b>");
mark_osaka.bindPopup("<b>Osaka</b>");
mark_kyoto.bindPopup("<b>Kyoto</b>");