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
var mainIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [24, 40],
    iconAnchor: [12, 40],
    popupAnchor: [0, -34],
    shadowSize: [40, 40]
  });

var natureIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [24, 40],
    iconAnchor: [12, 40],
    popupAnchor: [0, -34],
    shadowSize: [40, 40]
  });

var religionIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [24, 40],
    iconAnchor: [12, 40],
    popupAnchor: [0, -34],
    shadowSize: [40, 40]
  });

var commIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [18.75, 30.75],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [30.75, 30.75]
  });

var OPIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [18.75, 30.75],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [30.75, 30.75]
  });

var tempIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [18.75, 30.75],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [30.75, 30.75]
  });


let aeonmall = L.marker([32.73817482473577, 130.7435991784701], {icon: commIcon}).addTo(myMap);
aeonmall.bindPopup("<b>Aeon Mall Kumamoto</b>");

let suishunonsen = L.marker([32.736676733969844, 130.74828767982882], {icon: tempIcon}).addTo(myMap);
suishunonsen.bindPopup("<b>Suishun Kashima Onsen</b>");

let mark_mtkinpu = L.marker([32.8138785, 130.6388716], {icon: natureIcon}).addTo(myMap);
mark_mtkinpu.bindPopup("<b>Mt. Kinpu</b>");

let mark_kumamotocastle = L.marker([32.80608667917594, 130.70581203898644], {icon: mainIcon}).addTo(myMap);
mark_kumamotocastle.bindPopup("<b>Kumamoto Castle</b>");

let mark_unganzenji = L.marker([32.81956,130.62282], {icon: religionIcon}).addTo(myMap);
mark_unganzenji.bindPopup("<b>Unganzenji Temple <br> Reigando Cave</b>");

let mark_mifunedino = L.marker([32.71397446004195, 130.80187082727846], {icon: tempIcon}).addTo(myMap);
mark_mifunedino.bindPopup("<b>Mifune Dinosaur Museum</b>");

let mark_kumamotozoo = L.marker([32.77482287871508, 130.74770088309984], {icon: mainIcon}).addTo(myMap);
mark_kumamotozoo.bindPopup("<b>Kumamoto City Zoo</b>");

let sunroad = L.marker([32.79963550031502, 130.7055577966984], {icon: commIcon}).addTo(myMap);
sunroad.bindPopup("<b>Sunroad Shinshigai</b>");

let shimotori = L.marker([32.80186723743767, 130.70900671204453], {icon: commIcon}).addTo(myMap);
shimotori.bindPopup("<b>Shimotori Shopping Arcade</b>");

let showerdori = L.marker([32.79802187137579, 130.70719533558173], {icon: commIcon}).addTo(myMap);
showerdori.bindPopup("<b>Shower-Dori</b>");

let sakuranobaba = L.marker([32.80363500193629, 130.70370215251575], {icon: mainIcon}).addTo(myMap);
sakuranobaba.bindPopup("<b>Sakura-no-Baba Josaien</b>");

let sakuramachi = L.marker([32.80021692165053, 130.7034715316096], {icon: commIcon}).addTo(myMap);
sakuramachi.bindPopup("<b>Sakuramachi Shopping Center</b>");

/*let omotenashbushotai = L.marker([], {icon: tempIcon}).addTo(myMap);
omotenashbushotai.bindPopup("<b>Kumamoto-jo Omotenash Bushotai</b>");*/

let station = L.marker([32.78998487444408, 130.6884053675172], {icon: commIcon}).addTo(myMap);
station.bindPopup("<b>JR Kumamoto Station</b>");



let mark_productscenter = L.marker([32.801394191819696, 130.70421559652794], {icon: tempIcon}).addTo(myMap);
mark_productscenter.bindPopup("<b>Kumamoto Prefectural Products Center</b>");

let mark_prefecturalart = L.marker([32.80764626472729, 130.7004867523491], {icon: tempIcon}).addTo(myMap);
mark_prefecturalart.bindPopup("<b>Kumamoto Prefectural Museum of Art</b>");

let mark_CAMK = L.marker([32.80315338376399, 130.7108908965279], {icon: tempIcon}).addTo(myMap);
mark_CAMK.bindPopup("<b>Contemporary Art Museum Kumamoto (CAMK)</b>");

let mark_citymuseum = L.marker([32.80861550871366, 130.6991250674114], {icon: tempIcon}).addTo(myMap);
mark_citymuseum.bindPopup("<b>Kumamoto City Museum</b>");

let mark_castleshrine = L.marker([32.804996584698245, 130.7077789390256], {icon: tempIcon}).addTo(myMap);
mark_castleshrine.bindPopup("<b>Kumamoto-jo Inari Shrine</b>");

