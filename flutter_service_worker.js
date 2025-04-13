'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/config": "baec5dc1091214d28dfa5b96c26f1a2e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0fbd972d99610f7266b66ed3d85640d8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "909d2d12e8ec152a5f217a2cadcb4b57",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8a13f32fd4c2e393bfe96db48f5ac785",
".git/logs/refs/heads/main": "866b5158748802787061d289bcfce405",
".git/logs/refs/remotes/origin/main": "34ae944814b9be2eee8549631a5b3dc4",
".git/objects/00/e021dbcc273c8430b450dd7ebb48120da3d417": "7c2592ca69de83fb5af6e7a2d1194251",
".git/objects/02/bd16e108760ba16e71823ab833b85d3b7613f4": "474b73fd37f37702e84d9f6e8e4f0a63",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/04/e981bf82527c823f617d9f9d88e2101e75c974": "7344ef31d02f0a8fb4f738162958e346",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/05/e917392d419db68aba23b0f33e21c1cc2f9fb3": "9f38df77bf8a75669e15dd756d31359c",
".git/objects/07/d553a374f2b06d7f6fb9a23c2262ecec7a2d7b": "2a84d451200f8b999dd09fb0a30b6d45",
".git/objects/08/ed659888c5df0b91bdb22fa4f8bcd3e7930679": "2e5ef4927eedc22b61a7c8053adca4cf",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0a/66959b50f51f698f69d659d3535f1f66f914bb": "6d9cb729675d3be0a16761e2a2b0b829",
".git/objects/0f/343c257967a7d3422c0dcb6a38ab2a2da32e8d": "4bcad0f8500a9b42b8919bf609ba2388",
".git/objects/10/00c6b56de9d10a70a5bc7c304bc706ab62f8e3": "e3bc4f28a1117d6845418669d3786046",
".git/objects/11/3b1c56ef20a0030dccae4c276323b09289e023": "49ee54d551a16b733e1f35109a613538",
".git/objects/1a/3571d26d6be2a4d34d39539f715192719b5a5f": "721b8ed92447c00bd9a64b87dd506b6f",
".git/objects/1b/ca53009d40ecbd8d23f9c39ea728b3c45d10b4": "e13dfd7e4a79f050c57d1bbba3f6af0f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/c37b5587a6c646ece1164715aafdeb90cee8f5": "a9a1c88817d9aa1b19a969e21cc0102d",
".git/objects/2c/8092da18d73612f3c435d06f0b8f9ac1a29648": "0190699944e044e04aaa097b65a3bb79",
".git/objects/2d/62790a7a230aec87dfa84cbc1b7c65708b4373": "f75ccb1259589ad90d3fe11de1436d27",
".git/objects/2f/c8d4361e5fbd279bbf864dbf189eefde03a077": "4ccf2b69590fbfcef13991d988896cb4",
".git/objects/39/c76a9647f8202860ff2c0b56f2a583324fbf61": "f9d1cee4ec4816e87c9ddd38198228ef",
".git/objects/3b/1c28547afb457af6de587799b64094ffc7f756": "ff5b599e03bd0cc94567998503bda51f",
".git/objects/3d/0e767de29081a2eaef2a356e5b33164d0b9c1b": "74d8d90b28b04c29f7f0d9e7f51566cb",
".git/objects/3d/68216681ebc55fb165347966ae24ab8332e561": "80f7e6fcf8370dacc15d829758046685",
".git/objects/3d/f39bdca6c96b2bf27aa5bd9f1ba79eb01b6087": "57dbdae6932330cf2e1ec2ad2917919e",
".git/objects/3d/fc1cb6f8a44f6bd27e85f896bfa2bbbee8f38c": "4d334095def6e513e9e4160c23b3689f",
".git/objects/3f/26f8adf4de8694b5fa3dd49d3b8f6b4d00f0bd": "2d163a6ab2059c93d6b258e408293921",
".git/objects/44/8f03ead4d745a417efcb2350aeb5107cf51fba": "a72d16a7aea930d0fe07ce79d8f336f3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/d8930b27d748c03b7df4f6e55e17d5ff1841e3": "7bcbebb36f964d1184bd5e6f5dbb283a",
".git/objects/4c/0dc545b2d06ce57a0ccd35bec1df7156e265a1": "a0e9bb1eb3e11575ddbb8ffc8d233b85",
".git/objects/51/1bc3caa761d7e6f50601d1139de3e2d04e06d1": "2ee0b4e44f95b26179f177f4ad034d59",
".git/objects/57/16fb103c73f4fcfff447272b2ec709e25ff9e7": "80d5d897564265d5ae02aaaf28bed2dc",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/9524d966580b18a8a21619c70e2241d7114563": "3b83a90bd734602625b1e270d6f71aa4",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/4cc50e91e487de22421177569b6e45ae6d7742": "94614006a542c7b79824e196d1695a5c",
".git/objects/69/91a48b6d3f08cb6bd4f5b0201eb470ad716dca": "6379c13d79f8801dcb796f41638b3725",
".git/objects/6c/1cf3cf2873945826f583a02747871dc75f098e": "15babb85d43a34fce8e5fc1504aa16dd",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/f25d56bad26581d4fda2fa97c6427ec1a5cd5b": "1b5f44f2e88a728068ba9c044b3557a7",
".git/objects/75/593e0c0294731a5bc88cec3e06335d53a33b00": "308a2c2a3f52f3fe378480583cb0df62",
".git/objects/7a/81fc3288bfaa3f67c060029895c0dba1ee3383": "a465906d5df0c77374ea3479a6e52065",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/objects/8b/45f00217011536b9e4f7d060bb5f46bbc2954f": "e07654fb27930135bd7c8dfdbba1a956",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9b/4e1d82d21637ac3c1eddd068b8b1cdfe7da5cf": "aaed52965f86d823f35c37254df17dd8",
".git/objects/9c/de533983d4a66abb5da97b251dac192f17650e": "8980f02258b58237c757e19b04eebe40",
".git/objects/a9/5577fbd86feac3ba5be1a851b9e3c20dae741a": "70d2bc80a63e122b81bb0305f9db1425",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/050a0bac969ae91f0a29c0d01e18880dca0b91": "f60471d28c35125c4ca926600bb9e605",
".git/objects/b0/34ddf8a98186af663b71aa25fc1f840c8a7874": "47467ad08f1fa0d9d8f3b22d41d3a1b6",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/ac42646da71942f64fa41d01f3179721ec64b3": "73522f47eb25091c7eac02a899c60c88",
".git/objects/b5/105a2a0d467be368ff9ab3e8f49ab664b2532e": "47aabcef2f550abc5776ca57b7e8a5a0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/84fb50fb3f8d2502b9bb46c6e090ab61bec959": "7d1b03675de170480f3725a554163894",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/f4a687250abf75b147d147bb8d7e9f7d008847": "8a6819f5f3492036c6c5500e32b34ab3",
".git/objects/bd/16357c8e8234e21f94fd81fc34569aeef90b1a": "7e8d95031c15c197f4b93cd0431bf889",
".git/objects/c0/30470d66900c56aa94c5f85902f20c2cf2fa40": "bd134d5950ff27f65e0ad5ebae89dfbb",
".git/objects/c1/5a0f9045d546bdffe3a1671d28bfb358c68208": "78f248d2e6a9d60a2636e80f083fcd87",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/3bcdc98db45336a376642f950a61e7505bfeee": "c4476f4bf7769d5b9d3544c4b7869c7e",
".git/objects/cb/787a47f531ef53f93da722ce2ee4f5bd28a7e2": "58baf3e22f780d2838ed2ea2dd43c321",
".git/objects/cf/43ac4d5a4bade1df91de04cdf0bf00f2daa234": "4e83f880f677f749cee0102e8e39ee3e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/8ad0dc752e8c97c9913b7fca0b3a6581099f88": "97dbf68efff4d960336e2a2b7add0a0e",
".git/objects/e0/b940ebef7f97f4267e10e99296391cfec36da5": "7de4d065191e613a9651b3828bda59f0",
".git/objects/e4/3d97f1154985b2caf4d15ef9b6a0514153ee7b": "7dfa135d0d20bbfa3356cb5e91d4346a",
".git/objects/e6/6742582c6996ee7dd3ffbeb4fd755eba5d4e50": "38607519d2c54ca4161a3b9573c67ef2",
".git/objects/e7/93d35399e254b4d535801e5e7a71f0a3062b26": "635d8a32664b68343ab9c7b883496ba8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/24983c6cadce9e884c7d8ca178dca9a56015b5": "b4aa71be26b92877b8821a479866d779",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/773da0ae096485312fd4598964392999e62819": "e3a066636db6c6e74dd056c92b5b33fa",
".git/objects/f0/f68bb877783710bdea0aeacebea21e9eef174e": "b1dd71945aff7112f4a12f6a54b16b43",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/1cbfa10fc49aea841d566dec388f24397397b9": "609ef3419a34b56191faf6ea393fc293",
".git/objects/f5/23bf1dfa6aece3abfabfb35ad6ac48fd34fe74": "d6b5cd144492c4a4a3415bead58751ea",
".git/objects/f6/71f3ad121798439f37d50b4758f42459fd82f8": "5f223b3166b35997f855d6224fb9e6b7",
".git/objects/f8/ed070f81453fec13375d8653e3d44e7ec90d0f": "52045ad4af3927628e8588a11184f6a1",
".git/objects/f8/eebf3491ccb4ecb94ac006b9e4703e0b43680a": "ed93d9446a68880b5d11305da0b65365",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "8c1370cef7f135db1fcf7d94ed957a28",
".git/refs/remotes/origin/main": "8c1370cef7f135db1fcf7d94ed957a28",
".github/workflows/deploy.yml": "08a28c1213aa07db36e7941959fe4cba",
"assets/AssetManifest.bin": "a3290c08721e256bf1947e1e0671a444",
"assets/AssetManifest.bin.json": "f0b2f5dbaa3ff16a3c30d0e79b3b683d",
"assets/AssetManifest.json": "876a33d2728ba37d96909368cb91bef9",
"assets/assets/animations/tick.gif": "f7263b79eccb6032db2c4d00d2c80403",
"assets/assets/images/icon.png": "3b9d1757af097796cfaa1cd27acbe442",
"assets/assets/svgs/arrow.svg": "e6c512120c3e538f5d9c5d2847f9dac2",
"assets/assets/svgs/github.svg": "dddf1fcb8c31e133dbade383ed6f6ce7",
"assets/assets/svgs/instagram.svg": "1f1486d3f168963cfba827a7163388bd",
"assets/assets/svgs/linkedin.svg": "de803901d8f4e7635900a6d0d3478a3a",
"assets/assets/svgs/telegram.svg": "c61f5909911753c23c8b69c1de2a9346",
"assets/assets/svgs/whatsapp.svg": "989bca43195518adb3818ca9f71248d3",
"assets/assets/svgs/x.svg": "49c3f0f1ccc3b02ad36ca6554c191895",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c60bb0751efea239777f0f33f96b871c",
"assets/NOTICES": "ef9bca942b8f7e4032460a4f47f4f3a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"certificates/a.txt": "68b329da9893e34099c7d8ad5cb9c940",
"certificates/flutter.JPG": "0f2de734b519b1c259e9ca776560a6cf",
"certificates/foundation.JPG": "0cdacedb5783565208dba6b74f7ed51c",
"certificates/frontend.JPG": "df6a21bc430bb4df90ae648e9dfd8762",
"certificates/ielts.JPG": "eb33bc43364aa70d184d30516319c662",
"certificates/python.JPG": "e4adc7c03a310d8752772d3d20329520",
"CNAME": "ab431a7b67bb437133aee397e09eb551",
"favicon.png": "d9d02f53a9076bec56dc35611fc0ecee",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "da6c545e4c0f9e86afa7c623456246d6",
"icons/Icon-192.png": "afd45847f47bf816b46a222544fbbdad",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3e003a68802e1c160fbef8e65590d5a8",
"/": "3e003a68802e1c160fbef8e65590d5a8",
"main.dart.js": "de50a1594d5d8739ed56f2480ef15684",
"manifest.json": "44368f12eac9d8a6bf4a8114d7edf236",
"photos/calc.jpg": "d3888e0801a602c7b209cd4aef32e7e9",
"photos/coin%20quest.jpg": "8fa7e88569f1c82976d8e108b188c2d7",
"photos/d.txt": "68b329da9893e34099c7d8ad5cb9c940",
"photos/favicon.ico": "66d1ebb68e35dcf0611b3973bd8a0432",
"photos/github.png": "5c06dbd786e632cc839d1b2816946d2f",
"photos/instalogo.png": "cae01a09f90f0fab1242d1453b70f10a",
"photos/instaproject.png": "7be755c21355793b90fa28abbfac4662",
"photos/me.png": "960ad9d88626829ef2382029b0aff20e",
"photos/me2.jpg": "17571075322a4a47f6b5a5273f3a3d2e",
"photos/me_on_a_yacht.JPG": "a2d1c450ac219f479945564a9f62acc6",
"photos/movie-app.JPEG": "b31c968f417c97867b1728f1cf6e1878",
"photos/music-player.png": "68b705ab0d0b73e7884c9dbcc6f2d169",
"photos/tglogo.png": "8b706c0d7ca2ea8d03693cb393c0784d",
"photos/Tic%20Tac%20Toe.png": "bbeb0bf70b952aab5459ee6453e39ccb",
"photos/whatlogo.png": "b50f7c9ae66d32a1234fdacc0b8ebb80",
"photos/windlocker.png": "3b6bc5c9a46eeaf784f1aeef5fa60af7",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