let mark_oaksdori = L.marker([32.80489160052124, 130.7104876851909], {icon: tempIcon}).addTo(myMap);
mark_oaksdori.bindPopup("<b>Oaks-Dori</b>");

let mark_fujisakihachimangu = L.marker([32.80849874007577, 130.71858856954293], {icon: tempIcon}).addTo(myMap);
mark_fujisakihachimangu.bindPopup("<b>Fujisakihachimangu Shrine</b>");

let mark_lafcadio = L.marker([32.80184310905718, 130.71087755767306], {icon: tempIcon}).addTo(myMap);
mark_lafcadio.bindPopup("<b>Lafcadio Hearn House</b>");

let kitaoka = L.marker([32.796724024623465, 130.6925075966982], {icon: tempIcon}).addTo(myMap);
kitaoka.bindPopup("<b>Kitaoka Natural Park</b>");

let janes = L.marker([32.78929795736163, 130.73469053902488], {icon: tempIcon}).addTo(myMap);
janes.bindPopup("<b>Janes Residence</b>");

let tokutomigarden = L.marker([32.8031295376932, 130.7209462966985], {icon: tempIcon}).addTo(myMap);
tokutomigarden.bindPopup("<b>Tokutomi Memorial Garden</b>");

let suizenjijojuen = L.marker([32.79085829754489, 130.73478709855354], {icon: tempIcon}).addTo(myMap);
suizenjijojuen.bindPopup("<b>Suizenji Jojuen Garden</b>");

let uchitsuboi = L.marker([32.81039989892823, 130.70914114433867], {icon: tempIcon}).addTo(myMap);
uchitsuboi.bindPopup("<b>Uchitsuboi House (Natsume Soseki Residence)</b>");

let kato = L.marker([32.80706865059125, 130.70525649484293], {icon: tempIcon}).addTo(myMap);
kato.bindPopup("<b>Kato Shrine</b>");

let hosokawagyobu = L.marker([32.809314521906565, 130.69985124789383], {icon: tempIcon}).addTo(myMap);
hosokawagyobu.bindPopup("<b>Hosokawa Gyobu Residence</b>");

let tatsuda = L.marker([32.82042616007388, 130.73097849669915], {icon: tempIcon}).addTo(myMap);
tatsuda.bindPopup("<b>Tatsuda Natural Park</b>");

let meihachi = L.marker([32.797952925619974, 130.69670463902517], {icon: tempIcon}).addTo(myMap);
meihachi.bindPopup("<b>Meihachi Bridge</b>");

let st_meijileaders = L.marker([32.80665348535078, 130.70881603248645], {icon: tempIcon}).addTo(myMap);
st_meijileaders.bindPopup("<b>Statues of Yokoi Shonan and Meiji Leaders</b>");

let kaminouradori = L.marker([32.806345320550925, 130.71284237116348], {icon: tempIcon}).addTo(myMap);
kaminouradori.bindPopup("<b>Kaminoura-Dori</b>");

let st_kato = L.marker([32.80257470150662, 130.70480626786195], {icon: tempIcon}).addTo(myMap);
st_kato.bindPopup("<b>Statue of Kato Kiyomasa</b>");

let tradcrafts = L.marker([32.80748615088753, 130.70690616786206], {icon: tempIcon}).addTo(myMap);
tradcrafts.bindPopup("<b>Kumamoto Prefectural Traditional Crafts Center</b>");

let gotozezan = L.marker([32.793653119338906, 130.73303835717192], {icon: tempIcon}).addTo(myMap);
gotozezan.bindPopup("<b>Gotozezan Memorial Hall</b>");

let kamitori = L.marker([32.804381302238866, 130.71082856786185], {icon: tempIcon}).addTo(myMap);
kamitori.bindPopup("<b>Kamitori Shopping Arcade</b>");

let nagabei = L.marker([32.8034159385184, 130.7062902190909], {icon: tempIcon}).addTo(myMap);
nagabei.bindPopup("<b>Nagabei Path</b>");

let namikizaka = L.marker([32.8074359034772, 130.7120150966986], {icon: tempIcon}).addTo(myMap);
namikizaka.bindPopup("<b>Namikizaka Street</b>");

let kokaishotengai = L.marker([32.81211717198737, 130.72058165767305], {icon: tempIcon}).addTo(myMap);
kokaishotengai.bindPopup("<b>Kokai Shotengai Market</b>");

let shinmachi = L.marker([32.800091099459074, 130.69704622122754], {icon: tempIcon}).addTo(myMap);
shinmachi.bindPopup("<b>Shinmachi Townscape</b>");

let furumachi = L.marker([32.79564709216002, 130.69693004114856], {icon: tempIcon}).addTo(myMap);
furumachi.bindPopup("<b>Furumachi Townscape</b>");

let internationalcenter = L.marker([32.80205779120772, 130.70502260007652], {icon: tempIcon}).addTo(myMap);
internationalcenter.bindPopup("<b>Kumamoto City International Center</b>");

let musashimemorial = L.marker([32.820485986551425, 130.73103353373912], {icon: tempIcon}).addTo(myMap);
musashimemorial.bindPopup("<b>Musashi Stone Memorial Tower and Taisho-ji Temple Ruins</b>");

let oe = L.marker([32.788963484121176, 130.73486350507966], {icon: tempIcon}).addTo(myMap);
oe.bindPopup("<b>Former Oe Residence of Natsume Soseki</b>");

let castlemuseum = L.marker([32.8036915880648, 130.70330148794835], {icon: tempIcon}).addTo(myMap);
castlemuseum.bindPopup("<b>Kumamoto Castle Museum Wakuwakuza</b>");

let kokindenjunoma = L.marker([32.79173115452409, 130.7341434101883], {icon: tempIcon}).addTo(myMap);
kokindenjunoma.bindPopup("<b>Kokindenju no Ma</b>");

let izumi = L.marker([32.79186099279037, 130.73423293716945], {icon: tempIcon}).addTo(myMap);
izumi.bindPopup("<b>Izumi Shrine</b>");

let kumamonsquare = L.marker([32.80173992869169, 130.7124549966984], {icon: tempIcon}).addTo(myMap);
kumamonsquare.bindPopup("<b>Kumamon Square</b>");

let kengun = L.marker([32.78459501062389, 130.754885], {icon: tempIcon}).addTo(myMap);
kengun.bindPopup("<b>Kengun Shrine</b>");

let yokoishonan = L.marker([32.77292670014621, 130.77797752553406], {icon: tempIcon}).addTo(myMap);
yokoishonan.bindPopup("<b>Memorial Hall of Yokoi Shonan</b>");

let ezu = L.marker([32.776282449449354, 130.73971168320713], {icon: tempIcon}).addTo(myMap);
ezu.bindPopup("<b>Lake Ezu</b>");

let handicraftspromotion = L.marker([32.74117522221308, 130.68205829855188], {icon: tempIcon}).addTo(myMap);
handicraftspromotion.bindPopup("<b>Kumamoto City Handicrafts Promotion Center</b>");

let rokuden = L.marker([32.70072228429325, 130.70833357578215], {icon: tempIcon}).addTo(myMap);
rokuden.bindPopup("<b>Rokuden Shrine</b>");

let kiharafudoson = L.marker([32.703296538862155, 130.7063103477451], {icon: tempIcon}).addTo(myMap);
kiharafudoson.bindPopup("<b>Kihara Fudoson Temple</b>");

let tsukawarakofun = L.marker([32.68955495064797, 130.7359581186098], {icon: tempIcon}).addTo(myMap);
tsukawarakofun.bindPopup("<b>Tsukawara Kofun Park</b>");

let railyard = L.marker([32.70620390808907, 130.67302999839612], {icon: tempIcon}).addTo(myMap);
railyard.bindPopup("<b>Kumamoto General Rail Yard</b>");

let foodpal = L.marker([32.84850895476475, 130.69596916786355], {icon: tempIcon}).addTo(myMap);
foodpal.bindPopup("<b>Foodpal Kumamoto</b>");

let mimogenokadogoya = L.marker([32.863478932751555, 130.70862876393113], {icon: tempIcon}).addTo(myMap);
mimogenokadogoya.bindPopup("<b>Mimoge no Kadogoya</b>");

let musashizuka = L.marker([32.84470798304475, 130.76507895952867], {icon: tempIcon}).addTo(myMap);
musashizuka.bindPopup("<b>Musashizuka Park</b>");

let uekionsen = L.marker([32.95544553851736, 130.72728235108102], {icon: tempIcon}).addTo(myMap);
uekionsen.bindPopup("<b>Ueki Onsen</b>");

let civilwarmuseum = L.marker([32.91168303884888, 130.65206038321162], {icon: tempIcon}).addTo(myMap);
civilwarmuseum.bindPopup("<b>Tabaruzaka Seinan Civil War Museum</b>");

let portproductscenter = L.marker([32.76352575372985, 130.59013289484167], {icon: tempIcon}).addTo(myMap);
portproductscenter.bindPopup("<b>Kumamoto Port Products Center</b>");

let shironoyu = L.marker([32.810828204846565, 130.70154696818642], {icon: tempIcon}).addTo(myMap);
shironoyu.bindPopup("<b>Shironoyu Hot Spring</b>");

let shimadaartmuseum = L.marker([32.809708187086244, 130.68603349669868], {icon: tempIcon}).addTo(myMap);
shimadaartmuseum.bindPopup("<b>Shimada Museum of Art</b>");

let nishinomusashizuka = L.marker([32.81534805646858, 130.67562289669885], {icon: tempIcon}).addTo(myMap);
nishinomusashizuka.bindPopup("<b>Nishi-no-Musashizuka</b>");

let taniozakibairin = L.marker([32.800650436680385, 130.675497262295], {icon: tempIcon}).addTo(myMap);
taniozakibairin.bindPopup("<b>Taniozaki Bairin Park</b>");

let honmyoji = L.marker([32.81694660788171, 130.68884848320843], {icon: tempIcon}).addTo(myMap);
honmyoji.bindPopup("<b>Honmyoji Temple</b>");

let togenochaya = L.marker([32.81863077520389, 130.656431881353], {icon: tempIcon}).addTo(myMap);
togenochaya.bindPopup("<b>Toge-no-Chaya Park and Museum</b>");

let ishidataminomichi = L.marker([32.835175861078746, 130.63784293127992], {icon: tempIcon}).addTo(myMap);
ishidataminomichi.bindPopup("<b>Ishidatami-no-Michi</b>");

let yuuhouenfruits = L.marker([32.831127939431376, 130.6349051490469], {icon: tempIcon}).addTo(myMap);
yuuhouenfruits.bindPopup("<b>Yuuhouen Fruits Land</b>");

let kyomachi = L.marker([32.812768412009866, 130.70501160792563], {icon: tempIcon}).addTo(myMap);
kyomachi.bindPopup("<b>Kyomachi Townscape</b>");

let nishikibase = L.marker([32.22075692773886, 130.81732454241674], {icon: tempIcon}).addTo(myMap);
nishikibase.bindPopup("<b>Nishiki Secret Base Museum</b>");

let yamagadistillery = L.marker([32.97936717316456, 130.6780995547016], {icon: tempIcon}).addTo(myMap);
yamagadistillery.bindPopup("<b>Yamaga Distillery</b>");

let mtaso = L.marker([32.89836007836112, 131.0880760194415], {icon: tempIcon}).addTo(myMap);
mtaso.bindPopup("<b>Mt. Aso</b>");

let takahashiinari = L.marker([32.78277363673508, 130.65867304873635], {icon: tempIcon}).addTo(myMap);
takahashiinari.bindPopup("<b>Takahashi Inari Shrine</b>");






let OP1 = L.marker([32.789038031901306, 130.7411850798216], {icon: OPIcon}).addTo(myMap);
OP1.bindPopup("<b>Monkey D. Luffy</b>");

let OP2 = L.marker([32.776099952939845, 130.7504310835312], {icon: OPIcon}).addTo(myMap);
OP2.bindPopup("<b>Chopper</b>");

let OP3 = L.marker([32.78691667553095, 130.82353697004092], {icon: OPIcon}).addTo(myMap);
OP3.bindPopup("<b>Sanji</b>");

let OP4 = L.marker([32.93697558686067, 131.08033120003063], {icon: OPIcon}).addTo(myMap);
OP4.bindPopup("<b>Usopp</b>");

let OP5 = L.marker([32.713936757551835, 130.80513508352897], {icon: OPIcon}).addTo(myMap);
OP5.bindPopup("<b>Brook</b>");

let OP6 = L.marker([32.877069042199956, 130.87113983935242], {icon: OPIcon}).addTo(myMap);
OP6.bindPopup("<b>Zoro</b>");

let OP7 = L.marker([32.81920654094307, 131.12264092585968], {icon: OPIconon}).addTo(myMap);
OP7.bindPopup("<b>Franky</b>");

let OP8 = L.marker([32.89139652853408, 130.9954025970258], {icon: OPIcon}).addTo(myMap);
OP8.bindPopup("<b>Robin</b>");

let OP9 = L.marker([32.842870517843885, 130.9390111393514], {icon: OPIcon}).addTo(myMap);
OP9.bindPopup("<b>Nami</b>");

let OP10 = L.marker([32.7040828616294, 130.58134732585575], {icon: OPIcon}).addTo(myMap);
OP10.bindPopup("<b>Jinbei</b>");





/*
let x = L.marker([], {icon: tempIcon}).addTo(myMap);
x.bindPopup("<b></b>");
*/

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

